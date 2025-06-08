import { Rating } from '@mui/material';
import React from 'react';



// Star Rating Component
const StarRating = ({ value, maxStars = 5 }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;
  
  return (
    <div className="flex items-center text-yellow-400 text-lg">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i}>★</span>
      ))}
      {hasHalfStar && <span>⭐</span>}
      {[...Array(maxStars - Math.ceil(value))].map((_, i) => (
        <span key={i} className="text-gray-300">☆</span>
      ))}
    </div>
  );
};

// Progress Bar Component
const ProgressBar = ({ value, color = 'bg-blue-500' }) => {
  const colorClasses = {
    'bg-green-500': 'bg-green-500',
    'bg-blue-500': 'bg-blue-500',
    'bg-yellow-500': 'bg-yellow-500',
    'bg-red-500': 'bg-red-500'
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full transition-all duration-300 ${colorClasses[color] || color}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

const ProductReviewsSection = () => {
  const ratingData = [
    { label: 'Excellent', value: 40, color: 'bg-green-500' },
    { label: 'Very Good', value: 25, color: 'bg-green-500' },
    { label: 'Good', value: 20, color: 'bg-blue-500' },
    { label: 'Average', value: 10, color: 'bg-yellow-500' },
    { label: 'Poor', value: 5, color: 'bg-red-500' }
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-4">
     
      
      <div >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
        
          {/* Rating Section */}
          <div className="lg:col-span-5">
            <h2 className="text-xl font-semibold pb-3">Product Rating</h2>

            {/* Overall Rating */}
            <div className="flex items-center space-x-3 mb-6">
              <Rating value={3.8} readOnly precision={.5} />
              <p className="text-gray-600 font-medium">3.8 (85,642 Reviews)</p>
            </div>

            {/* Rating Breakdown */}
            <div className="space-y-4">
              {ratingData.map((rating, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-20 text-right">
                    <p className="text-sm font-semibold text-gray-700">
                      {rating.label}
                    </p>
                  </div>
                  <div className="flex-1">
                    <ProgressBar value={rating.value} color={rating.color} />
                  </div>
                  <div className="w-12 text-left">
                    <p className="text-sm text-gray-600">{rating.value}%</p>
                  </div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewsSection;