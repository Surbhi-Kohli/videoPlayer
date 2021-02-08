import React ,{useState,useEffect}from "react";
import {useSelector} from 'react-redux';
import Charts from "react-apexcharts";
 const Chart=React.memo((props)=> {
 
 
 
  const dataState=useSelector((state)=>state.data);
  const mph=dataState.map(entry=>{
    let id= entry.mph.indexOf("m");
    let val=entry.mph.substr(0,id);
   
    val=+val;
    return val;
  })
  const rpm=dataState.map(entry=>{
    let id= entry.rpm.indexOf("r");
    let val=entry.rpm.substr(0,id);
   
    val=+val;
    return val;
  })
  let chartInfo={
      series: [
        {
          name: "MPH",
          type: "line",
          data: mph
        },
        {
          name: "RPM",
          type: "line",
          data: rpm
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
         width:[3,3],
        },
        colors: ['#77B6EA', '#FF69B4'],
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#77B6EA"
            },
            labels: {
              style: {
                colors: "#77B6EA"
              }
            },
            title: {
              text: "mph",
              style: {
                color: "#77B6EA"
              }
            },
            tooltip: {
                enabled: true,
            }
          },
          {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#FF69B4"
            },
            labels: {
              style: {
                colors: "#FF69B4"
              }
            },
            title: {
              text: "rpm",
              style: {
                color: "#FF69B4"
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
            display:'none',
        },
 
grid: {
  xaxis: {
    lines: {
      show: true
    }
  }
}, annotations: {
  xaxis: [{
    strokeDashArray: 0,
    x:props.time,
    borderColor: '#775DD0',
    border:'5px',
    yAxisIndex: 0,
  }],

}

      }
    }
  
    return (
      <Charts
        options={chartInfo.options}
        series={chartInfo.series}
        type="bar"
        height={190}
      />
    );
  
});
export default Chart;