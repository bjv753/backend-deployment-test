import React, {useContext} from 'react'
import { CartContext } from '../../../../../react-app-template-1/f/src/context/CartProvider'

const DarkBackpackCard = (props) => {

  const { addProduct1 } = useContext(CartContext)

  return (
    <div id='dark-card'>
          <img id='card-image' src={props.img}  alt="" />
          <img id='cart-btn' onClick={addProduct1} src={props.cart}  alt="" />
            <p id='price' >{props.price}</p>
    </div>
  )
}

export default DarkBackpackCard