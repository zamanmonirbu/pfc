import React from 'react';
import { BlogCard } from '../components/blog/BlogCard';
import { useLanguage } from '../hooks/useLanguage';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
  const { language, t } = useLanguage();
  const posts = blogPosts[language as keyof typeof blogPosts];

  return (
    <div className="min-h-screen bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          {language === 'nl' ? 'Laatste Blogberichten' : 'Latest Blog Posts'}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}