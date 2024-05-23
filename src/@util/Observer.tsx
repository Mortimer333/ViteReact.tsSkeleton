export const callOnSeen = (
  callback: () => void,
  node: HTMLElement|undefined|null,
  settings: object = {
    rootMargin: "0px",
    threshold: .8,
  },
): void => {
  if (!node) {
    return;
  }

  const observerObj = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.target === node && entry.isIntersecting) {
        callback();
        observerObj.disconnect();
      }
    })
  }, settings)
  observerObj.observe(node);
}
