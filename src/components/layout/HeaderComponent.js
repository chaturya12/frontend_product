import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
class HeaderComponent extends React.Component{
    render(){
        return(
             <div>
                 <header>
                 <Navbar className="menu md-2" collapseOnSelect expand="lg md-2" bg="dark" variant="dark">
          <Navbar.Brand>Grocery Delivery Application</Navbar.Brand>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/productDashboard">Category</Nav.Link>
            </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
               
                  <NavDropdown.Item href="/customerDashboard">CustomerDashboard</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/AdminDashboard">Admin dashboard </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="/">Update Product</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/viewProduct">View Product By Id</NavDropdown.Item> */}
               
                
               
                </NavDropdown>
                <Nav>
                <form className="navbar-form form-inline">
  <div className="input-group search-box">    
  <input type="text" id="search"class="bi bi-search" class="form-control" placeholder="Search products.."/>

    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
  </div>
  </form> </Nav>	
             
              <Nav>
                
              <Nav.Link href="/productDashboard" class="bi bi-cart">Order List</Nav.Link>
              <i class="bi bi-cart"></i>
              <Nav.Link href="/productDashboard">Contact us</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Login</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#">Sign In</Nav.Link>
              </Nav>
              
         
              </Nav>
            </Navbar.Collapse>
              </Navbar> 
                 </header>
             </div>
        );
    }
}
export default HeaderComponent;
