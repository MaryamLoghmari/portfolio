import { useState } from "react";
import BallCanvas from "../components/models/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import TitleHeader from "../components/TitleHeader.jsx";

const Tech = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [selectedTech, setSelectedTech] = useState(null);

    const handleMouseEnter = (techName) => {
        setHoveredTech(techName);
    };

    const handleMouseLeave = () => {
        setHoveredTech(null);
    };

    const handleClick = (tech) => {
        setSelectedTech(selectedTech?.name === tech.name ? null : tech);
    };

    const getActiveTech = () => hoveredTech || selectedTech?.name;

    return (
        <div id="tech" className="relative">
            <TitleHeader
                title="tech "
                number="02"
                text=""
            />
            <br/><br/><br/>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => {
                    const isActive = getActiveTech() === technology.name;
                    const isDimmed = getActiveTech() && getActiveTech() !== technology.name;

                    return (
                        <div
                            className={`w-28 h-28 cursor-pointer transition-all duration-500 ease-out ${
                                isActive ? 'transform -translate-y-8 scale-110 z-10' :
                                    isDimmed ? 'transform translate-y-4 scale-90 opacity-40' :
                                        'transform translate-y-0 scale-100'
                            }`}
                            key={technology.name}
                            onMouseEnter={() => handleMouseEnter(technology.name)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(technology)}
                        >

                            <BallCanvas
                                icon={technology.icon}
                                isActive={isActive}
                                isDimmed={isDimmed}
                            />


                            <div className={`text-center mt-2 transition-all duration-300 ${
                                isActive ? 'text-white font-semibold transform scale-105' :
                                    isDimmed ? 'text-gray-500 opacity-50' : 'text-gray-300'
                            }`}>
                                <span className="text-xs font-medium">{technology.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {(hoveredTech || selectedTech) && (
                <div className="mt-12 transition-all duration-500 ease-out">
                    {(() => {
                        const tech = technologies.find(t => t.name === (hoveredTech || selectedTech?.name));
                        return tech ? (
                            <div className="max-w-2xl mx-auto text-center">
                                {/* Technology Header */}
                                <div className="flex items-center justify-center gap-4 mb-4">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-8 h-8 opacity-90"
                                    />
                                    <h3 className="text-white font-bold text-2xl">{tech.name}</h3>
                                </div>

                                {/* Description Text */}
                                <p className="text-gray-300 text-lg leading-relaxed px-4">
                                    {tech.description || `${tech.name} is a powerful technology I use in my development projects. It helps me build robust and scalable applications with modern best practices.`}
                                </p>


                            </div>
                        ) : null;
                    })()}
                </div>
            )}


        </div>
    );
};

export default SectionWrapper(Tech, "");