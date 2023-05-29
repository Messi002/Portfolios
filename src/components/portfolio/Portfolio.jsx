import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img/portfolio1.jpg'
import img2 from '../../assets/img/portfolio2.jpg'
import img3 from '../../assets/img/portfolio3.jpg'
import img4 from '../../assets/img/portfolio4.jpg'
import img5 from '../../assets/img/portfolio5.png'
import img6 from '../../assets/img/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img1} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
{/*  */}
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img2} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
{/*  */}
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img3} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
{/*  */}
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img3} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
{/*  */}
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img4} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
{/*  */}
<article className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={img5} alt="" />
</div>
<h3>This is a portfolio item title</h3>
<div className="portfolio__item-cta">
<a href="http://github.com" className='btn' target='_blank'>Github</a>
<a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>

      </div>
    </section>
  )
}

export default Portfolio
