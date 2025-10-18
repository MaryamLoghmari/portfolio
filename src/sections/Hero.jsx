import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";
import LazySection from "../components/LazySection";
import arrowDown from '../assets/arrowdown.svg'; // adjust path relative to component

const Hero = () => {
  return (
      <section
          id="home"
          className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-0 px-5"
      >
        <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>

        {/* Lazy load spheres */}
          <GradientSpheres
              sphere1Class="gradient-sphere sphere-1"
              sphere2Class="gradient-sphere sphere-2"
          />

        <div className="w-full h-full flex-center">
          <div className="container relative w-full h-full">
            <div className="md:mt-40 mt-20">
              <p className="font md:text-2xl text-base">👋 Hey, I&apos;m Here</p>
              <h1 className="font-bold md:text-9xl text-5xl">LOGHMARI</h1>
              <h1 className="font-bold md:text-9xl text-5xl">MARYEM</h1>
            </div>
            <div className="absolute w-full z-30 bottom-20 right-0">
              <div className="flex justify-between items-end">
                <div className="flex flex-col items-center md:gap-5 gap-1">
                  <p className="md:text-base text-xs">Explore</p>

                  <img
                      src={arrowDown}
                      alt="arrowdown"
                      className="size-7 animate-bounce"
                  />

                </div>
                <div className="flex flex-col items-end">
                  <h5 className="font-bold md:text-5xl text-33xl">
                    ENGINEERING STUDENT                 </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </section>
  );
};

export default Hero;
