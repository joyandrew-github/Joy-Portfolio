import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import styles from './Background3D.module.css';

function MinimalParticles() {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(800 * 3);
    const colors = new Float32Array(800 * 3);
    
    for (let i = 0; i < 800; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      const color = new THREE.Color();
      color.setHSL(0.6, 0.3, 0.7 + Math.random() * 0.3);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        size={0.8}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </Points>
  );
}

function FloatingGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -20]} rotation={[-Math.PI / 4, 0, 0]}>
      <planeGeometry args={[30, 30, 20, 20]} />
      <meshBasicMaterial
        color="#3b82f6"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  );
}

function SubtleGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 2;
    }
  });

  return (
    <mesh ref={meshRef} position={[15, 5, -15]}>
      <octahedronGeometry args={[2, 0]} />
      <meshBasicMaterial
        color="#1e293b"
        transparent
        opacity={0.15}
        wireframe
      />
    </mesh>
  );
}

// Helper to detect dark mode
function isDarkMode() {
  if (typeof window !== 'undefined') {
    return document.documentElement.classList.contains('dark');
  }
  return false;
}

export default function Background3D({ hideInDarkAbout = false, section = '' }) {
  // Hide animation if in dark mode and section is 'about' or 'projects'
  if (hideInDarkAbout && (section === 'about' || section === 'projects') && isDarkMode()) {
    return null;
  }
  return (
    <div className={styles.background3D}>
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        style={{ background: 'var(--bg)' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <MinimalParticles />
        <FloatingGrid />
        <SubtleGeometry />
      </Canvas>
    </div>
  );
}