import React, { Component } from 'react'
import { Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
    } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
          display : false,
      },
      title: {
        display: true,
        text: 'Chart.js Playground',
      },
    },
  };


  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

class ChartArea extends Component {
    state = {
        data : {
            labels : ['','','','',''],
            datasets: [
                {
                    data : [2,4,3,6,8],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        }
    }

    handleAdd = () =>{
        const { data } = this.state;
        let newLabels = data.labels.concat('')
        let newData =  data.datasets[0].data.concat(getRandomInt(10))
        let newDatasets = [{data : newData, backgroundColor: 'rgba(255, 99, 132, 0.5)',}]
        console.log(newLabels, newDatasets);
        this.setState({data : {labels : newLabels, datasets : newDatasets}})
    }

    handleMapAdd = () =>{
        const { data } = this.state;
        let newLabels =  data.labels
        let newData =  data.datasets[0].data.map(x => x+=2)
        let newDatasets = [{data : newData, backgroundColor: 'rgba(255, 99, 132, 0.5)',}]
        this.setState({data : { labels : newLabels, datasets : newDatasets}})
    }

    handleMapSubstarct = () =>{
        const { data } = this.state;
        let labels =  data.labels
        let newData =  data.datasets[0].data.map(x => x-=1)
        let newDatasets = [{data : newData, backgroundColor: 'rgba(255, 99, 132, 0.5)',}]
        this.setState({data : { labels : labels, datasets : newDatasets}})
    }

    handleMultiply = () =>{
        const { data } = this.state;
        let labels =  [...data.labels, ...data.labels]
        let newData =  [...data.datasets[0].data, ...data.datasets[0].data]
        console.log(newData);
        let newDatasets = [{data : newData, backgroundColor: 'rgba(255, 99, 132, 0.5)',}]
        this.setState({data : { labels : labels, datasets : newDatasets}})
    }


    render() {
        const { data } = this.state;
        const mr = { marginRight: '5px' };
        return (
            <div>
                <Bar
                id='myChart'
                options={options}
                data = {
                    data
                }
                width={500}
                height={200}
                 ></Bar>
                 <button style={mr} onClick={this.handleAdd}>데이터 추가 (concat) </button>
                 <button style={mr} onClick={this.handleMapAdd}>모든 값 2 추가 (map) </button>
                 <button style={mr} onClick={this.handleMapSubstarct}>모든 값 1 낮추기 (map) </button>
                 <button style={mr} onClick={this.handleMultiply}>전체 데이터 복제 (...spread)</button>
            </div>
        );
    }
}
export default ChartArea
