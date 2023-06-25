import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import Chart from "react-apexcharts";

function Charts() {
  const [line, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        height: 500,
        width: 800,
        id: "basic",

        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      legend: {
        position: "top",
      },
      dataLabels: {
        enabled: false,
      },

      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996],
      },

      responsive: [
        {
          breakpoint: 515,
          options: {
            chart: {
              width: 340,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
    series: [
      {
        name: "People Born",
        data: [100, 220, 345, 250, 149, 160],
      },
      {
        name: "People Died",
        data: [200, 320, 150, 480, 349, 270],
      },
    ],
  });

  const [pie, setPieData] = useState({
    series: [24, 45, 53],
    options: {
      chart: {
        width: 350,
        type: "pie",
      },

      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],

      dataLabels: {
        enabled: true,
      },

      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 330,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <>
      <div className="activities-container">
        <div className="text">
          <h4 style={{ fontWeight: "bold", margin: "1rem 2rem" }}>
            Activities
          </h4>
          <select
            style={{
              width: "8rem",
              height: "2rem",
              outline: "none",
              textDecoration: "none",
              border: "none",
              background: "inherit",
              margin: "1rem 2rem",
              color: "#adaeb2",
            }}
          >
            <option>May-June 2021</option>
          </select>
        </div>

        <Chart
          className="line-chart"
          options={line.options}
          series={line.series}
          type="line"
          width="498"
        />
      </div>

      <div className="product-schedule-card">
        <div className="product-card">
          <div className="text">
            <h4
              style={{
                fontWeight: "bold",
                margin: "1rem 2rem",
                fontSize: "1rem",
              }}
            >
              Top products
            </h4>
            <select
              style={{
                width: "8rem",
                height: "2rem",
                outline: "none",
                textDecoration: "none",
                border: "none",
                background: "inherit",
                margin: "1rem 2rem",
                color: "#adaeb2",
              }}
            >
              <option>May-June 2021</option>
            </select>
          </div>

          <div className="data-cont">
            <div className="pie-chart">
              <Chart
                options={pie.options}
                series={pie.series}
                type="pie"
                width="380"
               
              />
            </div>
          </div>
        </div>
        <div className="schedule-card">
          <div className="text">
            <h4
              style={{
                fontWeight: "bold",
                margin: "1rem 2rem",
                fontSize: "1rem",
              }}
            >
              Today's schedule
            </h4>
            <select
              style={{
                width: "5rem",
                height: "2rem",
                outline: "none",
                textDecoration: "none",
                border: "none",
                background: "inherit",
                margin: "1rem 2rem",
                color: "#adaeb2",
              }}
            >
              <option>See All</option>
            </select>
          </div>
          <div className="info">
            <div className="info1">
              <hr
                style={{
                  transform: "rotate(90deg)",
                  width: "4rem",
                  height: "0.3rem",
                  color: "#2ed573",
                  marginTop: "2rem",
                }}
              ></hr>

              <div className="details">
                <h6>Meeting with suppliers from Kuta Bali</h6>
                <span style={{ display: "block" }}>14.00-15.00</span>
                <span>at Sunset Road, Kuta, bali</span>
              </div>
            </div>
            <div className="info2">
              <hr
                style={{
                  transform: "rotate(90deg)",
                  width: "4rem",
                  height: "0.3rem",
                  color: " #3742fa",
                  marginTop: "2rem",
                }}
              ></hr>

              <div className="details">
                <h6>Check operation at Giga Factory 1</h6>
                <span style={{ display: "block" }}>18.00-20.00</span>
                <span>at Central Jakarta</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
