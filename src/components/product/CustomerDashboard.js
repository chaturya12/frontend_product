import React from 'react';
import FooterComponent from '../layout/FooterComponent';
import CustomerProductItem from './CustomerProductItem';
class CustomerDashboard extends React.Component{
    render(){       
      return(           
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h1 className="display-4 text-center">Products</h1>
                      <br />
                     
                     {/* <CreateProductButton/>
                      <hr /> */}
                      

                      <CustomerProductItem/> 
                     {/* <FooterComponent/> */}
                  </div>
              </div>
          </div>        
      );
  }
}
export default CustomerDashboard;