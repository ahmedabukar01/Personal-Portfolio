import { MdDownloadForOffline } from 'react-icons/md'
import { MdWavingHand } from 'react-icons/md';
import {FaFacebook, FaLinkedin, FaTwitter} from 'react-icons/fa'
import ahmed from '../images/ahmed.png';
import pdf from '../data/ahmed.pdf';

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
            <a href="https://www.facebook.com/axmed.lucky.7"><FaFacebook /></a>
            <a href="https://www.linkedin.com/in/ahmed-abukar-b712581b4/"><FaLinkedin /></a>
            <a href="https://twitter.com/Ahmed_Abukar_"><FaTwitter /></a>
          </div>
        </div>

        <div className="info">
            <h3>Hi I'm Ahmed <MdWavingHand /> </h3>
            <p>
                Fullstack Developer, Security Analyst, and CybverSecurity Enthusiast.<br />
                Equibed with React, Nextjs Node, Express, MongoDB, TypeScirpt, GraphQL and much more Technologies.
            </p>
            <a><MdDownloadForOffline className='icon' /> Downddload CV</a>
            <a href={pdf} download><MdDownloadForOffline className='icon' /> Downloddad CV</a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe