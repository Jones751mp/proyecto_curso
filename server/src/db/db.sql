-- Active: 1687916797927@@127.0.0.1@3306@restaurante
-- SQLBook: Code
CREATE DATABASE restaurante;

USE restaurante;

CREATE TABLE categorias(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50)
);

CREATE TABLE platos (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    precio DECIMAL(10,2),
    id_categoria INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);

CREATE TABLE usuarios(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(50),
    f_nacimiento DATE NOT NULL,
    telefono VARCHAR(14),
    password VARCHAR(100) NOT NULL,
    id_tipo INT NOT NULL,
    FOREIGN KEY (id_tipo) REFERENCES tipos_usuarios(id)
);
-- 2
DROP TABLE usuarios;

CREATE TABLE tipos_usuarios(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tipo VARCHAR(20)
);

INSERT INTO tipos_usuarios (tipo) VALUES ("usuario"),("admin"),("empleado");



CREATE TABLE pedidos_clientes(
    id_usuario INT NOT NULL,
    id_plato INT NOT NULL,
    pedido INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
    FOREIGN KEY (id_plato) REFERENCES platos(id)
);

-- 1
DROP TABLE pedidos_clientes;

--reservaciones






DROP TABLE platos;

DESC usuarios;

SELECT * FROM usuarios;