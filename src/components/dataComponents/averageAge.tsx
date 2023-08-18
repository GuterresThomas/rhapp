'use client'
import React, { useState, useEffect } from "react";

function AverageAgeCalc() {
    const [employees, setEmployees] = useState([]);
    const [averageAge, setAverageAge] = useState(0);

   

    const fetchEmployees = async () => {
        // Fetch employees data from your API
        const response = await fetch('http://localhost:3000/employees');
        const data = await response.json();
        setEmployees(data);
        
        const totalAge = data.reduce((sum, employee) => sum + calculateAge(employee.birthdate), 0);
        const avgAge = totalAge / data.length;
        setAverageAge(avgAge);
    };

    const calculateAge = (birthdate) => {
        // Logic to calculate age from birthdate
        const birthDate = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        // You can refine the calculation based on months and days
        return age;
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Dashboard de Estatísticas</h2>
            <p>Média de idade dos funcionários: {averageAge.toFixed(2)} anos</p>
            {/* Render other statistic components here */}
        </div>
    );
}

export default AverageAgeCalc;
