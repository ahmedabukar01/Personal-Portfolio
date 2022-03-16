import {FaBars} from 'react-icons/fa';

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
            <span>A<sup>2</sup>O</span>
        </div>
        <ul className="tabs">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Footer</li>
        </ul>
        <FaBars style={{display: 'none'}} className="fa-bars"/>
    </div>
  )
}

export default Header