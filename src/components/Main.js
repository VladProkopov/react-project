import { Routes, Route, Router } from "react-router-dom";

import Home from "./pages/Home";

import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Vacancies from "./pages/Vacancies";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Returns from "./pages/Returns";
import Plant from "./pages/navpages/Plant";
import Ceramics from "./pages/navpages/Ceramics";
import Tables from "./pages/navpages/Tables";
import Chairs from "./pages/navpages/Chairs";
import Crockery from "./pages/navpages/Crockery";
import Tableware from "./pages/navpages/Tableware";
import Cutlery from "./pages/navpages/Cutlery";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginPage from "./pages/userpages/Loginpage";
import RegisterPage from "./pages/userpages/Registerpage";
import Newarrivals from "./pages/Newarrivals";
import Bestsellers from "./pages/Bestsellers";
import BuyProduct from "./pages/Buy";


function Main() {
    return (
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allproducts/" element={<AllProducts/>} />
          <Route path="/about/" element={<About/>}/>
          <Route path="/vacancie/" element={<Vacancies/>} />
          <Route path="/contacts/" element={<Contacts/>} />
          <Route path="/privacy/" element={<Privacy/>} />
          <Route path="/returns/" element={<Returns/>} />
          <Route path="/plant/" element={<Plant/>}/>
          <Route path="/ceramics/" element={<Ceramics/>}/>
          <Route path="/tables/" element={<Tables/>}/>
          <Route path="/chairs/" element={<Chairs/>}/>
          <Route path="/crockery/" element={<Crockery/>}/>
          <Route path="/tableware/" element={<Tableware/>}/>
          <Route path="/cutlery/" element={<Cutlery/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/cart/" element={<Cart/>}/>
          <Route path="/login/" element={<LoginPage/>}/>
          <Route path="/register/" element={<RegisterPage/>}/>
          <Route path="/newArrivals/" element={<Newarrivals/>}/>
          <Route path="/bestSellers/" element={<Bestsellers/>} />
          <Route path="/byu/" element={<BuyProduct/>}/>
        </Routes>

        </main>
    );
  }
  
  export default Main;