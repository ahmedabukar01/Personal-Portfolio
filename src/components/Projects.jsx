import pro1 from '../images/work.jpg';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <h3>Somblog</h3>
        <p>Complete Blog Website with Admin management & Moderators and User Login With Authentication</p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technologies">
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
    </div>
  )
}

export default Projects