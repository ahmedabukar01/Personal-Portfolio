import pro1 from '../images/work.jpg';

const Projects = () => {
  return (
    <div className='projects'>
      <div className="pro-wrap">
        <img src={pro1} alt="pro" />
        <p></p>
        <div className="tech">
          <div className="tech-name">Tech</div>
          <div className="technoligies">
            <div>React</div>
            <div>React</div>
            <div>React</div>
            <div>React</div>
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