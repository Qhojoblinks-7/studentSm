import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

// Import the existing components
import PostsForNotice from '@/pages/Dashboard/components/PostsForNotice';
import AIPersonalizedRecommendations from '@/pages/Dashboard/components/AIPersonalizedRecommendations';

const MobileCarousel = () => {
  const { posts } = useSelector(state => state.dashboard);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const totalSlides = 2;

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    // Note: preventDefault removed to avoid passive event listener warning
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.changedTouches[0].clientX;
    const diffX = startX.current - endX;

    // Minimum swipe distance
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Swipe left - next slide
        setCurrentSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
      } else {
        // Swipe right - previous slide
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
      }
    }

    isDragging.current = false;
  };

  return (
    <div className="md:hidden w-full">
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="overflow-hidden rounded-lg cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Posts Slide */}
          <div className="w-full flex-shrink-0">
            <div className="p-1">
              <PostsForNotice posts={posts} />
            </div>
          </div>

          {/* AI Recommendations Slide */}
          <div className="w-full flex-shrink-0">
            <div className="p-1">
              <AIPersonalizedRecommendations />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Simple dot indicators */}
      <div className="flex justify-center mt-3 space-x-2">
        {[0, 1].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-500' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;