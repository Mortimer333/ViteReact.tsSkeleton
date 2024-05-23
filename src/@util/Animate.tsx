export const writeText = (title: string, el: HTMLElement|null, interval = 200): void => {
  if (!el) {
    return;
  }
  const currentLen = el.innerHTML.length;
  if (currentLen >= title.length) {
    return;
  }
  el.innerHTML = title.substring(0, currentLen + 1);
  setTimeout(() => {
    writeText(title, el);
  }, interval)
}

export const clearText = (el: HTMLElement|null, interval = 200): void => {
  if (!el) {
    return;
  }
  if (el.innerHTML.length == 0) {
    return;
  }
  el.innerHTML = el.innerText.substring(0, el.innerText.length - 1);
  setTimeout(() => {
    clearText(el, interval);
  }, interval)
}
