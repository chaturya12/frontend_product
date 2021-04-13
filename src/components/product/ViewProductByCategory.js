import React from 'react';
import {getProduct} from '../../actions/ProductActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import axios from 'axios';
class ViewProductByCategory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        const {categoryName} = this.props.match.params;
      axios.get("http://localhost:8080/api/v2/"+categoryName).then(c=>this.setState({prod:c.data}));
    }
    render(){
        const {products} =  this.props.products;         
        return(
            
            <div>  
                 <div id="product">
               {
                   products.map(product =>(
                       <div className="card" key={product.productId}>
                           
                           <div className="content">
                             
                               <span>${product.price}</span>
                               <br/>
                               {/* <img src= "*{'data:image/jpeg;base64,'}*+{product.image}"/> */}
                               <span>{product.productName}</span>
                               <p className="para">{product.description}</p>
                               <p>{product.categoryName}</p>
                              
                              
                                <Link to="/dashboard" className="btn btn-lg btn-info">Ok</Link>

                           </div>
                       </div>
                   ))
               }
            </div>

            </div>
            
        );
    }
}
ViewProductByCategory.propTypes = {
    getProduct:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.products.product
    
  });

export default connect(mapStateToProps,{getProduct})(ViewProductByCategory); 