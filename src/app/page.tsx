import Image from 'next/image';
import NavBar from './Components/Nav';
import AboutPage from './about/page';
import ConnectPage from './V.connect/page';
import FaqsPage from './faqs/page';
import PhotPage from './Phot/page';
import Heropage from './hero/page';
const Homepage = () => 
{
  return (
  <div>
      <Heropage />
      <PhotPage />
      <AboutPage />
      <ConnectPage />
      <FaqsPage />
    </div>
  )
};
export default Homepage;