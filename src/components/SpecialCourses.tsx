import { useState } from 'react';
import { Star, Users, Award, Code, Database, Smartphone, Palette, Play } from 'lucide-react';

const SpecialCourses = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const categories = [
    { id: 'All', name: 'All Courses', icon: Award },
    { id: 'MBA', name: 'Master Degrees', icon: Code },
    { id: 'Diploma', name: 'Graduate Diploma', icon: Database },
    { id: 'Certificate', name: 'Graduate Certificate', icon: Smartphone },
    { id: 'Specialisations', name: 'MBA (Specialisations Only)', icon: Palette },
  ];

  const courses = [
    {
      id: 1,
      title: "MBA – Master of Business Administration",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.8,
      students: 1245,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYor6SBBPaiCQ08k7_-uKb9Zb_y1EBT5ysg&s"
    },
    {
      id: 2,
      title: "Master of Business Analytics",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.8,
      students: 1245,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUZvxt7FGvte8XT1qTSepjW0C6D5XXYYH60A&s"
    },
    {
      id: 3,
      title: "Master of Business Analytics (Extension)",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.8,
      students: 1245,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZvq4rML8_u_7mPF5tWmcbNgG_wTQ1xWvrH_jWYjSTOKdxdkV7kY9enSFCjG5goEJLKA&usqp=CAU"
    },
    {
      id: 4,
      title: "Master of Business Analytics (Information Technology)",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.7,  
      students: 987,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTomCSzAEdWtAAUkFoZTxdNbGuVmi7cPSeh6A&s"
    },
    {
      id: 5,
      title: "Master of Information Technology",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.9,
      students: 856,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUaQV9uWdjTeRqh2ZjRoxW7KoLEBUgRsF9vQ&s"
    },
    {
      id: 6,
      title: "Master of Information Technology (Extension)",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.6,
      students: 1123,
      image: "https://www.computerdegreesonline.org/wp-content/uploads/2024/12/Information-Technology-Masters-Degree-Online-scaled.webp"
    },
    {
      id: 7,
      title: "Master of Professional Accounting",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.9,
      students: 765,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr0h5DM2mOyq_HAP22upAfxDfsHXqGWkG7eQ&s"
    },
    {
      id: 8,
      title: "Master of Accounting",
      category: "MBA",
      categoryName: "MBA",
      rating: 4.7,
      students: 932,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4Lcfx9n1zd_OKd3c9stcIVj__vcybhq0oA&s"
    },
    {
      id: 9,
      title: "Graduate Diploma of Business Administration",
      category: "Diploma",
      categoryName: "Graduate Diploma",
      rating: 4.8,
      students: 1456,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xzmoh9l_Ga0AFN-X-RfJiSPWqEtfSD6rvA&s"
    },
    {
      id: 10,
      title: "Graduate Diploma of Business Analytics",
      category: "Diploma",
      categoryName: "Graduate Diploma",
      rating: 4.9,
      students: 1024,
      image: "https://bits-pilani-wilp.ac.in/images/progbanners/20230509153034-BITS%20Mobile%20Banner%20768x350-16.jpg"
    },
    {
      id: 11,
      title: "Graduate Diploma of Information Technology",
      category: "Diploma",
      categoryName: "Graduate Diploma",
      rating: 3.9,
      students: 1024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwByhQ25RdYLVnjlVqO8er7WR1Q6Cz9_mHg&s"
    },
    {
      id: 12,
      title: "Graduate Certificate in Business Administration",
      category: "Certificate",
      categoryName: "Graduate Certificate",
      rating: 4.7,  
      students: 987,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOvonx9gZkOJPvPtMqdq75GgSNayC0yixag&s"
    },
    {
      id: 13,
      title: "Graduate Certificate in Business Analytics",
      category: "Certificate",
      categoryName: "Graduate Certificate",
      rating: 4.9,
      students: 856,
      image: "https://analytics-business.media.uconn.edu/wp-content/uploads/sites/3932/2024/12/UCONN-Advanced-Business-Certificate-in-Business-Analytics-1-1200x900.webp"
    },
    {
      id: 14,
      title: "Graduate Certificate in Accounting",
      category: "Certificate",
      categoryName: "Graduate Certificate",
      rating: 4.6,
      students: 1123,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXPEyIll0pRLXkfnFOyzfPlV_rWy880l0H7wmIkIz3eXJk3Ma7ekcU6ZmLRyfPe5bni7M&usqp=CAU"
    },
    {
      id: 15,
      title: "Graduate Certificate in Information Technology",
      category: "Certificate",
      categoryName: "Graduate Certificate",
      rating: 4.9,
      students: 765,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI39XOubI-MEaXKOl6L0dfKJjwzgV--K-wYA&s"
    },
    {
      id: 16,
      title: "MBA – (Project Management)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.7,
      students: 932,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn4Lcfx9n1zd_OKd3c9stcIVj__vcybhq0oA&s"
    },
    {
      id: 17,
      title: "MBA – (Health Services Management)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.8,
      students: 1456,
      image: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/08/Future-of-MBA-in-Hospital-Management.jpg"
    },
    {
      id: 18,
      title: "MBA – (Tourism and Hospitality Leadership)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.9,
      students: 1024,
      image: "https://kingsedu.ac/wp-content/uploads/2022/10/mba-tourism-hospitality-management.jpg"
    },
    {
      id: 19,
      title: "Graduate Diploma of Information Technology",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 3.9,
      students: 1024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdwByhQ25RdYLVnjlVqO8er7WR1Q6Cz9_mHg&s"
    },
    {
      id: 20,
      title: "MBA – (Digital Management)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.9,
      students: 856,
      image: "https://bschool.cms.ac.in/uploads/blog/cb1a889cc6b905eec6962cd0b1b4df8e.jpg"
    },
    {
      id: 21,
      title: "MBA – (Entrepreneurship)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.6,
      students: 1123,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1QcHYxQWMzd9MB_hXyDz4djXL-TVAbaOQ2A&s"
    },
    {
      id: 22,
      title: "MBA – (Data-driven Leadership)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.9,
      students: 765,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHROAdrlFahZ25xsPM2fTrNchmL6d59_YZw&s"
    },
    {
      id: 23,
      title: "MBA – (Women In Leadership)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.7,
      students: 932,
      image: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/04/29/Pictures/businesswoman-conducting-meeting-in-boardroom_d9283976-2ccf-11e7-bd89-19cc2c5d765e.JPG"
    },
    {
      id: 24,
      title: "MBA – (International Leadership)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.8,
      students: 1456,
      image: "https://bschool.cms.ac.in/uploads/blog/3d070b067b057b7357e52951b7a6c5e1.jpg"
    },
    {
      id: 25,
      title: "MBA – (Two Specialisations)",
      category: "Specialisations",
      categoryName: "MBA-Specialisations",
      rating: 4.9,
      students: 1024,
      image: "https://iirfranking.com/courses/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-03-at-11.18.52-AM.jpeg"
    }
  ];

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(course => course.category === activeTab);

  // Double the courses for infinite loop effect
  const displayCourses = [...filteredCourses, ...filteredCourses];

  const CourseCard = ({ course }: { course: any }) => (
    <div 
      className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer group border border-gray-100"
      onMouseEnter={() => setHoveredCourse(course.id)}
      onMouseLeave={() => setHoveredCourse(null)}
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-[#3a969d] to-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            {course.categoryName}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#3a969d]/30">
          <Award className="w-6 h-6 text-white" />
        </div>
        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#3a969d] to-teal-500 bg-opacity-90 transition-opacity duration-300 ${hoveredCourse === course.id ? 'opacity-100' : 'opacity-0'}`}>
          <button className="flex items-center justify-center w-16 h-16 bg-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg">
            <Play className="w-8 h-8 text-[#3a969d] fill-current ml-1" />
          </button>
        </div>
      </div>
      
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#3a969d] transition-colors duration-300">
          {course.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-gray-600 ml-1">({course.rating})</span>
          </div>
          <span className="text-xs font-semibold bg-green-100 text-green-800 px-2 py-1 rounded-full">
            Popular
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-16 bg-white relative overflow-hidden">
      {/* Animated background elements - contained within this component */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-5"
            style={{
              background: 'linear-gradient(145deg, #3a969d, #204761)',
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float${i % 3} 15s infinite ease-in-out`,
              animationDelay: `${i * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Special Courses
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive range of specialized programs designed to elevate your career and academic journey.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-16 flex-wrap gap-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 border relative overflow-hidden group ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-[#3a969d] to-teal-500 text-white border-transparent shadow-lg shadow-[#3a969d]/30'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 shadow-sm'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <IconComponent className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Courses Slider */}
        <div className="relative overflow-hidden bg-gray-50 rounded-3xl border border-gray-200 p-8 mb-16">
          <div 
            className="flex gap-8 animate-[slide_40s_linear_infinite] hover:[animation-play-state:paused]"
            style={{
              width: `${displayCourses.length * 20}rem`,
            }}
          >
            {displayCourses.map((course, index) => (
              <CourseCard key={`${course.id}-${index}`} course={course} />
            ))}
          </div>
          
          {/* Gradient overlays for smoother infinite scroll */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes float0 {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float1 {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(20px) rotate(-5deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 15px) rotate(3deg); }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default SpecialCourses;
