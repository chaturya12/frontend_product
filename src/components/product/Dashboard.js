import React from 'react';
import CreateProductButton from './CreateProductButton';
import ProductItem from './ProducItem';
import FooterComponent from '../layout/FooterComponent';
class Dashboard extends React.Component{
    render(){       
      return(           
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1 className="display-4 text-center">Products</h1>
                      <br />
                     
                     <CreateProductButton/>
                      <hr />
                      

                      <ProductItem/> 
                     {/* <FooterComponent/>               */}
                  </div>
              </div>
          </div>        
      );
  }
}
export default Dashboard;