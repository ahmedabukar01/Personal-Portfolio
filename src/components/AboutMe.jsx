import { MdDownloadForOffline } from 'react-icons/md'
import { MdWavingHand } from 'react-icons/md';
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import ahmed from '../images/ahmed.png';

const AboutMe = () => {
  return (
    <div className='about-me all'>
      <h2>About Me</h2>
      <div className="about-content">
      <div className="profile">
          <div className="img-circle">
          <img src={ahmed} alt="ahmed" className='image'/>
          </div>
          <div className="social">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="info">
            <h3>Hi I'm Ahmed <MdWavingHand /> </h3>
            <p>
                Fullstack Developer, Content Creator and Frealancer based in Mogadisho Somalia.<br />
                Equibed with React, Node, Express, MongoDB, GraphQl, NextJs and much more Technologies.
            </p>
            <button><MdDownloadForOffline className='icon' /> Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe