import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
 
const App = () => {
  return (
  <div>
    <div className='bg-slate-900 fixed top-0 w-full z-0'>
      <Navbar />
    </div>

    <Routes>
      <Route className='-z-10' path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </div>)
};

export default App;
