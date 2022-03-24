import pro1 from '../images/work.jpg';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Somblog</h3>
        <p>Complete Blog Website with Login and Registration user Authentication & Admin management & Moderators</p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technologies">
            <div>Bcrypt js</div>
            <div>React</div>
            <div>Node js</div>
            <div>Exress</div>
            <div>MongoDB</div>
            <div>JWT Authentication</div>
            <div>CSS</div>
          </div>
        </div>
        <div className="btn-pro">
          <button>Code</button>
          <button>Demo</button>
        </div>
      </div>

      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Chat App</h3>
        <p>Realtime Chat App With Socketio. chat rooms with colored message sents & multible user.</p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technologies">
            <div>Socket-io</div>
            <div>React</div>
            <div>Node js</div>
            <div>Exress</div>
            <div>MongoDB</div>
            <div>CSS</div>
          </div>
        </div>
        <div className="btn-pro">
          <button>Code</button>
          <button className='demo'>Demo</button>
        </div>
      </div>

      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Mern Stack App</h3>
        <p>Complete Mern stack app with Redux, Goal Setting App, sign in and register, goal setting and deleteing, jwt Authentication </p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technologies">
            <div>Redux Toolkit</div>
            <div>Bcrypt js</div>
            <div>React</div>
            <div>Node js</div>
            <div>Exress</div>
            <div>MongoDB</div>
            <div>JWT Authentication</div>
            <div>CSS</div>
          </div>
        </div>
        <div className="btn-pro">
          <button>Code</button>
          <button>Demo</button>
        </div>
      </div>

      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Nomed Technolgy</h3>
        <p>Web Designing Agency</p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technologies">
            <div>CSS</div>
            <div>Flexible Box</div>
            <div>React js</div>
            <div>Netlify</div>
          </div>
        </div>
        <div className="btn-pro">
          <button>Code</button>
          <button>Demo</button>
        </div>
      </div>
    </div>
  )
}

export default Projects