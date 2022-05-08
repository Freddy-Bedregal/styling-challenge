import './Graph.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [],
    datasets: [
      {
        data: [200, 125, 75, 50],
        backgroundColor: [
          '#FF9F00',
          '#689FF8',
          '#4AC29D',
          '#BCBECA'
        ],
        borderWidth: 1,
        cutout: "90%",
        borderRadius: 45,
        rotation: 90,
        spacing: 15,
        borderColor: "transparent",
      },
    ],
  };

  const options = {
      events: []
  }

export function Graph(){
    return (
        <div className="graph-container">
            <span className="graph-title">Storage</span>
            
            <div className='container-doughnut'>
                 <Doughnut data={data} options={options}/>
            </div>

            <div className="circlex">
                <span className='circle-number'>85%</span>
                <span className='circle-text-under'>Used</span>
            </div>
            <div className='graph-description'>490.2 GB of 500GB used</div>
        </div>
    )
}