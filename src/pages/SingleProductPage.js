/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  Stars,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// menampilkan detail produk
const SingleProductPage = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const{singleLoading, singleError, product, fetchSingleProduct} = useProductsContext()
  useEffect(()=>{
    fetchSingleProduct(`https://raw.githubusercontent.com/Jahirrrr/api-coolfresh/main/database/produk/data/${id}.json`)
  },[id])

  useEffect(()=>{
    if(singleError)
    {
      setTimeout(()=>{navigate('/')},3000)
    }
  },[singleError])

  if(singleLoading)
  {
    return <Loading/>
  }

  if(singleError)
  {
    return <Error/>
  }

  const{name, price,id:sku, stock, stars, reviews, description, company, images, no_WA} = product;
  const apiUrl = `https://api.whatsapp.com/send?phone=${no_WA}`

  return <Wrapper>
    <PageHero title={name} product={product}>
    </PageHero>
    <div className='section section-center page'>
      <Link className='btn' to='/products'>
        Kembali ke Produk
      </Link>
      <div className='product-center'>
        <ProductImages images={images}/>
        <section className='content'>
          <h2>
            {name}
          </h2>
          <Stars stars={stars} reviews={reviews}/>
          <h5 className='price'>
            {formatPrice(price)}
          </h5>
          <p className='desc'>
            {description}
          </p>
          <p className='info'>
            <span>
              Tersedia :
            </span>
            {stock > 0 ? 'In stock': 'Out of stock'}
          </p>
          <p className='info'>
            <span>
              ID Produk :
            </span>
            {sku}
          </p>
            <hr />
            <br />
            {stock > 0 && <a target="_blank" href={apiUrl}><button type="button" className="btn">Order Sekarang</button></a>}
        </section>
      </div>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage
