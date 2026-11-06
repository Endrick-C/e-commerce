const db = require("./db")

const ESTRUTURA_CLIENTE = `
    DROP TABLE IF EXISTS cliente;
    CREATE TABLE cliente (
        id int(11) NOT NULL AUTO_INCREMENT,
        nome varchar(100) NOT NULL,
        cpf char(14) NOT NULL,
        celular char(14) NOT NULL,
        email varchar(100) NOT NULL,
        senha varchar(512) NOT NULL,
        PRIMARY KEY (id),
        UNIQUE KEY cpf (cpf),
        UNIQUE KEY email (email)
    ) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

const DADOS_CLIENTE = `
    INSERT INTO cliente VALUES 
        (12,'Nicolas Galvão','123.456.789-00','(42)99966-4444','galvao@gmail.com','$2b$10$N8b2YuzXWdMJVAAd670qG.ScLlmdFsuTJ7C6/GWtMKWhj8O0pU6Pu'),(13,'Nicolas Galvão','123.456.789-02','(42)99966-4444','galvao2@gmail.com','$2b$10$rNwWgUx8kezhoZXXuVG7NeBXqPFAzpkc37Sg4P.ETVtiSaWWqBHxy'),
        (14,'Patrick','123.123.123-12','(42)999669966','patrick123@gmail.com','$2b$10$MZMnDj10f7JnV6ArP.5hm.TAHDZ5NwECYSw6i5kbNowwhPuqbC/W.'),(19,'Richard','148.211.069-57','(42) 99931-865','bellusci.richard@escola.pr.gov.br','$2b$10$v3aTKV7iVqrcBJozlOZwie8I7yO2CyQIfuVk4uxR2RSDPELZSeyxS'),
        (28,'Patrick','111.222.333-49','(42)99999-4444','patrick67@gmail.com','$2b$10$QRU70xwZs0JYccsQcf/BFe7IIGYaqlS0xb.TIkGsv7UKviM2A26pq'),(29,'Kauã silva de lima','152.915.999-79','(42)99999-4444','kaua.lima11@escola.pr.gov.br','$2b$10$Ax80a.N/1RUsBU48IO1hX.d4hyiNt/15aV8.8VJuPziVuzTwGe8ly'),
        (30,'Bruno','120.897.429-76','(42)99830-3607','derbli@gmail.com','$2b$10$t8fYQCnQRXxvbLczF6YJNu31UvNT1qWhZ1r9GiftnFLy1rABdFKfG'),(31,'Guilherme','111.333.444-78','(42)55555-9999','poisler456@gmail.com','$2b$10$r9QmvPFklIeeoCoHfISzGeJNnjScdYm4JZiNBmffsblVzk48uyHXa'),
        (32,'Rhuan','137.604.709-80','(42)99999-4444','rhuan@gmail.com','$2b$10$QA3mNPH90POZijUIri.hKO5pQQH223KGKyYOYycQA0GtPuKGhPrkS');
`

const ESTRUTURA_PRODUTO = `
    DROP TABLE IF EXISTS produto;
    CREATE TABLE produto (
        id int(11) NOT NULL AUTO_INCREMENT,
        nome varchar(200) NOT NULL,
        descricao text NOT NULL,
        categoria varchar(50) NOT NULL,
        preco decimal(10,2) NOT NULL,
        caminho_img varchar(50) NOT NULL,
        quantidade_img int(11) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
`

const DADOS_PRODUTO = `
    INSERT INTO produto VALUES 
        (1,'Feijoada Completa','Feijoada tradicional com feijão preto, carnes suínas, arroz branco, couve refogada, farofa e laranja.','Pratos Principais',49.90,'assets/img/feijoada.jpg',3),(2,'Frango à Parmegiana','Filé de frango empanado coberto com molho de tomate e queijo gratinado, acompanhado de arroz e batata frita.','Pratos Principais',39.90,'assets/img/parmegiana.jpg',2),(3,'Picanha na Chapa','Picanha fatiada grelhada na chapa, acompanhada de arroz, farofa, vinagrete e batata frita.','Carnes',79.90,'assets/img/picanha.jpg',4),(4,'Moqueca de Peixe','Moqueca capixaba com peixe fresco, leite de coco, dendê e pimentões, servida com arroz e pirão.','Pratos Principais',59.90,'assets/img/moqueca.jpg',3),(5,'Lasanha à Bolonhesa','Lasanha caseira com molho bolonhesa, queijo mussarela e molho branco gratinada no forno.','Massas',42.90,'assets/img/lasanha.jpg',2),(6,'Strogonoff de Frango','Strogonoff cremoso de frango com champignon, acompanhado de arroz branco e batata palha.','Pratos Principais',36.90,'assets/img/strogonoff.jpg',3),(7,'Risoto de Camarão','Risoto cremoso com camarões salteados, ervas finas e toque de limão siciliano.','Risotos',64.90,'assets/img/risoto-camarao.jpg',2),(8,'Salada Caesar','Mix de folhas verdes, frango grelhado, croutons, parmesão e molho Caesar.','Saladas',29.90,'assets/img/caesar.jpg',1),(9,'Hambúrguer Artesanal','Pão brioche, hambúrguer 180g, queijo cheddar, bacon, alface, tomate e molho especial.','Lanches',34.90,'assets/img/hamburguer.jpg',4),
        (10,'Pizza Margherita','Pizza com molho de tomate, mussarela de búfala, manjericão fresco e azeite.','Pizzas',45.90,'assets/img/pizza-margherita.jpg',5),(11,'Salmão Grelhado','Filé de salmão grelhado com crosta de ervas, legumes salteados e arroz integral.','Peixes',69.90,'assets/img/salmao.jpg',2),(12,'Escondidinho de Carne Seca','Purê de mandioca cremoso com carne seca desfiada e queijo gratinado.','Pratos Principais',44.90,'assets/img/escondidinho.jpg',3),(13,'Yakisoba de Frango','Macarrão oriental com legumes e frango, molho shoyu e temperos orientais.','Orientais',38.90,'assets/img/yakisoba.jpg',3),(14,'Pudim de Leite','Pudim de leite condensado cremoso com calda de caramelo.','Sobremesas',15.90,'assets/img/pudim.jpg',2),(15,'Petit Gateau','Bolo quente de chocolate com recheio cremoso, servido com sorvete de creme.','Sobremesas',22.90,'assets/img/petit-gateau.jpg',4),(16,'Bobó de Camarão','Creme de mandioca com camarões, leite de coco, dendê e temperos baianos, servido com arroz.','Pratos Principais',62.90,'assets/img/bobo-camarao.jpg',3),(17,'Costela Bovina ao Molho Madeira','Costela cozida lentamente ao molho madeira, acompanhada de purê de batata.','Carnes',58.90,'assets/img/costela-madeira.jpg',5),(18,'Frango a Passarinho','Pedaços de frango fritos crocantes com alho e limão, acompanhados de molho de alho.','Petiscos',32.90,'assets/img/frango-passarinho.jpg',3),(19,'Bolinho de Bacalhau','Bolinhos de bacalhau crocantes por fora e macios por dentro, servidos com limão.','Petiscos',28.90,'assets/img/bolinho-bacalhau.jpg',1),
        (20,'Fettuccine ao Funghi','Massa fettuccine com molho cremoso de cogumelos paris e shimeji.','Massas',44.90,'assets/img/fettuccine-funghi.jpg',3),(21,'Risoto de Funghi','Risoto cremoso com cogumelos frescos, vinho branco e parmesão.','Risotos',48.90,'assets/img/risoto-funghi.jpg',4),(22,'Camarão Empanado Panko','Camarões empanados na farinha panko, servidos com molho tártaro.','Petiscos',54.90,'assets/img/camarao-panko.jpg',2),(23,'Costelinha de Porco BBQ','Costelinha suína assada com molho barbecue defumado, acompanhada de batata rústica.','Carnes',52.90,'assets/img/costelinha-bbq.jpg',3),(24,'Batata Frita com Cheddar e Bacon','Porção de batata frita crocante coberta com cheddar cremoso e bacon picado.','Petiscos',26.90,'assets/img/batata-cheddar.jpg',2),(25,'Tacos Mexicanos de Carne','Tortilhas de milho com carne temperada, queijo, alface, tomate e molho picante.','Lanches',33.90,'assets/img/tacos.jpg',3),(26,'Burrito de Frango','Tortilha recheada com frango, arroz, feijão, queijo e molho especial.','Lanches',31.90,'assets/img/burrito.jpg',2),(27,'Ceviche de Tilápia','Tilápia marinada no limão com cebola roxa, coentro e pimenta, servida gelada.','Petiscos',39.90,'assets/img/ceviche.jpg',3),(28,'Picanha Bovina Fatiada','Picanha fatiada e grelhada, servida com farofa e vinagrete.','Carnes',89.90,'assets/img/picanha-fatiada.jpg',4),(29,'Espaguete à Carbonara','Espaguete com molho carbonara cremoso, bacon crocante e parmesão.','Massas',38.90,'assets/img/carbonara.jpg',2),
        (30,'Filé de Tilápia Grelhado','Filé de tilápia grelhado com legumes no vapor e arroz integral.','Peixes',36.90,'assets/img/tilapia-grelhada.jpg',2),(31,'Frango Grelhado com Legumes','Peito de frango grelhado acompanhado de legumes salteados e purê de batata-doce.','Pratos Principais',34.90,'assets/img/frango-legumes.jpg',3),(32,'Salada Tropical','Mix de folhas com manga, abacaxi, tomate-cereja e molho de maracujá.','Saladas',24.90,'assets/img/salada-tropical.jpg',2),(33,'Esfiha de Carne','Esfiha assada com recheio de carne temperada e limão.','Lanches',12.90,'assets/img/esfiha-carne.jpg',4),(34,'Kibe Frito','Kibe de carne moída com trigo e temperos, frito crocante.','Petiscos',14.90,'assets/img/kibe.jpg',5),(35,'Frango Xadrez','Frango em cubos salteado com pimentões, cebola e molho agridoce oriental.','Orientais',37.90,'assets/img/frango-xadrez.jpg',4),(36,'Temaki de Salmão','Cone de alga recheado com arroz e salmão fresco.','Orientais',19.90,'assets/img/temaki-salmao.jpg',2),(37,'Sushi Combinado 20 Peças','Combinado de sushis e sashimis variados com salmão, atum e camarão.','Orientais',68.90,'assets/img/sushi-combinado.jpg',3),(38,'Carpaccio de Carne','Finas fatias de carne crua com molho de alcaparras, parmesão e rúcula.','Petiscos',42.90,'assets/img/carpaccio.jpg',3),(39,'Estrogonofe de Carne','Estrogonofe cremoso de carne bovina com champignon, arroz e batata palha.','Pratos Principais',39.90,'assets/img/strogonoff-carne.jpg',3),
        (40,'Feijão Tropeiro','Feijão com farinha, bacon, linguiça, ovos e couve, prato típico mineiro.','Pratos Principais',34.90,'assets/img/feijao-tropeiro.jpg',2),(41,'Galinhada Goiana','Arroz cozido com frango caipira e açafrão, prato típico goiano.','Pratos Principais',36.90,'assets/img/galinhada.jpg',3),(42,'Vaca Atolada','Costela bovina cozida com mandioca e temperos, prato típico brasileiro.','Pratos Principais',46.90,'assets/img/vaca-atolada.jpg',2),(43,'Baião de Dois','Arroz com feijão-de-corda, queijo coalho e carne seca.','Pratos Principais',35.90,'assets/img/baiao-dois.jpg',1),(44,'Acarajé Baiano','Bolinho de feijão-fradinho frito no dendê, recheado com vatapá e camarão.','Petiscos',28.90,'assets/img/acaraje.jpg',4),(45,'Tapioca Recheada','Tapioca recheada com queijo, presunto e tomate.','Lanches',18.90,'assets/img/tapioca.jpg',2),(46,'Coxinha de Frango','Salgado de massa de batata recheado com frango desfiado e empanado.','Petiscos',10.90,'assets/img/coxinha.jpg',4),(47,'Pastel de Carne','Pastel frito crocante recheado com carne moída temperada.','Petiscos',9.90,'assets/img/pastel.jpg',3),(48,'Açaí com Granola e Banana','Tigela de açaí cremoso com granola crocante e rodelas de banana.','Sobremesas',21.90,'assets/img/acai.jpg',4),(49,'Brigadeiro Gourmet','Brigadeiro artesanal feito com chocolate belga e granulado nobre.','Sobremesas',6.90,'assets/img/brigadeiro.jpg',2);
`

async function criar_tabelas() {
    const connection = await db.pool.getConnection();
    try {
        await connection.beginTransaction();

        console.log("Criando tabela 'cliente'...");
        await connection.query(ESTRUTURA_CLIENTE);
        await connection.query(DADOS_CLIENTE);

        console.log("Criando tabela 'produto'...");
        await connection.query(ESTRUTURA_PRODUTO);
        await connection.query(DADOS_PRODUTO);         

        await connection.commit();
        console.log("Migration executada com sucesso!");
        process.exit(0);
    } catch (error) {
        await connection.rollback();
        console.log(error)
        process.exit(1);
    } finally {
        connection.release();
    }
}
criar_tabelas()
