
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

// Local:            http://localhost:3001
// On Your Network:  http://192.168.1.209:3001
//  192.168.137.1

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com" target='_blank'><FaGithub/></a>
        <a href='https://facebook.com' target='blank'><FaFacebookF/> </a>
<a href='https://twitter.com' target='blank'><CgTwitter/> </a>
      
    </div>
  )
}

export default HeaderSocials
