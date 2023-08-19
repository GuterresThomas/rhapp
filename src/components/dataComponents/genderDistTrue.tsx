'use client'
import React, { useState, useEffect } from 'react';
import GenderDistributionChart from '@/components/dataComponents/genderDist';

export default function GenderDistTrue() {
    const [employees, setEmployees] = useState([]);
    const fetchEmployees = async () => {
        const response = await fetch('http://localhost:3000/employees');
        const data = await response.json();
        setEmployees(data);
    };

    useEffect(() => {
        
        fetchEmployees();
    }, []);

    return (
        <div>
            <p>Distribuição de genêro entre os funcionários:</p>
            <GenderDistributionChart employees={employees} />
        </div>
    )
}