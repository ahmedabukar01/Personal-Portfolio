import { AiFillGithub } from 'react-icons/ai'
import { MdDownloadForOffline } from 'react-icons/md'

const Showcase = () => {
  return (
    <div className='showcase'>
        <h1>Ahmed Abukar Omar</h1>
        <h3>FullStack Developer</h3>
        <div className="links">
            <a href="#" className='btn btn-cv'><MdDownloadForOffline className='icon'/> Download Cv</a>
            <a href="#" className='btn btn-github'><AiFillGithub className='icon'/> Github</a>
        </div>
    </div>
  )
}

export default Showcase