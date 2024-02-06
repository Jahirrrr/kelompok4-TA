/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return <Wrapper className='page-100'>
    <section>
      <h1>
        404
      </h1>
      <h3>
        Laman tidak ditemukan, pastikan kamu memasukkan url yang benar yaaa!
      </h3>
      <Link to='/' className='btn'>
          Kembali ke Beranda
      </Link>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
