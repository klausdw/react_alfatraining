import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2';

const Statistik = (props) => {
    const [chartData, setChartData] = useState({})

    const chart = () => {
        setChartData({
            labels: ["7:00", "9:00", "13:00", "15:00", "19:00", "21:00", "23:00", "1:00", "3:00", "5:00", "7:00",],
            datasets: [
                {
                    label: "Insulin",
                    fill: true,
                    backgroundColor: 'rgba(60, 100, 255, 0.5)',
                    borderColor: 'rgba(60, 100, 255, 1)',
                    data: props.insulin
                }, {
                    label: "Gluckose",
                    fill: true,
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    borderColor: 'rgba(255, 0, 0,1)',
                    data: props.gluckose
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
                    beginAtZero: true
                }
            }]
        },
    }

    return (
        <div className="ui middle aligned">
            <h1>Diabetes - Insulin</h1>
            <Bar data={chartData} options={options} />
        </div>
    )
}
export default Statistik;