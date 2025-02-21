document.addEventListener("DOMContentLoaded", () => {
    const elfsightLink = document.querySelector('a[href*="elfsight.com/website-translator-widget"]');
    if (elfsightLink) {
      elfsightLink.remove();
    }
  });

  const observer = new MutationObserver(() => {
    const elfsightLink = document.querySelector('a[href*="elfsight.com/website-translator-widget"]');
    if (elfsightLink) {
      elfsightLink.remove();
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  