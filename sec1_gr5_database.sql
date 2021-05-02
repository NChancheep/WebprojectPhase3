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
  `pic` longtext DEFAULT NULL,
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
  `Food_Price` int(20) NOT NULL,
  `Food_Pic` longtext DEFAULT NULL
);
CREATE TABLE Dessert
(
  `Dessert_Name` longtext DEFAULT NULL,
  `Dessert_Price` int(20) NOT NULL,
  `Dessert_Pic` longtext DEFAULT NULL
);
CREATE TABLE Drink
(
  `Drink_Name` longtext DEFAULT NULL,
  `Drink_Price` int(20) NOT NULL,
  `Drink_Pic` longtext DEFAULT NULL
);

-- ---------------------------------------------------------------------------------------

--
-- Dumping data for table `Login_Information`
--

INSERT INTO Login_Information ( `username`, `password`, `firstname`, `lastname`, `address`, `age`, `preferences`, `email`,`pic`) VALUES
("apadij", "itcs212_1", "Jidapa", "Kraisangka", "MUICT", 30, "Not Spicy Food", "jidapa.kra@mahidol.ac.th", "https://muhr.mahidol.ac.th/muprofile/profile/1101401337454_20191015171509.jpg"),
("kculialip", "itcs381_1", "Pilailuck", "Panphattarasap", "MUICT", 35, "Not Spicy Food", "pilailuck.pan@mahidol.ac.th", "https://www.ict.mahidol.ac.th/th/wp-content/uploads/2020/02/Scratch_120263-004-1140x760.jpg"),
("trahcihduw", "itcs212_2", "Wudhichart", "Sawangphol", "MUICT", 40, "Not Spicy Food", "wudhichart.saw@mahidol.ac.th", "https://i1.rgstatic.net/ii/profile.image/301734258855939-1448950461921_Q512/Wudhichart-Sawangphol.jpg"),
("tisnoob", "itcs323_1", "Boonsit", "Yimwadsana", "MUICT", 45, "Not Spicy Food", "boonsit.yim@mahidol.ac.th", "https://media-exp1.licdn.com/dms/image/C5603AQFCZDi__QB-uA/profile-displayphoto-shrink_200_200/0/1558625020799?e=1622073600&v=beta&t=il4F4gto2sFK_AXs4KzWZb1rbfsGBrs3OzdYSIhoLxo"),
("naugnasdus", "itcs343_1", "Sudsanguan", "Ngamsuriyaroj", "MUICT", 50, "Not Spicy Food", "sudsanguan.nga@mahidol.ac.th", "https://www2.ict.mahidol.ac.th/research/publication/en/eResearchICT/ResearcherProfile/images/IT-R540017.jpg");


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

INSERT INTO Food (`Food_Name`, `Food_Price`,`Food_Pic`) VALUES
('Garden Vegetable Soup', 160, 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1074500_11-4325965.jpg?quality=90&resize=768,574'),
('Italian Style Clam And Mussel Soup', 260, 'https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl.jpg'),
('Prawn Bisque with Fresh Cream', 200, 'https://simply-delicious-food.com/wp-content/uploads/2020/10/Prawn-bisque-1.jpg'),
('Mushroom Cream Soup', 180, 'https://www.recipetineats.com/wp-content/uploads/2021/04/Mushroom-Soup-in-bowl.jpg'),
('French Onion Soup', 160, 'https://www.fifteenspatulas.com/wp-content/uploads/2011/10/French-Onion-Soup-Fifteen-Spatulas-12.jpg'),
('Sandwich in a Bowl', 250, 'https://cfcdn2.azsg.opensnap.com/azsg/snapphoto/photo/LB/GUDS/3BS1ZAE7F601128B4920EClv.jpg'),
('Grilled Vegetable Salad with Pesto Sauce', 180, 'https://www.jessicagavin.com/wp-content/uploads/2017/06/grilled-vegetable-salad-pin2.jpg'),
('Fresh Lasagna Salad',180, 'https://i.ytimg.com/vi/4SRJMSG-mmw/maxresdefault.jpg'),
('Fillet Steak Salad', 340, 'https://img.taste.com.au/1dmNH9cw/taste/2017/08/grilledscotchfilletsmokeyeggplant-129063-1.jpg'),
('Seared Scallop Salad',490, 'https://www.thespruceeats.com/thmb/5g0qFP4BH_qMfIuF2vd3SWr0Jgo=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/maine-sea-scallops-524090860-5821e6be5f9b581c0b15da25.jpg'),
('Soft-Shell Crab Salad', 360, 'https://umamigirl.com/wp-content/uploads/2021/04/Soft-Shell-Crab-Recipe-with-Salad-and-Spicy-Sauce-Umami-Girl-1200.jpg'),
('Fisherman Salad',380, 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18143140/fc87mc056-01-main.jpg'),
('Fresh Honeydew Melon and Parma Ham Salad', 260, 'https://i.pinimg.com/originals/ce/a8/3f/cea83f3955a544ecf960331e4bec66ae.jpg'),
('Grilled Pumpkin and Tofu Salad', 240, 'https://i.pinimg.com/originals/36/d6/19/36d619b6b634a80679544b29fabe5e87.jpg'),
('Caesar Salad with Country Style Dressing', 240, 'https://www.walksinsiderome.com/wp-content/uploads/2020/05/Julius-Caesar.jpg'),
('Calamari Fritti', 180, 'https://thedeliciousspoon.com/wp-content/uploads/2020/04/Calamari-Fritti-Blog-Post-4.jpg'),
('Homemade Paté with Cognac and Fresh Green Peppercorns',200, 'https://i.pinimg.com/474x/d1/9e/fa/d19efa15795c3c40c39191a7d962907c--chicken-liver-pate-chicken-livers.jpg'),
('Tartine Dip',280, 'https://www.italiankitchenconfessions.com/wp-content/uploads/2020/11/Italian-Prosciutto-Dip-an-easy-appetizer-tartine2jpg.jpg'),
('Oceanic Gang',450, 'https://fancy-kid.com/wp-content/uploads/2020/08/00.jpg'),
('Italian Bruchetta (Mushroom topping / Tomato topping)',160, 'https://www.healingtomato.com/wp-content/uploads/2015/10/bruschetta-with-mushrooms.jpg'),
('Baked Spinach with Cheese and Pork Sausage',280, 'https://www.browneyedbaker.com/wp-content/uploads/2012/12/sausage-spinach-bake-27-600.jpg'),
('Crispy Ravioli with Salsa',180, 'https://www.mysequinedlife.com/wp-content/uploads/2016/03/toasted-ravioli-3a.jpg'),
('French Fries with Aïoli Dip',110, 'https://0.s3.envato.com/files/128981692/p001-02.jpg'),
('Thai Steak with Spicy Thai Hot Sauce', 360, 'https://live.staticflickr.com/9/8778/27762580773_c2df78a646_b.jpg'),
('Salmon Sashimi in Spicy Hot Sauce',240, 'https://media-cdn.tripadvisor.com/media/photo-s/04/8d/25/34/salmon-sashimi-in-spicy.jpg'),
('Greyhound Famous Fried Chicken Wings',160, 'https://media-cdn.tripadvisor.com/media/photo-s/0c/7d/4b/18/the-famous-fried-chicken.jpg'),
('Street Style Grilled Lamb on Skewer',380, 'https://www.aheadofthyme.com/wp-content/uploads/2017/06/grilled-spicy-cumin-lamb-skewers-4.jpg'),
('Waterfall Mushroom and Tofu',180, 'http://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/homepage/kanchanaburi/attractions/erawan-waterfall/allParagraphs/BucketComponent/ListingContainer/02/image/erawan-falls-first-tier.jpg'),
('Pomelo Salad',240, 'http://www.vietworldkitchen.com/wp-content/uploads/2017/09/6a00d8341ef22f53ef01a73db3a849970d.jpg'),
('Yum Japanese Seaweed with Harusame Glass Noodle',230, 'https://img.wongnai.com/p/1920x0/2018/05/11/59807b2d487940ec916cae4bef458b76.jpg'),
('Fresh Vietnamese Spring Rolls',160, 'https://www.manilaspoon.com/wp-content/uploads/2019/09/Rice-Noodles-Yum-GoiCuonImage-1.jpg'),
('Fried Vietnamese Spring Rolls',180, 'https://www.kikkomanusa.com/images/homecooks/recipes/13765_Vietnamese-Fried-Spring-Rolls.jpg'),
('Yum Thai Steak Salad (Beef / Pork)',210, 'https://www.asianfoodtrail.com/wp-content/uploads/2014/04/wpid-20140409_135933-695x521@2x.jpg'),
('Fried Salmon Toro with Dip',240, 'https://www.japan-guide.com/g20/2044_03.jpg'),
('Som-Tum Salad with Black Crab and Japanese Soybeans',200, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Yam_wun_sen.JPG/261px-Yam_wun_sen.JPG'),
('Hot and Spicy Beef or Pork Balls with Crispy Celery',160, 'https://d104wv11b7o3gc.cloudfront.net/wp-content/uploads/2017/07/low-carb-meatballs-4.jpg'),
('Crispy Sweet Corn with Crab Meat',260, 'https://gbc-cdn-public-media.azureedge.net/img9732.768x512.jpg'),
('Ham and Cheese Grill',240, 'https://www.simplyrecipes.com/thmb/MwUusnar9EFTpxeItfUBJcdyFZE=/1600x1600/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__05__EYF-Italian-Grilled-Cheese-LEAD-3-0da976d0f4e643e7bcbe9243e0ac8310.jpg'),
('Pita Pizza Italian Sausage',280, 'http://ingredientsinc.files.wordpress.com/2009/03/img_1593.jpg'),
('Buffalo Burger',320, 'https://cdn.imgbin.com/21/16/24/imgbin-hamburger-cheeseburger-buffalo-burger-fried-chicken-vegetarian-cuisine-big-burger-pMnNLigQ9eJp5wPXdPF5Yq2Ki.jpg'),
('Super Elvis Burger',420, 'https://www.chicagotribune.com/resizer/hA0oC-ONycQfcErjMd8Da4BF7jk=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/EREZDCSRZJHVLL4T2VSWKXKUNQ.jpg'),
('Elvis Burger',280, 'https://www.chicagotribune.com/resizer/hA0oC-ONycQfcErjMd8Da4BF7jk=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/EREZDCSRZJHVLL4T2VSWKXKUNQ.jpg'),
('Crab Cannelloni',340, 'https://variety.teenee.com/foodforbrain/img2/89842.jpg'),
('Spaghetti Vongole',260, 'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_620,h_930/https://norecipes.com/wp-content/uploads/2014/02/recipespaghetti-alle-vongole.1024x1024.jpg'),
('Penne with Spicy Pesto Sauce',280, 'https://img.wongnai.com/p/1920x0/2018/09/05/c33201cf8ac84d3fa600785b06bc2a2b.jpg'),
('Fettuccini with Shrimp and Mushroom Cream Sauce',300, 'https://images.media-allrecipes.com/userphotos/4559949.jpg'),
('Fettuccini with Grilled Vegetables in Pesto Sauce',220, 'https://i.pinimg.com/originals/ef/83/00/ef8300836595073d0d358d90881f5e71.jpg'),
('Fermented Pork Rigatoni',240, 'https://img.wongnai.com/p/1920x0/2018/05/11/fe7b966d098d4117a2800d91fadc7aa7.jpg'),
('Fettuccini with Imported Seared Scallops, Asparagus in Light Pesto Cream Sauce',450, 'https://cdn.leitesculinaria.com/wp-content/uploads/fly-images/103370/fettuccine-with-scallops-recipe-1200x900-c.jpg.optimal.jpg'),
('Spaghetti Carbonara in Light Cream Sauce',280, 'https://juliasalbum.com/wp-content/uploads/2019/02/linguine-with-spinach-and-sun-dried-tomato-cream-sauce-5.jpg'),
('Spaghetti with Dried Salty Fish',250, 'https://i.pinimg.com/originals/a3/fa/eb/a3faeb897bb49a3d4d024d9290ae124d.jpg'),
('Spaghetti with Italian Pork Sausage',260, 'https://belleofthekitchen.com/wp-content/uploads/2019/09/one-pot-cheesy-italian-sausage-spaghetti-3.jpg'),
('Spaghetti with Crab Meat in Prawn Cream Sauce',300, 'https://z8e5v5j3.stackpathcdn.com/wp-content/uploads/2019/09/Greyhound-Cafe-Bangkok-Spaghetti-with-Crab-Meat-in-Prawn-Cream-Sauce-3.jpg'),
('Spicy Spaghetti Thai Style',260, 'https://previews.123rf.com/images/dourleak/dourleak1606/dourleak160600084/59059364-thai-style-stir-fried-spicy-spaghetti-stir-fried-spicy-spaghetti.jpg'),
('Spaghetti with Thai Anchovy',230, 'https://media-cdn.tripadvisor.com/media/photo-s/04/82/ba/bb/greyhound-cafe.jpg'),
('Spaghetti Olio with Bacon',280, 'https://img-global.cpcdn.com/recipes/82fd301a5016ca4a/1200x630cq70/photo.jpg'),
('Spaghetti with Corned Beef and Fresh Chili',280, 'http://greyhoundcafe.com.vn/wp-content/uploads/2019/11/6-01-1.jpg'),
('Complicated Noodle',220, 'https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_450,h_300/https://danielfooddiary.com/wp-content/uploads/2013/02/thaiexpress1.jpg'),
('Mee-Sua Noodle',170, 'https://ucarecdn.com/a5e969b3-fd83-47ba-a88d-5a171752c994/-/scale_crop/1280x1280/center/-/quality/normal/-/format/jpeg/red-wine-mee-sua.jpg'),
('Tokyo Soba180.-Noodle in Pork Stew',160, 'https://www.justonecookbook.com/wp-content/uploads/2020/01/Toshikoshi-Soba-0279-I-500x375.jpg'),
('Phad Thai with Fresh Shrimp',240, 'https://hot-thai-kitchen.com/wp-content/uploads/2019/09/pad-thai-blog.jpg'),
('Wok-Fried Rice Noodle with Chicken and Dried Squid',180, 'https://d1sag4ddilekf6.cloudfront.net/compressed/items/3-CYTEC22XJA2ZGT-CZCDAADDMA3GCX/photo/1fd83fc0a6e84637ab7e27440c7e68e4_1584300063624147852.jpg'),
('Noodle with Braised Beef (or pork) – Dry',180, 'https://media-cdn.tripadvisor.com/media/photo-s/17/5d/bb/46/dry-noodles-with-braised.jpg'),
('Noodle with Braised Beef (or pork) – Soup',180, 'https://www.chili-shop24.com/media/image/4b/6e/af/101745_01_600x600.jpg'),
('Miss Saigon',200, 'https://www.americantheatre.org/wp-content/uploads/miss-saigon2.jpg'),
('Fried Noodle with Sea Bass',240, 'https://img.hellofresh.com/f_auto,fl_lossy,h_640,q_auto,w_1200/hellofresh_s3/image/lemon-fennel-and-asparagus-tagliatelle-with-seabass-80027300.jpg'),
('Pork Salad Noodle',180, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2015%2F03%2F23%2Fvietnamese-style-pork-noodle-salad-ck.jpg'),
('Beer-Battered Fish and Chips',320, 'https://www.thecomfortofcooking.com/wp-content/uploads/2011/03/Beer-Battered-Fish-and-Chips.jpg'),
('Grilled Salmon Steak on Green Bed',360, 'https://www.jocooks.com/wp-content/uploads/2015/07/maple-soy-grilled-salmon-steaks-1-4.jpg'),
('Simple Grilled Sea Bass',450, 'https://foremangrillrecipes.com/wp-content/uploads/2019/03/featured-grilled-sea-bass.jpg'),
('Fried Rice with Dried Beef',200, 'https://highheelgourmet.files.wordpress.com/2015/05/thai-style-fried-sun-dried-beef-jerky-e28093-neau-dad-deaw-by-the-high-heel-gourmet-12.jpg'),
('Kao Nam Prik Pla Tu',240, 'https://live.staticflickr.com/3572/3454984729_9925994ab9_b.jpg'),
('Hainanese Chicken and Rice',200, 'https://www.seriouseats.com/recipes/images/2013/08/20130624-257009-chicken-rice-set-edit.jpg'),
('Fried Rice with Dried Salty Fish',220, 'https://jennybe11.files.wordpress.com/2013/05/2013-05-26-17-12-21.jpg'),
('Egg and Bacon Fried Rice',200, 'https://www.rachaelraymag.com/.image/t_share/MTUyNTgyNDMzOTc0MjY1Mzgy/bacon-egg-fried-rice-0218-103230721.jpg'),
('Fried Rice with Shrimp Paste',230, 'https://devour.asia/wp-content/uploads/2020/06/chili-shrimp-paste-fried-rice-500x500.jpg'),
('Fried Tons of Crab Meat with Rice',490, 'https://delightfulplate.com/wp-content/uploads/2020/10/Crab-Fried-Rice.jpg'),
('Chilli Paste Fried Rice with Shrimp',280, 'https://1.bp.blogspot.com/-nl9DUZmyJmI/VX6XaL1AENI/AAAAAAAAPVA/YgWhMaW77rk/s1600/DSC_0367.JPG'),
('Spicy Fried Salmon with Holy Basil on Rice',300, 'https://thumbs.dreamstime.com/b/rice-topped-spicy-fried-pork-basil-leaves-topping-fried-eggs-wooden-dish-pad-krapow-moo-traditional-thai-food-rice-160654708.jpg'),
('Grilled Pumpkin and Tofu Salad',240, 'https://img.wongnai.com/p/1920x0/2018/09/07/d7cd29d2d0864febb9128f923338bfd9.jpg'),
('Fresh Lasagna Salad',180, 'https://i.ytimg.com/vi/4SRJMSG-mmw/maxresdefault.jpg'),
('Grilled Vegetable Salad with Pesto Sauce',180, 'https://i.pinimg.com/originals/5a/0b/ac/5a0bac43ad8253f0600d7e357783f033.jpg'),
('Vegetarian Tokyo Soba',160, 'https://d3rdz6pl3b4fcj.cloudfront.net/wp-content/uploads/2018/03/soba-noodles.jpg'),
('Waterfall Mushroom and Tofu',180, 'https://www.mythaicooking.com/wp-content/uploads/2019/10/Nam_Tok_Hed.jpg'),
('Crispy Vegetarian Ravioli',160, 'https://i.pinimg.com/originals/5b/33/16/5b3316e3fc923877df9a972c874a8b2f.jpg'),
('Baked Spinach with Cheese',220, 'https://kcgcorporation.com/wp-content/uploads/2019/09/Spinach-with-Cheese.jpg'),
('Vegetarian Phad Thai',150, 'https://myplantbasedfamily.com/wp-content/uploads/2014/05/Veggie-Pad-Thai-7.jpg'),
('Vegetarian Mixed Mushroom Spaghetti',220, 'https://www.deliciouseveryday.com/wp-content/uploads/Vegan-Mushroom-Pasta-1-2.jpg'),
('Fettuccini with Grilled Vegetables in Pesto Sauce',220, 'https://reciperunner.com/wp-content/uploads/2019/06/Grilled-Chicken-Asparagus-Pesto-Pasta-Picture.jpg'),
('Spicy Spaghetti Vegetarian',200, 'https://eurodiet.com/uk/721309-product_page_small/vegetarian-spicy-spaghetti-bolognese.jpg');

INSERT INTO Drink (`Drink_Name`, `Drink_Price`, `Drink_Pic`) VALUES
('Iced Lemon Tea',100, 'https://www.kimscravings.com/wp-content/uploads/2016/08/035r.jpg'),
('Iced Tea',100, 'https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18144831/fc52th054-01-main.jpg'),
('Iced Tea with Milk',100, 'https://www.pngkey.com/png/detail/280-2809555_flavor-of-thai-iced-tea-condensed-milk-tea.png'),
('Frosty Lemon Tea',100, 'https://www.tastesoflizzyt.com/wp-content/uploads/2015/06/Lemon-Ginger-Sweet-Tea-recipe-2.jpg'),
('Iced Latte',130, 'https://www.starbucks.co.th/stb-media/2020/09/121.Latte_Iced_Reserve_BlackEG1080.png'),
('Iced Americano',120, 'https://blog.cafecampesino.com/wp-content/uploads/Iced-Americano-700x525.jpg'),
('Iced Cappuccino',130, 'https://drinks.seriouseats.com/images/20120528-iced-capp-main.jpg'),
('Frosty Cappuccino',140, 'https://fastfoodnutrition.org/item-photos/full/8838_s.jpg'),
('Iced Cocoa',100, 'https://eu.peugeot-saveurs.com/wp/wp-content/uploads/2020/08/chocolat-frappemin-1024x0.jpg'),
('Frosty Choco',110, 'https://fastfoodnutrition.org/item-photos/full/562_s.jpg'),
('Espresso Frappe',140, 'https://assets.mystarbucks.com.au/imagecache/bestfit/620x634/_files/Beverages/processed-2013/espressofrapp.jpg'),
('Iced Mocha',140, 'http://homecoffeerecipes.com/wp-content/uploads/2013/06/iced-mocha-recipe.jpg'),
('Mocha Frappe',140, 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04041540/mocha.png'),
('Hot Milk',50, 'https://thumbs.dreamstime.com/b/best-afternoon-snack-milk-crackers-helps-you-to-be-full-well-hot-milk-biscuits-wooden-table-167580765.jpg'),
('Hot Cocoa',100, 'http://hostthetoast.com/wp-content/uploads/2019/12/Slow-Cooker-Hot-Chocolate-3.jpg'),
('Hot Lemonade',100, 'https://tastykitchen.com/wp-content/uploads/2013/04/Tasty-Kitchen-Blog-Matcha-Lemonade-00.jpg'),
('Americano',105, 'https://www.starbucks.co.th/stb-media/2020/08/8.Americano1080.png'),
('Decaf Americano',85, 'https://i1.wp.com/www.nearof.com/wp-content/uploads/2011/01/0103-decaf-coffee-01.jpg'),
('Café Latte',95, 'https://www.coffeefavour.com/wp-content/uploads/2016/05/cafe-latte-art_5166479.jpg'),
('Decaf Caffe Latte',95, 'https://www.coffeefavour.com/wp-content/uploads/2016/05/cafe-latte-art_5166479.jpg'),
('Cappuccino',120, 'https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-superJumbo.jpg'),
('Decaf Cappuccino',95, 'https://images-na.ssl-images-amazon.com/images/I/718jFYmZ9EL._AC_SX522_.jpg'),
('Macchiato',110, 'https://www.delonghi.com/Global/recipes/Coffee/caramel_macchiato.png'),
('Decaf-Macchiato',95, 'https://www.delonghi.com/Global/recipes/Coffee/caramel_macchiato.png'),
('Espresso-single',95, 'https://previews.123rf.com/images/wanessap/wanessap1808/wanessap180800079/106286929-a-single-shot-of-freshly-brew-aromatic-espresso-coffee-with-crema-in-a-clear-glass-cup-with-saucer-a.jpg'),
('Decaf Espresso-Single',85, 'https://images-na.ssl-images-amazon.com/images/I/61MwfHm01VL._SL1200_.jpg'),
('Espresso-Double',110, 'https://previews.123rf.com/images/king144/king1441702/king144170200208/72492639-classic-double-espresso-on-table.jpg'),
('Decaf Espresso-Double',100, 'https://www.doublebarrelroasters.com/wp-content/uploads/2017/11/Decaf-espresso-600x600.jpg'),
('Tea (Chamomile)',85, 'https://post.healthline.com/wp-content/uploads/2020/09/chamomile-tea-thumb-1-732x549.jpg'),
('Tea (Peppermint)',85, 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/325242_1100-1100x628.jpg'),
('Tea (Earl Grey)',85, 'https://f.ptcdn.info/618/057/000/p8tgsw63jTNjiKa5HXj-o.jpg'),
('Tea (Darjeeling)',85, 'https://images-na.ssl-images-amazon.com/images/I/61kPrnY928L._SL1000_.jpg'),
('Tea (English Breakfast)',85, 'https://aumento.officemate.co.th/media/catalog/product/O/F/OFM0040030_X6.jpg'),
('Japanese Green Tea',90, 'https://www.nippon.com/en/ncommon/contents/japan-data/85340/85340.jpg'),
('Japanese Green Tea with Roasted Rice',90, 'https://images-na.ssl-images-amazon.com/images/I/71uVBvv-NkL._SL1500_.jpg'),
('Lychee Shake',100, 'http://images.summitmedia-digital.com/yummyph/images/MangoLycheeSmoothie.jpg'),
('Banana Shake',100, 'https://www.foodbreeze.com/wp-content/uploads/2019/04/banana-shake-03.jpg'),
('Watermelon Shake',100, 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F1970%2F01%2Fwatermelon-smoothies_2499901_002_0_0-2000.jpg'),
('Strawberry Shake',120, 'https://i.pinimg.com/originals/cd/24/7a/cd247a23832ef327666eac5d8ababd37.jpg'),
('Fresh Orange Juice / Shake',120, 'https://gimmedelicious.com/wp-content/uploads/2016/04/Mango-Orange-Banana-Smoothie-14-of-14.jpg'),
('Pineapple Juice / Shake',100, 'https://i.ytimg.com/vi/MUEWloKqn30/maxresdefault.jpg'),
('Apple Juice / Shake',100, 'https://www.herbalife.co.th/content/dam/regional/apac/en_th/sites/herbalife-nutrition/recipes/healthy-living-recipe9-apple-aloha.jpg'),
('Lime Juice / Shake / Soda',100, 'https://i.ytimg.com/vi/3vSuBubEdWQ/maxresdefault.jpg'),
('Mixed Fruit Punch',100, 'http://1.bp.blogspot.com/-mWIMyqshKsQ/TV9ExsCm1dI/AAAAAAAAAHE/mPNeitxZyTg/s1600/DSC_0934.JPG'),
('Mixed Fruit Punch Shake',100, 'https://i.pinimg.com/originals/37/05/3b/37053ba57ec39fbca4539bd6e0a3fa29.jpg'),
('Coconut Shake',120, 'https://www.rivertenkitchen.com/wp-content/uploads/2018/07/Coconut-Lychee-Smoothie.jpg'),
('Chinese Plum & Sprite Float',130, 'https://img.wongnai.com/p/400x0/2012/03/20/ff808081360832c101362fe235e75b25.jpg'),
('Bubble Sour',130, 'https://leafly-public.imgix.net/strains/reviews/photos/sour-bubble__primary_4683.jpg'),
('Espresso Float',130, 'https://i.pinimg.com/originals/3e/e4/13/3ee4130915afbfd88ea9bc19f2585e13.jpg'),
('Citrus Soda Float',130, 'https://i0.wp.com/foodfolksandfun.net/wp-content/uploads/2015/03/Lemon-Cream-Pie-Float-Recipe-600x900.jpg'),
('Cherry Soda Float',130, 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2016/5/10/0/Original_Sam-Henderson-Boozy-Floats-cherry-rum-and-coke-float.jpg.rend.hgtvcom.1280.960.suffix/1462904499743.jpeg'),
('Thai Tea Granita',120, 'https://cfcdn2.azsg.opensnap.com/azsg/snapphoto/photo/LG/GYDI/3CKG4BD8A7B16A2DDDAAEAlv.jpg'),
('Yok Lor Granita',120, 'https://cfcdn2.azsg.opensnap.com/azsg/snapphoto/photo/LG/GYDI/3CKG4BD8A7B16A2DDDAAEAlv.jpg'),
('Nom Yen Granita',120, 'https://cfcdn2.azsg.opensnap.com/azsg/snapphoto/photo/LG/GYDI/3CKG4BD8A7B16A2DDDAAEAlv.jpg'),
('Pick You Up (Grape Fruit, Pineapple, Banana)',130, 'https://post.healthline.com/wp-content/uploads/2020/09/healthy-fruits-fb-1200x628.jpg'),
('Fruity Shaky Yoghurt',130, 'https://static8.orstatic.com/userphoto/photo/7/5UG/015KKF926DF2C57CDD33D7px.jpg'),
('Innocent Voyage (Orange, Grape Fruit, Pineapple)',130, 'https://img.wongnai.com/p/1920x0/2016/09/30/447427d7b16e4a59b555697de893d4e7.jpg'),
('Passion Fashion (Passion Fruit, Pineapple, Lime Juice, Mint Syrup)',130, 'https://simply-delicious-food.com/wp-content/uploads/2014/04/Fresh-pineapple-passionfruit-mojito2-500x375.jpg'),
('Pink Cooler (Watermelon, Orange, Pineapple)',130, 'https://media-cdn.tripadvisor.com/media/photo-s/1a/72/b0/1e/greyhound-cafe-siam-center.jpg'),
('Pink Journey (Strawberry, Apple Juice, Lime Juice)',130, 'https://cdn2.th.orstatic.com/userphoto/photo/1/W2/006C516E440339CC2BCCB7px.jpg'),
('Green Mellow ( Green Apple, Kiwi, Mint Syrup)',130, 'https://www.monin.com/emea/media/catalog/product/cache/e6f494f2f5e3f2ba2fbfe6bca235178d/g/r/green-apple-70cl-hd.png');

INSERT INTO Dessert (`Dessert_Name`, `Dessert_Price`, `Dessert_Pic`) VALUES
('Happy Toast',120, 'https://ih1.redbubble.net/image.1249228131.3356/flat,750x,075,f-pad,750x1000,f8f8f8.jpg'),
('Crepe Suzette',90, 'https://gbc-cdn-public-media.azureedge.net/img23294.768x512.jpg'),
('Crepe Suzette with ice cream',130, 'https://gbc-cdn-public-media.azureedge.net/img23294.768x512.jpg'),
('Crepe Mix Fruit (banana, blueberry, peach) with ice cream',130, 'https://lilluna.com/wp-content/uploads/2017/10/swedish-pancakes-resize-5.jpg'),
('Crepe Mix Fruit (banana, blueberry, peach)',90, 'https://lilluna.com/wp-content/uploads/2017/10/swedish-pancakes-resize-5.jpg'),
('Fresh Made Apple Crumble with ice-cream',180, 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/10/15/0/GL0813_Apple_Cobbler.jpg.rend.hgtvcom.616.462.suffix/1384956344816.jpeg'),
('Sea Salt Caramel Chocolate with Vanilla Cream',230, 'https://i.pinimg.com/474x/6c/2e/68/6c2e6802d453454b6115811e30a00e34.jpg'),
('Mixed Berries Crepe Cake',200, 'https://cdn1.th.orstatic.com/userphoto/photo/2/1WJ/00DJCK6077DC1BDBEA191Cpx.jpg'),
('Chocolate Banana Crepe ',130, 'https://3.bp.blogspot.com/-NUg6vRVn8nc/WvbSisUd8KI/AAAAAAAAhmw/GxOBZVO7pdgI52o2bFQSaE7kF-Q4Pk3AQCLcBGAs/w1200-h630-p-k-no-nu/Banana%2BChocolate%2BCrepe01.jpg'),
('Blueberry Cheesecake',140, 'http://www.gimmesomeoven.com/wp-content/uploads/2013/06/Lighter-Blueberry-Cheesecake-2.jpg'),
('Walnut Blondie (+ Ice Cream)',160, 'https://www.the-girl-who-ate-everything.com/wp-content/uploads/blogger/-qNAhjif43c4/TzNHaDHSlHI/AAAAAAAAIFY/2uuNVvt6h0I/s1600/maple-walnut-blondie-square.jpg'),
('Banoffee',160, 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/vimdb/238824.jpg'),
('Young Coconut Crepe Cake',200, 'https://prods3.imgix.net/images/articles/2017_04/Facebook-lemon-crepe-cake-recipe.jpg'),
('Sakoo Piek',120, 'https://live.staticflickr.com/3786/9131676655_c72b6f9961_b.jpg'),
('Tub Tim Krob Greyhound Style',120, 'https://img.wongnai.com/p/400x0/2018/05/11/ce3305ef39dc4a54bbca47151e8de4ea.jpg'),
('Chow Kuay',65, 'https://2.bp.blogspot.com/-wNZlqZRClA4/V00Tia95xJI/AAAAAAAAFqg/38U386c5ni8i-cVDM9QdBMaqMXyQFCz3wCLcB/s1600/Classifieds_Image952554231144.jpg'),
('Lod Chong Singapore',100, 'https://xinfully.files.wordpress.com/2011/10/img_8516-1.jpg'),
('Chum Cham size ',195, 'https://cdn1.foodviva.com/static-content/food-images/bengali-recipes/cham-cham/cham-cham.jpg'),
('Temple Fair size ',195, 'https://static.bangkokpost.com/media/content/dcx/2018/01/10/2610190.jpg'),
('Chocolate Lover size ',195, 'https://i.pinimg.com/474x/94/db/79/94db79d851efbcd1a54125c816aba787.jpg'),
('Mixed Berries size ',195, 'https://images.eatthismuch.com/site_media/img/152184_LMCKAY87_d6eb257d-9db2-4a52-8d96-c98fa7ce6092.png'),
('Banana Choc size ',195, 'https://images-gmi-pmc.edge-generalmills.com/612f9944-5947-4ccd-bb83-dddf198acab3.jpg'),
('Sticky Rice Mango size', 160, 'https://migrationology.smugmug.com/Thai-Recipes-2016/i-gfBLXmD/0/X3/mango-sticky-rice-43-X3.jpg');
