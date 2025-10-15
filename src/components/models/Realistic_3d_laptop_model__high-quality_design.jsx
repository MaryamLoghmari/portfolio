import { useRef, useEffect, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


export function DemoComputer({ texture = [], ...props }) {
    const group = useRef();
    const { nodes, materials } = useGLTF("/models/realistic_3d_laptop_model__high-quality_design-transformed.glb");

    // Handle multiple textures
    const [currentTextureIndex, setCurrentTextureIndex] = useState(0);
    const imageTexture = useTexture(texture[currentTextureIndex]);

    // Configure texture properties
    useEffect(() => {
        if (imageTexture) {
            imageTexture.flipY = false; // Adjust if image appears upside down
            imageTexture.wrapS = THREE.ClampToEdgeWrapping;
            imageTexture.wrapT = THREE.ClampToEdgeWrapping;
            imageTexture.minFilter = THREE.LinearFilter;
            imageTexture.magFilter = THREE.LinearFilter;
            imageTexture.needsUpdate = true;
        }
    }, [imageTexture]);

    // Auto-cycle textures every 5 seconds
    useEffect(() => {
        if (texture.length > 1) {
            const interval = setInterval(() => {
                setCurrentTextureIndex((prev) => (prev + 1) % texture.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [texture]);

    // Initial rotation animation for laptop
    useGSAP(() => {
        gsap.from(group.current.rotation, {
            y: Math.PI / 2,
            duration: 1,
            ease: 'power3.out',
        });
    }, []);

    return (
        <group ref={group} {...props} dispose={null}>
            {/* Laptop body parts */}
            <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.PaletteMaterial002} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial003} />
            <mesh geometry={nodes.Object_11.geometry} material={materials.PaletteMaterial004} />

            <mesh
                geometry={nodes.Object_14.geometry}
                material={new THREE.MeshBasicMaterial({ color: 0x000000 })}
                position={[0.002, 0.193, -1.356]}
                rotation={[-1.559, 0, 0]}
            />

            {/* NEW: Separate screen plane with your texture */}
            <mesh
                position={[-0.01, 1.55, -1.25]}
                rotation={[0.03, 0, 3.15]}
            >
                <planeGeometry args={[4, 2.7]} /> {/* Adjust width/height to fit your screen perfectly */}
                <meshBasicMaterial
                    map={imageTexture}
                    toneMapped={false}
                    transparent={false}
                />
            </mesh>
        </group>
    );
}

useGLTF.preload("/models/realistic_3d_laptop_model__high-quality_design-transformed.glb");

export default DemoComputer;