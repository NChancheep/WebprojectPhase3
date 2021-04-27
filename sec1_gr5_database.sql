-- Section 1 group 21
-- Kittitad Jiraprasitchai 6288073
-- Arnon Noonkhan 6288090
-- Chancheep Mahacharoensuk 6288092
-- Kantapong Matangkarat 6288160

DROP DATABASE IF EXISTS `project1_phase2_group5`;
CREATE DATABASE IF NOT EXISTS `project1_phase2_group5`;
USE `project1_phase2_group5`;



CREATE TABLE Login_Information
(
  `login_id` int(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT 'user',
  `log` varchar(100) DEFAULT 'Access-granted',
  -- Add form User_infor 
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `age` int(2) DEFAULT NULL,
  `preferences` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (login_id)
);

CREATE TABLE Admin_Information
(
  `admin_id` int(6) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `role` varchar(20) DEFAULT NULL,
  `log` varchar(100) DEFAULT NULL,
  -- Add form User_infor 
  `firstname` varchar(20) DEFAULT NULL,
  `lastname` varchar(20) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `age` int(2) DEFAULT NULL,
  `preferences` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
);



--
-- Alter & drop for table `Admin_Information`
--

ALTER TABLE Admin_Information
  ADD PRIMARY KEY (`admin_id`);
  
-- ---------------------------------------------------------------------------------------

--
-- Business Domain Data
-- 
-- Table structure for table `Branch`
--

CREATE TABLE Branch 
(
  `Branch_id` int NOT NULL,
  `Contact_No` varchar(20) DEFAULT NULL,
  `Location` varchar(20) DEFAULT NULL,
  `Name` varchar(20) DEFAULT NULL
);

--
-- Alter & drop for table `Branch`
--

ALTER TABLE Branch
  ADD PRIMARY KEY (`Branch_id`);
  
--
-- Table structure for table `Order`
--  

CREATE TABLE Orders 
(
  `Order_id` int NOT NULL,
  `Tip` varchar(10) DEFAULT NULL,
  `Date` varchar(20) DEFAULT NULL,
  `Discount_Amount` int DEFAULT NULL,
  `Branch_id` int NOT NULL,
   CONSTRAINT FK_BranchID FOREIGN KEY (Branch_id) REFERENCES Branch(Branch_id)
);

--
-- Alter for table `Orders`
--

ALTER TABLE Orders
  ADD PRIMARY KEY (`Order_id`);
  
--
-- Table structure for table `Payment`
--

CREATE TABLE Payment 
(
  `Pay_id` int NOT NULL,
  `Date_and_time` datetime NOT NULL,
  `Operated_by` varchar(20) DEFAULT NULL,
  `Order_id` int NOT NULL,
   CONSTRAINT FK_orderID1 FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);

--
-- Alter & drop for table `Payment`
--

ALTER TABLE Payment
  ADD PRIMARY KEY (`Pay_id`);
  
--
-- Table structure for table `Customer`
--

CREATE TABLE Customer 
(
  `Cus_id` int NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Birthdate` datetime NOT NULL,
  `Phone` varchar(20) DEFAULT NULL
);

--
-- Alter for table `Customer`
--

ALTER TABLE Customer
  ADD PRIMARY KEY (`Cus_id`);
  
--
-- Table structure for table `Order_detail`
--

CREATE TABLE Order_detail 
(
  `Order_id`  int NOT NULL,
  `Item_number` varchar(200) DEFAULT NULL,
  `Price` int NOT NULL,
  `Amount` varchar(200) DEFAULT NULL,
  `Time` datetime NOT NULL,
  `Food_list` varchar(200) DEFAULT NULL,
   CONSTRAINT FK_orderID2 FOREIGN KEY (Order_id) REFERENCES Orders(Order_id)
);

--
-- Table structure for table `Credit_card`
--

CREATE TABLE Credit_card 
(
  `Pay_id` int NOT NULL,
  `Card_number` bigint NOT NULL,
  `CCV` int NOT NULL,
  `Expired_date` varchar(20) DEFAULT NULL,
   CONSTRAINT FK_payID1 FOREIGN KEY (Pay_id) REFERENCES Payment(Pay_id)
);

--
-- Table structure for table `Cash`
--

CREATE TABLE Cash 
(
  `Pay_id` int NOT NULL,
  `Cost` int NOT NULL,
  `Final_Cost` int NOT NULL,
  `Changes` int NOT NULL,
  `Currency` varchar(20) DEFAULT NULL,
  CONSTRAINT FK_payID2 FOREIGN KEY (Pay_id) REFERENCES Payment(Pay_id)
);

CREATE TABLE Food
(
  `Food_Name` longtext DEFAULT NULL,
  `Food_Price` int(20) NOT NULL
);
CREATE TABLE Dessert
(
  `Dessert_Name` longtext DEFAULT NULL,
  `Dessert_Price` int(20) NOT NULL
);
CREATE TABLE Drink
(
  `Drink_Name` longtext DEFAULT NULL,
  `Drink_Price` int(20) NOT NULL
);

-- ---------------------------------------------------------------------------------------

--
-- Dumping data for table `Login_Information`
--

INSERT INTO Login_Information ( `username`, `password`, `firstname`, `lastname`, `address`, `age`, `preferences`, `email`) VALUES
("apadij", "itcs212_1", "Jidapa", "Kraisangka", "MUICT", 30, "Not Spicy Food", "jidapa.kra@mahidol.ac.th"),
("kculialip", "itcs381_1", "Pilailuck", "Panphattarasap", "MUICT", 35, "Not Spicy Food", "pilailuck.pan@mahidol.ac.th"),
("trahcihduw", "itcs212_2", "Wudhichart", "Sawangphol", "MUICT", 40, "Not Spicy Food", "wudhichart.saw@mahidol.ac.th"),
("tisnoob", "itcs323_1", "Boonsit", "Yimwadsana", "MUICT", 45, "Not Spicy Food", "boonsit.yim@mahidol.ac.th"),
("naugnasdus", "itcs343_1", "Sudsanguan", "Ngamsuriyaroj", "MUICT", 50, "Not Spicy Food", "sudsanguan.nga@mahidol.ac.th");


--
-- Dumping data for table `User_Information`
--

-- INSERT INTO User_Information (`user_id`, `firstname`, `lastname`, `address`, `age`, `preferences`, `email`, `login_id`) VALUES
-- (00001, "Jidapa", "Kraisangka", "MUICT", 30, "Not Spicy Food", "jidapa.kra@mahidol.ac.th", 0001),
-- (00002, "Pilailuck", "Panphattarasap", "MUICT", 35, "Not Spicy Food", "pilailuck.pan@mahidol.ac.th", 0002),
-- (00003, "Wudhichart", "Sawangphol", "MUICT", 40, "Not Spicy Food", "wudhichart.saw@mahidol.ac.th", 0003),
-- (00004, "Boonsit", "Yimwadsana", "MUICT", 45, "Not Spicy Food", "boonsit.yim@mahidol.ac.th", 0004),
-- (00005, "Sudsanguan", "Ngamsuriyaroj", "MUICT", 50, "Not Spicy Food", "sudsanguan.nga@mahidol.ac.th", 0005);

--
-- Dumping data for table `Admin_Information`
--

INSERT INTO Admin_Information (`admin_id`, `username`, `password`, `role`, `log`, `firstname`, `lastname`, `address`, `age`, `preferences`, `email`) VALUES
(0001, "maxnacata", "6288073", "admin", "Access-granted", "Kittitad", "Jiraprasitchai", "MUICT", 20, "Beef Pepperoni Pizza", "kittitad.jir@student.mahidol.ac.th"),
(0002, "IMVISCaRaMel", "6288090", "admin", "Access-granted", "Arnon", "Noonkhan", "MUICT", 20, "Grilled Pork", "arnon.noo@student.mahidol.ac.th"),
(0003, "SxYuki", "6288092", "admin", "Access-granted", "Chancheep", "Mahacharoensuk", "MUICT", 20, "T bone Steak", "chancheep.mah@student.mahidol.ac.th"),
(0004, "JumpKM", "6288160", "admin", "Access-granted", "Kantapong", "Matangkarat", "MUICT", 20, "Lemon Soda", "kantapong.mat@student.mahidol.ac.th"),
(0005, "LeviAKM", "2512820", "admin", "Access-granted", "Levi", "Ackerman", "Paradise Island", 34, "Lemon and Vanilla Ice Cream", "levi.ack@survey.com");

--
-- Dumping data for table `Branch`
--

INSERT INTO Branch (`Branch_id`, `Contact_No`, `Location`, `Name`) VALUES
(01, '025-264-395', 'SiamCenter', 'Greyhound Cafe'),
(02, '023-364-064', 'ICONSIAM', 'Greyhound Cafe'),
(03, '028-112-108', 'Emquartier', 'Greyhound Cafe'),
(04, '021-382-895', 'Centralplaza Pinklao', 'Greyhound Cafe'),
(05, '024-172-624', 'The Crystal', 'Greyhound Cafe'),
(06, '022-555-062', 'The Circle', 'Greyhound Cafe'),
(07, '023-094-566', 'J Avenue', 'Greyhound Cafe'),
(08, '027-704-141', 'Mega Bangna', 'Greyhound Cafe'),
(09, '024-474-191', 'The Promenada', 'Greyhound Cafe'),
(10, '029-061-440', 'Phaholyothin (Ari)', 'Greyhound Cafe');


--
-- Dumping data for table `Order`
--

INSERT INTO Orders (`Order_id`, `Tip`, `Date`, `Discount_Amount`, `Branch_id`) VALUES
(001, null, '2020-06-02 17:03:07', null, 05),
(002, '0200', '2020-11-07 10:30:13', 500, 01),
(003, '0500', '2020-10-19 21:14:43', null, 05),
(004, '0100', '2020-11-24 20:50:36', null, 03),
(005, null, '2020-02-07 11:49:15', null, 02),
(006, null, '2020-11-22 10:00:33', 300, 05),
(007, '0050', '2020-10-06 14:26:43', null, 10),
(008, '0200', '2020-07-03 12:31:44', null, 01),
(009, '0100', '2020-06-14 11:26:16', 400, 06),
(010, '0300', '2020-07-13 18:56:33', 400, 02),
(011, '0100', '2020-05-11 15:55:55', 500, 06),
(012, '0050', '2020-11-04 19:24:33', null, 07),
(013, null, '2020-01-31 14:48:20', 300, 04),
(014, '0300', '2020-02-19 11:31:07', null, 03),
(015, '0550', '2020-07-07 17:07:54', 100, 08),
(016, null, '2020-03-21 10:32:17', null, 04),
(017, null, '2020-04-30 16:20:21', null, 02),
(018, null, '2020-10-11 13:14:15', 200, 01),
(019, '0750', '2020-01-02 12:07:37', null, 01),
(020, null, '2020-05-09 19:27:18', 200, 06),
(021, '0150', '2020-08-26 15:39:54', null, 07),
(022, null, '2020-06-28 21:18:09', 300, 02),
(023, '0500', '2020-09-26 17:51:12', 100, 05),
(024, '0150', '2020-02-27 11:19:31', null, 09),
(025, null, '2020-05-31 19:24:39', 500, 04),
(026, '0400', '2020-06-19 13:27:10', null, 01),
(027, '0200', '2020-07-05 18:05:19', null, 01),
(028, null, '2020-08-16 20:39:47', null, 08),
(029, '0400', '2020-09-19 11:37:15', null, 07),
(030, null, '2020-10-15 18:20:58', null, 03),
(031, '0100', '2020-02-05 14:21:35', null, 07),
(032, '0050', '2020-05-15 13:42:11', null, 02),
(033, null, '2020-03-26 18:31:45', null, 02),
(034, '0400', '2020-08-27 19:30:30', null, 01),
(035, null, '2020-03-16 10:47:52', null, 06),
(036, '0500', '2020-04-16 20:48:01', null, 10),
(037, '1000', '2020-01-30 21:11:12', null, 08),
(038, null, '2020-07-04 21:23:46', null, 05),
(039, null, '2020-09-02 14:17:26', null, 05),
(040, null, '2020-02-06 18:25:38', null, 07),
(041, '0200', '2020-11-02 16:42:59', null, 04),
(042, '0150', '2020-03-14 12:42:13', null, 01),
(043, '0100', '2020-10-29 11:32:41', null, 03),
(044, null, '2020-04-16 17:02:48', null, 06),
(045, '0150', '2020-11-14 11:21:09', null, 05),
(046, '0350', '2020-03-08 11:08:09', null, 08),
(047, null, '2020-05-31 19:54:12', null, 04),
(048, null, '2020-07-21 16:21:47', null, 09),
(049, '0300', '2020-05-09 12:13:14', null, 06),
(050, '0500', '2020-03-29 15:47:56', null, 09),
(051, '0050', '2020-08-04 20:45:31', null, 10),
(052, null, '2020-02-28 17:59:45', null, 01),
(053, '0450', '2020-03-02 13:58:16', null, 03),
(054, null, '2020-06-08 11:43:52', null, 05),
(055, '0100', '2020-07-19 14:27:51', null, 01),
(056, null, '2020-08-16 11:40:42', null, 02),
(057, '0200', '2020-03-30 13:17:18', null, 09),
(058, null, '2020-09-20 18:58:12', null, 10),
(059, null, '2020-10-14 11:14:54', null, 04),
(060, '0300', '2020-04-13 16:45:46', null, 10);

--
-- Dumping data for table `Payment`
--

INSERT INTO Payment (`Pay_id`, `Date_and_time`, `Operated_by`, `Order_id`) VALUES
(0001, '2020-06-02 17:33:07', 'Siripen', 001),
(0002, '2020-11-07 11:00:13', 'Jin', 002),
(0003, '2020-10-19 21:44:43', 'Suga', 003),
(0004, '2020-11-24 21:20:36', 'J-Hope', 004),
(0005, '2020-02-07 12:19:15', 'Rap Monster', 005),
(0006, '2020-11-22 10:30:33', 'Jimin', 006),
(0007, '2020-10-06 14:56:43', 'V', 007),
(0008, '2020-07-03 13:01:44', 'Jungkook', 008),
(0009, '2020-06-14 11:56:16', 'Eunwoo', 009),
(0010, '2020-07-13 19:26:33', 'Baekhyun', 010),
(0011, '2020-05-11 16:25:55', 'Chanyeol', 011),
(0012, '2020-11-04 19:54:33', 'Kai', 012),
(0013, '2020-01-31 15:18:20', 'Sehun', 013),
(0014, '2020-02-19 12:01:07', 'Nichkhun', 014),
(0015, '2020-07-07 17:37:54', 'BamBam', 015),
(0016, '2020-03-21 11:02:17', 'Ten', 016),
(0017, '2020-04-30 16:50:21', 'Sorn', 017),
(0018, '2020-10-11 13:44:15', 'Minnie', 018),
(0019, '2020-01-02 12:37:37', 'Lisa', 019),
(0020, '2020-05-09 19:57:18', 'Jisoo', 020),
(0021, '2020-08-26 16:09:54', 'Rose', 021),
(0022, '2020-06-28 21:48:09', 'Jennie', 022),
(0023, '2020-09-26 18:21:12', 'Tzuyu', 023),
(0024, '2020-02-27 11:49:31', 'Nayeon', 024),
(0025, '2020-05-31 19:54:39', 'Irene', 025),
(0026, '2020-06-19 13:57:10', 'IU', 026),
(0027, '2020-07-05 18:35:19', 'Taeyeon', 027),
(0028, '2020-08-16 21:09:47', 'YoonA', 028),
(0029, '2020-09-19 12:07:15', 'Hwasa', 029),
(0030, '2020-10-15 18:50:58', 'Soyeon', 030),
(0031, '2020-02-05 14:51:35', 'BangChan', 031),
(0032, '2020-05-15 14:12:11', 'Hyunjin', 032),
(0033, '2020-03-26 19:01:45', 'Felix', 033),
(0034, '2020-08-27 20:00:30', 'Mingyu', 034),
(0035, '2020-03-16 11:17:52', 'DK', 035),
(0036, '2020-04-16 21:18:01', 'The8', 036),
(0037, '2020-01-30 21:41:12', 'Minho', 037),
(0038, '2020-07-04 21:53:46', 'Taemin', 038),
(0039, '2020-09-02 14:47:26', 'Leeteuk', 039),
(0040, '2020-02-06 18:55:38', 'Heechul', 040),
(0041, '2020-11-02 17:12:59', 'Siwon', 041),
(0042, '2020-03-14 13:12:13', 'Kyuhyun', 042),
(0043, '2020-10-29 12:02:41', 'Henry', 043),
(0044, '2020-04-16 17:32:48', 'G-Dragon', 044),
(0045, '2020-11-14 11:51:09', 'Taeyang', 045),
(0046, '2020-03-08 11:38:09', 'Tiffany', 046),
(0047, '2020-05-31 20:24:12', 'Yuri', 047),
(0048, '2020-07-21 16:51:47', 'Seohyun', 048),
(0049, '2020-05-09 12:43:14', 'ParkBom', 049),
(0050, '2020-03-29 16:17:56', 'Dara', 050),
(0051, '2020-08-04 20:15:31', 'CL', 051),
(0052, '2020-02-28 18:29:45', 'Jiyeon', 052),
(0053, '2020-03-02 14:28:16', 'Yubin', 053),
(0054, '2020-06-08 12:13:52', 'Yeeun', 054),
(0055, '2020-07-19 14:57:51', 'Sunmi', 055),
(0056, '2020-08-16 12:10:42', 'HyunA', 056),
(0057, '2020-03-30 13:47:18', 'ChungHa', 057),
(0058, '2020-09-20 19:28:12', 'Suzy', 058),
(0059, '2020-10-14 11:44:54', 'Hyolyn', 059),
(0060, '2020-04-13 17:15:46', 'Soyou', 060);

--
-- Dumping data for table `Customer`
--

INSERT INTO Customer (`Cus_id`, `Name`, `Birthdate`, `Phone`) VALUES
(6288024, 'Komsan', '2001-04-27', '0655540138'),
(6288035, 'Veerakit', '2000-06-10', '0855519009'),
(6288037, 'Natanon', '2000-09-13', '0855581072'),
(6288058, 'Picha', '2000-06-16', '0655562237'),
(6288060, 'Anyamanee', '2000-08-17', '0955553361'),
(6288071, 'Kasidis', '2001-03-30', '0855521494'),
(6288073, 'Kittitad', '2000-10-21', '0655542696'),
(6288090, 'Arnon', '2001-02-19', '0655584767'),
(6288092, 'Chancheep', '2000-12-29', '0655542961'),
(6288093, 'Thanakrit', '2000-10-16', '0955587232'),
(6288106, 'Ray', '2001-03-20', '0855529427'),
(6288118, 'Paphon', '2000-08-29', '0955586012'),
(6288127, 'Pattadon', '2001-01-02', '0955524914'),
(6288144, 'Pasakorn', '2000-10-09', '0655569350'),
(6288160, 'Kantapong', '2000-11-20', '0955549423'),
(6288002, 'Cherdrush', '2000-09-28', '0855510582'),
(6288034, 'Pranungfun', '2000-12-27', '0855568900'),
(6288059, 'Detbodi', '2000-08-02', '0655563168'),
(6288064, 'Kanpitcha', '2001-03-09', '0855586752'),
(6288079, 'Cholravee', '2000-08-02', '0655576298'),
(6288084, 'Jane', '2001-04-08', '0955510897'),
(6288089, 'Intr-Orn', '2001-04-26', '0855549394'),
(6288108, 'Nattaprapa', '2000-10-06', '0955513038'),
(6288126, 'Tasha', '2000-07-09', '0955552525'),
(6288128, 'Donlawat', '1996-08-04', '0855571129'),
(6288130, 'Akkarapong', '2001-01-30', '0955577156'),
(6288137, 'Chayaphol', '2000-08-20', '0855522196'),
(6288193, 'Araya', '2001-02-18', '0655569610'),
(6288010, 'Nakamon', '2001-03-26', '0655546992'),
(6288134, 'Rathakit', '2000-10-15', '0855547457'),
(4288001, 'Naruto', '1984-10-10', '0655534223'),
(4288002, 'Sasuke', '1984-07-23', '0855576747'),
(4288003, 'Sakura', '1984-03-28', '0955516054'),
(4288004, 'Shikamaru', '1984-09-22', '0955518786'),
(4288005, 'Choji', '1984-05-01', '0955563834'),
(4288006, 'Ino', '1984-09-23', '0855593121'),
(4288007, 'Kiba', '1984-07-07', '0655543519'),
(4288008, 'Shino', '1984-01-23', '0855521953'),
(4288009, 'Hinata', '1984-12-27', '0655550287'),
(4288010, 'Neji', '1983-07-03', '0955575837'),
(4288011, 'Lee', '1983-09-27', '0655575877'),
(4288012, 'Tenten', '1983-03-09', '0655504109'),
(4288013, 'Gaara', '1984-01-19', '0955502787'),
(4288014, 'Kankuro', '1982-05-15', '0655556033'),
(4288015, 'Temari', '1981-08-23', '0655528451'),
(4288016, 'Kakashi', '1970-09-15', '0855514981'),
(4288017, 'Asuma', '1970-10-18', '0955552297'),
(4288018, 'Kurenai', '1970-06-11', '0955520620'),
(4288019, 'MightGuy', '1970-01-01', '0655551648'),
(4288020, 'Hashirama', '1892-10-23', '0855526789'),
(4288021, 'Tobirama', '1911-02-19', '0955505569'),
(4288022, 'Hiruzen', '1926-02-08', '0955584195'),
(4288023, 'Minato', '1960-01-25', '0855578606'),
(4288024, 'Tsunade', '1946-08-02', '0955552289'),
(4288025, 'Jiraiya', '1946-11-11', '0855521461'),
(4288026, 'Orochimaru', '1946-10-27', '0655511245'),
(4288027, 'Itachi', '1979-06-09', '0955524545'),
(4288028, 'Obito', '1970-02-10', '0955500504'),
(4288029, 'Madara', '1892-12-24', '0955546634'),
(4288030, 'Shisui', '1976-09-18', '0655510564');

--
-- Dumping data for table `Order_detail`
--

INSERT INTO Order_detail (`Order_id`, `Item_number`, `Price`,`Amount`,`Time`,`Food_list`) VALUES
(001, 'F2-04 F3-01 F4-08 F7-05, D1-01 D1-09 D3-03, K3-04 K5-05', 1920, '1 1 1 1, 2 1 1, 1 1', '2020-06-02 17:03:07', 'OceaGang HamCheeGril SpagiCarbo EggBaconRice, IceLemTea IceCoco WamelShak, BerCrepCake BanaChoc'),
(002, 'F1-09 F1-11, D3-08', 800, '1 1, 2, null', '2020-11-07 10:30:13', 'StekSala CrabSala, LimeSoda'),
(003, 'F1-06 F4-12, D3-09, K1-01', 1190, '1 2, 3, 1', '2020-10-19 21:14:43', 'SanwiBow SpagiThaiBeef, MixFruPunc, HapToast'),
(004, 'F5-01 D5-03', 680, '2, 2, null', '2020-11-24 20:50:36', 'CompNood, NomYenGran'),
(005, 'F7-01 F7-03, D1-12', 680, '1 1, 2, null', '2020-02-07 11:49:15', 'RiceDryBeef HainanChicRice, IceMoch'),
(006, 'F6-02, D1-01 D1-02, K2-01', 1010, '2, 1 1, 1', '2020-11-22 10:00:33', 'SalmStek, IceLemTea IceTea, CrepSuzet'),
(007, 'F2-23 F8-02, D6-02 D6-04, K4-01', 1640, '2 2, 2 2, 2', '2020-10-06 14:26:43', 'MiniPorkRibs FeshLasaSala, FrutShakYogh PassFash, Sakoo'),
(008, 'F6-03, D3-06', 550, '1, 1, null', '2020-07-03 12:31:44', 'SimpGrilSeaBass, PineAppJuce'),
(009, 'F7-07, D4-05, K3-03', 1960, '3, 2, 1', '2020-06-14 11:26:16', 'TonsCrabMeatRice, CherSodaFlot, SaltCaraChocVaniCake'),
(010, 'F7-02 F7-09, K4-03', 605, '1 1, null, 1', '2020-07-13 18:56:33', 'KaoPlaTu FriSalmBasilRice, ChowKuay'),
(011, 'F1-01 F1-05, D2-02 D2-03, K5-01', 770, '3 1, 2 1, 1', '2020-05-11 15:55:55', 'GardVegeSoup FenchOnionSoup, HotCoco HotLem, ChumCham'),
(012, 'F4-06, K5-03', 780, '2, null, 2', '2020-11-04 19:24:33', 'FermPorkRigto, ChocLover'),
(013, 'F2-14 F3-04, D1-09 D2-17', 945, '1 1, 2 1, null', '2020-01-31 14:48:20', 'PomelSala SupElvBurg, IceCoco PepMintTea'),
(014, 'F3-02 F3-04, D1-01', 900, '1 1, 2, null', '2020-02-19 11:31:07', 'PitaPizzItalSaus SupElvBurg, IceLemTea'),
(015, 'F3-03 F4-02, D1-01', 780, '2 1, 2, null', '2020-07-07 17:07:54', 'BuffBurg SpagiVongo, IceLemTea'),
(016, 'D1-10, K3-05 K3-07', 500, 'null, 2, 1 1', '2020-03-21 10:32:17', 'FrostChoc, ChocBanaCrepCake WanutBlon'),
(017, 'F1-09 F1-12, D1-13 D2-21, K1-01 K2-01', 1470, '1 1, 2 1, 1 2', '2020-04-30 16:20:21', 'FillStekSala FishmanSala, MochFrap JapGrenTea, HapToast CrepSuzetIceCream'),
(018, 'F2-20, D1-01', 300, '1, 1, null', '2020-10-11 13:14:15', 'SomTumSalaBlackCrabJapSoyb, IceLemTea'),
(019, 'F3-04 F3-02, D1-01, K1-01 K3-01', 2570, '4 1, 4, 1 1', '2020-01-02 12:07:37', 'SupElvBurg PitaPizzItalSaus, IceLemTea, HapToast CrepMixFrut'),
(020, 'F5-03 F5-05, D1-01, K5-02', 950, '2 1, 2, 1', '2020-05-09 19:27:18', 'TokyoSoba PhadThaiFeshShrim, IceLemTea, TempFair'),
(021, 'F2-06, D1-06', 400, '1, 1, null', '2020-08-26 15:39:54', 'BakeSpinCheePorkSaus, IceAmericano'),
(022, 'F2-03 F3-01, D1-05, K1-01', 1180, '2 1, 2, 1', '2020-06-28 21:18:09', 'TartDip HamCheeGril, IceLatte, HapToast'),
(023, 'F4-04, K4-04', 700, '2, null, 1', '2020-09-26 17:51:12', 'FetuShrimMushCreamSauce, LodChongSGP'),
(024, 'F2-04 F2-07, D1-03 D1-09', 830, '1 1, 1 1, null', '2020-02-27 11:19:31', 'OceaGang CrispRaviSalsa ,IceTeaMilk IceCoco'),
(025, 'K3-03', 690, 'null, null, 3', '2020-05-31 19:24:39', 'SaltCaraChocVaniCake'),
(026, 'F1-04 F2-01, D1-02, K1-01', 680, '1 1, 2, 1', '2020-06-19 13:27:10', 'MushroomCreamSoup CalaFrit, IceTea, HapToast'),
(027, 'F3-04 F4-01, D1-01 D1-02', 1380, '2 1, 1 1, null', '2020-07-05 18:05:19', 'SupElvBurg CrabCanel, IceLemTea IceTea'),
(028, 'F2-16, D1-08', 600, '2, 2, null', '2020-08-16 20:39:47', 'FeshVietSpringRoll, FrostCapu'),
(029, 'F2-08, K2-03', 240, '1, null, 1', '2020-09-19 11:37:15', 'FrenFriAioliDip, CrepMixFrutIceCream'),
(030, 'D4-02 D6-03, K3-09 K5-05', 610, 'null, 1 1, 1 1', '2020-10-15 18:20:58', 'BubSour InnoVoyag, YoungCoconutCrepCake BanaChoc'),
(031, 'F1-12 F2-09, D3-10', 1140, '2 1, 2, null', '2020-02-05 14:21:35', 'FishmanSala ThaiStekSpicyThaiHotSauce, MixFrutPuncShake'),
(032, 'F2-12, D1-04, K2-03', 610, '1, 1, 1', '2020-05-15 13:42:11', 'SteetStylGrilLambSkew, FrostLemTea, CrepMixFrutIceCream'),
(033, 'F3-03 F4-14, K3-07', 1400, '1 3, null, 2', '2020-03-26 18:31:45', 'BuffBurg SpagiOlioBacon, WalnutBlon'),
(034, 'F5-13, D6-01 D6-02, K4-03', 750, '2, 1 1, 2', '2020-08-27 19:30:30', 'PorkSalaNood, PickYouUp FrutShakYogh, ChowKuay'),
(035, 'F1-14, D2-02, K1-01', 680, '1, 2, 2', '2020-03-16 10:47:52', 'GrilPumpTofuSala, HotCoco, HapToast'),
(036, 'F4-13, D1-09', 1090, '3, 4, null', '2020-04-16 20:48:01', 'SpagiThaiAncho, IceCoco'),
(037, 'F3-05, D2-18', 535, '1, 3, null', '2020-01-30 21:11:12', 'ElvBurg, EarlGreyTea'),
(038, 'F4-15, K3-08', 720, '2, null, 1', '2020-07-04 21:23:46', 'SpagiCornBeefFeshChil, Banoffee'),
(039, 'F1-04 F1-08, D1-05 D1-11, K3-05', 950, '1 1, 1 1, 2', '2020-09-02 14:17:26', 'MushroomCreamSoup FeshLasagSala, IceLatte EspesFrap, ChocBanaCrepCake'),
(040, 'F7-05, D2-16 D2-17, K2-01 K2-02', 790, '2, 1 1, 1 1', '2020-02-06 18:25:38', 'EggBaconRice, ChamoTea PepMintTea, CrepSuzet CrepeSuzetIceCream'),
(041, 'F3-04 F3-02, D5-02 D5-01', 1900, '3 1, 2 1, null', '2020-11-02 16:42:59', 'SupElvBurg PitaPizzItalSaus, YokLorGran ThaiTeaGran'),
(042, 'F5-09, D2-22, K4-04', 580, '1, 2, 2', '2020-03-14 12:42:13', 'MissSaigon, JapGreenTeaRoastRice, LodChongSGP'),
(043, 'F2-11 F2-14, D3-01, K5-05', 1250, '2 2, 3, 1', '2020-10-29 11:32:41', 'GreyhoundFamoFriChicWing PomelSala, LycheShake, BanaChoc'),
(044, 'F1-03, K3-02', 760, '2, null, 2', '2020-04-16 17:02:48', 'PrawBisqFeshCream, FeshMadeAppleCrumbIceCream'),
(045, 'F4-07 F2-02', 650, '1 1, null, null', '2020-11-14 11:21:09', 'FetuSearScalAspaLightPestoCreamSauce HomePateCognFeshGreenPepp'),
(046, 'F1-14, D1-01', 640, '1, 4, null', '2020-03-08 11:08:09', 'GrilPumpTofuSala, IceLemTea'),
(047, 'D1-05 D1-06 D1-07', 380, 'null, 1 1 1, null', '2020-05-31 19:54:12', 'IceLatte IceAmericano IceCapu'),
(048, 'F4-06, K5-06', 1040, '3, null, 2', '2020-07-21 16:21:47', 'FermPorkRigtoni, StikRiceMango'),
(049, 'F6-02 F5-01, D2-01 D2-02, K3-01', 1180, '2 1, 1 1, 1', '2020-05-09 12:13:14', 'GrilSalmStekGreenBed CompNood, HotMilk HotCoco, CrepMixFrut'),
(050, 'F4-05, D2-01, K3-06', 820, '2, 2, 2', '2020-03-29 15:47:56', 'FetuGrilVegePestoSauce, HotMilk, BlueberryCheeCake'),
(051, 'D1-11, K2-02', 540, 'null, 2, 2', '2020-08-04 20:45:31', 'EspesFrap, CrepSuzetIceCream'),
(052, 'F5-07 F5-08, D2-11, K3-07', 575, '1 1, 1, 1', '2020-02-28 17:59:45', 'NoodBraiBeefDry NoodBraiBeefSoup, DecafMacchiato, WalnutBlon'),
(053, 'D1-13, K3-04', 340, 'null, 1, 1', '2020-03-02 13:58:16', 'MochFrap, MixBerryCrepCake'),
(054, 'F2-14, D2-11 D2-05, K2-03', 790, '2, 1 1, 1', '2020-06-08 11:43:52', 'PomelSala, DecafMacchiato DecafAmericano, CrepMixFrut'),
(055, 'F4-02, D2-07', 875, '3, 1, null', '2020-07-19 14:27:51', 'SpagiVongo, DecafCafeLatte'),
(056, 'F6-02 F4-01, K1-01', 940, '1 1, null, 2', '2020-08-16 11:40:42', 'GrilSalmStekGreenBed CrabCann, HapToast'),
(057, 'F3-05, D2-18', 645, '2, 1, null', '2020-03-30 13:17:18', 'ElvBurg, EarlGreyTea'),
(058, 'F5-11, D1-10 D2-20 D2-05', 1350, '4, 2 1 1, null', '2020-09-20 18:58:12', 'FriNoodSeaBass, FrostChoc EngBreakfastTea DecafAmericano'),
(059, 'F6-03, K3-07', 1020, '2, null, 1', '2020-10-14 11:14:54', 'SimpGrilSeaBass, WalnutBlon'),
(060, 'F4-07, D1-02', 550, '1, 1, null', '2020-04-13 16:45:46', 'FetuSearScalAspaLightPestoCreamSauce, IceTea');

--
-- Dumping data for table `Credit_card`
--

INSERT INTO Credit_card (`Pay_id`, `Card_number`, `CCV`, `Expired_date`) VALUES
(0031, 4555966302537280, 993, '07/22'),
(0032, 4093039207021815, 931, '09/21'),
(0033, 4222433544255489, 586, '10/24'),
(0034, 4222439463224588, 364, '08/25'),
(0035, 4075242825357171, 909, '08/22'),
(0036, 4157657923306518, 645, '05/24'),
(0037, 4283731924323736, 693, '02/26'),
(0038, 4157659712318993, 138, '11/26'),
(0039, 4543254247021495, 795, '11/23'),
(0040, 4555964476651664, 134, '09/23'),
(0041, 4543251712284855, 825, '10/24'),
(0042, 4075242755073459, 735, '09/26'),
(0043, 4157659279148270, 816, '12/23'),
(0044, 4157656955034949, 818, '04/23'),
(0045, 4386798763294035, 239, '04/24'),
(0046, 4555961564479388, 673, '11/25'),
(0047, 4222433367839229, 555, '01/22'),
(0048, 4093038931286520, 385, '10/21'),
(0049, 4093031172264702, 864, '06/26'),
(0050, 4093036540079195, 408, '05/21'),
(0051, 4075247880933881, 307, '12/25'),
(0052, 4075246859575772, 173, '04/22'),
(0053, 4555961699928150, 681, '11/26'),
(0054, 4283738367349292, 581, '02/26'),
(0055, 4157659879091409, 690, '05/23'),
(0056, 4386799682774297, 524, '08/24'),
(0057, 4283739117492986, 451, '11/24'),
(0058, 4093033039170825, 463, '10/21'),
(0059, 4386795185623247, 353, '02/22'),
(0060, 4075249224996293, 779, '02/24');

--
-- Dumping data for table `Cash`
--

INSERT INTO Cash (`Pay_id`, `Cost`, `Final_Cost`, `Changes`, `Currency`) VALUES
(0001, 1920, 1920, 0, 'Baht'),
(0002, 800, 300, 500, 'Baht'),
(0003, 1190, 1190, 0, 'Baht'),
(0004, 680, 680, 0, 'Baht'),
(0005, 680, 680, 0, 'Baht'),
(0006, 1010, 710, 300, 'Baht'),
(0007, 1640, 1640, 0, 'Baht'),
(0008, 550, 550, 0, 'Baht'),
(0009, 1960, 960, 1000, 'Baht'),
(0010, 605, 205, 400, 'Baht'),
(0011, 770, 270, 500, 'Baht'),
(0012, 780, 780, 0, 'Baht'),
(0013, 945, 645, 300, 'Baht'),
(0014, 900, 900, 0, 'Baht'),
(0015, 780, 680, 100, 'Baht'),
(0016, 500, 500, 0, 'Baht'),
(0017, 1470, 1470, 0, 'Baht'),
(0018, 300, 100, 200, 'Baht'),
(0019, 2570, 2570, 0, 'Baht'),
(0020, 950, 750, 200, 'Baht'),
(0021, 400, 400, 0, 'Baht'),
(0022, 1180, 880, 300, 'Baht'),
(0023, 700, 600, 100, 'Baht'),
(0024, 830, 830, 0, 'Baht'),
(0025, 690, 190, 500, 'Baht'),
(0026, 680, 680, 0, 'Baht'),
(0027, 1380, 1380, 0, 'Baht'),
(0028, 600, 600, 0, 'Baht'),
(0029, 240, 240, 0, 'Baht'),
(0030, 610, 610, 0, 'Baht'),
(0031, 1140, 1140, 0, 'Baht'),
(0032, 610, 610, 0, 'Baht'),
(0033, 1400, 1400, 0, 'Baht'),
(0034, 750, 750, 0, 'Baht'),
(0035, 680, 680, 0, 'Baht'),
(0036, 1090, 1090, 0, 'Baht'),
(0037, 535, 535, 0, 'Baht'),
(0038, 720, 720, 0, 'Baht'),
(0039, 950, 950, 0, 'Baht'),
(0040, 790, 790, 0, 'Baht'),
(0041, 1900, 1900, 0, 'Baht'),
(0042, 580, 580, 0, 'Baht'),
(0043, 1250, 1250, 0, 'Baht'),
(0044, 760, 760, 0, 'Baht'),
(0045, 650, 650, 0, 'Baht'),
(0046, 640, 640, 0, 'Baht'),
(0047, 380, 380, 0, 'Baht'),
(0048, 1040, 1040, 0, 'Baht'),
(0049, 1180, 1180, 0, 'Baht'),
(0050, 820, 820, 0, 'Baht'),
(0051, 540, 540, 0, 'Baht'),
(0052, 575, 575, 0, 'Baht'),
(0053, 340, 340, 0, 'Baht'),
(0054, 790, 790, 0, 'Baht'),
(0055, 875, 875, 0, 'Baht'),
(0056, 940, 940, 0, 'Baht'),
(0057, 645, 645, 0, 'Baht'),
(0058, 1350, 1350, 0, 'Baht'),
(0059, 1020, 1020, 0, 'Baht'),
(0060, 550, 550, 0, 'Baht');

--
-- Dumping data for table `Onsite`
--

INSERT INTO Food (`Food_Name`, `Food_Price`) VALUES
('Garden Vegetable Soup', 160),
('Italian Style Clam And Mussel Soup', 260),
('Prawn Bisque with Fresh Cream', 200),
('Mushroom Cream Soup', 180),
('French Onion Soup', 160),
('Sandwich in a Bowl', 250),
('Grilled Vegetable Salad with Pesto Sauce', 180),
('Fresh Lasagna Salad',180),
('Fillet Steak Salad', 340),
('Seared Scallop Salad',490),
('Soft-Shell Crab Salad', 360),
('Fisherman Salad',380),
('Fresh Honeydew Melon and Parma Ham Salad', 260),
('Grilled Pumpkin and Tofu Salad', 240),
('Caesar Salad with Country Style Dressing', 240),
('Calamari Fritti', 180),
('Homemade Paté with Cognac and Fresh Green Peppercorns',200),
('Tartine Dip',280),
('Oceanic Gang',450),
('Italian Bruchetta (Mushroom topping / Tomato topping)',160),
('Baked Spinach with Cheese and Pork Sausage',280),
('Crispy Ravioli with Salsa',180),
('French Fries with Aïoli Dip',110),
('Thai Steak with Spicy Thai Hot Sauce', 360),
('Salmon Sashimi in Spicy Hot Sauce',240),
('Greyhound Famous Fried Chicken Wings',160),
('Street Style Grilled Lamb on Skewer',380),
('Waterfall Mushroom and Tofu',180),
('Pomelo Salad',240),
('Yum Japanese Seaweed with Harusame Glass Noodle',230),
('Fresh Vietnamese Spring Rolls',160),
('Fried Vietnamese Spring Rolls',180),
('Yum Thai Steak Salad (Beef / Pork)',210),
('Fried Salmon Toro with Dip',240),
('Som-Tum Salad with Black Crab and Japanese Soybeans',200),
('Hot and Spicy Beef or Pork Balls with Crispy Celery',160),
('Crispy Sweet Corn with Crab Meat',260),
('Ham and Cheese Grill',240),
('Pita Pizza Italian Sausage',280),
('Buffalo Burger',320),
('Super Elvis Burger',420),
('Elvis Burger',280),
('Crab Cannelloni',340),
('Spaghetti Vongole',260),
('Penne with Spicy Pesto Sauce',280),
('Fettuccini with Shrimp and Mushroom Cream Sauce',300),
('Fettuccini with Grilled Vegetables in Pesto Sauce',220),
('Fermented Pork Rigatoni',240),
('Fettuccini with Imported Seared Scallops, Asparagus in Light Pesto Cream Sauce',450),
('Spaghetti Carbonara in Light Cream Sauce',280),
('Spaghetti with Dried Salty Fish',250),
('Spaghetti with Italian Pork Sausage',260),
('Spaghetti with Crab Meat in Prawn Cream Sauce',300),
('Spicy Spaghetti Thai Style',260),
('Spaghetti with Thai Anchovy',230),
('Spaghetti Olio with Bacon',280),
('Spaghetti with Corned Beef and Fresh Chili',280),
('Complicated Noodle',220),
('Mee-Sua Noodle',170),
('Tokyo Soba180.-Noodle in Pork Stew',160),
('Phad Thai with Fresh Shrimp',240),
('Wok-Fried Rice Noodle with Chicken and Dried Squid',180),
('Noodle with Braised Beef (or pork) – Dry',180),
('Noodle with Braised Beef (or pork) – Soup',180),
('Miss Saigon',200),
('Fried Noodle with Sea Bass',240),
('Pork Salad Noodle',180),
('Beer-Battered Fish and Chips',320),
('Grilled Salmon Steak on Green Bed',360),
('Simple Grilled Sea Bass',450),
('Fried Rice with Dried Beef',200),
('Kao Nam Prik Pla Tu',240),
('Hainanese Chicken and Rice',200),
('Fried Rice with Dried Salty Fish',220),
('Egg and Bacon Fried Rice',200),
('Fried Rice with Shrimp Paste',230),
('Fried Tons of Crab Meat with Rice',490),
('Chilli Paste Fried Rice with Shrimp',280),
('Spicy Fried Salmon with Holy Basil on Rice',300),
('Grilled Pumpkin and Tofu Salad',240),
('Fresh Lasagna Salad',180),
('Grilled Vegetable Salad with Pesto Sauce',180),
('Vegetarian Tokyo Soba',160),
('Waterfall Mushroom and Tofu',180),
('Crispy Vegetarian Ravioli',160),
('Baked Spinach with Cheese',220),
('Vegetarian Phad Thai',150),
('Vegetarian Mixed Mushroom Spaghetti',220),
('Fettuccini with Grilled Vegetables in Pesto Sauce',220),
('Spicy Spaghetti Vegetarian',200);

INSERT INTO Drink (`Drink_Name`, `Drink_Price`) VALUES
('Iced Lemon Tea',100),
('Iced Tea',100),
('Iced Tea with Milk',100),
('Frosty Lemon Tea',100),
('Iced Latte',130),
('Iced Americano',120),
('Iced Cappuccino',130),
('Frosty Cappuccino',140),
('Iced Cocoa',100),
('Frosty Choco',110),
('Espresso Frappe',140),
('Iced Mocha',140),
('Mocha Frappe',140),
('Hot Milk',50),
('Hot Cocoa',100),
('Hot Lemonade',100),
('Americano',105),
('Decaf Americano',85),
('Café Latte',95),
('Decaf Caffe Latte',95),
('Cappuccino',120),
('Decaf Cappuccino',95),
('Macchiato',110),
('Decaf-Macchiato',95),
('Espresso-single',95),
('Decaf Espresso-Single',85),
('Espresso-Double',110),
('Decaf Espresso-Double',100),
('Tea (Chamomile)',85),
('Tea (Peppermint)',85),
('Tea (Earl Grey)',85),
('Tea (Darjeeling)',85),
('Tea (English Breakfast)',85),
('Japanese Green Tea',90),
('Japanese Green Tea with Roasted Rice',90),
('Lychee Shake',100),
('Banana Shake',100),
('Watermelon Shake',100),
('Strawberry Shake',120),
('Fresh Orange Juice / Shake',120),
('Pineapple Juice / Shake',100),
('Apple Juice / Shake',100),
('Lime Juice / Shake / Soda',100),
('Mixed Fruit Punch',100),
('Mixed Fruit Punch Shake',100),
('Coconut Shake',120),
('Chinese Plum & Sprite Float',130),
('Bubble Sour',130),
('Espresso Float',130),
('Citrus Soda Float',130),
('Cherry Soda Float',130),
('Thai Tea Granita',120),
('Yok Lor Granita',120),
('Nom Yen Granita',120),
('Pick You Up (Grape Fruit, Pineapple, Banana)',130),
('Fruity Shaky Yoghurt',130),
('Innocent Voyage (Orange, Grape Fruit, Pineapple)',130),
('Passion Fashion (Passion Fruit, Pineapple, Lime Juice, Mint Syrup)',130),
('Pink Cooler (Watermelon, Orange, Pineapple)',130),
('Pink Journey (Strawberry, Apple Juice, Lime Juice)',130),
('Green Mellow ( Green Apple, Kiwi, Mint Syrup)',130);

INSERT INTO Dessert (`Dessert_Name`, `Dessert_Price`) VALUES
('Happy Toast',120),
('Crepe Suzette',90),
('Crepe Suzette with ice cream',130),
('Crepe Mix Fruit (banana, blueberry, peach) with ice cream',130),
('Crepe Mix Fruit (banana, blueberry, peach)',90),
('Fresh Made Apple Crumble with ice-cream',180),
('Sea Salt Caramel Chocolate with Vanilla Cream',230),
('Mixed Berries Crepe Cake',200),
('Chocolate Banana Crepe ',130),
('Blueberry Cheesecake',140),
('Walnut Blondie (+ Ice Cream)',160),
('Banoffee',160),
('Young Coconut Crepe Cake',200),
('Sakoo Piek',120),
('Tub Tim Krob Greyhound Style',120),
('Chow Kuay',65),
('Lod Chong Singapore',100),
('Chum Cham size ',195),
('Temple Fair size ',195),
('Chocolate Lover size ',195),
('Mixed Berries size ',195),
('Banana Choc size ',195),
('Sticky Rice Mango size', 160);
