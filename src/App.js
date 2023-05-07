import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cart from "./components/cart";
import OrderSuccess from "./components/orederSuccess";
import { ShopContextProvider } from "./context/ShopContext";
import Form from "./components/Form";
function App() {
  
  return (
    <ShopContextProvider>
    <Router>
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/success" element={<OrderSuccess/>}/>
      </Routes>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
