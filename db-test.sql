-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: db-eu-01.sparkedhost.us:3306
-- Generation Time: Sep 16, 2021 at 11:30 AM
-- Server version: 10.5.10-MariaDB-1:10.5.10+maria~xenial
-- PHP Version: 7.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `s48541_Test`
--
CREATE DATABASE IF NOT EXISTS `s48541_Test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `s48541_Test`;

-- --------------------------------------------------------

--
-- Table structure for table `21L3-INF`
--

CREATE TABLE `21L3-INF` (
  `id` int(11) NOT NULL,
  `matiere` varchar(128) NOT NULL,
  `date` int(11) NOT NULL,
  `horaire` time NOT NULL,
  `duree` time NOT NULL,
  `salle` varchar(8) NOT NULL,
  `groupe` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `21L3-INF`
--

INSERT INTO `21L3-INF` (`id`, `matiere`, `date`, `horaire`, `duree`, `salle`, `groupe`) VALUES
(1, 'Technologies du web 3', 2, '08:00:00', '02:00:00', 'ALBMM102', NULL),
(2, 'Programmation fonctionnelle', 2, '10:15:00', '02:00:00', 'ALBMM102', 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `21L3-INF`
--
ALTER TABLE `21L3-INF`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `21L3-INF`
--
ALTER TABLE `21L3-INF`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
