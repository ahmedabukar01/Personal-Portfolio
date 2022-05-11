import pro1 from '../images/work.jpg';
import normed from '../images/phone2.PNG';
import chat from '../images/chat.png';

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
          <a href="https://github.com/ahmedabukar01/somBlog">Code</a>
          {/* <button className='not-available'>Demo</button> */}
        </div>
      </div>

      <div className="pro-wrap">
        <img src={chat} alt="pro" />
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
          <a href='https://github.com/ahmedabukar01/Realtime-Chat-App'>Code</a>
          <a href='https://www.youtube.com/watch?v=CYZrwagCcC0' className='demo'>live YT</a>
        </div>
      </div>

      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Mern Stack App</h3>
        <p>Complete Mern stack app with Redux, Sign in and register, Goal setting and deleteing, jwt Authentication </p>
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
          <a href='https://github.com/ahmedabukar01/Learn-the-MERN-Stack'>Code</a>
          {/* <a href='' className='not-available'>Demo</a> */}
        </div>
      </div>

      <div className="pro-wrap">
        <img src={normed} alt="pro" />
        <h3>Nomed Technolgy</h3>
        <p>Creative Web design and Development Agency in Mogadisho Somalia</p>
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
          <a href='https://github.com/ahmedabukar01/Normed'>Code</a>
          <a href="https://normedtechnology.me/">Demo</a>
        </div>
      </div>
    </div>
  )
}

export default Projects