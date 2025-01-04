import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Earthlight from "../assets/earthlights1k.jpg"; // Earth texture

const GlobeComponent = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, controls, globeMesh, spotlight;

    const initScene = () => {
      const container = containerRef.current;
      const canvas = canvasRef.current;

      const sizes = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      };

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        45,
        sizes.width / sizes.height,
        1,
        1000
      );
      camera.position.set(0, 0, 20); // Adjust the position for a better view

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(sizes.width, sizes.height);
      renderer.setClearColor(0x000000, 1); // Black background

      // Lights setup
      const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Dim ambient light for overall visibility
      scene.add(ambientLight);

      spotlight = new THREE.SpotLight(0xffffff, 1.5);
      spotlight.position.set(10, 20, 30); // Position the spotlight
      spotlight.castShadow = true;
      scene.add(spotlight);

      const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
      pointLight.position.set(10, 10, 10); // Position light
      scene.add(pointLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(10, 10, 10);
      scene.add(directionalLight);

      controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.3;
      controls.enableDamping = true;
      controls.enableZoom = true;

      loadTexture();
    };

    const loadTexture = () => {
      const texture = new THREE.TextureLoader().load(Earthlight);
      const globeGeometry = new THREE.SphereGeometry(7, 128, 128); // Globe size

      const globeMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        roughness: 0.5,
        metalness: 0.1,
        emissive: 0x222222,
        emissiveIntensity: 0.1,
      });

      globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
      scene.add(globeMesh);

      spotlight.target = globeMesh;

      // Add a marker to India
      addMarkerToLocation(20.5937, 78.9629); // India coordinates (latitude, longitude)

      animate();
    };

    // Function to convert lat/lon to 3D position
    const latLonToVector = (lat, lon, radius) => {
      const phi = lat * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);

      const x = radius * Math.cos(phi) * Math.sin(theta);
      const y = radius * Math.sin(phi);
      const z = radius * Math.cos(phi) * Math.cos(theta);

      return new THREE.Vector3(x, y, z);
    };

    // Function to add marker to the scene
    const addMarkerToLocation = (lat, lon) => {
      const markerGeometry = new THREE.SphereGeometry(0.1, 5, 5); // Small marker
      const markerMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000,  // Bright green color
        emissive: 0xff0000,  // Glowing bright green
        roughness: 0.1,      // Low roughness, more reflective
        metalness: 0.8,      // More metallic appearance
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);

      // Convert lat/lon to 3D position
      const position = latLonToVector(lat, lon, 7); // Radius 7 for globe
      marker.position.copy(position);

      scene.add(marker);
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
      window.addEventListener("resize", resize);
    };

    initScene();
    listenToResize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      ></canvas>
    </div>
  );
};

export default GlobeComponent;
