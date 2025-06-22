import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star.png'
import star_icon_empty from '../Assets/white-star.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img className='star' src={star_icon} alt="" />
                <img className='star' src={star_icon} alt="" />
                <img className='star' src={star_icon} alt="" />
                <img className='star' src={star_icon} alt="" />
                <img className='empty-star' src={star_icon_empty} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-price-new">${product.new_price}</div>
                <div className="productdisplay-price-old">${product.old_price}</div>
            </div>
            <div className='productdisplay-description'>
                Fuel your fitness goals with our premium Whey Protein Powder, crafted for athletes, bodybuilders,
                and anyone serious about performance. Each scoop delivers high-quality protein to support muscle 
                growth, faster recovery, and improved strength.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div className="productdisplay-right-size-option">1kg</div>
                    <div className="productdisplay-right-size-option">2kg</div>
                    <div className="productdisplay-right-size-option">5kg</div>
            </div>
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay