import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(true);

  const showControll = ()=>{
    setShow(!show);
  }

  const hideMe = {
    display: 'none'
  }
  const showMe = {
    display: 'flex'
  }
  
  return (
    <div className='header'>
        <div className="logo">
            <span>A<sup>2</sup>O</span>
        </div>
        <ul className="tabs" style={show ? showMe: hideMe}>
          <li> <AiOutlineClose className='close' onClick={showControll}/> </li>
            <li><a href="#home" >Home</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Portfolio</a></li>
            <li><a href="#home">Blog</a></li>
            <li><a href="#home">Contact</a></li>
            <li><a href="#home">Footer</a></li>
        </ul>
        <FaBars className="fa-bars" onClick={showControll}/> 
    </div>
  )
}

export default Header