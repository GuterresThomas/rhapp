'use client'
import React, { useState, useEffect } from "react";


export default function AverageSalaryCalc() {
    const [employees, setEmployees] = useState([]);
    const [averageSalary, setAverageSalary] = useState(0);

    const fetchEmployees = async () => {
        // Fetch employees data from your API
        const response = await fetch('http://localhost:3000/employees');
        const data = await response.json();
        setEmployees(data);

        const totalSalary = data.reduce((total, employee) => total + parseFloat(employee.salary), 0);
        const average = data.length > 0 ? totalSalary / data.length : 0;
        setAverageSalary(average);    
    }

    useEffect(() => {
        fetchEmployees();
    }, []);
    
    
    return (
            <p>Média de salário: {averageSalary.toFixed(2)}</p>    
    );
    
}

