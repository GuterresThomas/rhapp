'use client'

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'


const PaymentDistChart = ({sales}) =>  {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef.current && sales.length > 0) {
            const paymentData = sales.reduce((acc, sale) => {
              acc[sale.payment_method] = (acc[sale.payment_method] || 0) + 1;
              return acc;
            }, {});
      
            const paymentLabels = Object.keys(paymentData);
            const paymentCount = Object.values(paymentData);
      
            new Chart(chartRef.current, {
              type: 'pie',
              data: {
                labels: paymentLabels,
                datasets: [
                  {
                    data: paymentCount,
                    backgroundColor: ['green', 'blue', 'red'], // Adjust colors as needed
                  },
                ],
              },
            });
          }
        }, [sales]);
      
        return <canvas ref={chartRef} />;
      };
      
      export default PaymentDistChart;