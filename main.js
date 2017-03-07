'use strict'

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

db.run('CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)');

const populateDatabase = () => {
	const { employees } = require('./employees.json')

	employees.forEach(emp => {
		db.run(`INSERT INTO employees VALUES (
			${emp.id},
			"${emp.firstName}",
			"${emp.lastName}",
			"${emp.jobTitle}",
			"${emp.address}",
			${emp.salary})`)
	})
}

// db.each('SELECT jobTitle FROM employees', (err, { jobTitle : res }) => {
// 	console.log(res)
// })	

// db.each('SELECT firstName, lastName, address FROM employees', (err, { firstName, lastName, address }) => {
// 	console.log(firstName, lastName, address)
// })	

db.each('SELECT * FROM employees WHERE jobTitle = "Fisherman"', (err, res) => {
	console.log(res)
})


// db.run('DROP TABLE employees')

// populateDatabase()
