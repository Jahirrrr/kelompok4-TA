/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import styled from 'styled-components'
import { useCartContext } from '../context/cart_context'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

// menghitung jumlah barang yang ingin dibeli
const CartTotals = () => {
  
  const {totalAmount,shippingFee, clearCart} = useCartContext()
  return <Wrapper>
    <div>
      <article>
        <h5>
          Jumlah Harga : <span>
            {formatPrice(totalAmount)}
          </span>
        </h5>
        <p>
          Ongkir : <span>
             {formatPrice(shippingFee)}
          </span>
        </p>
        <hr />
        <h4>
          Total Keseluruhan : <span>
            {formatPrice(totalAmount + shippingFee)}
          </span>
        </h4>
      </article>
      <a target="_blank" href="https://api.whatsapp.com/send?phone=083871689461"><button type="button" className="btn">Order Sekarang</button></a>
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
    h4,
    h5,
    p {
      display: grid;
      grid-template-columns: 200px 1fr;
    }
  }
  .btn {
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotals
