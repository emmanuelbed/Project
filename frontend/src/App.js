import React, { useMemo, useState } from "react";
import styled from "styled-components";
import bg from "./img/bg.jpg";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Dashboard from "./Components/Dashboard/Dashboard";
import Navigation from "./Components/Navigation/Navigation";
import Income from "./Components/Incomes/Income";
import Expenses from "./Components/Expenses/Expenses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Import BrowserRouter and related components
import Login from "./Components/Auth/Login";
import Signup from "./Components/Auth/Signup";
import AuthLayout from "./Components/AuthLayout/AuthLayout"; // Import the new layout

function App() {
  const [active, setActive] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const displayData = () => {
    if (isLoggedIn) {
      switch (active) {
        case 1:
          return <Dashboard />;
        case 2:
          return <Dashboard />;
        case 3:
          return <Income />;
        case 4:
          return <Expenses />;
        default: {
          return <Dashboard />;
        }
      }
    } else {
      // Display buttons for Login and Signup
      return (
        <div>
          <button onClick={() => setActive(2)}>Login</button>
          <button onClick={() => setActive(3)}>Signup</button>
          {active === 2 && <Login onLogin={handleLogin} />}
          {active === 3 && <Signup onSignup={handleLogin} />}
        </div>
      );
    }
  };

  //Ensuring the background Animation does not refresh on click
  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </AppStyled>
    </Router>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #fff;
    backdrop-filter: blur(4.5);
    border-radius: 32px;
    overflow: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
