import { Canvas } from "@react-three/fiber";
import { HeroBoy} from "./models/Boy";

const HeroExperience = () => {
    return (
        <Canvas>
            <ambientLight />
            <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ffffff"} />
            <directionalLight position={[2, 0, 3]} intensity={3} color={"#1C34FF"} />

            <group>
                <HeroBoy scale={9} position={[0, -15, 0]} />
            </group>
        </Canvas>
    );
};

export default HeroExperience;