import React, { useState } from "react";

export const SmartImage = ({ 
  src, 
  alt, 
  fallbackIcon, 
  className = "", 
  variant = "default", // default | thumbnail
  width = 1200, // default width for query params
}) => {
  const [error, setError] = useState(false);

  // If no src or error, show fallback icon container
  if (!src || error) {
    return (
      <div className={`flex items-center justify-center text-slate-400 bg-slate-100 ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  // Optimize Unsplash or similar URLs if needed
  const optimizedSrc = src.includes('?') 
    ? `${src}&auto=format&fit=crop&w=${width}&q=80`
    : `${src}?auto=format&fit=crop&w=${width}&q=80`;

    // Note: If you have local images, this logic might need adjustment, 
    // but the project seems to rely on external URLs.

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={`object-cover ${className}`}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
};
