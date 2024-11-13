import "./App.css";
import { Routes, Route } from "react-router-dom";
// import not found
import NotFound from "./pages/notFound/notFound";
import Header from "./components/Header/header";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Products from "./pages/Products/products";
import Contact from "./pages/Contact/contact";
import Join from "./pages/Join/join";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
