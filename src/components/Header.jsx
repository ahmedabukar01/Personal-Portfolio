import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  const showControll = ()=>{
    setShow(!show);
  }

  const hideMe = {
    display: ''
  }
  const showMe = {
    display: 'flex'
  }
  
  return (
    <div className='header'>
        <div className="logo">
            <span>A<sup>2</sup>O</span>
        </div>
        <ul className={`tabs ${show}`}>
          <li> <AiOutlineClose className='close' onClick={()=>setShow(false)}/> </li>
            <li><a href="#home" >Home</a></li>
            <li><a href="#home">About</a></li>
            <li><a href="#home">Portfolio</a></li>
            <li><a href="#home">Blog</a></li>
            <li><a href="#home">Contact</a></li>
        </ul>
        <FaBars className="fa-bars" onClick={()=>setShow(true)}/> 
    </div>
  )
}

export default Header