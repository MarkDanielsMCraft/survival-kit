import { META } from '../constants/config';
import { isSafeUrl } from './security';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const escapeAttr = (value = '') => escapeHtml(value).replace(/"/g, '&quot;');

const richTextToHtml = (text = '') => {
  if (!text) return '';
  const regex = /\*\*\[([^\]]+)\]\(([^)]+)\)\*\*|\[([^\]]+)\]\(([^)]+)\)|(\*\*[^*]+\*\*)/g;
  let result = '';
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      result += escapeHtml(text.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = escapeHtml(match[1]);
      const url = match[2];
      result += isSafeUrl(url)
        ? `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer"><strong>${label}</strong></a>`
        : label;
    } else if (match[3] && match[4]) {
      const label = escapeHtml(match[3]);
      const url = match[4];
      result += isSafeUrl(url)
        ? `<a href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : label;
    } else if (match[5]) {
      const label = escapeHtml(match[5].replace(/\*\*/g, ''));
      result += `<strong>${label}</strong>`;
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    result += escapeHtml(text.slice(lastIndex));
  }

  return result;
};

const renderContentBlocks = (content = []) =>
  content
    .map((block) => {
      if (block.type === 'h2') {
        return `<h2>${escapeHtml(block.text)}</h2>`;
      }
      if (block.type === 'p') {
        return `<p>${richTextToHtml(block.text)}</p>`;
      }
      if (block.type === 'ul') {
        const items = (block.items || [])
          .map((item) => `<li>${richTextToHtml(item)}</li>`)
          .join('');
        return `<ul>${items}</ul>`;
      }
      return '';
    })
    .join('');

const renderChecklist = (steps = []) => {
  if (!steps.length) return '';
  const items = steps
    .map((step, idx) => {
      const extra = step.action ? `<div class="step-action">${richTextToHtml(step.action)}</div>` : '';
      const detail = step.text ? `<div class="step-text">${richTextToHtml(step.text)}</div>` : '';
      return `
        <li class="step-item">
          <div class="step-index">${idx + 1}</div>
          <div>
            <div class="step-title">${escapeHtml(step.title || 'Step')}</div>
            ${detail}
            ${extra}
          </div>
        </li>
      `;
    })
    .join('');

  return `
    <section class="section">
      <h3 class="section-title">Checklist</h3>
      <ul class="step-list">${items}</ul>
    </section>
  `;
};

const renderLinkSection = (label, items = []) => {
  if (!items || items.length === 0) return '';
  const links = items
    .map((item, idx) => {
      const title = escapeHtml(item.title || item.label || `Link ${idx + 1}`);
      const url = item.url && isSafeUrl(item.url) ? item.url : null;
      const source = item.source ? `<span class="pill">${escapeHtml(item.source)}</span>` : '';
      const urlLine = url
        ? `<a class="link-url" href="${escapeAttr(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(url)}</a>`
        : '<span class="link-url muted">URL not provided</span>';

      return `
        <li class="link-item">
          <div class="link-main">
            ${source}
            <div>
              <div class="link-title">${title}</div>
              ${urlLine}
            </div>
          </div>
        </li>
      `;
    })
    .join('');

  return `
    <section class="section">
      <h3 class="section-title">${escapeHtml(label)}</h3>
      <ul class="link-list">${links}</ul>
    </section>
  `;
};

const renderPost = (post, idx) => {
  const meta = [post.stage, post.readTime].filter(Boolean).join(' · ');
  const tags = (post.tags || []).map((t) => escapeHtml(t)).join(', ');

  return `
    <article class="post">
      <header class="post-header">
        <div class="eyebrow">Guide ${idx + 1}${meta ? ` · ${escapeHtml(meta)}` : ''}</div>
        <h1>${escapeHtml(post.title)}</h1>
        ${post.subtitle ? `<p class="subtitle">${escapeHtml(post.subtitle)}</p>` : ''}
        ${post.summary ? `<p class="summary">${richTextToHtml(post.summary)}</p>` : ''}
        <div class="meta-row">
          <span>Verified ${escapeHtml(post.verified || META.lastUpdatedDate)}</span>
        </div>
      </header>

      ${post.goldenRule ? `<div class="golden-rule"><strong>Golden rule:</strong> ${richTextToHtml(post.goldenRule)}</div>` : ''}

      ${renderContentBlocks(post.content)}
      ${renderChecklist(post.steps)}
      ${renderLinkSection('Read more', post.readMore)}
      ${renderLinkSection('Downloads', post.downloads)}
      ${renderLinkSection('Videos', post.videos)}
      ${tags ? `<p class="tags">Tags: ${tags}</p>` : ''}
    </article>
  `;
};

const buildStyles = () => `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Source+Serif+4:wght@400;600&display=swap');
  @page { size: A4; margin: 16mm; }
  * { box-sizing: border-box; }
  :root {
    --ink: #0f172a;
    --muted: #475569;
    --border: #e2e8f0;
    --accent: #312e81;
    --accent-soft: #eef2ff;
  }
  body { font-family: 'Source Serif 4', 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif; background: #f8fafc; color: var(--ink); margin: 0; padding: 24px; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  a { color: #1d4ed8; text-decoration: none; }
  a:hover { text-decoration: underline; }
  .accent { color: var(--accent); }
  .cover { background: linear-gradient(135deg, #eef2ff 0%, #e0f2fe 50%, #e5e7eb 100%); border: 1px solid var(--border); border-radius: 16px; padding: 48px; margin-bottom: 24px; text-align: center; page-break-after: always; }
  .cover h1 { font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; font-size: 32px; margin: 0 0 8px 0; letter-spacing: -0.02em; }
  .cover p { margin: 8px 0; color: var(--muted); font-size: 16px; }
  .cover .hero { margin: 20px auto 0 auto; max-width: 640px; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12); border: 1px solid #cbd5e1; }
  .cover img { width: 100%; display: block; }
  .toc { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 24px; margin: 0 0 24px 0; page-break-after: always; }
  .toc h2 { margin: 0 0 12px 0; font-size: 22px; color: #0f172a; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
  .toc ol { margin: 0; padding-left: 20px; color: #1f2937; font-size: 15px; line-height: 1.55; counter-reset: toc; list-style: none; }
  .toc li { margin-bottom: 8px; counter-increment: toc; }
  .toc li::before { content: counter(toc) '. '; font-weight: 700; color: var(--accent); }
  .post { background: white; border: 1px solid var(--border); border-radius: 16px; padding: 32px; margin-bottom: 24px; page-break-after: always; page-break-inside: avoid; box-shadow: 0 10px 26px rgba(15, 23, 42, 0.08); }
  .post:last-of-type { page-break-after: auto; }
  .post-header h1 { margin: 8px 0 12px 0; font-size: 26px; line-height: 1.25; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
  .subtitle { color: var(--muted); font-size: 16px; margin: 0 0 12px 0; }
  .summary { color: #1f2937; font-size: 15px; margin: 0 0 16px 0; line-height: 1.7; }
  .eyebrow { text-transform: uppercase; letter-spacing: 0.14em; font-size: 11px; color: var(--muted); font-weight: 700; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
  .meta-row { display: flex; gap: 12px; color: #475569; font-size: 12px; margin-bottom: 12px; }
  h2 { margin: 20px 0 10px 0; font-size: 22px; color: #111827; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
  p { margin: 10px 0; font-size: 15px; line-height: 1.65; color: #1f2937; }
  ul { margin: 10px 0 14px 0; padding-left: 20px; color: #1f2937; font-size: 15px; line-height: 1.6; }
  li { margin-bottom: 6px; }
  .section { margin-top: 20px; }
  .section-title { font-size: 18px; margin: 0 0 10px 0; color: #0f172a; font-family: 'Inter', 'Segoe UI', system-ui, sans-serif; }
  .golden-rule { background: var(--accent-soft); border: 1px solid #c7d2fe; border-radius: 12px; padding: 12px 14px; margin: 12px 0 18px 0; color: var(--accent); }
  .step-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
  .step-item { display: grid; grid-template-columns: 36px 1fr; gap: 12px; background: #f8fafc; border: 1px solid var(--border); border-radius: 12px; padding: 12px; break-inside: avoid; }
  .step-index { height: 32px; width: 32px; border-radius: 10px; background: #e0e7ff; color: #312e81; display: flex; align-items: center; justify-content: center; font-weight: 700; }
  .step-title { font-weight: 700; color: #0f172a; margin-bottom: 4px; }
  .step-text, .step-action { color: #1f2937; font-size: 15px; line-height: 1.5; }
  .link-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }
  .link-item { border: 1px solid var(--border); border-radius: 12px; padding: 10px 12px; background: #f8fafc; break-inside: avoid; }
  .link-main { display: flex; gap: 10px; align-items: flex-start; }
  .pill { display: inline-flex; align-items: center; padding: 4px 8px; border-radius: 9999px; border: 1px solid #cbd5e1; background: #e2e8f0; color: #0f172a; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
  .link-title { font-weight: 700; color: #0f172a; }
  .link-url { display: block; color: #1d4ed8; font-size: 13px; margin-top: 2px; word-break: break-all; }
  .link-url.muted { color: #94a3b8; }
  .tags { margin-top: 12px; color: #475569; font-size: 13px; }
  .footer-line { margin-top: 6px; color: #94a3b8; font-size: 11px; text-align: center; }
  @media print {
    body { background: white; }
    .post { box-shadow: none; }
    .cover, .toc { page-break-after: always; }
  }
`;

const renderToc = (posts = []) => {
  if (!posts.length) return '';
  const items = posts
    .map((post, idx) => {
      const title = escapeHtml(post.title || `Guide ${idx + 1}`);
      return `<li><a href="#${escapeAttr(post.slug || `guide-${idx}`)}">${idx + 1}. ${title}</a></li>`;
    })
    .join('');
  return `
    <section class="toc">
      <h2>Table of contents</h2>
      <ol>${items}</ol>
    </section>
  `;
};

const buildPrintableHtml = (posts = []) => {
  const printedOn = new Date().toISOString().slice(0, 10);
  const coverHero = 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80';
  const cover = `
    <section class="cover">
      <h1>${escapeHtml(META.siteTitle || 'Survival Kit')}</h1>
      <p class="accent">${escapeHtml(META.tagline || 'Guides for internationals in Germany')}</p>
      <p><strong>${escapeHtml(META.lastUpdatedLabel || 'Last updated')}:</strong> ${escapeHtml(META.lastUpdatedDate)}</p>
      <p><strong>Printed:</strong> ${escapeHtml(printedOn)}</p>
      <p style="font-size:14px; color:#475569; margin-top:12px;">Exported from Survival Kit guides. Save as PDF to keep an offline copy.</p>
      <div class="hero"><img src="${escapeAttr(coverHero)}" alt="Germany cityscape" /></div>
    </section>
  `;

  const body = posts.map((post, idx) => `
    <div id="${escapeAttr(post.slug || `guide-${idx}`)}">
      ${renderPost(post, idx)}
    </div>
  `).join('');

  return `<!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Survival Kit Guides</title>
        <style>${buildStyles()}</style>
      </head>
      <body>
        ${cover}
        ${renderToc(posts)}
        ${body}
        <div class="footer-line">Survival Kit · Verified ${escapeHtml(META.lastUpdatedDate)}</div>
      </body>
    </html>`;
};

export const downloadAllGuidesPdf = (posts = []) => {
  if (typeof window === 'undefined') return;
  if (!posts || posts.length === 0) return;

  const printableHtml = buildPrintableHtml(posts);
  const printWindow = window.open('', '_blank', 'noopener,noreferrer');

  if (!printWindow) {
    alert('Please allow pop-ups to download the PDF.');
    return;
  }

  printWindow.document.open();
  printWindow.document.write(printableHtml);
  printWindow.document.close();
  printWindow.focus();

  setTimeout(() => {
    printWindow.print();
  }, 350);
};
