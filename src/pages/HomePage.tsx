import React from 'react';
import { Hero } from '../components/sections/Hero';
import { SpecialOffers } from '../components/sections/SpecialOffers';
import { Features } from '../components/sections/Features';
import { TrustpilotReviews } from '../components/sections/TrustpilotReviews';
import { BlogPosts } from '../components/sections/BlogPosts';

export function HomePage() {
  return (
    <>
      <Hero />
      <SpecialOffers />
      <Features />
      <TrustpilotReviews />
      <BlogPosts />
    </>
  );
}