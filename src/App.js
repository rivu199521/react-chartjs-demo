import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';

function App() {
  return (
    <div className="App">
    {/* <LineChart />*/}
    {/*<BarChart />*/}
    <DoughnutChart />
    </div>
  );
}

export default App;
