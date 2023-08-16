import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import styled from "styled-components";

import { Line } from "react-chartjs-2";
import { dateFormat } from "../../utils/dateFormat";
import { useGlobalContext } from "../../context/globalContext";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();
  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),

    datasets: [
      {
        label: "Income",
        data: [
          ...incomes.map((income) => {
            const { amount } = income;
            return amount;
          }),
        ],
        backgroundColor: "green",
        tension: 0.25,
      },
      {
        label: "Expenses",
        data: [
          ...expenses.map((expenses) => {
            const { amount } = expenses;
            return amount;
          }),
        ],
        backgroundColor: "red",
        tension: 0.25,
      },
    ],
  };
  return (
    <ChartStyled>
      <Line data={data} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background: #fcf6f9;
  border: 2px solid #fcf6f9;
  box-shadow: 0px 1px 15px rgbe(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
`;

export default Chart;
