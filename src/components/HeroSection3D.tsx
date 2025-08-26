import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Star, BookOpen, Users, Award } from 'lucide-react'

// Animated 3D Box Component
function AnimatedBox({ position, color, size = 1 }: any) {
  const meshRef = useRef<any>()
  
  useFrame((state) => {
    if (meshRef.current) {
  meshRef.current.rotation.x = state.clock.elapsedTime * 0.8 // Increased speed
  meshRef.current.rotation.y = state.clock.elapsedTime * 0.8 // Increased speed
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={size}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.25} />
    </mesh>
  )
}

// 3D Scene Component
function ThreeDScene() {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <AnimatedBox position={[-3, 2, 0]} color="#2CA6A4" size={0.8} />
      <AnimatedBox position={[3, 1, -2]} color="#1E4660" size={1.2} />
      <AnimatedBox position={[0, -1, 2]} color="#2CA6A4" size={0.6} />
      <AnimatedBox position={[-2, -2, -1]} color="#1E4660" size={0.9} />
      <AnimatedBox position={[2, 3, 1]} color="#2CA6A4" size={0.7} />
    </>
  )
}

const HeroSection3D: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ThreeDScene />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Badge variant="outline" className="bg-white/80 border-[#2CA6A4] text-[#1E4660] px-4 py-2 text-sm">
              <Star className="w-4 h-4 mr-2 text-[#2CA6A4]" />
              #1 Rated Educational Platform
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#1E4660] leading-tight"
          >
            Transform Your
            <span className="block text-[#2CA6A4]">
              Learning Journey
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Unlock your potential with our innovative courses, expert mentorship, 
            and cutting-edge learning technology. Join thousands of successful learners.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 py-4"
          >
            <div className="flex items-center space-x-2 text-[#1E4660]">
              <Users className="w-6 h-6 text-[#2CA6A4]" />
              <span className="text-lg font-semibold">50,000+ Students</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1E4660]">
              <BookOpen className="w-6 h-6 text-[#2CA6A4]" />
              <span className="text-lg font-semibold">100+ Courses</span>
            </div>
            <div className="flex items-center space-x-2 text-[#1E4660]">
              <Award className="w-6 h-6 text-[#2CA6A4]" />
              <span className="text-lg font-semibold">95% Success Rate</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
          >
            <Button 
              size="lg" 
              className="bg-[#2CA6A4] hover:bg-[#2CA6A4]/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#1E4660] text-[#1E4660] hover:bg-[#1E4660] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Explore Courses
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="pt-8"
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by students from</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-[#1E4660] font-bold text-lg">IIT</div>
              <div className="text-[#1E4660] font-bold text-lg">NIT</div>
              <div className="text-[#1E4660] font-bold text-lg">BITS</div>
              <div className="text-[#1E4660] font-bold text-lg">VIT</div>
              <div className="text-[#1E4660] font-bold text-lg">MIT</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
      >
        <BookOpen className="w-8 h-8 text-[#2CA6A4]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-32 right-20 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
      >
        <Award className="w-8 h-8 text-[#1E4660]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 left-20 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
      >
        <Users className="w-8 h-8 text-[#2CA6A4]" />
      </motion.div>
    </section>
  )
}

export default HeroSection3D
