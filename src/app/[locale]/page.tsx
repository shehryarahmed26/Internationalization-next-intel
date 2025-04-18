// import {Link} from '@/i18n/navigation';
import Navbar from '../../components/Navbar';
import Home from '@/components/Home';
import Footer from '@/components/Footer';

 
export default function HomePage() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
      
      {/* <h1>{t('title')}</h1> */}
      {/* <Link href="/about">{t('about')}</Link> */}
    </div>
  );
}
