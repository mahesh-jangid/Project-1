import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./Login/LoginScreen";

import { Nav } from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import { Spinner } from "@chakra-ui/react";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";
import AddData from "./pages/AddData";
import EditProduct from "./pages/Useredit/Edituser";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <header>
        <Router>
          {loading ? (
            <div className="loading">
              <Spinner color="pink.500" />
            </div>
          ) : (
            <>
              <Nav />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/:id/update" component={EditProduct} />
                <Route exact path="/adddata" component={AddData} />

                <ProtectedRoute exact path={"/Home"} component={Home} />
              </Switch>
            </>
          )}
        </Router>
      </header>
    </div>
  );
};
export default App;
