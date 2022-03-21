import { MdDownloadForOffline } from 'react-icons/md'
import { MdWavingHand } from 'react-icons/md';

const AboutMe = () => {
  return (
    <div className='about-me all'>
        <div className="profile">
          
        </div>
        <div className="info">
            <h2>About Me</h2>
            <h3>Hi I'm Ahmed <MdWavingHand /> </h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Asperiores, omnis!
                Lorem ipsum, dolor sit amet consectetur 
                adipisicing elit. Asperiores, omnis!
            </p>
            <button> Download CV</button>
        </div>
    </div>
  )
}

export default AboutMe