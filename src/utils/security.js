// Security: Block non-http protocols
export const isSafeUrl = (url) => {
  if (!url) return false;
  try {
    const u = new URL(url);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
};

export const safeOpen = (url) => {
  if (!url) return;
  if (!isSafeUrl(url)) {
    console.warn("Blocked unsafe URL:", url);
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
};
