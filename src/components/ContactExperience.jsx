import { Canvas } from "@react-three/fiber";
import { ContactBoy } from "./models/ContactBoy";

const ContactExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}   gl={{ physicallyCorrectLights: true }}>
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={10} color={"#ffffff"} />
      <group rotation={[30,0,0]}>

        <ContactBoy scale={0.8} position={[-0.5,-1.5, -0.5]} />

      </group>
    </Canvas>
  );
};

export default ContactExperience;
