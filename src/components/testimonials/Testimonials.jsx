import React from 'react'
import './testimonials.css'
import avt1 from '../../assets/img/avatar1.jpg'
import avt2 from '../../assets/img/avatar2.jpg'
import avt3 from '../../assets/img/avatar3.jpg'
import avt4 from '../../assets/img/avatar4.jpg'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: avt1,
    name: 'Tina Snow',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
  },
  {
    avatar: avt2,
    name: 'Shatta Wale',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
  },
  {
    avatar: avt3,
    name: 'Kwame Despite',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
  },
  {
    avatar: avt4,
    name: 'Louisa McBrown',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus velit omnis deserunt corrupti perferendis quisquam officia cupiditate ut impedit magnam iusto numquam odio eos, itaque, explicabo ipsum esse dolorem unde!"
  },


];

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      
      >
     
{
  data.map(({avatar, name, review}, index) =>{
    return (
      <SwiperSlide key={index} className='testimonial'>
<div className='client__avatar'>
  <img src={avatar} alt="Avator One" />
</div>
<h5>{name}</h5>
  <small className='client__review'>
 {review}
  </small>
</SwiperSlide>
    )
  })
}
        
      </Swiper>
      
    </section>
  )
}

export default Testimonials


