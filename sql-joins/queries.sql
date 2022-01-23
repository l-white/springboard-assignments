-- write your queries here

SELECT * FROM owners FULL OUTER JOIN vehicles ON owners.id = vehicles.owner_id;

SELECT first_name, last_name, count(vehicles.owner_id) FROM owners INNER JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name;

SELECT first_name, last_name, AVG(vehicles.price), COUNT(vehicles.owner_id) FROM owners INNER JOIN vehicles ON owners.id = vehicles.owner_id GROUP BY first_name, last_name;