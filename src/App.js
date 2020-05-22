import React, { useState } from "react";
import OrderForm from './components/OrderForm.js';
import Home from './components/Home.js'
import { Route, Switch, Link } from 'react-router-dom'


const initialFormValues = {
  
  //text
  name: '',
  special_instructions: '',
  //dropdown
  size: '',
  //radio buttons
  sauce: '',
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    sausage: false,
    bacon: false,
    pineapple: false
  },
}

const initalFormErrors = {

}

const App = () => {

  const [formValues, setFormValues ] = useState(initialFormValues)
  return (
    
    <div className='App'>
    <nav>
      <h1>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Order</Link>
      </div>
    </nav>

    <Switch>
        <Route path='/pizza'> 
              <OrderForm values={formValues}/>
        </Route>

        <Route path='/'>
                <Home />
        </Route>
    </Switch>



      
   </div>   
    
  );
};
export default App;
