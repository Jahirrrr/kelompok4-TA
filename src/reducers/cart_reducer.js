/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if(action.type === ADD_TO_CART)
  {
    // mencari dan mencocokan produk
    const {id, amount, product, color} = action.payload
    let tempItem = state.cart.find((i) => i.id === id + color)
    if(tempItem)
    {
      let tempCart = [...state.cart]
      tempCart.map((i) => {
        if(i.id === id + color)
        {
          let newAmount = i.amount + amount
          if(newAmount > i.max)
          {
            newAmount = i.max
          }

          return {...i, amount:newAmount}
        }
        else
        {
          return i
        }
      })

      return{...state, cart:tempCart}
    }
    else {
      const newItem = { id:id + color, name:product.name, color, amount, image:product.images[0].url, price:product.price, max:product.stock}
      return {...state, cart:[...state.cart, newItem]}
    }
    
  }
  // menghapus item didalam keranjang
  if (action.type === REMOVE_CART_ITEM)
  {
    let tempCart = state.cart.filter((i) => i.id !== action.payload)
    return {...state, cart:tempCart}
  }

  // membersihkan keranjang
  if(action.type === CLEAR_CART)
  {
    return {...state, cart:[]}
  }

  if(action.type === TOGGLE_CART_ITEM_AMOUNT)
  {
    const {id, value} = action.payload
    let tempCart = state.cart.map((i)=>{
      if(i.id === id)
      {
        if(value === 'inc'){
        let newAmount = i.amount + 1
        if(newAmount > i.max)
        {
          newAmount = i.max
        }
        return {...i, amount:newAmount}
      }
        if(value === 'dec')
        {
          let newAmount = i.amount - 1
        if(newAmount < 1)
        {
          newAmount = 1
        }
        return {...i, amount:newAmount}
        }
      }
      else{
        return i
      }

    })

    return{...state, cart:tempCart}
  }

  // menghitung total dari keranjang belanjaan
  if(action.type === COUNT_CART_TOTALS)
  {
    const {totalItems,totalAmount} = state.cart.reduce((total, cartItem)=>
    {
      const {amount,price} = cartItem
      total.totalItems += amount;
      total.totalAmount += price*amount; 
      return total
    },{ totalItems:0,totalAmount:0})

    return {...state,totalAmount,totalItems}
  }
  throw new Error(`Tidak cocok dengan "${action.type}" - Cart Reducer Action Type`)
}

export default cart_reducer