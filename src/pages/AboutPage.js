/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */

import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/logo21.jpg'

const AboutPage = () => {
  return <main>
    <PageHero title={'about'}/>
    <Wrapper className='page section section-center'>
      <img src={aboutImg} alt=''/>
      <article>
        <div className='title'>
          <h2>Tentang Web</h2>
          <div className='underline'/>
        </div>
        <p>
          Website ini dibuat untuk projek Tugas Akhir Membuat suatu Produk Jadi
        </p>
        <p>
          Anggota Kelompok :
        </p>
        <p>
          - Zahir Hadi Athallah
        </p>
        <p>
          - Thiflul Ma'ani Minal Mu'min
        </p>
        <p>
          - Ruby Hardianto
        </p>
        <p>
          - Joansyah Fauzan
        </p>
        <p>
          - Muhammad Fadly Andreyand
        </p>
      </article>
    </Wrapper>
  </main>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
