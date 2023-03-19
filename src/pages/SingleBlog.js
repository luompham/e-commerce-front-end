import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const SingleBlog = () => {
  return (
    <>
      <Meta title={'Dynamic Blog Name'} />
      <BreadCrumb title='Dynamic Blog Name' />
      <div className='blog-wrapper home-wrapper-2 py-5'>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link className='d-flex align-items-center gap-10' to='/blogs'>
                  <BsArrowLeft className='fs-4' />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src="/images/blog-1.jpg" className='img-fluid w-100 my-4' alt="blog-1" />
                <p>
                  You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money. I use it to buy my freedom. I’ve treated the waistcoat as if it were a corset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog;
