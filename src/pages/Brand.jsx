import vid from '../images/vid.mp4';
import NasaParticle from '../scripts/NasaParticle';
import ParticleBackground from '../scripts/ParticleBackground';

const Brand = () => {
  return (
    <div className='brand all'>
      <NasaParticle />
        <div className="brand-content">
              <div className="video-cont">
                <video controls>
                    <source src={vid}/>
                </video>
              </div>
              <span>Published Aug 2021</span>
                <h2>Modern HTML And CSS For Beginners</h2>
                <p>Complete Course From Basic to Advanced Level for Web Dev Newbies.</p>
                <button>Visit</button>
        </div>
    </div>
  )
}

export default Brand