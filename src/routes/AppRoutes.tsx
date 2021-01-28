import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DashBoardScreen from "../components/views/Dashboard/DashboardScreen";
import NewsScreen from "../components/views/News/NewsScreen";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={DashBoardScreen} />
        <Route exact path="/news/:newsId" component={NewsScreen} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
