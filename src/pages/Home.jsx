import ParticleBackground from '../scripts/ParticleBackground';

import Header from "../components/Header"
import Showcase from "../components/Showcase"

const Home = () => {
  return (
    <div className='home all'>
      {/* <ParticleBackground /> */}
      <Header />
      <Showcase />
    </div>
  )
}

export default Home