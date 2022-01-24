
import  {Route,Routes} from 'react-router-dom'
import  {Home} from './components/Home'
import  {About} from './components/About'
import Navbar from './components/Navbar';
import OrderConfirm from './components/OrderConfirm';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';


function App() {
  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='order-cofirmed' element={<OrderConfirm/>}></Route>
      <Route path='/products' element={<Products/>}>
         <Route index element={<FeatureProducts />} />
         <Route path='feature' element={<FeatureProducts />} />
         <Route path='new' element={<NewProducts />} />
      </Route>
      <Route path='*' element={<NoMatch/>}></Route>
     </Routes>    
    </>

  )
}

export default App;
