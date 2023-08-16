import React, { useEffect } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import Chart from "../Chart/Chart";
import { dollar } from "../../utils/Icons";
import { useGlobalContext } from "../../context/globalContext";
import History from "../History/History";

function Dashboard() {
  const {
    incomes,
    expenses,
    totalExpenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, []);
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>All Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />
            <div className="amount-con">
              <div className="income">
                <h2>TotaL Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpenses()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History />
            <h2 className="income-title">
              Min <span>Income</span>Max
            </h2>
            <div className="income-item">
              <p>{Math.min(...incomes.map((item) => item.amount))}</p>
              <p>{Math.max(...incomes.map((item) => item.amount))}</p>
            </div>

            <h2 className="income-title">
              Min <span>Expenses</span>Max
            </h2>
            <div className="income-item">
              <p>{Math.min(...expenses.map((item) => item.amount))}</p>
              <p>{Math.max(...expenses.map((item) => item.amount))}</p>
            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  .stats-con {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    .chart-con {
      grid-column: 1/4;
      height: 270px;
      .amount-con {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        .income,
        .expense {
          grid-column: span 2;
        }
        .income,
        .expense,
        .balance {
          background: #fcf6f9;
          border: 2px solid #fff;
          box-shadow: 0px 1px 15px rgbe(0, 0, 0, 0.06);
          padding: 1rem;
          border-radius: 20px;
          padding: 1rem;
          p {
            font-size: 2rem;
            font-weight: 700;
          }
        }
      }

      .balance {
        grid-column: 2/4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          color: var(--color-green);
          opacity: 0.6;
        }
      }
    }

    .history-con {
      grid-column: 4/-1;
      h2 {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .income-title {
        font-size: 1.2rem;
        span {
          font-size: 1.8rem;
        }
      }
      .income-item {
        background: #fcf6f9;
        border: 2px solid #fff;
        box-shadow: 0px 1px 15px rgbe(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default Dashboard;