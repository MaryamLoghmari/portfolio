import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import flowerImg from '../assets/11.png'; // relative path from your component file

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import arrowUpRight from '../assets/arrowupright.svg'; // adjust path relative to component

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
{/*      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />*/}
<div  id="about2" className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Me"
          number="01"
          text="passionate applied computer science engineering studen
"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                    <img
                        src={flowerImg}
                        alt="flower"
                        className="md:w-60 w-40 flower rounded-xl"
                    />
                </div>

                {/* Text */}
                <div className="mt-5 md:mt-0">
                  <h1 className="text-blue-50 md:text-5xl text-3xl">
BELGHITH Iyed                  </h1>
                  <p className="md:text-xl mt-2">
                     I am an IT engineering student at ENISO in Tunisia and an active member of JEENISO. I have a strong interest in modern technologies and programming languages, with hands-on experience in Python, HTML, CSS, and JavaScript. I enjoy developing innovative projects that combine technical precision with creative problem-solving. Continuously motivated to learn and improve, I actively seek opportunities to expand my skills and explore emerging tools in software and systems development.
                  </p>
                </div>
              </div>

            </div>

            <div  className="md:col-span-5 col-span-12 row-span-5">
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                      #BoostingBusinessBrilliance
                  </h1>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                      #QualityIsOurBusuiness
                  </h1>

                </div>
              </div>
            </div>

            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-center md:gap-5">
                      <img src={item.icon} alt={item.icon} />
                      <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium" >
                      <a href={item.href}>   {item.name} </a>
                      </h1>
                    </div>
                    <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">

                        <img
                            src={arrowUpRight}
                            alt="arrow-up"
                            className="md:scale-100 scale-50"
                        />

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
