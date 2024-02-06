/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCartContext } from '../context/cart_context'
import AmountButtons from './AmountButtons'

// menambahkan item ke keranjang
const AddToCart = ({product}) => {
  const {addToCart} = useCartContext();
  const {id, stock, colors} = product
  const[mainColor, setMainColor] = useState(colors[0]);
  const [amount,setAmount] = useState(1);

  const increase = () =>{
    setAmount((prev)=>{let tempAmount = prev+1
    if(stock > tempAmount)
    setAmount(tempAmount);
    else
    setAmount(stock);
    })
  }

  const decrease = () =>{
    setAmount((prev)=>{let tempAmount = prev-1
      if(1 < tempAmount)
      setAmount(tempAmount);
      else
      setAmount(1);
      })
  }
  return <Wrapper>
    <div className='colors'>
      <span>
        Warna :
        <div>
          {colors.map((color,index) => {return ( <button key={index} style={{background:color}} onClick={() => {setMainColor(color)}} className = {`${mainColor === color ? 'color-btn active' : 'color-btn'}`}>
            {mainColor === color ? <FaCheck/> : null}
          </button>)})}
          </div> 
      </span>
    </div>
    <div className='btn-container'>
      <AmountButtons amount={amount} increase={increase} decrease={decrease}/>
      <Link to='/cart' className='btn' onClick={()=>{addToCart(id, mainColor, amount, product)}}>
        Tambahkan ke Keranjang
      </Link>
    </div>
     </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`
export default AddToCart
