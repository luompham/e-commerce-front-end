import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { IoIosGitCompare } from 'react-icons/io';
import { AiOutlineHeart } from 'react-icons/ai';


const SingleProduct = () => {
  const props = {
    width: 500,
    height: 500,
    zoomWidth: 500,
    img: "https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1"
  };

  const [orderedProduct, setOrderProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }


  return (
    <>
      <Meta title={'Dynamic Product Name'} />
      <BreadCrumb title='Dynamic Product Name' />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div><img className='img-fluid w-100' src="https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1" alt="" /></div>
                <div><img className='img-fluid w-100' src="https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1" alt="" /></div>
                <div><img className='img-fluid w-100' src="https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1" alt="" /></div>
                <div><img className='img-fluid w-100' src="https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1" alt="" /></div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className='title'>Kids headphones Bulk 10 Pack Multi Colored For Students</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className='mb-0 t-review'>(2 reviews)</p>
                  </div>
                  <a className='review-btn' href="#review">Write a review</a>
                </div>
                <div className="border-bottom py-3">
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Type:</h3>
                    <p className='product-data'>Headsets</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Brand:</h3>
                    <p className='product-data'>Havels</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Categories:</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Tags:</h3>
                    <p className='product-data'>Watch</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>SKU</h3>
                    <p className='product-data'>SKU027</p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-2'>
                    <h3 className='product-heading'>Availability:</h3>
                    <p className='product-data'>In stock</p>
                  </div>
                  <div className='d-flex gap-10 flex-column mb-3 mt-2'>
                    <h3 className='product-heading'>Size</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">L</span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                    </div>
                  </div>
                  <div className='d-flex gap-10 flex-column  mb-3 mt-2'>
                    <h3 className='product-heading'>Color</h3>
                    <Color />
                  </div>
                  <div className='d-flex gap-15 mb-3 mt-2 align-items-center'>
                    <h3 className='product-heading'>Quantity</h3>
                    <div>
                      <input
                        type="number"
                        name=''
                        min={1}
                        max={10}
                        className='form-control'
                        style={{ 'width': '70px' }}
                      />
                    </div>
                    <div className='d-flex align-items-center ms-3 gap-30'>
                      <button className='button border-0 login' type='submit'>Add to cart</button>
                      <button to='/signup' className='button signup'>Buy it now</button>
                    </div>
                  </div>
                  <div className='d-flex gap-15 align-items-center'>
                    <div>
                      <a href="">
                        <AiOutlineHeart className='fs-5 me-2' />
                        Add to wishlist
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <IoIosGitCompare className='fs-5 me-2' />
                        Add to compare
                      </a>
                    </div>
                  </div>
                  <div className='d-flex flex-column gap-10 my-3'>
                    <h3 className='product-heading'>Shipping & returns:</h3>
                    <p className='product-data'>Free shipping and returns available on all orders! <br /> We shipp all US domestic orders within <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className='d-flex gap-10 align-items-center my-3'>
                    <h3 className='product-heading'>Product link</h3>
                    <a href="javascript:void(0);"
                      onClick={() => {
                        copyToClipboard('https://i0.wp.com/ae01.alicdn.com/kf/HTB1xg6hSHvpK1RjSZPiq6zmwXXae.jpg?w=1020&ssl=1');
                      }}
                    >
                      Copy product link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="text-box bg-white p-3">
                <p > Lorem ipsum dolor sit a met consectetur adipisicing elit. Atque quaerat accusamus officia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 id='review'>Reviews</h3>
              <div className="text-box review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className='mb-0'>Base on 2 reviews</p>
                    </div>
                  </div>
                  {
                    orderedProduct && (
                      <div>
                        <a className='text-decoration-underline' href="#">Write a review</a>
                      </div>
                    )
                  }
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'>
                      </textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit a met consectetur adipisicing elit. Atque quaerat accusamus officia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Popular Products
              </h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct;
