import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NotFoundScreen } from "../Screens";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import TermsConditions from "../Screens/Legals/TermsConditions";
import PrivacyPolicy from "../Screens/Legals/PrivacyPolicy";
import HelpScreen from "../Screens/HelpScreen";
import { useEffect } from "react";

const Navigation = () => {

    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
    }

    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/faq" element={<HelpScreen />} />
                
                {/* Legal */}
                <Route path="/legals/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/legals/privacy-policy" element={<PrivacyPolicy />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
