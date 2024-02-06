/**
 * @project P5BK_Web
 * @license MIT
 * @builtwith ReactJS
 */


import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

// menampilkan list produk
const ProductList = () => {
  const {filteredProducts:products, gridView} = useFilterContext();

  if(products.length < 1)
  {
    return <h5 style={{textTransform:'none'}}>
      ....
    </h5>
  }
  if(gridView === false)
  {
    return <ListView products = {products}>
    </ListView>
  }
  return <GridView products = {products}></GridView>
}

export default ProductList
