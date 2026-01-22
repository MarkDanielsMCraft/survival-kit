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
  const targetWidth = variant === "thumbnail" ? Math.min(width, 480) : width;

  // If no src or error, show fallback icon container
  if (!src || error) {
    return (
      <div className={`flex items-center justify-center text-slate-400 bg-slate-100 ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  const optimizedSrc = (() => {
    if (!src) return "";
    try {
      const url = new URL(src);
      if (targetWidth && !url.searchParams.has("w")) {
        url.searchParams.set("w", targetWidth);
      }
      if (variant === "thumbnail" && !url.searchParams.has("q")) {
        url.searchParams.set("auto", "format");
        url.searchParams.set("fit", "crop");
        url.searchParams.set("q", "80");
      }
      return url.toString();
    } catch {
      return src;
    }
  })();

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      className={`object-cover ${className}`}
      width={targetWidth || undefined}
      loading="lazy"
      decoding="async"
      onError={() => setError(true)}
    />
  );
};
