import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Particle() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    let width = window.innerWidth;
    let height = window.innerHeight;

    const objectDistance = 4;
    const trianglesCount = 55;
    const starsCount = 400;

    // Textures
    const textureLoader = new THREE.TextureLoader();
    const triangleTexture = textureLoader.load("/textures/triangle.png");
    triangleTexture.colorSpace = THREE.SRGBColorSpace;
    const starTexture = textureLoader.load("/textures/star.png");
    starTexture.colorSpace = THREE.SRGBColorSpace;

    const material = new THREE.MeshStandardMaterial({
      color: "#ffeded",
      roughness: 0.6,
      metalness: 0.2,
    });

    const homeMesh = new THREE.Mesh(
      new THREE.DodecahedronGeometry(1, 0),
      material
    );
    const aboutMeMesh = new THREE.Mesh(
      new THREE.TorusGeometry(0.75, 0.35, 30),
      material
    );
    const contactMesh = new THREE.Mesh(
      new THREE.ConeGeometry(0.85, 1.5),
      material
    );

    scene.add(homeMesh, aboutMeMesh, contactMesh);

    const objectsContainer = [homeMesh, aboutMeMesh, contactMesh];

    // Particles
    const createParticlePositions = (count: number) => {
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] = (Math.random() - 0.5) * 10;
        positions[i3 + 1] =
          objectDistance *
          0.5 *
          (Math.random() - 0.5) *
          objectDistance *
          5; // Adjusted to spread further since page can scroll a lot
        positions[i3 + 2] = (Math.random() - 0.5) * 10;
      }
      return positions;
    };

    const trianglePositions = createParticlePositions(trianglesCount);
    const starPositions = createParticlePositions(starsCount);
    
    // Precompute random multipliers for performance
    const starRandoms = new Float32Array(starsCount * 2);
    for (let i = 0; i < starsCount; i++) {
      starRandoms[i * 2] = Math.random() * 0.0015;
      starRandoms[i * 2 + 1] = Math.random() * 0.0012;
    }

    const triangleGeometry = new THREE.BufferGeometry();
    triangleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(trianglePositions, 3)
    );

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );

    const createParticleMaterial = (texture: THREE.Texture) => {
      return new THREE.PointsMaterial({
        sizeAttenuation: true,
        map: texture,
        depthWrite: false,
        transparent: true,
        blending: THREE.AdditiveBlending,
      });
    };

    const triangleMaterial = createParticleMaterial(triangleTexture);
    const starMaterial = createParticleMaterial(starTexture);

    const triangle = new THREE.Points(triangleGeometry, triangleMaterial);
    const star = new THREE.Points(starGeometry, starMaterial);
    scene.add(triangle, star);

    const adjustObjectsAndParticles = (w: number) => {
      if (w <= 480) {
        homeMesh.scale.set(0.4, 0.4, 0.4);
        aboutMeMesh.scale.set(0.45, 0.45, 0.45);
        contactMesh.scale.set(0.55, 0.55, 0.55);
        homeMesh.position.y = objectDistance * 0.35;
        aboutMeMesh.position.y = -objectDistance * 0.75;
        contactMesh.position.y = -objectDistance * 2.4;
        homeMesh.position.x = 0.65;
        aboutMeMesh.position.x = 0.5;
        contactMesh.position.x = -0.5;
        triangleMaterial.size = 0.7;
        starMaterial.size = 0.25;
      } else if (w <= 768) {
        homeMesh.scale.set(0.55, 0.55, 0.55);
        aboutMeMesh.scale.set(0.6, 0.6, 0.6);
        contactMesh.scale.set(0.6, 0.6, 0.6);
        homeMesh.position.y = objectDistance * 0.2;
        aboutMeMesh.position.y = -objectDistance * 0.85;
        contactMesh.position.y = -objectDistance * 2.5;
        homeMesh.position.x = 1;
        aboutMeMesh.position.x = 0.5;
        contactMesh.position.x = -0.5;
        triangleMaterial.size = 0.8;
        starMaterial.size = 0.3;
      } else {
        homeMesh.scale.set(0.85, 0.85, 0.85);
        aboutMeMesh.scale.set(0.9, 0.9, 0.9);
        contactMesh.scale.set(0.9, 0.9, 0.9);
        homeMesh.position.y = objectDistance * 0.15;
        aboutMeMesh.position.y = -objectDistance * 0.85;
        contactMesh.position.y = -objectDistance * 2;
        homeMesh.position.x = 1.55;
        aboutMeMesh.position.x = -2.3;
        contactMesh.position.x = 1;
        triangleMaterial.size = 1.0;
        starMaterial.size = 0.3;
      }
    };
    adjustObjectsAndParticles(width);

    // Lights
    const directionalLight = new THREE.DirectionalLight(0x518ffc, 3);
    directionalLight.position.set(-7, 8, 5);
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0x00fffc, 0.15);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff9000, 6.5, 10);
    pointLight.position.set(2, -2, 2.5);
    scene.add(pointLight);

    // Camera
    const cameraGroup = new THREE.Group();
    scene.add(cameraGroup);
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.z = 6;
    cameraGroup.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Make sure we replace any existing canvas
    if (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild);
    }
    mountRef.current.appendChild(renderer.domElement);

    // Event Listeners
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      adjustObjectsAndParticles(width);
    };
    window.addEventListener("resize", handleResize);

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const cursor = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      cursor.x = event.clientX / width - 0.5;
      cursor.y = event.clientY / height - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Animation Loop
    const clock = new THREE.Clock();
    let prevTime = 0;
    let animationFrameId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - prevTime;
      prevTime = elapsedTime;

      // Smooth scroll lerp
      scrollY += (targetScrollY - scrollY) * Math.min(deltaTime * 8, 1.0);
      camera.position.y = (-scrollY / height) * objectDistance;

      const parallaxX = cursor.x * 0.5;
      const parallaxY = -cursor.y * 0.5;

      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 3 * deltaTime;
      cameraGroup.position.y +=
        (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

      for (const obj of objectsContainer) {
        obj.rotation.x += deltaTime * 0.18;
        obj.rotation.y += deltaTime * 0.15;
        obj.rotation.z += deltaTime * 0.11;
      }

      for (let i = 0; i < trianglesCount; i++) {
        const i3 = i * 3;
        triangleGeometry.attributes.position.array[i3] +=
          Math.cos(elapsedTime + i3) * 0.001;
        triangleGeometry.attributes.position.array[i3 + 1] +=
          Math.sin(elapsedTime + i3) * 0.001;
      }

      for (let i = 0; i < starsCount; i++) {
        const i3 = i * 3;
        starGeometry.attributes.position.array[i3] -=
          Math.cos(elapsedTime + i3) * starRandoms[i * 2];
        starGeometry.attributes.position.array[i3 + 1] -=
          Math.sin(elapsedTime + i3) * starRandoms[i * 2 + 1];
      }

      triangleGeometry.attributes.position.needsUpdate = true;
      starGeometry.attributes.position.needsUpdate = true;

      const hue = (Math.sin(elapsedTime * 0.1) * 0.5 + 0.5) % 1;
      triangleMaterial.color.setHSL(hue, 0.5, 0.5);

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(tick);
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(animationFrameId);
      
      // Clean up Three.js resources
      triangleGeometry.dispose();
      starGeometry.dispose();
      triangleMaterial.dispose();
      starMaterial.dispose();
      renderer.dispose();
      
      if (mountRef.current && renderer.domElement) {
        try {
            mountRef.current.removeChild(renderer.domElement);
        } catch(e) {}
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 w-full h-full z-0 pointer-events-none" />;
}

