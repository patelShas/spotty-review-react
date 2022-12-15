import 'bootswatch/dist/darkly/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProfileComponent from "./profile/profileComponent";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home/homeComponent";
import SearchComponent from "./search/searchComponent";
import DetailsComponent from "./details/detailsComponent";
import LoginComponent from "./login/loginComponent";
import RegisterComponent from "./register/registerComponent";
import NameBanner from "./users/banner";
import {useParams} from "react-router";

function App() {
    const subject_name = useParams().subject
    console.log(subject_name)

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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>);
}

export default App;
