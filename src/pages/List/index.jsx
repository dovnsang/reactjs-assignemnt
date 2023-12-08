import React from 'react'
import { products } from '../../data/product'
import './styles.css'

const List = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='product-list p-3' style={{ background: '#00FFFF' }}>
                <h2 className='pb-4 border-bottom'>Lorem Products List</h2>
                {products.map((product, index) => (
                    // <Product product={product} key={index} />
                    <div className='d-flex gap-3 justify-content-start align-items-between py-2'>
                        <div className='border product-img-wrapper mw-25 flex-grow-1'>
                            <img className='product-img rounded' src={`${product.productImage}`} alt='prodcutImage' />
                        </div>
                        <div className='flex-grow-1 w-75 d-flex flex-column justify-content-between align-items-start'>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                            <div>
                                <span>
                                    Submitted by:
                                    <div className='avatar-img-wrapper d-inline-block ml-2'>
                                        <img className='avatar-img rounded-circle' src={`${product.submitterAvatar}`} alt='submitterAvatar' />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List