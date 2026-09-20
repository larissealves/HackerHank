
/*
https://www.hackerrank.com/challenges/the-company/problem
*/

SELECT company.company_code, company.founder,
COUNT(DISTINCT lead_manager.lead_manager_code), 
COUNT(DISTINCT senior_manager.senior_manager_code),
COUNT(DISTINCT manager.manager_code),
COUNT(DISTINCT employee.employee_code)
FROM company
INNER JOIN lead_manager ON lead_manager.company_code=company.company_code
INNER JOIN senior_manager ON senior_manager.lead_manager_code=lead_manager.lead_manager_code
INNER JOIN manager ON manager.senior_manager_code=senior_manager.senior_manager_code
INNER JOIN employee ON employee.manager_code=manager.manager_code
GROUP BY company.company_code, company.founder
ORDER BY company.company_code ASC;



