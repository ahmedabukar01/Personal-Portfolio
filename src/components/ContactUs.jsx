import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <div className="my-info">
        <div className="single-info">
          <FaMapMarkerAlt />
          <div>
            <h4>Location</h4>
            <p>Mogadisho</p>
          </div>
        </div>
        <div className="single-info">
          <AiFillPhone />
          <div>
            <h4>Phone</h4>
            <p>0616119634</p>
          </div>
        </div>
        <div className="single-info">
          <MdEmail />
          <div>
            <h4>Email</h4>
            <p>Ahmedabukar34@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs