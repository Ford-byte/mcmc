-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 22, 2024 at 11:16 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mcmc`
--

-- --------------------------------------------------------

--
-- Table structure for table `dailydevotional`
--

CREATE TABLE `dailydevotional` (
  `id` int(255) NOT NULL,
  `userId` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `devotionalCaption` varchar(255) NOT NULL,
  `devotionalVerse` varchar(255) NOT NULL,
  `is_posted` date NOT NULL,
  `is_updated` date NOT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dailydevotional`
--

INSERT INTO `dailydevotional` (`id`, `userId`, `name`, `devotionalCaption`, `devotionalVerse`, `is_posted`, `is_updated`, `is_deleted`) VALUES
(1, 0, '[value-3]', 'Hii', 'hii', '0000-00-00', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `userId` int(255) NOT NULL,
  `eventPicture` longtext NOT NULL,
  `eventCaption` varchar(255) NOT NULL,
  `is_posted` date NOT NULL,
  `is_updated` date NOT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `userId`, `eventPicture`, `eventCaption`, `is_posted`, `is_updated`, `is_deleted`) VALUES
(3, 16, '508813524.png', 'Hii', '2024-07-21', '0000-00-00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE `otp` (
  `otp_id` int(11) NOT NULL,
  `otpnumber` int(255) NOT NULL,
  `timelimit` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`otp_id`, `otpnumber`, `timelimit`) VALUES
(1, 273571, NULL),
(2, 532714, NULL),
(3, 408129, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sampleimage`
--

CREATE TABLE `sampleimage` (
  `id` int(11) NOT NULL,
  `userID` int(255) NOT NULL,
  `name` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `caption` varchar(255) NOT NULL,
  `is_posted` date NOT NULL,
  `is_updated` date DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sampleimage`
--

INSERT INTO `sampleimage` (`id`, `userID`, `name`, `caption`, `is_posted`, `is_updated`, `is_deleted`) VALUES
(93, 16, '', 'trial', '2024-07-18', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `profile` varchar(100) DEFAULT 'avatar.png',
  `fullname` varchar(100) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(225) NOT NULL,
  `role` varchar(50) DEFAULT 'member',
  `status` varchar(50) DEFAULT 'pending',
  `is_deleted` tinyint(1) DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `profile`, `fullname`, `username`, `password`, `role`, `status`, `is_deleted`, `created_at`, `updated_at`) VALUES
(15, 'avatar.png', 'mark ', 'john@gmail.com', '$2a$10$VV9EqyRb.lbFsdq.LfDPs.UgRW4v18Yvu7BdN4ZVrWs', 'member', 'active', 0, '2024-06-29 11:51:27', '2024-06-29 13:16:45'),
(16, 'avatar.png', 'safdsfgdgd', 'gfhfgh@gmail.com', '$2a$10$TQf5O.yjaiOGSPGebXTlbe/qRkhYYL9iukM3P/r3YB6', 'member', 'pending', 0, '2024-06-29 11:57:46', '2024-06-29 11:57:46'),
(17, 'avatar.png', 'mark jamandre', 'mark@gmail.com', '$2a$10$YMvPHZTMvM7YjLaNkF1Ez.eih3HkOg37WdXtpQNUyaq', 'member', 'active', 0, '2024-06-29 13:18:15', '2024-06-29 13:20:01'),
(25, 'avatar.png', 'fggfdfgdfg', 'fdgfdsdf@gmail.com', '$2a$10$V8a3IdsdfDGKC8pJ.oFGguQ.lMBGo5.Ju3I4y8mqTV3', 'member', 'pending', 0, '2024-06-29 13:48:59', '2024-06-29 13:48:59'),
(27, 'avatar.png', 'jkhk', 'fdgg@gmail.com', '$2a$10$3lKfO6K.FLvUI5MnKDyaR.F4umEFr5BP5KEUmJGAjPS', 'member', 'pending', 0, '2024-06-29 13:49:56', '2024-06-29 13:49:56'),
(28, 'avatar.png', 'kevin', 'kevin@gmail.com', '$2a$10$rVQqPd.XtRNv0f5J7UFW8eVMet8eUIIiyZW.9r2tbxRUBAFk0ZpOe', 'member', 'active', 0, '2024-06-29 14:06:01', '2024-06-29 14:07:05'),
(29, 'avatar.png', 'clifford', 'c.iyac@gmail.com', '$2a$10$r2LBs5/1FSkrP.dVttbzYOtY8av3Rs7hiA3wAz9fhX7C1hpOz5/O2', 'member', 'active', 0, '2024-07-02 14:52:01', '2024-07-02 14:52:31'),
(30, 'avatar.png', 'Mark Jamandre', 'm123@gmail.com', '$2a$10$jDVCx9942Br1EMNW4lIRxO0Uog.ChzQx4xu3soCR4LHpVsoV7v2Bq', 'member', 'active', 0, '2024-07-02 14:58:16', '2024-07-02 14:58:32'),
(31, 'avatar.png', 'admin', 'admin@gmail.com', '$2a$10$Uj3Wve/cgM2SR.UDNV6s6.7w2gs8AUne9SiN2LEJPD93O/y.vF/Ra', 'admin', 'active', 0, '2024-07-02 15:11:40', '2024-07-03 04:08:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dailydevotional`
--
ALTER TABLE `dailydevotional`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `otp`
--
ALTER TABLE `otp`
  ADD PRIMARY KEY (`otp_id`);

--
-- Indexes for table `sampleimage`
--
ALTER TABLE `sampleimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userID` (`userID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dailydevotional`
--
ALTER TABLE `dailydevotional`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `otp`
--
ALTER TABLE `otp`
  MODIFY `otp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sampleimage`
--
ALTER TABLE `sampleimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `UserEventContraint` FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

--
-- Constraints for table `sampleimage`
--
ALTER TABLE `sampleimage`
  ADD CONSTRAINT `UserGalleryConstraint` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
