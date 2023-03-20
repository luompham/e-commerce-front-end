import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BsTelephone, BsInfoCircle } from 'react-icons/bs';
import Container from '../components/Container';


const Contact = () => {
  return (
    <>
      <Meta title={'Contact Us'} />
      <BreadCrumb title='Contact Us' />
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d823.4429485014862!2d106.70721019716139!3d10.96511962216585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1cc096c5f0f%3A0xa487d5220cdaa477!2zTmjDoCBIw6BuZyBUaeG7h2MgQ8aw4bubaSBUcsO6YyBNYWk!5e0!3m2!1sen!2s!4v1678970714826!5m2!1sen!2s" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className='contact-title mb-4'>Contact</h3>
                <form action="" className='d-flex flex-column gap-15'>
                  <div>
                    <input type="text" className="form-control" placeholder='Name' />
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className="form-control"
                      placeholder='Mobile Number' />
                  </div>
                  <div>
                    <textarea name="" className='w-100 form-control' id="" cols="30" rows="4" placeholder='Comments'>
                    </textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5' />
                      <address className='mb-0'>No 2/83, Binh Thuan 1 Ward, Thuan Giao, Thuan An, Binh Duong.
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsTelephone className='fs-5' />
                      <a href="+84 363 522 969">+84 363 522 969</a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5' />
                      <a href="mailto:luompham95@gmail.com">
                        luompham95@gmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-items-center'>
                      <BsInfoCircle className='fs-5' />
                      <p className='mb-0'>Monday-Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact;
