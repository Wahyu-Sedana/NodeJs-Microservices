CREATE TABLE `kategori_` (
  `_id_kategori` int NOT NULL,
  `_id_user` int NOT NULL,
  `_id_jenis` tinyint(1) NOT NULL DEFAULT '1',
  `_kategori` varchar(100) NOT NULL,
  `_status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `kategori_`
--

INSERT INTO `kategori_` (`_id_kategori`, `_id_user`, `_id_jenis`, `_kategori`, `_status`) VALUES
(1, 1, 1, 'Penjualan', 1),
(2, 1, 1, 'Sumbangan', 1),
(3, 2, 1, 'Sumbangan', 1),
(5, 1, 2, 'Retribusi', 1),
(14, 1, 2, 'Semesteran', 1);

-- --------------------------------------------------------

--
-- Table structure for table `transaksi_`
--

CREATE TABLE `transaksi_` (
  `_id_transaksi` int NOT NULL,
  `_id_kategori` int NOT NULL,
  `_jumlah` double NOT NULL,
  `_catatan` varchar(100) NOT NULL,
  `_tanggal` date NOT NULL,
  `_waktu_insert` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `transaksi_`
--

INSERT INTO `transaksi_` (`_id_transaksi`, `_id_kategori`, `_jumlah`, `_catatan`, `_tanggal`, `_waktu_insert`) VALUES
(2, 2, 3000, 'Bansos Pemerintah', '2023-05-18', '2023-05-18 00:17:19'),
(3, 5, 5000, 'Bayar Karcis', '2023-05-15', '2023-05-18 00:26:37'),
(5, 5, 5000, 'Bayar Karcis', '2023-07-21', '2023-07-21 11:50:29'),
(6, 5, 5000, 'Bayar Karcis', '2023-05-18', '2023-07-21 12:00:36');

-- --------------------------------------------------------

--
-- Table structure for table `user_`
--

CREATE TABLE `user_` (
  `_id_user` int NOT NULL,
  `_nama_usaha` varchar(100) NOT NULL,
  `_alamat` varchar(200) NOT NULL,
  `_email` varchar(100) NOT NULL,
  `_password` varchar(225) NOT NULL,
  `_tgl_register` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `user_`
--

INSERT INTO `user_` (`_id_user`, `_nama_usaha`, `_alamat`, `_email`, `_password`, `_tgl_register`) VALUES
(1, 'Toko Sembako', 'Jl. Hayam Wuruk', 'satya@bamboomedia.net', 'd8578edf8458ce06fbc5bb76a58c5ca4', '2023-05-15'),
(3, 'Go Go', 'JL. Akasia', 'adam@bamboomedia.net', 'd8578edf8458ce06fbc5bb76a58c5ca4', '2023-05-15'),
(4, 'Go Go Ca', 'JL. Akasia', 'adamd@bamboomedia.net', 'd8578edf8458ce06fbc5bb76a58c5ca4', '2023-05-15'),
(5, 'Toko Pedia', 'JL. Gadjah Mada', 'pediadotnet@yahoo.com', '043e613d2dfda31090facad39a0a7768', '2023-07-16'),
(11, 'Toko Ayuk', 'JL. Padang Kartika', 'ayukpw@yahoo.com', '6308969d88d2b21fd1962ca5027c1dd7', '2023-07-16'),
(13, 'Toko Ayuk Nie', 'JL. Padang Kartika', 'ayukcuyy@yahoo.com', '6308969d88d2b21fd1962ca5027c1dd7', '2023-07-16'),
(14, 'Toko Wahyu', 'JL. Padang Lestari', 'wahyu@yahoo.com', 'b286b3587c49cbad0a527d52496f69ea', '2023-07-16'),
(15, 'Toko RedBean', 'JL. LivingWorld', 'redbean@yahoo.com', '827ccb0eea8a706c4c34a16891f84e7b', '2023-07-16'),
(16, 'Toko RedBeanNiCok', 'JL. LivingWorldCuy', 'redbeannicuy@yahoo.com', '827ccb0eea8a706c4c34a16891f84e7b', '2023-07-16'),
(17, 'Toko', 'JL. Living', 'nicuy@yahoo.com', '827ccb0eea8a706c4c34a16891f84e7b', '2023-07-16'),
(18, 'Toko Bokep', 'JL. LivingCok', 'nicuyCok@yahoo.com', '25f9e794323b453885f5181f1b624d0b', '2023-07-16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori_`
--
ALTER TABLE `kategori_`
  ADD PRIMARY KEY (`_id_kategori`);

--
-- Indexes for table `transaksi_`
--
ALTER TABLE `transaksi_`
  ADD PRIMARY KEY (`_id_transaksi`);

--
-- Indexes for table `user_`
--
ALTER TABLE `user_`
  ADD PRIMARY KEY (`_id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori_`
--
ALTER TABLE `kategori_`
  MODIFY `_id_kategori` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `transaksi_`
--
ALTER TABLE `transaksi_`
  MODIFY `_id_transaksi` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user_`
--
ALTER TABLE `user_`
  MODIFY `_id_user` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;