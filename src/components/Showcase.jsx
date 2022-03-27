import { AiFillGithub } from 'react-icons/ai'
import { FaHandshake } from 'react-icons/fa'

const Showcase = () => {
  return (
    <div className='showcase'>
        <h1>Ahmed Abukar Omar</h1>
        <h3>FullStack Developer</h3>
        <div className="links">
            <a href="#contact" className='btn btn-cv'><FaHandshake className='icon'/>Hire Me</a>
            <a href="https://github.com/ahmedabukar01" className='btn btn-github'><AiFillGithub className='icon'/> Github</a>
        </div>
    </div>
  )
}

export default Showcase