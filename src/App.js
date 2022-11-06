import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./home/index.js";
import SearchPage from "./search/index.js";
import ProfilePage from "./profile/index.js";
import LoginPage from "./login/index.js";



function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/"
                     element={<HomePage/>}/>
              <Route path="/search"
                     element={<SearchPage/>}/>
              <Route path={"/profile"}
                     element={<ProfilePage/>}/>
              <Route path={"/login"}
                     element={<LoginPage/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
