import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { Products } from "./pages/products";
import { Phone } from "./pages/phone";

function App() {

  return <>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/" element={<Login/>}/>
        <Route path="/app" element={<MainLayout/>}>
          <Route index element={<Products/>}/>
          <Route path="app/phones" element = {<Phone/>}/>
        </Route>
    </Routes>  
  </>;
}

export default App;
