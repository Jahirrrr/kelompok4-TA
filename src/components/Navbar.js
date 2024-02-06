/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { links } from '../utils/constants'
import { useProductsContext } from '../context/products_context'

const Nav = () => {
const {openSideBar} = useProductsContext()
  return(
  <NavContainer>
    <div className='nav-center'>
      <div className='nav-header'>
        <Link to='/'>
        <h3>Kelompok 4</h3>
        </Link>
        <button type='button' className='nav-toggle' onClick={openSideBar}>
          <FaBars/>
        </button>
      </div>
      <ul className='nav-links'>
        {
          links.map((link)=> {
            return(
            <li key={link.id}>
              <Link to={link.url}>
                {link.text}
              </Link>
            </li>)
          })
        }
      </ul>
    </div>
  </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 
  {
    font-family: Brush Script MT, cursive; 
    color: var(--clr-primary-5);
    margin-top: 1rem;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default Nav
