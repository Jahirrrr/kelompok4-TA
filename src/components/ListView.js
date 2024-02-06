/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../utils/helpers'
import { Link } from 'react-router-dom'

const ListView = ({products}) => {
  return <Wrapper>
     {products.map((product)=>{
       const {id,image,name,price,description} = product;
       return (<article key={id}>
         <Link to={`/products/${id}`} className='link'>
         <img src={image} alt={name}></img>
      </Link>
         <div> 
         <Link to={`/products/${id}`}> 
           <h4>
             {name}
           </h4>
           </Link>
           <h5 className='price'>
             {formatPrice(price)}
           </h5>
           <p>
             {description.substring(0,150)}...
           </p>
         </div>
       </article>)
     })}
  </Wrapper>
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  h4 {
    color:black
  }

  article:hover {
    h4 {
      text-decoration: underline;
      cursor:pointer;
    }
  }

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }

  img:hover {
    cursor:pointer
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
