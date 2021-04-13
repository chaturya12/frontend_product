import React from 'react';
import '../App.css'
class HomeComponent extends React.Component{
    render(){
        return(
            <div>
               <h1 className="display-4 text-center">Welcome to Grocery Delivery </h1> 
               <br/>
               <center className="image"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTc2kG5aKQKHtEKMB4-17dkrEyo3aOvM2Uw&usqp=CAU"alt="picture" height="300px" ></img></center>
             
            </div>
        );
    }
}
export default HomeComponent;