import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Questions/Feed";
import SingleQuesiton from "./components/Questions/SingleQuestion";
import FollowingPage from "./components/Following";
import Footer from "./components/Navigation/Footer";
import ErrorPage from "./components/Navigation/ErrorPage";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Footer />
      {isLoaded && (
        <Switch>
          <Route exact path="/" >
            <Feed />
          </Route>
          <Route exact path="/questions/:id" >
            <SingleQuesiton />
          </Route>
          <Route exact path="/following" >
            <FollowingPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>

        </Switch>
      )}
    </>
  );
}

export default App;
