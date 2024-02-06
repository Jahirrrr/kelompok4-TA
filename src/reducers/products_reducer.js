/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  // buka tutup sidebar
  if(action.type === SIDEBAR_OPEN)
  {
    console.log(action.type)
    return {...state, isSideBarOpen: true}
    
  }
  
  if(action.type === SIDEBAR_CLOSE)
  {
    console.log(action.type)
    return {...state, isSideBarOpen: false}
  }

  if(action.type === GET_PRODUCTS_BEGIN)
  { 
    console.log(action.type)
    return {...state, productsLoading:true}
  }
  // mendapatkan detail produk
  if(action.type === GET_SINGLE_PRODUCT_BEGIN)
  { 
    console.log(action.type)
    return {...state, singleLoading:true,singleError:false}
  }
  // jika sukses
  if(action.type === GET_SINGLE_PRODUCT_SUCCESS)
  { 
    console.log(action.type)
    return {...state, product:action.payload,singleLoading:false,singleError:false}
  }
  // jika gagal
  if(action.type === GET_SINGLE_PRODUCT_ERROR)
  { 
    console.log(action.type)
    return {...state,singleLoading:false,singleError:true}
  }

  if(action.type === GET_PRODUCTS_SUCCESS)
  {
    console.log(action.type)
    const featured = action.payload.filter((product)=> product.featured === true)

    return {...state, productsLoading:false,featured:featured,products:action.payload}
  }

  if(action.type === GET_PRODUCTS_ERROR)
  { 
    console.log(action.type)
    return {...state, productsLoading:false, productsError:true}
  }

  throw new Error(`Tidak cocok dengan "${action.type}" - Products Reducer Action Type`)
}

export default products_reducer
