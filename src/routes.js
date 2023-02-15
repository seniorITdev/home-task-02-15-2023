import { BrowserRouter, Route, Navigate, Routes as Switch } from "react-router-dom";
import App from './components/Home'
import SearchPage from "./components/search";
import Detail from "./components/detail";
  
const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/home" element={<App />}>
                <Route path="search" element= {<SearchPage />}/>
                <Route path="detail/:id" element={<Detail />} />
                <Route path="/home" element={<Navigate replace to="search" />} />
            </Route>
            <Route path="/" element={<Navigate replace to="/home" />} />
        </Switch>
        </BrowserRouter>
    );
};
  
  export default Routes;
  