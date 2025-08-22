import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroDemo = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0B1426] via-[#1A2B3D] to-[#0D1B2A] text-white flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* 3D Background */}
      <div className='absolute inset-0 opacity-30'>
        <Scene />
      </div>

      <div className="w-full max-w-6xl space-y-12 relative z-10">
        
        {/* Main Content */}
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Badge */}
          <Badge variant="outline" className="backdrop-blur-sm bg-[#2CA6A4]/20 border-[#2CA6A4]/50 text-[#2CA6A4] hover:bg-[#2CA6A4]/30 px-6 py-2 rounded-full text-sm font-medium">
            ✨ World-Class Academic Excellence
          </Badge>
          
          {/* Main Heading */}
          <div className="space-y-6 flex items-center justify-center flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl leading-tight">
              Transform Your{" "}
              <span className="text-[#2CA6A4]">Academic</span>
              <br />
              Journey
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Access world-class education services, expert guidance, and personalized support to 
              achieve your academic dreams and unlock global opportunities.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
              <Button className="text-sm px-8 py-3 rounded-xl bg-[#2CA6A4] text-white border-0 hover:bg-[#2CA6A4]/90 transition-all duration-300 font-semibold">
                Start Your Journey
              </Button>
              <Button variant="outline" className="text-sm px-8 py-3 rounded-xl bg-transparent text-white border border-white/30 hover:bg-white/10 transition-all duration-300 font-semibold">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
          
          {/* Students Placed */}
          <div className="backdrop-blur-sm bg-white/5 border border-[#2CA6A4]/20 rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2CA6A4] mb-2">
              10K+
            </div>
            <div className="text-gray-300 font-medium">
              Students Placed
            </div>
          </div>

          {/* Success Rate */}
          <div className="backdrop-blur-sm bg-white/5 border border-[#2CA6A4]/20 rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2CA6A4] mb-2">
              95%
            </div>
            <div className="text-gray-300 font-medium">
              Success Rate
            </div>
          </div>

          {/* Partner Universities */}
          <div className="backdrop-blur-sm bg-white/5 border border-[#2CA6A4]/20 rounded-2xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#2CA6A4] mb-2">
              50+
            </div>
            <div className="text-gray-300 font-medium">
              Partner Universities
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { HeroDemo };
