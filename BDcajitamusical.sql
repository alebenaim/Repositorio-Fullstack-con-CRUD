CREATE DATABASE  IF NOT EXISTS `cajitamusical` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cajitamusical`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: cajitamusical
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `img_path` varchar(400) DEFAULT NULL,
  `category` varchar(200) DEFAULT NULL,
  `model` varchar(200) DEFAULT NULL,
  `year` varchar(100) DEFAULT NULL,
  `detail` varchar(400) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (2,'./img/fender strato 74-ch.png','Vintage Series','Fender Stratocaster 1974','Heavy Relic. Reissue 74 series 2002','La Fender Stratocaster, conocida como Strat o Strato, es un modelo diseñado entre 1952 y 1954 por Leo Fender.Posee Cuerpo Fresno - Trastera Rosewood / Arce - Clavijas Gotoh. Pastillas Alnico II - puente Fender - Knobs  Originales',2500,1),(3,'./img/fender telecaster 74-ch.png','Vintage Series','Fender Telecaster 1974','Heavy Relic. Reissue 74 series 2002','La Fender Telecaster es el primer modelo diseñado en 1950 por Leo Fender.Posee cuerpo de fresno. El mástil es de arce o palorrosa . Posee un sonido mas filoso y con mayor presencia de agudos que la strato, suele ser utilizada para Guitarra Ritmica. Viene con Clavijas Gotoh, Pastillas Alnico II  y PAF con puente Fender Telecaster y selector 3 vias',2500,3),(4,'./img/gibson 1958.png','Vintage Series','Gibson Les Paul Standard','ReIssue \'54 series 1994','La Gibson Les Paul El mástil, encolado, lleva inserta un alma regulable y está rematado por un diapasón de 22 trastes, que suele ser de palo rosa. Incorpora dos Humbuckers y un puente Tune-o-matic sin palanca de vibrato. Viene con Cuerpo Caoba - Trastera Rosewood  - Clavijas Gibson y selector 3 vias',2000,1),(5,'./img/joepass_es175.jpeg','Signature Series','Gibson ES 175','Joe Pass Signature 1996','La Gibson ES175  viene de Madera laminada, con capas de arce con un alma de tilo en su interior. Agujeros F y tapa y fondo arqueados. Acabado Natural y 3 Tone Sunburst. Cuerpo Caoba hollow - Trastera Rosewood  - Clavijas Gibson y. 2 P94 - puente ABR1 cordal Zigzag - Knobs Originales',3500,2),(8,'./img/jaguar_KCobain.jpeg','Signature Series','Fender Jaguar','Kurt Cobain Series 2010','La Kurt Cobain Series es una reedicion de  la de 1965 . Con un control de seleccion de micrófonos de 3 vías, incluye la potencia de los PAF Dimarzio que permite la versatilidad tanto para la sección ritmica como para lead. Cuerpo de Aliso, Puente de cromo Adjusto Matic y tremolo flotante.',1900,2),(9,'./img/sg_angus.jpeg','Signature Series','Gibson SG','Angus Young Series 2014','La Gibson SG viene con un par de mini-humbuckers que ofrecen tonos brillantes y nitidos.Inlays nacarados y un cuello Slim Taper para mayor facilidad. Cuerpo Caoba - Trastera Palisandro  - Clavijas Keystones.Terminación satinada en color Negro o Cherry Red',1600,2),(10,'./img/premier_glod.png','Baterias 4 y 5 cuerpos','Ediciones Xpk Stage Series','2017','Incluye sets de soportes de hihat y stands para ride y Crash. Cascos de 6 capas de 6.6 mm de Maple con Aros de 2.3 mm de acero de triple brida. Montaje cromado ISO con diseño integral de bloqueo de memoria. con parches Supersonic de Premier Arenados. Sistema de Rims y Toms Holder.  Incluye Pedal de Bombo',2000,3),(11,'./img/bateria-ch.png','Baterias 4 y 5 cuerpos','Ediciones Supraphonic 1970','1979','Incluye sets de soportes de hihat y stands para ride y Crash. Cascos de 6 capas de 6.6 mm de Maple con Aros de 2.3 mm de acero de triple brida.  Sistema de Rims y Toms Holder.  Incluye Pedal de Bombo, redoblante supraphonic , Crash Sabian 16’’, Rode Sabian 22’’ y hihat Sbr1402 Brillante ',4000,2);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 19:21:01
