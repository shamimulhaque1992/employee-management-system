import React from 'react';
import './Skeleton.css';

const SkeletonCard = () => (
  <div className="skeleton-card">
    <div className="skeleton-image"></div>
    <div className="skeleton-text"></div>
    <div className="skeleton-text short"></div>
    <div className="skeleton-text short"></div>
  </div>
);

const CardSkeleton: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="skeleton-text" style={{ width: '200px', height: '24px', marginBottom: '1.5rem' }}></div>
      <div className="skeleton-text" style={{ width: '150px', height: '35px', marginBottom: '1rem' }}></div>
      <div className="skeleton-grid">
        {Array.from({ length: 8 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton; 