
import  {Route,Routes} from 'react-router-dom'
import  {Home} from './components/Home'
import  {About} from './components/About'
import Navbar from './components/Navbar';
import OrderConfirm from './components/OrderConfirm';


function App() {
  return (
    <>

     <Navbar/>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='order-cofirmed' element={<OrderConfirm/>}></Route>
     </Routes>    
    </>

  )
}

export default App;
