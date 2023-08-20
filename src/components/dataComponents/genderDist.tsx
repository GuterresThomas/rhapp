'use client'
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

const GenderDistributionChart = ({ employees }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && employees.length > 0) {
      const genderData = employees.reduce((acc, employee) => {
        acc[employee.gender] = (acc[employee.gender] || 0) + 1;
        return acc;
      }, {});

      const genderLabels = Object.keys(genderData);
      const genderCount = Object.values(genderData);

      new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: genderLabels,
          datasets: [
            {
              data: genderCount,
              backgroundColor: ['blue', 'pink'], // Adjust colors as needed
            },
          ],
        },
        
      });
    }
    
  }, [employees]);
  
  
  

  return <canvas ref={chartRef} />; 
};

export default GenderDistributionChart;
