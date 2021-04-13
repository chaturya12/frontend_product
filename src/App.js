import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './components/layout/HeaderComponent';
import FooterComponent from './components/layout/FooterComponent';
import Dashboard from './components/product/Dashboard';
import AddProduct from './components/product/AddProduct';
import ViewProduct from './components/product/ViewProduct';
import UpdateProduct from './components/product/UpdateProduct';
import ViewProductByCategory from './components/product/ViewProductByCategory';
import CreateProductButton from './components/product/CreateProductButton'
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import CustomerDashboard from './components/product/CustomerDashboard';
import AdminDashboard from './components/product/AdminDashboard';
import Navbar from './components/layout/Navbar';
function App() {
  return (
   <div>
    
       <Provider store={store}>
     
     <Router>
     {/* <HeaderComponent/> */}
     <Navbar/>
     {/* <Dashboard/> */}
     
     <Route path="/home" component={Home}/>
     <Route path="/dashboard" component={Dashboard}/>
     {/* <Route path="/createButton" component={CreateProductButton}/> */}
     <Route exact path="/addProduct" component={AddProduct}/>
     <Route exact path="/viewProduct/:productId" component={ViewProduct}/>
     <Route exact path="/updateProduct/:productId" component={UpdateProduct}/>
     <Route exact path="/viewProductByCategory/:categoryName"component={ViewProductByCategory}/>
     <Route exact path="/customerDashboard"component={CustomerDashboard}/>
     <Route exact path="/adminDashboard" component={AdminDashboard}/>
     {/* <FooterComponent/> */}
     </Router>
     </Provider>
   </div>
  );
}

export default App;
