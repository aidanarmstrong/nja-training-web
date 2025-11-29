import './App.css';
import CookieConsent from './Components/CookieConsent';
import Navigation from './Navigation';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const App = () => {
    return (
        <>
            <Navigation />
            <CookieConsent />
        </>
    );
}

export default App;
