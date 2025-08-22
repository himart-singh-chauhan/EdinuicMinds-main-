import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, Tag, TrendingUp } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Academic Tips', 'Study Guides', 'Career Advice', 'Research Methods', 'Technology'];

  const blogPosts = [
    {
      id: 1,
      title: 'How to Write a Perfect Thesis Statement in 2024',
      excerpt: 'Master the art of crafting compelling thesis statements that will make your academic papers stand out from the crowd.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'Academic Tips',
      readTime: '8 min read',
      tags: ['Writing', 'Thesis', 'Academic'],
    },
    {
      id: 2,
      title: 'Top 10 Research Methodologies for Graduate Students',
      excerpt: 'Comprehensive guide to choosing the right research methodology for your graduate-level projects and dissertations.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Prof. Michael Chen',
      date: '2024-01-12',
      category: 'Research Methods',
      readTime: '12 min read',
      tags: ['Research', 'Methodology', 'Graduate'],
    },
    {
      id: 3,
      title: 'Career Opportunities in Data Science: A Complete Guide',
      excerpt: 'Explore the booming field of data science and discover the career paths that await skilled professionals.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Dr. Aisha Patel',
      date: '2024-01-10',
      category: 'Career Advice',
      readTime: '10 min read',
      tags: ['Data Science', 'Career', 'Technology'],
    },
    {
      id: 4,
      title: 'Effective Study Techniques for Online Learning',
      excerpt: 'Maximize your online learning experience with proven study techniques and productivity strategies.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Maria Rodriguez',
      date: '2024-01-08',
      category: 'Study Guides',
      readTime: '6 min read',
      tags: ['Online Learning', 'Study Tips', 'Productivity'],
    },
    {
      id: 5,
      title: 'The Future of AI in Academic Research',
      excerpt: 'How artificial intelligence is revolutionizing academic research and what it means for students and researchers.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Dr. James Wilson',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '9 min read',
      tags: ['AI', 'Research', 'Future'],
    },
    {
      id: 6,
      title: 'Building a Strong Academic Portfolio',
      excerpt: 'Essential tips for creating an impressive academic portfolio that showcases your skills and achievements.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80&fm=webp',
      author: 'Prof. Sophie Mueller',
      date: '2024-01-03',
      category: 'Career Advice',
      readTime: '7 min read',
      tags: ['Portfolio', 'Academic', 'Career'],
    },
  ];

  const popularPosts = [
    { title: 'How to Avoid Plagiarism in Academic Writing', views: '15.2k' },
    { title: 'Best Citation Styles for Different Disciplines', views: '12.8k' },
    { title: 'Time Management Tips for Graduate Students', views: '11.5k' },
    { title: 'Writing Compelling Research Proposals', views: '9.7k' },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-primary-dark mb-4">
            Academic Insights & Resources
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Stay updated with the latest academic trends, study tips, and expert insights to excel in your educational journey.
          </p>
        </div>

             <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
               {/* Main Content */}
               <div className="lg:col-span-3">
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary-dark to-accent-teal text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-100 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                        <img
                          src={post.image.replace('auto=format', 'auto=format&fm=webp')}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-accent-teal text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-primary-dark px-3 py-1 rounded-full text-sm font-medium">
                      {post.readTime}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-primary-dark mb-3 line-clamp-2 group-hover:text-accent-teal transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 text-sm text-neutral-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span key={idx} className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center space-x-2 text-accent-teal font-medium hover:text-accent-light transition-colors group">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

               {/* Sidebar - sticky on large screens, categories card removed */}
               <div className="space-y-8 lg:sticky lg:top-24 h-fit">
                 {/* Newsletter Signup */}
                 <div className="bg-gradient-to-br from-primary-dark to-accent-teal rounded-2xl p-6 text-white">
                   <h3 className="font-heading text-lg font-bold mb-3">
                     Stay Updated
                   </h3>
                   <p className="text-white/90 text-sm mb-4">
                     Get the latest academic insights and study tips delivered to your inbox.
                   </p>
                   <div className="space-y-3">
                     <input
                       type="email"
                       placeholder="Your email address"
                       className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                     />
                     <button className="w-full bg-white text-primary-dark font-medium py-2 px-4 rounded-lg hover:bg-white/90 transition-colors">
                       Subscribe
                     </button>
                   </div>
                 </div>

                 {/* Popular Posts */}
                 <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-100">
                   <div className="flex items-center space-x-2 mb-4">
                     <TrendingUp className="h-5 w-5 text-accent-teal" />
                     <h3 className="font-heading text-lg font-bold text-primary-dark">
                       Popular Posts
                     </h3>
                   </div>
                   <div className="space-y-4">
                     {popularPosts.map((post, index) => (
                       <div key={index} className="flex items-start space-x-3 group cursor-pointer">
                         <div className="bg-accent-teal/10 text-accent-teal rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                           {index + 1}
                         </div>
                         <div className="flex-1">
                           <h4 className="text-sm font-medium text-primary-dark group-hover:text-accent-teal transition-colors line-clamp-2">
                             {post.title}
                           </h4>
                           <p className="text-xs text-neutral-500 mt-1">{post.views} views</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;