/*
https://www.hackerrank.com/challenges/placements/problem
*/

SELECT
    students.name   
FROM students
INNER JOIN friends
    ON friends.id = students.id
INNER JOIN students AS friend
    ON friend.id = friends.friend_id

INNER JOIN packages ON packages.id =  students.id
INNER JOIN packages AS friend_salary ON friend_salary.id = friend.id
WHERE friend_salary.salary > packages.salary

ORDER BY friend_salary.salary ASC;

/*
SELECT
    students.name,
    students.id,
    packages.salary,
    friend.name AS friend_name,
    friends.friend_id,
    friend_salary.salary AS friend_value
    
    
FROM students
INNER JOIN friends
    ON friends.id = students.id
INNER JOIN students AS friend
    ON friend.id = friends.friend_id

INNER JOIN packages ON packages.id =  students.id
INNER JOIN packages AS friend_salary ON friend_salary.id = friend.id
WHERE friend_salary.salary > packages.salary

ORDER BY friend_salary.salary ASC;
*/
