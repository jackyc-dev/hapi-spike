USE `hapi_sql`;

CREATE TABLE `libraryStatuses` (
  `id` int(11) NOT NULL,
  `statusName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `platforms` json DEFAULT NULL,
  `releaseDate` datetime DEFAULT NULL,
  `libraryStatusId` int(11) DEFAULT NULL,
  `rating` decimal(3,1) DEFAULT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `libraryStatusId_idx` (`libraryStatusId`),
  CONSTRAINT `libraryStatusId` FOREIGN KEY (`libraryStatusId`) REFERENCES `libraryStatuses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;

CREATE TABLE `platforms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platformName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tagName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
