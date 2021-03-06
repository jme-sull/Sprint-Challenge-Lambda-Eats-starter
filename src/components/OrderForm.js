import React from 'react'
import Modal from 'react-bootstrap/Modal'


export default function OrderForm(props){

    const {

        values,
        onInputChange,
        onSubmit,
        errors,
        onCheckboxChange,
        show
    } = props

return (

    <Modal size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered> 

    <form className='form-container' onSubmit={onSubmit}>

        <h2>Build Your Own Pizza</h2>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.size}</div>
          <div>{errors.sauce}</div>
        </div>

            <label>Name 
                    <input
                        value={values.name}
                        onChange={onInputChange}
                        name='name'
                        type='text'
                        placeholder="Name for the order"
                    />
            </label>

            <label>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                <select
                    onChange={onInputChange}
                    value={values.size}
                    name='size'
                    >
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>     
                </select>  
            </label>

            <h3>Choice of Sauce</h3>
                
                        <label>Original Red
                        <input
                            type='radio'
                            name='sauce'
                            value='orginal red'
                            onChange={onInputChange}
                        />
                        </label>

                        <label>Garlic Ranch
                        <input
                            type='radio'
                            name='sauce'
                            value='Garlic Ranch'
                            onChange={onInputChange}
                        />
                        </label>

                        <label>BBQ Sauces
                        <input
                            type='radio'
                            name='sauce'
                            value='BBQ sauce'
                            onChange={onInputChange}
                        />
                        </label>

                        <label>Spianch Alfredo
                        <input
                            type='radio'
                            name='sauce'
                            value='spinach alfredo'
                            onChange={onInputChange}
                        />
                        </label>

                <h3>Choice of Toppings</h3>

                <label>Pepperoni
                    <input
                        type='checkbox'
                        name='pepperoni'
                        checked={values.toppings.pepperoni}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Sausage
                    <input
                        type='checkbox'
                        name='sausage'
                        checked={values.toppings.sausage}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Bacon
                    <input
                        type='checkbox'
                        name='bacon'
                        checked={values.toppings.bacon}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <label>Pineapple
                    <input
                        type='checkbox'
                        name='pineapple'
                        checked={values.toppings.pineapple}
                        onChange={onCheckboxChange}
                    />
                    </label>

                    <h3>Special Instructions</h3>

                    <label>
                        <input
                            value={values.special_instructions}
                            onChange={onInputChange}
                            name='special_instructions'
                            type='text'
                            placeholder="Anything else you'd like to add?"
                        />
                </label>

                <button>Add to Order</button>
        
            </form>

        </Modal>
        

    )
}

