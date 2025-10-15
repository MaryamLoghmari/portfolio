import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function ContactBoy(props) {
    const { nodes, materials } = useGLTF("/models/LOGO-transformed.glb");
    const modelRef = useRef();

    // 🔄 Rotate continuously on Z-axis
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.z += 0.01; // speed of rotation
        }
    });

    return (
        <group ref={modelRef} {...props} dispose={null} scale={1.5}>
            {/* scale = size multiplier (1 = normal, >1 = bigger) */}
            <mesh
                geometry={nodes.material001.geometry}
                material={materials["Material.001"]}
                rotation={[Math.PI, 0, 0]} // keep your original X rotation
            />
        </group>
    );
}

useGLTF.preload("/models/LOGO-transformed.glb");
