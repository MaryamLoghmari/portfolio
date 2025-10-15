import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isActive, isDimmed }) => {
    const [decal] = useTexture([imgUrl || ""]);
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Smooth scale transition
            const targetScale = isActive ? 3.2 : isDimmed ? 2.2 : 2.75;
            meshRef.current.scale.lerp(
                new THREE.Vector3(targetScale, targetScale, targetScale),
                0.1
            );

            // Smooth opacity transition for material
            const targetOpacity = isDimmed ? 0.3 : 1;
            if (meshRef.current.material) {
                meshRef.current.material.opacity = THREE.MathUtils.lerp(
                    meshRef.current.material.opacity,
                    targetOpacity,
                    0.1
                );
                meshRef.current.material.transparent = true;
            }
        }
    });

    return (
        <Float
            speed={isActive ? 2.5 : 1.75}
            rotationIntensity={isActive ? 2 : 1}
            floatIntensity={isActive ? 3 : 2}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color={isActive ? '#ffd700' : '#fff8eb'}
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                {imgUrl && (
                    <Decal
                        position={[0, 0, 1]}
                        rotation={[2 * Math.PI, 0, 6.25]}
                        scale={1}
                        map={decal}
                        flatShading
                    />
                )}
            </mesh>
        </Float>
    );
};

const BallCanvas = ({ icon, isActive, isDimmed }) => {
    return (
        <Canvas
            frameloop='always'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
        >
                <OrbitControls enableZoom={false} />
                <Ball imgUrl={icon} isActive={isActive} isDimmed={isDimmed} />

            <Preload all />
        </Canvas>
    );
};

export default BallCanvas;