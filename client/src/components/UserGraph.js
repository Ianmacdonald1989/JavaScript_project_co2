import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';
import './UserGraph.css'

const UserGraph = ({userFlights}) => {
  
    const labels = userFlights.map((flight) => {
              return flight.date;
            })
    const flights = userFlights.map((flight) => {
      return flight
    })
    console.log(flights)

    const sortedFlights = flights.sort(function(a, b) {
      var c = new Date(a.date);
      var d = new Date(b.date);
      return d-c;
  });
    console.log(`flights sorted`)
    console.log(sortedFlights)

    labels.sort((a,b) => Date.parse(b) - Date.parse(a))

    const footprintData = userFlights.map((flight) => {
            return flight.footprint;
    })

    const privateJetFootprintData = userFlights.map((flight) => {
      return flight.footprint * 100;
})

  const getOriginDestination = userFlights.filter((flight) => {
    return `${flight.origin} ${flight.destination}`
})

    const options = {
      plugins: {
        tooltip:{
          callbacks: {
            beforeTitle: function(context){
              let index = context[0].dataIndex
              // return console.log(context[0].dataIndex)
              return `${(sortedFlights[index].origin)} => ${(sortedFlights[index].destination)}`
            },
            title: function(context){
              return null;
            }
          }
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        align: 'start',
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Your Footprint",
          backgroundColor: (context) => {
            const bgColor = [
              "rgb(237, 67, 64, 0.65)",
              "rgb(252, 108, 40, 0.65)",
              "rgb(122, 217, 72, 0.65)"
            ]
            if(!context.chart.chartArea){
              return;
            }
            const {ctx, data, chartArea: {top, bottom}} = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0])
            gradientBg.addColorStop(0.3, bgColor[1])
            gradientBg.addColorStop(1, bgColor[2])
            return gradientBg
          },
          borderColor: (context) => {
            const bgColor = [
              "rgb(237, 67, 64, 0.8)",
              "rgb(252, 108, 40, 0.8)",
              "rgb(122, 217, 72, 0.8)"
            ]
            if(!context.chart.chartArea){
              return;
            }
            const {ctx, data, chartArea: {top, bottom}} = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0])
            gradientBg.addColorStop(0.3, bgColor[1])
            gradientBg.addColorStop(1, bgColor[2])
            return gradientBg
          },
          pointBackgroundColor: "rgb(0, 0, 0)",
          data: footprintData,
          tension: 0.2,
          fill: true,
          parsing:{
            xAxisKey: 'date',
            yAxisKey: 'footprint'
          }},
          {
            label: 'Private Jet Equivelant',
            backgroundColor: (context) => {
              const bgColor = [
                "rgb(237, 67, 64, 0.65)",
                "rgb(252, 108, 40, 0.65)",
                "rgb(252, 108, 40, 0.2)"
              ]
              if(!context.chart.chartArea){
                return;
              }
              const {ctx, data, chartArea: {top, bottom}} = context.chart;
              const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
              gradientBg.addColorStop(0, bgColor[0])
              gradientBg.addColorStop(0.7, bgColor[1])
              gradientBg.addColorStop(1, bgColor[2])
              return gradientBg
            },
            data: privateJetFootprintData,
            borderWidth: 1,
            fill: true, 
            hidden: true,
            tension: 0.2,
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'footprint'
            }
          },
      ],
    }

return (
    <div className="user-graph-container"> 
      <Line className="user-graph" data={data} options={options} />
    </div>
  );
};

export default UserGraph;