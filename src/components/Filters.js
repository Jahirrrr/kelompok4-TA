/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues, formatPrice } from '../utils/helpers'
import { FaCheck ,FaArrowUp, FaArrowDown} from 'react-icons/fa'
import { useState } from 'react'

const Filters = () => {
  const {filters:{text,category,color,price,company,minPrice,shipping},updateFilters,clearFilters, allProducts} = useFilterContext();
  const categories = getUniqueValues(allProducts,'category')
  const companies = getUniqueValues(allProducts,'company')
  const colors = getUniqueValues(allProducts,'colors')
  const [show,setShow] = useState(false);
  const maxPrice = 30000;

  return <Wrapper>
     <button type='button' onClick={()=>{setShow(!show)}}>
        {show ? 'Hide filters ':'Show filters '}
        {show ? <FaArrowUp/> : <FaArrowDown/>}
      </button>
    {show && <div className='content'>
      <form onSubmit={(e)=> e.preventDefault()}>
        <div className='form-control'>
          <input type='text' name='text' placeholder='search' className='search-input' value={text} onChange={updateFilters}>
          </input>
        </div>
      <div className='form-control'>
        <h5>Kategori</h5>
        <div>
          {categories.map((c,index)=>{return(<button key={index} onClick={updateFilters} name='category' type='button' className={`${category.toLowerCase() === c.toLowerCase()?'active':null}`}>{c}</button>)})}
        </div>
      </div>
      <div className='form-control'>
      </div>
      <div className='form-control'>
        <h5>
          Harga
        </h5>
        <p className='price'>
          {formatPrice(price)}
        </p>
        <input type='range' name='price' onChange={updateFilters} min={minPrice} max={maxPrice} value={price}>
        </input>
      </div>
      </form>
      <button type='button' className='clear-btn' onClick={clearFilters}>
        Bersihkan filter
      </button>
      </div>}
  </Wrapper>
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    margin-top: 1rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
