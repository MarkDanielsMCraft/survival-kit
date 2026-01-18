import { isSafeUrl } from './security';

// Enhanced Rich Text Parser
export const renderRichText = (text, keyPrefix) => {
  if (!text) return null;
  const regex = /\[([^\]]+)\]\(([^)]+)\)|(\*\*[^*]+\*\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    if (match[1] && match[2]) {
      // Link
      if (isSafeUrl(match[2])) {
        parts.push(
          <a key={`${keyPrefix}-${match.index}`} href={match[2]} target="_blank" rel="noopener noreferrer">
            {match[1]}
          </a>
        );
      } else {
        parts.push(match[1]);
      }
    } else if (match[3]) {
      // Bold
      parts.push(
        <strong key={`${keyPrefix}-${match.index}`}>{match[3].replace(/\*\*/g, "")}</strong>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};
