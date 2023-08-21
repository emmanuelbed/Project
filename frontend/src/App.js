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
      return (
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/incomes">
            <Income />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
        </Switch>
      );
    } else {
      return (
        <div>
          <Switch>
            <Route path="/login">
              <Login onLogin={handleLogin} />
            </Route>
            <Route path="/signup">
              <Signup onSignup={handleLogin} />
            </Route>
            <Route path="/">
              <Login onLogin={handleLogin} />
            </Route>
          </Switch>
        </div>
      );
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <Router>
      <AppStyled bg={bg} className="App">
        {orbMemo}
        <MainLayout>
          {isLoggedIn && <Navigation active={active} setActive={setActive} />}
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
