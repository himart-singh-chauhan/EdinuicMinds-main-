import { useRef, useMemo, lazy, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Shape, ExtrudeGeometry } from 'three';

const Box = ({ position, rotation }: { position: [number, number, number], rotation: [number, number, number] }) => {
    // Memoize geometry for performance
    const geometry = useMemo(() => {
        const shape = new Shape();
        const angleStep = Math.PI * 0.5;
        const radius = 1;
        shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
        shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
        shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
        shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);
        const extrudeSettings = {
            depth: 0.3,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 20,
            curveSegments: 20
        };
        const geo = new ExtrudeGeometry(shape, extrudeSettings);
        geo.center();
        return geo;
    }, []);
    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial 
                color="#232323"
                metalness={1}
                roughness={0.3}
                reflectivity={0.5}
                ior={1.5}
                emissive="#000000"
                emissiveIntensity={0}
                transparent={false}
                opacity={1.0}
                transmission={0.0}
                thickness={0.5}
                clearcoat={0.0}
                clearcoatRoughness={0.0}
                sheen={0}
                sheenRoughness={1.0}
                sheenColor="#ffffff"
                specularIntensity={1.0}
                specularColor="#ffffff"
                iridescence={1}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[100, 400]}
                flatShading={false}
                side={0}
                alphaTest={0}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<any>();
    // Throttle animation to 30fps for less CPU usage
    const lastFrame = useRef(0);
    useFrame((_, delta) => {
        const now = performance.now();
        if (now - lastFrame.current > 33) { // ~30fps
            if (groupRef.current) {
                groupRef.current.rotation.x += delta * 0.05;
            }
            lastFrame.current = now;
        }
    });
    const boxes = useMemo(() => Array.from({ length: 50 }, (_, index) => ({
        position: [(index - 25) * 0.75, 0, 0] as [number, number, number],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ] as [number, number, number],
        id: index
    })), []);
    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position}
                    rotation={box.rotation}
                />
            ))}
        </group>
    );
};

// Lazy load Canvas for performance
const LazyCanvas = lazy(() =>
  Promise.resolve({
    default: (props: any) => <Canvas {...props} />,
  })
);

export const Scene = () => {
    const cameraPosition: [number, number, number] = [5, 5, 20];
    return (
        <div className="w-full h-full z-0">
            <Suspense fallback={<div className="w-full h-full bg-gray-100 animate-pulse" />}> 
                <LazyCanvas camera={{ position: cameraPosition, fov: 40 }} dpr={[1, 1.5]} gl={{ antialias: false }}>
                    <ambientLight intensity={7} />
                    <directionalLight position={[10, 10, 5]} intensity={7} />
                    <AnimatedBoxes />
                </LazyCanvas>
            </Suspense>
        </div>
    );
};
