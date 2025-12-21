
import Home from './pages/Home';
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Products from './pages/Products'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import Product from './pages/Product'
function App(){
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path = "about" element={<About/>}/>
      <Route path = "Products" element={<Products/>}/>
      <Route path = "Products/:item" element={<Product/>}/>
      </Route>
    <Route path = "/dashboard" element={<Dashboard/>}/>
       <Route path = "*" element={<PageNotFound/>}/>
       </Routes>
    </BrowserRouter>
    </div>
    
  
}

export default App;
