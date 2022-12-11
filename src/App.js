import 'bootswatch/dist/superhero/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfileComponent from "./profile/profileComponent";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home/homeComponent";
import SearchComponent from "./search/searchComponent";
import DetailsComponent from "./details/detailsComponent";
import LoginComponent from "./login/loginComponent";
import {useLocation} from "react-router-dom";

function App() {
    console.log(window.location.href.split('/')[3])
    return (<div className="container">
        <BrowserRouter>

            <div className="row mt-2">
                <div className="col-auto col-lg-2">
                    <NavigationSidebar active={window.location.href.split('/')[3]}/>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/"
                               element={<HomeComponent/>}/>
                        <Route path="/search/*"
                               element={<SearchComponent/>}/>
                        <Route path="/details/*"
                               element={<DetailsComponent/>}/>
                        <Route path={"/profile"}
                               element={<ProfileComponent/>}/>
                        <Route path={"/login"}
                               element={<LoginComponent/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>);
}

export default App;
