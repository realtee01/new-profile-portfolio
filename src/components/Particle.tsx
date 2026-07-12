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
        triangleMaterial.size = 0.7;
        starMaterial.size = 0.25;
      } else if (w <= 768) {
        triangleMaterial.size = 0.6;
        starMaterial.size = 0.2;
      } else {
        triangleMaterial.size = 0.5;
        starMaterial.size = 0.15;
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
    const handleScroll = () => {
      scrollY = window.scrollY;
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

      camera.position.y = (-scrollY / height) * objectDistance;

      const parallaxX = cursor.x * 0.5;
      const parallaxY = -cursor.y * 0.5;

      cameraGroup.position.x +=
        (parallaxX - cameraGroup.position.x) * 3 * deltaTime;
      cameraGroup.position.y +=
        (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

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

      const hue = Math.sin(elapsedTime * 0.3) % 1;
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

  return <div ref={mountRef} className="fixed inset-0 w-full h-full z-[-1] pointer-events-none" />;
}

