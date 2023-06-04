import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img/portfolio1.jpg'
import img2 from '../../assets/img/portfolio2.jpg'
import img3 from '../../assets/img/portfolio3.jpg'
import img4 from '../../assets/img/portfolio4.jpg'
import img5 from '../../assets/img/portfolio5.png'
import img6 from '../../assets/img/portfolio6.jpg'


/*
rostandmessi2
p9bTVuZ9VVsW5IeJ
mongodb+srv://rostandmessi2:p9bTVuZ9VVsW5IeJ@reactfrontendproject.v2qe9lv.mongodb.net/
*/

const data = [
  {
    id: 1,
    image:'https://cdn.dribbble.com/userupload/7518943/file/original-b39a16475b25ac10559e04034bd8b9b7.png?compress=1&resize=1504x1128',
    title: 'Online Crypto Casino',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21632973-Online-Crypto-Casino-Mobile-Designs',
  },
  {
    id: 2,
    image:'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128',
    title: 'Education App UIX',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21637001-Education-App-UIX',
  },
  {
    id: 3,
    image:'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
    title: 'Recipe app design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
  },
  {
    id: 4,
    image:'https://cdn.dribbble.com/userupload/7527073/file/original-a56488a4a04a23bfbeb97cafc030dde5.png?compress=1&resize=1504x1128',
    title: 'OnStep - Shoes Store',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21635811-OnStep-Shoes-Store',
  },
  {
    id: 5,
    image:'https://cdn.dribbble.com/users/5147614/screenshots/17480773/media/77bbee6dafd811f65d14bd38f4c426ab.png?compress=1&resize=1200x900&vertical=top',
    title: 'Mobile App Exploration',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17480773-NWS-Mobile-App-Exploration',
  },
  {
    id: 6,
    image:'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
    title: 'Recipe app',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21636337-Recipe-app',
  }

];


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

{/* ****************** */}
{

data.map(({id, image, title, github, demo}) => {
  return (
    <article key={id} className='portfolio__item'>
<div className="portfolio__item-img">
  <img src={image} alt={title} />
</div>
<h3>{title}</h3>
<div className="portfolio__item-cta">
<a href={github} className='btn' target='_blank'>Github</a>
<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
</div>
</article>
  )
})




}
{/* ***************** */}

{/* COMMENTING STARTS HERE: */}
{/* <article className='portfolio__item'> */}
{/* <div className="portfolio__item-img"> */}
  {/* <img src={img2} alt="" /> */}
{/* </div> */}
{/* <h3>This is a portfolio item title</h3> */}
{/* <div className="portfolio__item-cta"> */}
{/* <a href="http://github.com" className='btn' target='_blank'>Github</a> */}
{/* <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
{/* </div> */}
{/* </article> */}

{/* <article className='portfolio__item'> */}
{/* <div className="portfolio__item-img"> */}
  {/* <img src={img3} alt="" /> */}
{/* </div> */}
{/* <h3>This is a portfolio item title</h3> */}
{/* <div className="portfolio__item-cta"> */}
{/* <a href="http://github.com" className='btn' target='_blank'>Github</a> */}
{/* <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
{/* </div> */}
{/* </article> */}
{/*  */}
{/* <article className='portfolio__item'> */}
{/* <div className="portfolio__item-img"> */}
  {/* <img src={img3} alt="" /> */}
{/* </div> */}
{/* <h3>This is a portfolio item title</h3> */}
{/* <div className="portfolio__item-cta"> */}
{/* <a href="http://github.com" className='btn' target='_blank'>Github</a> */}
{/* <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
{/* </div> */}
{/* </article> */}
{/*  */}
{/* <article className='portfolio__item'> */}
{/* <div className="portfolio__item-img"> */}
  {/* <img src={img4} alt="" /> */}
{/* </div> */}
{/* <h3>This is a portfolio item title</h3> */}
{/* <div className="portfolio__item-cta"> */}
{/* <a href="http://github.com" className='btn' target='_blank'>Github</a> */}
{/* <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
{/* </div> */}
{/* </article> */}
{/*  */}
{/* <article className='portfolio__item'> */}
{/* <div className="portfolio__item-img"> */}
  {/* <img src={img5} alt="" /> */}
{/* </div> */}
{/* <h3>This is a portfolio item title</h3> */}
{/* <div className="portfolio__item-cta"> */}
{/* <a href="http://github.com" className='btn' target='_blank'>Github</a> */}
{/* <a href="http://dribble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a> */}
{/* </div> */}
{/* </article> */}

      </div>
    </section>
  )
}

export default Portfolio
