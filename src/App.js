import React, { useState } from "react";
import OrderForm from './components/OrderForm.js'


const initialFormValues = {
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

const App = () => {

  const [formValues, setFormValues ] = useState(initialFormValues)
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <OrderForm values={formValues}/>
    </>
  );
};
export default App;
