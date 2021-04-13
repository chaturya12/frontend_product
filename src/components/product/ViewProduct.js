import React from 'react';
import {getProduct} from '../../actions/ProductActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
class ViewProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={
           productId:'',
            productName:'',
            image:'',
            price:'',
            quantity:'',
           categoryName:''
        }
    }
    componentDidMount(){
        const {productId} = this.props.match.params;
        
      this.props.getProduct(productId,this.props.history);
        //axios.get("http://localhost:8080/api/v2/"+productId).then(c=>this.setState({prod:c.data}));
       
       
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
             productId,
            productName,
            price,
            quantity,
            categoryName,
            description    
         }=nextProps.product;
 
         this.setState({
            productId,
            productName,
            price,
            quantity,
            categoryName ,description
                        
         });
     }
    render(){
       
        return(
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">View Product</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Product Name" 
                                    name="productName" 
                                    value={this.state.productName}/>
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product Price" 
                                    name="price" 
                                    value={this.state.price}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Quantity</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Quantity" 
                                    name="quantity"
                                    value={this.state.quantity}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Product Category</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product Category"                                     
                                    name="categoryName" 
                                    value={this.state.categoryName}
                                    />
                            </div>
                            <div className="form-group">
                                <label>Product  description</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Product description"                                     
                                    name="description" 
                                    value={this.state.description}
                                    />
                            </div>
                            
                            <Link to="/dashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewProduct.propTypes = {
    getProduct:PropTypes.func.isRequired,
    product:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.products.product
    
  });

export default connect(mapStateToProps,{getProduct})(ViewProduct); 