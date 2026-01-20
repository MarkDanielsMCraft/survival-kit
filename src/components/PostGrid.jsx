import React from "react";
import { PostCard } from "./PostCard";

export const PostGrid = ({ posts, searchTerm, onOpenPost, getProgress }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20 opacity-60">
        <p className="text-xl font-extrabold text-slate-400">
          No posts found for "{searchTerm}"
        </p>
        <p className="text-sm text-slate-400">
          Try "Anmeldung", "Trash", "Tax ID", "Dosage"
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 auto-rows-fr">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          onOpen={onOpenPost}
          progressPercent={getProgress(post)}
        />
      ))}
    </div>
  );
};
