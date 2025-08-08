-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-08-2025 a las 23:04:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ventas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `codigo` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido1` varchar(200) NOT NULL,
  `apellido2` varchar(200) NOT NULL,
  `direccionPrincipal` varchar(200) NOT NULL,
  `numeroDireccion` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `telefono` int(11) NOT NULL,
  `ciudad` varchar(200) NOT NULL,
  `estado` enum('activo','inactivo') NOT NULL DEFAULT 'activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`codigo`, `nombre`, `apellido1`, `apellido2`, `direccionPrincipal`, `numeroDireccion`, `email`, `telefono`, `ciudad`, `estado`) VALUES
(2, 'Borja', 'Perez', 'Garcia', 'Calle 4', '6-54', 'pborja564@gmail.com', 304530419, 'Cartago', 'activo'),
(3, 'Ana', 'Lopez', 'Diaz', 'Avenida 3', '12-30', 'alopez123@gmail.com', 312456789, 'Cali', 'activo'),
(4, 'Carlos', 'Gomez', 'Rios', 'Calle 10', '8-24', 'cgomez.rios@mail.com', 315987654, 'Medellín', 'activo'),
(5, 'Luisa', 'Martinez', 'Suarez', 'Carrera 7', '45-12', 'lmartinez89@hotmail.com', 300741258, 'Bogotá', 'activo'),
(6, 'Diego', 'Castro', 'Vargas', 'Transv. 2', '5-16', 'dcastro.v@gmail.com', 301852963, 'Barranquilla', 'activo'),
(7, 'María', 'Ramírez', 'Ortiz', 'Calle 21', '9-40', 'mramirez.o@correo.com', 304369258, 'Cartagena', 'activo'),
(8, 'Juan', 'Herrera', 'Cruz', 'Avenida 6', '14-07', 'jherrera.cruz@mail.com', 318456123, 'Pereira', 'activo'),
(9, 'Paola', 'Sanchez', 'Mora', 'Carrera 11', '3-55', 'psanchez.m@gmail.com', 302159753, 'Manizales', 'activo'),
(10, 'Sergio', 'Gutierrez', 'Luna', 'Calle 18', '7-88', 'sgutierrez.l@hotmail.com', 319753468, 'Bucaramanga', 'activo'),
(11, 'Andrea', 'Navarro', 'Benitez', 'Avenida 1', '2-20', 'anavarro.b@gmail.com', 311258369, 'Neiva', 'activo'),
(12, 'Fabian', 'Vega', 'Pineda', 'Carrera 4', '6-11', 'fvega.pineda@mail.com', 305874123, 'Cúcuta', 'activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`codigo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  MODIFY `codigo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
