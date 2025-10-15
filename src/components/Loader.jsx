import { useGSAP } from "@gsap/react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useRef, useEffect, useState } from "react";

const Loader = () => {
    const { progress } = useProgress();
    const loaderRef = useRef(null);
    const [displayProgress, setDisplayProgress] = useState(0);

    // Smooth percentage animation
    useEffect(() => {
        gsap.to(displayProgress, {
            value: progress,
            onUpdate: () => setDisplayProgress(Math.floor(progress)),
            duration: 0.3,
            ease: "power1.out",
        });
    }, [progress]);

    // Hide loader when progress reaches 100%
    useGSAP(() => {
        if (progress === 100 && loaderRef.current) {
            gsap.to(loaderRef.current, {
                y: "-100%",
                duration: 1,
                ease: "power2.inOut",
                onComplete: () => loaderRef.current.remove(),
            });
        }
    }, [progress]);

    return (
        <div
            ref={loaderRef}
            className="loader-screen bg-black w-screen h-screen fixed top-0 left-0 z-[100]"
        >
            <div className="flex items-center justify-center w-full h-full">
                <img src="/images/loader.gif" alt="loader" />
            </div>
            <div className="text-white font-bold text-5xl absolute bottom-10 right-10">
                {Math.floor(displayProgress)}%
            </div>
        </div>
    );
};

export default Loader;
