import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ProductDetail from "./pages/ProductDetail/ProductDetail";




function App():ReactElement {
  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage></Homepage>}></Route>
    <Route path="/product-detail/:id" element={<ProductDetail></ProductDetail>}></Route>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
