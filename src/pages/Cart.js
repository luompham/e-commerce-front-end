import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <>
      <Meta title={'Cart'} />
      <BreadCrumb title='Cart' />
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className='cart-col-1'>Product</h4>
                <h4 className='cart-col-2'>Price</h4>
                <h4 className='cart-col-3'>Quantity</h4>
                <h4 className='cart-col-4 text-end'>Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className='cart-col-1 gap-15 d-flex align-items-center'>
                  <div className='w-25'>
                    <img
                      src="/images/watch.jpg"
                      className='img-fluid'
                      alt="product image"
                    />
                  </div>
                  <div className='w-75'>
                    <p>Watch</p>
                    <p>Size: S</p>
                    <p>Color: #A85A5A</p>
                  </div>
                </div>
                <div className='cart-col-2'>
                  <h5 className="price mb-0">$ 100</h5>
                </div>
                <div className='cart-col-3 gap-15 d-flex align-items-center'>
                  <div>
                    <input
                      className='form-control'
                      type="number"
                      min={1}
                      max={10}
                      name=''
                      id=''
                    />
                  </div>
                  <div>
                    <AiFillDelete className='text-danger' />
                  </div>
                </div>
                <div className='cart-col-4'>
                  <h5 className="price mb-0 text-end">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between align-items-baseline">
                <Link to='/product' className='button'>Continue to shopping</Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Subtotal: $1000</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link
                    to='/checkout'
                    className='button'
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;
