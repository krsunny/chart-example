import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Bar } from 'react-chartjs-2';
import faker from 'faker';
import chartService from './service/chart.service';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,
    LinearScale,
    BarElement, Title);





export function App(props) {

    const [dataPie, setPie] = useState([]);
    const [dataBar, setBar] = useState([]);


    const data = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: dataPie[2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const data1 = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: dataPie[3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const data2 = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: dataPie[5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const data3 = {
        labels: [],
        datasets: [
            {
                // label: '# of Votes',
                data: dataPie[6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    
    const labels = ['0', '1', '2', '3', '4', '5', '6'];
    
    
    const data4 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataBar[0],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const data5 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataBar[1],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const data6 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataBar[4],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const data7 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataBar[7],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const data8 = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: dataBar[8],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    const initState = async () => {
        const data = await chartService.getChartData();
        const chartData = data.data;
        console.log(chartData);
        const Piedata = data.data.map((datatype) => {
            if (datatype.type == 'Pie') {
                return datatype.elements.map((ele) => {
                    return ele
                })
            }
        });
        setPie(Piedata)
        console.log(Piedata);

        const Bardata = data.data.map((datatype) => {
            if (datatype.type == 'Bar') {
                return datatype.elements.map((ele) => {
                    return ele
                })
            }
        });
        setBar(Bardata)

    }


    useEffect(() => {
        initState();
    }, [props])







    return (
        <Container style={{ padding: "30px",textAlign:'center' }}>
            <Row >
                <Col style={{ width: '25%' }}>
                    <Pie data={data} />
                    <Pie data={data1} />
                    <Pie data={data2} />
                    <Pie data={data3} />
                </Col>
                <Col style={{ width: '25%' }}>
                    <Bar options={options} data={data4} />
                    <Bar options={options} data={data5} />
                    <Bar options={options} data={data6} />
                    <Bar options={options} data={data7} />
                    <Bar options={options} data={data8} />
                </Col>
                <Col style={{ width: '50%' }}>
                </Col>
            </Row>

        </Container>
    );
}
export default App;