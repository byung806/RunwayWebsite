import React from "react";
import Header from "@/ui/components/header";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Page from "./app/page";
import AboutUs from "./ui/pages/AboutUs";
import ContactUs from "./ui/pages/ContactUs";
import OurMission from "./ui/pages/OurMission";
import NoPage from "./ui/pages/NoPage";


const App: React.FC = () => {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Page />} />
                    <Route path="/home" element={<Page />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/our-mission" element={<OurMission />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;