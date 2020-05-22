import React, { useState } from "react";
import OrderForm from './components/OrderForm.js';
import Home from './components/Home.js';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'


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

// const initalFormErrors = {

// }

const initalOrders = []

const App = () => {

  const [formValues, setFormValues ] = useState(initialFormValues)
  const [orders, addNewOrders] = useState(initalOrders)



  //Event Handlers

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setFormValues({
      ...formValues,
      [name]: value 
    })

    // // 🔥 STEP 12- RUN VALIDATION WITH YUP
    // yup
    //   .reach(formSchema, name)
    //   // we can then run validate using the value
    //   .validate(value)
    //   .then(valid => {
    //     // happy path, we can clear the error message
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: ''
    //     })
    //   })
    //   .catch(err => {
    //     // sad path, does not validate so we set the error message to the message 
    //     // returned from yup (that we created in our schema)
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0]
    //     })
    //   })

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
   
  }

  const onCheckboxChange = evt => {
    const { name } = evt.target
    const { checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,  
      }
    })
  }


  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce,
      toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
    }
    postNewOrder(newOrder)
  }

  const postNewOrder = newOrder=> {
  
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res.data)
        addNewOrders([res.data, ...orders])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


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
              <OrderForm values={formValues} onInputChange={onInputChange} onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit} />
        </Route>

        <Route path='/'>
                <Home />
        </Route>
    </Switch>



      
   </div>   
    
  );
};
export default App;
