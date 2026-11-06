CREATE TABLE cliente 
( 
 id INT PRIMARY KEY AUTO_INCREMENT,  
 nome VARCHAR(100) NOT NULL,  
 cpf CHAR(14) NOT NULL UNIQUE,  
 celular CHAR(14) NOT NULL,  
 email VARCHAR(100) NOT NULL UNIQUE,  
 senha VARCHAR(512) NOT NULL
); 
DROP TABLE cliente;

INSERT INTO cliente (
    nome, cpf, celular, email, senha
) VALUES (
    "Patrick", "111.222.333-66", 
    "(42)99999-4444", "patrick@gmail.com",
    "EAUHEAUISHEUIEAIS"
);

INSERT INTO cliente (nome, cpf, celular, email, senha) VALUES 
('Monkey D. Luffy', '111.222.333-44', '(11)99888-1001', 'luffy.pirata@onepiece.com', 'GOMUGOMUNOPISTOL'),
('Roronoa Zoro', '222.333.444-55', '(21)99777-2002', 'zoro.tresespadas@onepiece.com', 'SANTORYUUZORO'),
('Nami Cat Burglar', '333.444.555-66', '(31)99666-3003', 'nami.navegadora@onepiece.com', 'CLIMATACTBURG'),
('Ichigo Kurosaki', '444.555.666-77', '(41)99555-4004', 'ichigo.shinigami@bleach.com', 'GETSUGATENSHO'),
('Rukia Kuchiki', '555.666.777-88', '(51)99444-5005', 'rukia.soulreaper@bleach.com', 'SODENOSHIRAYUKI'),
('Kisuke Urahara', '666.777.888-99', '(61)99333-6006', 'urahara.lojista@bleach.com', 'BENIHIMEKANNON'),
('Gon Freecss', '777.888.999-00', '(71)99222-7007', 'gon.cacador@hxh.com', 'JAJANKENPEDRA'),
('Killua Zoldyck', '888.999.000-11', '(81)99111-8008', 'killua.assassino@hxh.com', 'GODSPEEDLIGHTNING'),
('Kurapika Kurta', '999.000.111-22', '(91)99000-9009', 'kurapika.corrente@hxh.com', 'CHAINJAIL'),
('Leorio Paradinight', '000.111.222-33', '(12)98999-1010', 'leorio.medico@hxh.com', 'MALETAMEDICA');

SELECT email, senha FROM cliente;

SELECT email, senha FROM cliente 
WHERE email = "leorio.medico@hxh.com";

SELECT * FROM cliente WHERE id <= 30 AND LENGTH(senha) > 20;

SELECT * FROM cliente;

DELETE FROM cliente WHERE id = 37;

UPDATE cliente 
SET nome = "Patrick Staroin", email = "p@gmail.com" 
WHERE id = 35;