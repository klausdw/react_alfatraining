import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

const Statistik = (props) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ["7:00", "14:00", "20:00",],
            datasets: [
                {
                    label: "SYS (mmHg)",
                    fill: true,
                    backgroundColor: 'rgba(60, 100, 255, 0.5)',
                    borderColor: 'rgba(60, 100, 255, 1)',
                    data: props.sys
                }, {
                    label: "DIA (mmHg)",
                    fill: true,
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    borderColor: 'rgba(255, 0, 0,1)',
                    data: props.dia
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: false
                }
            }]
        },
    }

    return (
        <div className="ui middle aligned">
            <h1>Blutdruck</h1>
            <Line data={chartData} options={options} />
        </div>
    )
}
export default Statistik;