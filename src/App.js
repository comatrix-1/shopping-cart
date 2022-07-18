import "./App.css";
import Header from "./components/Header";
import { HashRouter, Route, Routes, Switch } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
