"use client";

function StarRating({ rating }) {
  const fullStars = Math.floor(rating); // Number of full stars
  const halfStars = rating % 1 >= 0.5 ? 1 : 0; // Half star if the decimal is 0.5 or more
  const emptyStars = 5 - fullStars - halfStars; // Remaining empty stars

  return (
    <div className="flex space-x-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 17.27L18.18 21 15.54 13.97l6.46-5.64-8.02-.65L12 2 9.02 7.68l-8.02.65 6.46 5.64L5.82 21z" />
        </svg>
      ))}

      {/* Half Star */}
      {halfStars > 0 && (
        <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 17.27L18.18 21 15.54 13.97l6.46-5.64-8.02-.65L12 2 9.02 7.68l-8.02.65 6.46 5.64L5.82 21z" />
        </svg>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 17.27L18.18 21 15.54 13.97l6.46-5.64-8.02-.65L12 2 9.02 7.68l-8.02.65 6.46 5.64L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
