import vid from '../images/vid.mp4';

const Brand = () => {
  return (
    <div className='brand all'>
        <div className="brand-content">
            <div className="left">
              <div className="video-cont">
                <video controls>
                    <source src={vid}/>
                </video>
              </div>
              <span>Published Aug 2021</span>
              <button>Visit</button>
            </div>
            <div className="right">
                <h2>Modern HTML And CSS For Beginners</h2>
                <p>Complete Course From Basic to Advanced Level for Web Dev Newbies.</p>
            </div>
        </div>
    </div>
  )
}

export default Brand