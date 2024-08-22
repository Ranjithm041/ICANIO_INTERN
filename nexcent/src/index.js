import Routing from './Activity/Routing'
import ReactDOM from 'react-dom/client';
import HomePageSection from './Activity/HomePageSection'
import SecondPage from './Activity/SecondPage'
import ThirdPage from './Activity/ThirdPage'
import FourthPage from './Activity/FourthPage'
import FifthPage from './Activity/FifthPage'
import SixthPage from './Activity/SixthPage'
import Seventhpage from './Activity/Seventhpage'
import EightPage from './Activity/EightPage'
import NinthPage from './Activity/NinthPage'
import TenthPage from './Activity/TenthPage'
import Footer from './Activity/Footer'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <>
    <Routing />
    <HomePageSection/>
    <SecondPage />
    <ThirdPage />
    <FourthPage />
    <FifthPage/>
    <SixthPage />
    <Seventhpage />
    <EightPage />
    <NinthPage />
    <TenthPage />
    <Footer />
    </>
  
);