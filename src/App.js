import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProfileComponent from "./profile";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import SearchComponent from "./search";
import DetailsComponent from "./details";
import LoginComponent from "./login";
import RegisterComponent from "./register";
import NameBanner from "./users/banner";
import ConnectComponent from "./users";

function App() {

    return (<div className="container">
        <BrowserRouter>
            <div className="row mt-2">
                <div className="col-2">
                    <NameBanner/>
                    <Routes>
                        <Route path="/" element={<NavigationSidebar/>}/>
                        <Route path="/:active" element={<NavigationSidebar/>}/>
                        <Route path="/:active/*" element={<NavigationSidebar/>}/>
                    </Routes>
                </div>
                <div className="col-10">
                    <Routes>
                        <Route path="/"
                               element={<HomeComponent/>}/>
                        <Route path="/home"
                               element={<HomeComponent/>}/>
                        <Route path="/search/*"
                               element={<SearchComponent/>}/>
                        <Route path="/details/*"
                               element={<DetailsComponent/>}/>
                        <Route path={"/profile/"}
                               element={<ProfileComponent/>}/>
                        <Route path={"/profile/:subject"}
                               element={<ProfileComponent/>}/>
                        <Route path={"/login"}
                               element={<LoginComponent/>}/>
                        <Route path={"/register"}
                               element={<RegisterComponent/>}/>
                        <Route path={"/connect"}
                               element={<ConnectComponent/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>);
}

export default App;
