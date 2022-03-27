import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className="my-info">
        <div className="single-info">
          <FaMapMarkerAlt className='icon-info'/>
          <div>
            <h4>Location</h4>
            <p>Mogadisho</p>
          </div>
        </div>
        <div className="single-info">
          <AiFillPhone className='icon-info'/>
          <div>
            <h4>Phone</h4>
            <p>0616119634</p>
          </div>
        </div>
        <div className="single-info">
          <MdEmail className='icon-info'/>
          <div>
            <h4>Email</h4>
            <p>Ahmedabukar34@gmail.com</p>
          </div>
        </div>
      </div>
      <h2>Get in Touch</h2>
      <form>
        <div className="input-field">
          <input type="text"  placeholder='Name'/>
        </div>
        <div className="input-field">
          <input type="email"  placeholder='Email'/>
        </div>
        <div className="input-field">
          <textarea  placeholder="Message"></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactUs