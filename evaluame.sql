-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: 0.0.0.0    Database: evaluame_development
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `evaluame_development`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `evaluame_development` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `evaluame_development`;

--
-- Table structure for table `choices`
--

DROP TABLE IF EXISTS `choices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `choices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `question_id` int(11) DEFAULT NULL,
  `statement` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `selected` tinyint(1) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_choices_on_question_id` (`question_id`),
  CONSTRAINT `fk_rails_182ad7dfd9` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `choices`
--

LOCK TABLES `choices` WRITE;
/*!40000 ALTER TABLE `choices` DISABLE KEYS */;
INSERT INTO `choices` VALUES (1,1,'Question 1 - Choice 1',NULL,'2015-11-08 17:08:50','2015-11-08 17:08:50'),(2,1,'Question 1 - Choice 2',1,'2015-11-08 17:08:50','2015-11-08 17:08:50'),(3,2,'Question 2 - Choice 3',NULL,'2015-11-08 17:08:50','2015-11-08 17:08:50'),(4,2,'Question 2 - Choice 4',1,'2015-11-08 17:08:51','2015-11-08 17:08:51'),(5,4,'Question 4 - Choice 5',1,'2015-11-08 17:08:51','2015-11-08 17:08:51'),(6,5,'adasdsads1112',0,'2015-11-14 23:05:03','2015-11-14 23:21:28'),(7,6,'fsdsdf2',0,'2015-11-15 16:01:40','2015-11-15 16:01:40'),(8,6,'asdds',0,'2015-11-15 16:01:40','2015-11-15 16:01:40'),(9,7,'asdsad11',0,'2015-11-15 16:19:16','2015-11-15 18:27:39'),(10,7,'de2',1,'2015-11-15 18:08:50','2015-11-15 18:27:39'),(11,7,'dddd3',0,'2015-11-15 18:44:02','2015-11-15 18:44:02'),(13,9,'asdasdasd111',0,'2015-12-02 03:14:51','2015-12-02 03:15:13');
/*!40000 ALTER TABLE `choices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `courses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Course 1','2015-11-08 17:08:46','2015-11-08 17:08:46'),(2,'Course 2','2015-11-08 17:08:46','2015-11-08 17:08:46');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exams`
--

DROP TABLE IF EXISTS `exams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exams` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_exams_on_course_id` (`course_id`),
  CONSTRAINT `fk_rails_66aea76c6a` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exams`
--

LOCK TABLES `exams` WRITE;
/*!40000 ALTER TABLE `exams` DISABLE KEYS */;
INSERT INTO `exams` VALUES (1,'Exam 1 - C1',1,'2015-11-08 17:08:48','2015-11-08 17:08:48'),(2,'Exam 2 - C1',1,'2015-11-08 17:08:48','2015-11-08 17:08:48'),(3,'Exam 3 - C2',2,'2015-11-08 17:08:48','2015-11-08 17:08:49'),(4,'assdsadsa',1,'2015-11-14 21:20:14','2015-11-14 21:20:14'),(5,'sdad',NULL,'2015-11-14 22:56:51','2015-11-14 22:56:51'),(6,'asdsadsd',1,'2015-11-14 22:58:42','2015-11-14 23:04:43'),(7,'asadasd',2,'2015-11-14 23:04:53','2015-11-14 23:04:53'),(8,'asddsdas',1,'2015-11-15 16:01:40','2015-11-15 16:01:40'),(9,'sdffds',1,'2015-11-15 16:05:09','2015-11-15 16:05:09'),(10,'adasdasd23',1,'2015-11-15 16:05:23','2015-11-15 18:44:01'),(11,'sasasa',1,'2015-12-02 03:14:50','2015-12-02 03:14:50'),(12,'c1d',1,'2015-12-03 00:46:32','2015-12-03 00:46:32');
/*!40000 ALTER TABLE `exams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `exam_id` int(11) DEFAULT NULL,
  `topic_id` int(11) DEFAULT NULL,
  `difficulty` int(11) DEFAULT NULL,
  `statement` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_questions_on_exam_id` (`exam_id`),
  KEY `index_questions_on_topic_id` (`topic_id`),
  CONSTRAINT `fk_rails_331c80e4c6` FOREIGN KEY (`exam_id`) REFERENCES `exams` (`id`),
  CONSTRAINT `fk_rails_fee3215432` FOREIGN KEY (`topic_id`) REFERENCES `topics` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES (1,1,1,1,'Question 1','2015-11-08 17:08:49','2015-11-08 17:08:49'),(2,1,2,2,'Question 2','2015-11-08 17:08:49','2015-11-08 17:08:49'),(3,1,2,3,'Question 3','2015-11-08 17:08:49','2015-11-08 17:08:49'),(4,2,3,1,'Question 4','2015-11-08 17:08:49','2015-11-08 17:08:50'),(5,7,NULL,0,'asdasdsad','2015-11-14 23:05:03','2015-11-14 23:05:03'),(6,8,NULL,0,'asdasdds','2015-11-15 16:01:40','2015-11-15 16:01:40'),(7,10,NULL,0,'dsadsadsad','2015-11-15 16:19:15','2015-11-15 16:19:15'),(8,11,NULL,0,'asdsadsadsad','2015-12-02 03:14:50','2015-12-02 03:14:50'),(9,11,NULL,0,'adsdasd','2015-12-02 03:14:50','2015-12-02 03:14:50'),(10,12,NULL,0,'e1','2015-12-03 00:57:32','2015-12-03 00:57:32');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  UNIQUE KEY `unique_schema_migrations` (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20151015025253'),('20151015025300'),('20151029011322'),('20151029011323'),('20151029011324');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topics`
--

DROP TABLE IF EXISTS `topics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `topics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `index_topics_on_course_id` (`course_id`),
  CONSTRAINT `fk_rails_d2ee197a8a` FOREIGN KEY (`course_id`) REFERENCES `courses` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topics`
--

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;
INSERT INTO `topics` VALUES (1,'C1-Topic 1',1,'2015-11-08 17:08:47','2015-11-08 17:08:47'),(2,'C1-Topic 2',1,'2015-11-08 17:08:47','2015-11-08 17:08:47'),(3,'C2-Topic 3',2,'2015-11-08 17:08:47','2015-11-08 17:08:47');
/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-12-03  2:03:24
