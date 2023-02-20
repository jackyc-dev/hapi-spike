USE `hapi_sql`;

INSERT INTO `hapi_sql`.`libraryStatuses`
(`id`, `statusName`)
SELECT 1, 'Wishlist'
UNION ALL
SELECT 2, 'Owned'
UNION ALL
SELECT 3, 'Now Playing'
UNION ALL
SELECT 4, 'Completed';

