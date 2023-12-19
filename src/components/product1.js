import './productCard.css'
import React from 'react'
import ProductCard from './productCard'
import ProductCardData from './productCardData'

function product1() {
  return (
    <div className='prod-container'>
        <h1 className='product-heading'>Wholesale Products</h1>
        <div className='product-container'>
         {ProductCardData.map((val, ind) =>{
            return(
                <ProductCard
                key={ind}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.text}
                />
            
            )
         })}
        </div>

    </div>
  )
}

export default product1