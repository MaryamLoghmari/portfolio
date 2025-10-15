import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
    NavBar,
    Sidebar,
    Hero,
    About,
    TechStack,
    Projects,
    Footer,
    Contact,
} from "./sections";
import Loader from "./components/Loader.jsx";

const StarsBackground = () => {
    useEffect(() => {
        const starsContainer = document.getElementById("stars");
        const numberOfStars = 150;

        if (starsContainer) starsContainer.innerHTML = "";

        for (let i = 0; i < numberOfStars; i++) {
            const star = document.createElement("div");
            star.className = "star";
            const sizes = ["small", "medium", "large"];
            star.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);
            star.style.left = Math.random() * 100 + "%";
            star.style.top = Math.random() * 100 + "%";
            star.style.animationDelay = Math.random() * 4 + "s";
            starsContainer?.appendChild(star);
        }

        const createMovingStar = () => {
            const movingStar = document.createElement("div");
            movingStar.className = "moving-star";

            const startSide = Math.random() < 0.5 ? "top" : "left";
            if (startSide === "top") {
                movingStar.style.left = Math.random() * 100 + "%";
                movingStar.style.top = "-5px";
            } else {
                movingStar.style.left = "-5px";
                movingStar.style.top = Math.random() * 100 + "%";
            }

            const speed = Math.random() * 3 + 2;
            const angle = Math.random() * 60 + 15;
            movingStar.style.setProperty("--speed", speed + "s");
            movingStar.style.setProperty("--angle", angle + "deg");

            document.body.appendChild(movingStar);
            setTimeout(() => movingStar.remove(), speed * 1000);
        };

        const createShootingStar = () => {
            const shootingStar = document.createElement("div");
            shootingStar.className = "shooting-star";
            shootingStar.style.top = Math.random() * 50 + "%";
            shootingStar.style.left = "-10px";
            document.body.appendChild(shootingStar);
            setTimeout(() => shootingStar.remove(), 3000);
        };

        const movingStarInterval = setInterval(createMovingStar, 800);
        const shootingStarInterval = setInterval(createShootingStar, 4000);

        return () => {
            clearInterval(movingStarInterval);
            clearInterval(shootingStarInterval);
        };
    }, []);

    return (
        <div
            className="stars fixed inset-0 pointer-events-none"
            id="stars"
            style={{ zIndex: 0 }}
        ></div>
    );
};

const HomePage = () => (
    <>
        <Loader/>
        <Hero />
        <About />
{/*
        <TechStack />
*/}
        <Projects />

        <Contact />
        <Footer />
    </>
);

const ProjectsPage = () => (
    <>
    </>
);

const App = () => {
    return (
        <Router>
            <div className="bg-black-100 relative">
                <StarsBackground />

                <div className="relative" style={{ zIndex: 1 }}>
                    <NavBar />
                    <Sidebar />

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
