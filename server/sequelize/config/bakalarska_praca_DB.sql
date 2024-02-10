-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: St 07.Feb 2024, 16:38
-- Verzia serveru: 10.4.28-MariaDB
-- Verzia PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `computers-db`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `computer`
--

CREATE TABLE `computer` (
  `computer_id` int(11) NOT NULL,
  `computer_usage_id` int(11) DEFAULT NULL,
  `cooler_id` int(11) DEFAULT NULL,
  `graphic_card_id` int(11) DEFAULT NULL,
  `hard_disk_drive_id` int(11) DEFAULT NULL,
  `motherboard_id` int(11) DEFAULT NULL,
  `operational_memory_id` int(11) DEFAULT NULL,
  `pc_case_id` int(11) DEFAULT NULL,
  `power_supply_id` int(11) DEFAULT NULL,
  `processor_id` int(11) DEFAULT NULL,
  `solid_state_drive_id` int(11) DEFAULT NULL,
  `quality_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `computer`
--

INSERT INTO `computer` (`computer_id`, `computer_usage_id`, `cooler_id`, `graphic_card_id`, `hard_disk_drive_id`, `motherboard_id`, `operational_memory_id`, `pc_case_id`, `power_supply_id`, `processor_id`, `solid_state_drive_id`, `quality_level`) VALUES
(1, 1, 1, 1, 8, 1, 1, 1, 1, 1, 1, 1),
(2, 1, 1, 1, 8, 2, 1, 1, 1, 5, 1, 1),
(3, 1, 2, 1, 8, 3, 3, 1, 1, 5, 2, 2),
(4, 1, 2, 1, 8, 3, 3, 4, 2, 5, 4, 3),
(5, 1, 3, 1, 8, 4, 3, 4, 2, 5, 3, 4),
(6, 1, 3, 1, 8, 4, 3, 4, 2, 5, 4, 3),
(7, 1, 1, 1, 8, 2, 1, 1, 1, 9, 1, 1),
(8, 1, 2, 1, 8, 3, 3, 1, 1, 9, 2, 2),
(9, 1, 2, 1, 8, 3, 3, 4, 2, 9, 4, 3),
(10, 1, 3, 1, 1, 4, 3, 4, 2, 9, 3, 4),
(11, 1, 4, 1, 8, 5, 3, 2, 2, 16, 4, 5),
(12, 1, 7, 1, 8, 5, 4, 2, 2, 16, 7, 6),
(13, 1, 4, 1, 8, 11, 4, 4, 2, 23, 7, 5),
(14, 1, 6, 1, 2, 13, 7, 3, 4, 23, 8, 7),
(15, 1, 7, 1, 3, 13, 8, 8, 4, 23, 8, 8),
(16, 1, 9, 1, 4, 14, 9, 9, 4, 25, 9, 9),
(17, 1, 1, 2, 8, 16, 1, 1, 1, 7, 1, 1),
(18, 1, 2, 2, 8, 17, 2, 1, 1, 7, 2, 2),
(19, 1, 2, 2, 8, 18, 3, 4, 2, 7, 4, 3),
(20, 1, 3, 2, 8, 19, 4, 4, 2, 7, 6, 4),
(21, 1, 2, 2, 8, 18, 3, 4, 2, 13, 4, 3),
(22, 1, 3, 2, 8, 20, 4, 3, 2, 13, 6, 4),
(23, 1, 4, 2, 8, 21, 5, 2, 2, 19, 7, 5),
(24, 1, 6, 2, 8, 21, 5, 3, 2, 19, 7, 6),
(25, 1, 7, 2, 2, 22, 7, 7, 2, 19, 7, 7),
(26, 1, 5, 2, 8, 24, 7, 7, 2, 21, 7, 7),
(27, 1, 9, 2, 2, 24, 7, 9, 4, 21, 8, 8),
(28, 1, 9, 2, 3, 25, 8, 9, 4, 22, 8, 8),
(29, 1, 10, 2, 4, 25, 9, 10, 4, 22, 9, 9),
(30, 2, 1, 3, 8, 1, 1, 1, 1, 2, 1, 1),
(31, 2, 1, 4, 8, 1, 1, 1, 1, 2, 1, 1),
(32, 2, 1, 5, 8, 2, 1, 1, 1, 2, 2, 1),
(33, 2, 1, 6, 8, 2, 1, 1, 1, 2, 2, 1),
(34, 2, 1, 7, 8, 2, 1, 1, 1, 2, 2, 1),
(35, 2, 2, 8, 8, 2, 3, 1, 2, 2, 4, 2),
(37, 2, 2, 5, 8, 16, 3, 1, 2, 4, 4, 2),
(38, 2, 2, 8, 8, 16, 3, 1, 2, 4, 4, 2),
(39, 2, 2, 10, 8, 18, 3, 1, 2, 4, 4, 2),
(40, 2, 2, 10, 1, 18, 3, 2, 2, 4, 4, 3),
(41, 2, 2, 10, 1, 18, 3, 3, 2, 4, 4, 3),
(42, 2, 2, 12, 1, 18, 3, 2, 2, 4, 4, 3),
(43, 2, 2, 12, 1, 18, 3, 3, 2, 4, 4, 3),
(44, 2, 2, 9, 8, 2, 3, 1, 2, 6, 4, 2),
(45, 2, 2, 10, 8, 2, 3, 1, 2, 6, 4, 2),
(46, 2, 2, 11, 1, 3, 3, 2, 2, 6, 4, 3),
(47, 2, 2, 11, 1, 3, 3, 3, 2, 6, 4, 3),
(48, 2, 2, 12, 1, 3, 3, 2, 2, 6, 4, 3),
(49, 2, 2, 12, 1, 3, 3, 3, 2, 6, 4, 3),
(50, 2, 2, 13, 8, 18, 3, 4, 3, 8, 6, 3),
(51, 2, 3, 13, 2, 19, 4, 5, 4, 8, 6, 4),
(52, 2, 2, 16, 8, 18, 3, 4, 3, 8, 6, 3),
(53, 2, 3, 16, 2, 19, 4, 5, 4, 8, 6, 4),
(54, 2, 3, 20, 8, 20, 3, 4, 3, 14, 6, 3),
(55, 2, 4, 20, 2, 20, 4, 5, 4, 14, 6, 4),
(56, 2, 6, 20, 8, 23, 6, 3, 4, 14, 8, 5),
(57, 2, 2, 14, 8, 3, 3, 4, 3, 10, 6, 3),
(58, 2, 3, 14, 2, 4, 4, 5, 4, 10, 6, 4),
(59, 2, 2, 17, 8, 3, 3, 4, 3, 10, 6, 3),
(60, 2, 3, 17, 2, 4, 4, 5, 4, 10, 6, 4),
(61, 2, 3, 17, 8, 4, 3, 4, 3, 12, 6, 3),
(62, 2, 4, 15, 2, 5, 4, 5, 4, 12, 6, 4),
(63, 2, 6, 15, 8, 5, 6, 3, 4, 12, 8, 5),
(64, 2, 6, 15, 8, 5, 6, 3, 4, 16, 8, 5),
(65, 2, 7, 15, 8, 5, 6, 2, 4, 16, 8, 5),
(66, 2, 7, 16, 8, 5, 6, 6, 4, 16, 8, 5),
(67, 2, 7, 16, 8, 5, 6, 5, 4, 16, 8, 5),
(68, 2, 5, 17, 2, 5, 6, 6, 4, 16, 8, 6),
(69, 2, 7, 17, 2, 5, 6, 7, 4, 16, 8, 6),
(70, 2, 3, 15, 8, 8, 3, 4, 3, 18, 6, 4),
(71, 2, 3, 16, 8, 8, 3, 4, 3, 18, 6, 4),
(72, 2, 3, 17, 8, 8, 3, 4, 3, 18, 6, 4),
(73, 2, 4, 15, 2, 9, 5, 6, 4, 18, 6, 5),
(74, 2, 4, 16, 2, 9, 5, 6, 4, 18, 6, 5),
(75, 2, 4, 17, 2, 9, 5, 6, 4, 18, 6, 5),
(76, 2, 7, 18, 2, 11, 6, 7, 4, 18, 7, 6),
(77, 2, 6, 18, 2, 11, 6, 3, 4, 18, 7, 6),
(78, 2, 5, 19, 3, 12, 6, 6, 4, 18, 7, 7),
(79, 2, 2, 8, 8, 6, 1, 1, 1, 3, 4, 2),
(80, 2, 2, 5, 8, 6, 1, 1, 1, 3, 4, 2),
(81, 2, 2, 9, 1, 6, 3, 1, 1, 3, 4, 2),
(82, 2, 2, 9, 8, 8, 3, 2, 2, 3, 6, 3),
(83, 2, 2, 9, 8, 8, 3, 3, 2, 3, 6, 3),
(84, 2, 2, 11, 2, 9, 5, 4, 2, 3, 6, 4),
(85, 2, 2, 11, 2, 9, 5, 5, 2, 3, 6, 4),
(86, 2, 2, 13, 8, 18, 3, 4, 3, 11, 6, 3),
(87, 2, 3, 13, 8, 18, 4, 5, 3, 11, 6, 4),
(88, 2, 3, 15, 2, 18, 4, 5, 4, 11, 6, 5),
(89, 2, 3, 16, 2, 19, 4, 5, 4, 11, 6, 5),
(90, 2, 4, 16, 2, 20, 6, 5, 4, 11, 5, 6),
(91, 2, 4, 21, 2, 23, 4, 7, 4, 15, 6, 6),
(92, 2, 7, 21, 3, 23, 4, 7, 4, 15, 7, 7),
(93, 2, 4, 18, 2, 23, 4, 7, 4, 15, 6, 6),
(94, 2, 7, 19, 3, 23, 4, 7, 4, 15, 7, 7),
(95, 2, 4, 18, 2, 23, 4, 7, 4, 17, 6, 6),
(96, 2, 7, 19, 3, 23, 4, 7, 4, 17, 7, 7),
(97, 2, 3, 18, 8, 21, 5, 4, 3, 19, 6, 3),
(98, 2, 3, 20, 8, 21, 5, 4, 3, 19, 6, 3),
(99, 2, 3, 22, 8, 21, 5, 4, 3, 19, 6, 3),
(100, 2, 4, 23, 2, 22, 5, 7, 4, 19, 6, 5),
(101, 2, 4, 24, 2, 22, 5, 7, 4, 19, 6, 5),
(102, 2, 6, 24, 8, 22, 5, 3, 4, 19, 8, 6),
(103, 2, 7, 24, 8, 22, 5, 7, 4, 19, 8, 6),
(104, 2, 6, 23, 8, 22, 5, 3, 4, 19, 8, 6),
(105, 2, 7, 23, 8, 22, 5, 7, 4, 19, 8, 6),
(106, 2, 8, 23, 3, 22, 7, 8, 5, 19, 7, 7),
(107, 2, 8, 24, 3, 22, 7, 8, 5, 19, 7, 7),
(108, 2, 8, 25, 3, 22, 7, 8, 5, 19, 7, 7),
(109, 2, 5, 25, 2, 22, 7, 6, 5, 21, 7, 7),
(110, 2, 8, 25, 3, 22, 7, 8, 5, 21, 8, 7),
(111, 2, 9, 26, 4, 24, 8, 9, 6, 21, 8, 8),
(112, 2, 8, 26, 4, 24, 8, 7, 6, 21, 8, 8),
(113, 2, 9, 27, 4, 24, 8, 9, 6, 21, 8, 8),
(114, 2, 8, 27, 4, 24, 8, 7, 6, 21, 8, 8),
(115, 2, 9, 28, 4, 24, 8, 9, 6, 21, 8, 8),
(116, 2, 8, 28, 4, 24, 8, 7, 6, 21, 8, 8),
(117, 2, 3, 18, 8, 11, 3, 4, 3, 20, 6, 4),
(118, 2, 3, 20, 8, 11, 3, 4, 3, 20, 6, 4),
(119, 2, 4, 19, 2, 11, 4, 5, 4, 20, 6, 5),
(120, 2, 4, 21, 2, 11, 4, 5, 4, 20, 6, 5),
(121, 2, 5, 22, 3, 12, 6, 6, 4, 20, 7, 6),
(122, 2, 6, 24, 8, 13, 5, 3, 4, 20, 8, 6),
(123, 2, 7, 24, 8, 13, 5, 7, 4, 20, 8, 6),
(124, 2, 7, 23, 8, 13, 5, 7, 4, 20, 8, 6),
(125, 2, 8, 25, 3, 13, 7, 8, 5, 20, 8, 7),
(126, 2, 5, 26, 3, 13, 7, 6, 5, 24, 8, 7),
(127, 2, 8, 27, 4, 14, 8, 7, 6, 24, 8, 8),
(128, 2, 8, 28, 4, 14, 8, 7, 6, 24, 8, 8),
(129, 2, 8, 29, 4, 14, 8, 7, 6, 24, 8, 8),
(130, 2, 9, 29, 4, 14, 8, 9, 6, 24, 8, 8),
(131, 2, 9, 28, 4, 14, 8, 9, 6, 24, 8, 8),
(132, 2, 9, 27, 4, 14, 8, 9, 6, 24, 8, 8),
(133, 2, 9, 30, 5, 14, 8, 9, 6, 25, 8, 8),
(134, 2, 9, 31, 5, 14, 8, 9, 6, 25, 8, 8),
(135, 2, 9, 32, 5, 14, 8, 9, 6, 25, 8, 8),
(136, 2, 10, 30, 5, 14, 8, 7, 6, 25, 8, 8),
(137, 2, 10, 31, 5, 14, 8, 7, 6, 25, 8, 8),
(138, 2, 10, 32, 5, 14, 8, 7, 6, 25, 8, 8),
(139, 2, 10, 33, 6, 15, 9, 10, 7, 25, 9, 9),
(140, 2, 11, 33, 6, 15, 9, 9, 7, 25, 9, 9),
(141, 2, 8, 29, 4, 24, 8, 7, 6, 22, 8, 8),
(142, 2, 8, 30, 4, 24, 8, 7, 6, 22, 8, 8),
(143, 2, 9, 29, 4, 24, 8, 9, 6, 22, 8, 8),
(144, 2, 9, 30, 4, 24, 8, 9, 6, 22, 8, 8),
(145, 2, 9, 31, 5, 24, 8, 9, 6, 22, 8, 8),
(146, 2, 9, 32, 5, 24, 8, 9, 6, 22, 8, 8),
(147, 2, 8, 32, 5, 24, 8, 7, 6, 22, 8, 8),
(148, 2, 8, 31, 5, 24, 8, 7, 6, 22, 8, 8),
(149, 2, 10, 33, 6, 25, 9, 10, 7, 22, 9, 9),
(150, 2, 11, 33, 6, 25, 9, 9, 7, 22, 9, 9);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `computer_usage`
--

CREATE TABLE `computer_usage` (
  `computer_usage_id` int(11) NOT NULL,
  `usage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `computer_usage`
--

INSERT INTO `computer_usage` (`computer_usage_id`, `usage`) VALUES
(1, 'office'),
(2, 'gpu');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `cooler`
--

CREATE TABLE `cooler` (
  `cooler_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `cooler`
--

INSERT INTO `cooler` (`cooler_id`, `name`, `type`, `price`) VALUES
(1, 'box', 'air', 0),
(2, 'SilentiumPC Fera 5', 'air', 30),
(3, 'SilentiumPC Fortis 5', 'air', 45),
(4, 'Noctua NH-U12S', 'air', 75),
(5, 'Noctua NH-D15 Chromax Black', 'air', 110),
(6, 'DeepCool GAMMAX L240 A-RGB WHITE', 'liquid aio', 100),
(7, 'ASUS TUF GAMING LC 240 ARGB', 'liquid aio', 105),
(8, 'MSI MAG CORELIQUID C360', 'liquid aio', 145),
(9, 'DeepCool LS720 White', 'liquid aio', 155),
(10, 'Corsair iCUE H150i ELITE LCD DISPLAY', 'liquid aio', 300),
(11, 'NZXT Kraken Z73 RGB White', 'liquid aio', 330);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `graphic_card`
--

CREATE TABLE `graphic_card` (
  `graphic_card_id` int(11) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `series` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `memory` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `graphic_card`
--

INSERT INTO `graphic_card` (`graphic_card_id`, `manufacturer`, `series`, `brand`, `model`, `memory`, `rank`, `price`) VALUES
(1, 'intel', 'integrated', 'intel', 'integrated', 0, 32, 0),
(2, 'amd', 'integrated', 'amd', 'integrated', 0, 32, 0),
(3, 'nvidia', 'gtx 1060', 'msi', 'gaming x', 3, 31, 70),
(4, 'amd', 'rx 570', 'sapphire', 'nitro +', 4, 30, 70),
(5, 'nvidia', 'gtx 1060', 'msi', 'gaming x', 6, 29, 90),
(6, 'amd', 'rx 570', 'sapphire', 'nitro+', 8, 28, 90),
(7, 'amd', 'rx 580', 'sapphire', 'nitro+', 4, 27, 95),
(8, 'amd', 'rx 580', 'sapphire', 'nitro+', 8, 26, 110),
(9, 'nvidia', 'gtx 1660', 'msi', 'gaming x', 6, 25, 140),
(10, 'nvidia', 'gtx 1070', 'asus', 'strix', 8, 24, 140),
(11, 'nvidia', 'gtx 1660 super', 'msi', 'gaming x', 6, 23, 150),
(12, 'nvidia', 'gtx 1080', 'asus', 'strix', 8, 22, 160),
(13, 'amd', 'rx 6600', 'sapphire', 'pulse', 8, 21, 335),
(14, 'nvidia', 'rtx 2060 super', 'msi', 'gaming x', 8, 20, 220),
(15, 'nvidia', 'rtx 3060', 'gainward', 'ghost', 12, 19, 410),
(16, 'amd', 'rx 6600xt', 'sapphire', 'pulse', 8, 18, 380),
(17, 'nvidia', 'rtx 2070 super', 'msi', 'gaming x trio', 8, 17, 270),
(18, 'nvidia', 'rtx 3060 ti', 'gainward', 'phoenix', 8, 16, 505),
(19, 'nvidia', 'rtx 3060 ti', 'asus', 'dual v2', 8, 15, 555),
(20, 'amd', 'rx 6700 xt', 'sapphire', 'pulse', 12, 14, 505),
(21, 'amd', 'rx 6700 xt', 'sapphire', 'nitro+', 12, 13, 550),
(22, 'nvidia', 'rtx 3070', 'gainward', 'phoenix', 8, 12, 635),
(23, 'nvidia', 'rtx 3070', 'evga', 'ftw 3 ultra', 8, 11, 695),
(24, 'amd', 'rx 6750 xt', 'sapphire', 'nitro+', 12, 10, 650),
(25, 'nvidia', 'rtx 3070 ti', 'evga', 'xc 3 ultra', 8, 9, 870),
(26, 'nvidia', 'rtx 3080', 'gainward', 'phoenix', 10, 8, 860),
(27, 'amd', 'rx 6800 xt se', 'sapphire', 'nitro+', 16, 7, 810),
(28, 'nvidia', 'rtx 3080 ti', 'gigabyte', 'vision oc', 12, 6, 1130),
(29, 'nvidia', 'rtx 3090', 'asus', 'tuf', 24, 5, 1215),
(30, 'amd', 'rx 6900 xt', 'sapphire', 'toxic nitro+', 16, 4, 940),
(31, 'amd', 'rx 6950 xt', 'sapphire', 'toxic nitro+', 16, 3, 1150),
(32, 'nvidia', 'rtx 3090 ti', 'msi', 'suprim x', 24, 2, 1650),
(33, 'nvidia', 'rtx 4090', 'msi', 'suprim liquid x', 24, 1, 2610);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `hard_disk_drive`
--

CREATE TABLE `hard_disk_drive` (
  `hard_disk_drive_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `memory` int(11) DEFAULT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `hard_disk_drive`
--

INSERT INTO `hard_disk_drive` (`hard_disk_drive_id`, `name`, `memory`, `price`) VALUES
(1, 'Seagate BarraCuda', 1000, 50),
(2, 'Seagate BarraCuda', 2000, 65),
(3, 'Seagate BarraCuda', 4000, 95),
(4, 'Seagate BarraCuda', 8000, 175),
(5, 'Seagate IronWolf Pro', 8000, 240),
(6, 'WD Black', 8000, 370),
(8, 'nodisk', 0, 0);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `motherboard`
--

CREATE TABLE `motherboard` (
  `motherboard_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `wifi` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `motherboard`
--

INSERT INTO `motherboard` (`motherboard_id`, `name`, `wifi`, `price`) VALUES
(1, 'ASUS PRIME H410M-A/CSM DDR4', 'no', 65),
(2, 'ASUS PRIME H510M-A DDR4 WIFI', 'yes', 100),
(3, 'MSI MAG B560M MORTAR DDR4 WIFI', 'yes', 125),
(4, 'ASUS TUF GAMING B560-PLUS DDR4 WIFI', 'yes', 150),
(5, 'MSI MAG Z590 TOMAHAWK DDR4 WIFI', 'yes', 155),
(6, 'ASUS PRIME H610M-K DDR4', 'no', 95),
(7, 'ASUS PRIME B660M-A DDR4', 'no', 125),
(8, 'MSI PRO B660M-A DDR4 WIFI', 'yes', 145),
(9, 'ASUS TUF GAMING B660M-PLUS DDR5 WIFI', 'yes', 175),
(10, 'ASUS TUF GAMING B660-PLUS DDR4 WIFI', 'yes', 190),
(11, 'ASUS PRIME Z690-P DDR4 WIFI', 'yes', 220),
(12, 'MSI MAG Z690 TOMAHAWK DDR4 WIFI', 'yes', 250),
(13, 'ASUS PRIME Z790-P DDR5 WIFI', 'yes', 285),
(14, 'ASUS PRIME Z790-A DDR5 WIFI', 'yes', 340),
(15, 'ASUS ROG STRIX Z790-F GAMING DDR5 WIFI', 'yes', 500),
(16, 'ASUS PRIME B450M-K II DDR4', 'no', 70),
(17, 'ASUS TUF GAMING B550M-E DDR4', 'no', 125),
(18, 'ASUS TUF GAMING B550M-PLUS DDR4 WIFI II', 'yes', 140),
(19, 'ASUS TUF GAMING B550-PLUS  DDR4 WIFI II', 'yes', 145),
(20, 'MSI MAG B550 TOMAHAWK MAX DDR4 WIFI', 'yes', 220),
(21, 'ASUS PRIME B650-PLUS DDR5', 'no', 210),
(22, 'ASUS TUF GAMING B650-PLUS DDR5 WIFI', 'yes', 240),
(23, 'MSI MAG X570S TOMAHAWK MAX DDR4 WIFI', 'yes', 260),
(24, 'MSI MAG B650 TOMAHAWK DDR5 WIFI', 'yes', 300),
(25, 'ASUS ROG STRIX X670E-F GAMING DDR5 WIFI', 'yes', 460);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `operational_memory`
--

CREATE TABLE `operational_memory` (
  `operational_memory_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `memory` int(11) NOT NULL,
  `frequency` int(11) NOT NULL,
  `latency` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `operational_memory`
--

INSERT INTO `operational_memory` (`operational_memory_id`, `name`, `memory`, `frequency`, `latency`, `price`, `type`) VALUES
(1, 'Kingston FURY DDR4 Beast Black', 8, 2666, 16, 30, 'DDR4'),
(2, 'Kingston FURY DDR4 Renegade Black', 8, 3600, 16, 45, 'DDR4'),
(3, 'Kingston FURY DDR4 Beast Black', 16, 3200, 16, 60, 'DDR4'),
(4, 'G.SKILL DDR4 Trident Z RGB Neo', 16, 3600, 16, 120, 'DDR4'),
(5, 'Kingston FURY DDR5 Beast Black', 16, 5600, 36, 105, 'DDR5'),
(6, 'Kingston FURY DDR4 Renegade Black', 32, 3600, 16, 130, 'DDR4'),
(7, 'Kingston FURY DDR5 Beast Black', 32, 5600, 36, 195, 'DDR5'),
(8, 'Corsair DDR5 Platinum RGB Grey', 32, 6000, 36, 345, 'DDR5'),
(9, 'G.SKILL DDR5 Trident Z5 Silver', 64, 6400, 32, 795, 'DDR5');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `pc_case`
--

CREATE TABLE `pc_case` (
  `pc_case_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` varchar(255) NOT NULL,
  `fan_lighting` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `pc_case`
--

INSERT INTO `pc_case` (`pc_case_id`, `name`, `size`, `fan_lighting`, `price`) VALUES
(1, 'Zalman T6', '1', '1', 40),
(2, 'DeepCool CC560 Black', '2', '2', 60),
(3, 'DeepCool CC560 White', '2', '2', 60),
(4, 'SILENTIUMPC SIGNUM SG1', '1', '1', 60),
(5, 'EVOLVEO Ptero Q1', '2', '3', 70),
(6, 'Fractal Design Focus 2 Black Solid', '2', '1', 85),
(7, 'DeepCool CK560 Black', '3', '4', 105),
(8, 'Fractal Design Meshify 2 Compact Lite RGB Black TG Light Tint', '3', '4', 150),
(9, 'MSI MPG GUNGNIR 110R White', '3', '4', 175),
(10, 'Corsair iCUE 5000X RGB Tempered Glass Black', '3', '3', 225);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `power_supply`
--

CREATE TABLE `power_supply` (
  `power_supply_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `wattage` int(11) NOT NULL,
  `certification` varchar(255) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `power_supply`
--

INSERT INTO `power_supply` (`power_supply_id`, `name`, `wattage`, `certification`, `price`) VALUES
(1, 'Be quiet! SYSTEM POWER 9', 400, 'bronze', 50),
(2, 'Seasonic Core GC', 500, 'gold', 60),
(3, 'EVGA 700 BR', 700, 'bronze', 70),
(4, 'Corsair RM750', 750, 'gold', 105),
(5, 'EVGA SuperNOVA 850 GA', 850, 'gold', 135),
(6, 'EVGA SuperNOVA 1000 G6', 1000, 'gold', 185),
(7, 'Seasonic Prime', 1300, 'platinum', 280);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `processor`
--

CREATE TABLE `processor` (
  `processor_id` int(11) NOT NULL,
  `manufacturer` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `p_cores` int(11) NOT NULL,
  `e_cores` int(11) NOT NULL,
  `max_frequency` int(11) NOT NULL,
  `rank` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `processor`
--

INSERT INTO `processor` (`processor_id`, `manufacturer`, `name`, `p_cores`, `e_cores`, `max_frequency`, `rank`, `price`) VALUES
(1, 'intel', 'i3-10105', 4, 0, 4400, 25, 135),
(2, 'intel', 'i3-10105F', 4, 0, 4400, 24, 90),
(3, 'intel', 'i3-12100F', 4, 0, 4300, 23, 125),
(4, 'amd', 'Ryzen 5 3600', 6, 0, 4200, 22, 120),
(5, 'intel', 'i5 10400', 6, 0, 4300, 21, 180),
(6, 'intel', 'i5-10400F', 6, 0, 4300, 20, 150),
(7, 'amd', 'Ryzen 5 5600G', 6, 0, 4400, 19, 150),
(8, 'amd', 'Ryzen 5 5600', 6, 0, 4400, 18, 155),
(9, 'intel', 'i5 11400', 6, 0, 4400, 17, 225),
(10, 'intel', 'i5 11400F', 6, 0, 4400, 16, 170),
(11, 'amd', 'Ryzen 5 5600X', 6, 0, 4600, 15, 190),
(12, 'intel', 'i5 11600KF', 6, 0, 4900, 14, 245),
(13, 'amd', 'Ryzen 7 5700G', 8, 0, 4600, 13, 225),
(14, 'amd', 'Ryzen 7 5800X', 8, 0, 4700, 12, 280),
(15, 'amd', 'Ryzen 9 5900X', 12, 0, 4800, 11, 405),
(16, 'intel', 'i7 11700K', 8, 0, 5000, 10, 330),
(17, 'amd', 'Ryzen 7 5800X3D', 8, 0, 4500, 9, 405),
(18, 'intel', 'i5 12600KF', 6, 4, 4900, 8, 330),
(19, 'amd', 'Ryzen 5 7600X', 6, 0, 5300, 7, 350),
(20, 'intel', 'i5 13600KF', 6, 8, 5100, 6, 350),
(21, 'amd', 'Ryzen 7 7700X', 8, 0, 5400, 5, 460),
(22, 'amd', 'Ryzen 9 7900X', 12, 0, 5600, 4, 655),
(23, 'intel', 'i7 13700K', 8, 8, 5400, 3, 515),
(24, 'intel', 'i7 13700KF', 8, 8, 5400, 2, 480),
(25, 'intel', 'i9 13900K', 8, 16, 5800, 1, 740);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `solid_state_drive`
--

CREATE TABLE `solid_state_drive` (
  `solid_state_drive_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `memory` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `solid_state_drive`
--

INSERT INTO `solid_state_drive` (`solid_state_drive_id`, `name`, `memory`, `price`) VALUES
(1, 'Patriot P300', 250, 30),
(2, 'WD Blue SN570', 250, 45),
(3, 'WD Black SN770', 250, 60),
(4, 'WD Blue SN570', 500, 55),
(5, 'WD Black SN770', 500, 75),
(6, 'WD Blue SN570', 1000, 90),
(7, 'Samsung 980 PRO', 1000, 140),
(8, 'WD Black SN770 NVMe', 2000, 210),
(9, 'Samsung 990 PRO', 2000, 330);

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `computer`
--
ALTER TABLE `computer`
  ADD PRIMARY KEY (`computer_id`),
  ADD KEY `computer_usage_id` (`computer_usage_id`),
  ADD KEY `cooler_id` (`cooler_id`),
  ADD KEY `graphic_card_id` (`graphic_card_id`),
  ADD KEY `hard_disk_drive_id` (`hard_disk_drive_id`),
  ADD KEY `motherboard_id` (`motherboard_id`),
  ADD KEY `operational_memory_id` (`operational_memory_id`),
  ADD KEY `pc_case_id` (`pc_case_id`),
  ADD KEY `power_supply_id` (`power_supply_id`),
  ADD KEY `processor_id` (`processor_id`),
  ADD KEY `solid_state_drive_id` (`solid_state_drive_id`);

--
-- Indexy pre tabuľku `computer_usage`
--
ALTER TABLE `computer_usage`
  ADD PRIMARY KEY (`computer_usage_id`);

--
-- Indexy pre tabuľku `cooler`
--
ALTER TABLE `cooler`
  ADD PRIMARY KEY (`cooler_id`);

--
-- Indexy pre tabuľku `graphic_card`
--
ALTER TABLE `graphic_card`
  ADD PRIMARY KEY (`graphic_card_id`);

--
-- Indexy pre tabuľku `hard_disk_drive`
--
ALTER TABLE `hard_disk_drive`
  ADD PRIMARY KEY (`hard_disk_drive_id`);

--
-- Indexy pre tabuľku `motherboard`
--
ALTER TABLE `motherboard`
  ADD PRIMARY KEY (`motherboard_id`);

--
-- Indexy pre tabuľku `operational_memory`
--
ALTER TABLE `operational_memory`
  ADD PRIMARY KEY (`operational_memory_id`);

--
-- Indexy pre tabuľku `pc_case`
--
ALTER TABLE `pc_case`
  ADD PRIMARY KEY (`pc_case_id`);

--
-- Indexy pre tabuľku `power_supply`
--
ALTER TABLE `power_supply`
  ADD PRIMARY KEY (`power_supply_id`);

--
-- Indexy pre tabuľku `processor`
--
ALTER TABLE `processor`
  ADD PRIMARY KEY (`processor_id`);

--
-- Indexy pre tabuľku `solid_state_drive`
--
ALTER TABLE `solid_state_drive`
  ADD PRIMARY KEY (`solid_state_drive_id`);

--
-- Obmedzenie pre exportované tabuľky
--

--
-- Obmedzenie pre tabuľku `computer`
--
ALTER TABLE `computer`
  ADD CONSTRAINT `computer_ibfk_121` FOREIGN KEY (`computer_usage_id`) REFERENCES `computer_usage` (`computer_usage_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_122` FOREIGN KEY (`cooler_id`) REFERENCES `cooler` (`cooler_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_123` FOREIGN KEY (`graphic_card_id`) REFERENCES `graphic_card` (`graphic_card_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_124` FOREIGN KEY (`hard_disk_drive_id`) REFERENCES `hard_disk_drive` (`hard_disk_drive_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_125` FOREIGN KEY (`motherboard_id`) REFERENCES `motherboard` (`motherboard_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_126` FOREIGN KEY (`operational_memory_id`) REFERENCES `operational_memory` (`operational_memory_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_127` FOREIGN KEY (`pc_case_id`) REFERENCES `pc_case` (`pc_case_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_128` FOREIGN KEY (`power_supply_id`) REFERENCES `power_supply` (`power_supply_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_129` FOREIGN KEY (`processor_id`) REFERENCES `processor` (`processor_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `computer_ibfk_130` FOREIGN KEY (`solid_state_drive_id`) REFERENCES `solid_state_drive` (`solid_state_drive_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
