import React from "react";

import { BrowserRouter,Route,Routes } from "react-router-dom";

import { Provider } from "react";



import HomePage from "./page/home";
import ContactPage from "./page/contact";
import AboutPage from "./page/about";
import SimpleFormSubmittion from "./components/form";
import configureStore from "./redux/store/redux-store";




const reduxStore = configureStore();



import "./style/App.css";







function App() {
  return (
    <Provider>
     <BrowserRouter>
     <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="form" element={<SimpleFormSubmittion></SimpleFormSubmittion>}></Route>
      
      </Routes>

      </BrowserRouter>
      </Provider>
      
  
  );
}

export default App;
