import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { NotFoundScreen } from "../Screens";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import { useEffect } from "react";
import CoursesScreen from "@/Screens/CoursesScreen";
import CourseOverviewScreen from "@/Screens/CourseOverviewScreen";

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
                
                {/* Legal */}
                {/* TODO: MAKE THESE */}
                {/* <Route path="/legals/terms-and-conditions" element={<TermsConditions />} />
                <Route path="/legals/privacy-policy" element={<PrivacyPolicy />} /> */}
                <Route path="/courses/all" element={<CoursesScreen/>} />
                <Route path="/courses/:id/overview" element={<CourseOverviewScreen />} />
                
                {/* 404 */}
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </Router>
    );
};

export default Navigation;
