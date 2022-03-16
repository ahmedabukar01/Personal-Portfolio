import {FaBars} from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <span>A<sup>2</sup>O</span>
        </div>
        <ul className="tabs">
            <li><a href="#home">Home</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Portfolio</a></li>
            <li><a href="#home">Blog</a></li>
            <li><a href="#home">Contact</a></li>
            <li><a href="#home">Footer</a></li>
        </ul>
        <FaBars style={{display: 'none'}} className="fa-bars"/>
    </div>
  )
}

export default Header