import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Expenrience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      {/* frontend development */}
      <div className="experience__frontend">
        <h3>FrontEnd Development</h3>
        <div className="experience__content">
          {/* 1 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
           {/* 2 */}
           <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article> 
          {/* 3 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article> 
          {/* 4 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article> 
          {/* 5 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>TailWind</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
                    {/* 6 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
        </div>
      </div>

      {/* backend development */}
      <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
          {/* 1 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>NODE JS</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
           {/* 2 */}
           <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>MONGODB</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article> 
          {/* 3 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
           <div>
           <h4>PHP</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article> 
          {/* 4 */}
          <article className='experience__details'>
            <BsPatchCheckFill  className='experience__details-icon'/>
          <div>
          <h4>MYSQL</h4>
            <small className='text-light'>Experienced</small>
          </div>
          </article> 
          {/* 5 */}
          <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>PYTHON</h4>
            <small className='text-light'>Experienced</small>
           </div>
          </article>
          
        </div>
      </div>
    </div>
    </section>
  )
}

export default Expenrience




