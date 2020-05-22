import React, { useState } from "react";
import OrderForm from './components/OrderForm.js';
import Home from './components/Home.js';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import Modal from 'react-bootstrap/Modal'



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

  name: '',
  size: '',
  sauce: ''

}

const initalOrders = []

const App = () => {

  const [formValues, setFormValues ] = useState(initialFormValues)
  const [orders, addNewOrders] = useState(initalOrders)
  const [ formErrors, setFormErrors ] = useState(initalFormErrors)
  const [modalShow, setModalShow] = useState(false);





  //Event Handlers

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

      setFormValues({
        ...formValues,
        [name]: value 
      })
   
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

            <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered> 
              <OrderForm show={modalShow} values={formValues} onInputChange={onInputChange} onCheckboxChange={onCheckboxChange}
              onSubmit={onSubmit} errors={formErrors} />
           </Modal>   
        
        </Route>

        <Route path='/'>
                <Home />
        </Route>
    </Switch>



      
   </div>   
    
  );
};
export default App;
