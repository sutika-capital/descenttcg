(() => {
  const embeds = document.querySelectorAll('[data-social-embed]');

  embeds.forEach((wrapper) => {
    const button = wrapper.querySelector('[data-embed-src]');
    const poster = wrapper.querySelector('.team-social-poster');
    if (!button || !poster) return;

    button.addEventListener('click', () => {
      const frame = document.createElement('iframe');
      frame.src = button.dataset.embedSrc;
      frame.title = button.dataset.embedTitle || 'Descent TCG social video';
      frame.loading = 'lazy';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allow = 'autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share';
      frame.allowFullscreen = true;
      frame.width = '267';
      frame.height = '476';
      wrapper.replaceChild(frame, poster);
      button.disabled = true;
    }, { once: true });
  });
})();
