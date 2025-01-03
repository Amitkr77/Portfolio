import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Earthlight from '../assets/earthlights1k.jpg'; // High-res Earthlight texture

const GlobeComponent = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls;
    let globeMesh;

    const initScene = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;

      const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000);
      camera.position.set(0, 0, 30); // Adjusted for smaller globe

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setClearColor(0x000000, 1);

      const ambientLight = new THREE.AmbientLight(0x555555, 1);
      scene.add(ambientLight);

      const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
      pointLight.position.set(30, 30, 30);
      scene.add(pointLight);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableDamping = true;
      controls.enableZoom = true;
      controls.minPolarAngle = Math.PI / 6;
      controls.maxPolarAngle = Math.PI / 1.5;

      loadTexture();
    };

    const loadTexture = () => {
      const texture = new THREE.TextureLoader().load(Earthlight);
      const globeGeometry = new THREE.SphereGeometry(7, 128, 128); // Reduced radius for a smaller globe

      const globeMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.3,
        metalness: 0.5,
        emissive: 0x222222,
        emissiveIntensity: 0.4,
      });

      globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globeMesh);

      animate();
    };

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    const resize = () => {
      const container = containerRef.current;
      const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    const listenToResize = () => {
      window.addEventListener('resize', resize);
    };

    initScene();
    listenToResize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-2/4 h-full -ml-20" ref={containerRef}>
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
    </div>
  );
};

export default GlobeComponent;
