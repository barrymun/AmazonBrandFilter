export const injectElements = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = chrome.runtime.getURL("container.css");
  document.head.appendChild(link);

  const container = document.createElement("div");
  container.id = "abf-container";
  document.body.appendChild(container);

  const controlsContainer = document.createElement("div");
  controlsContainer.id = "abf-controls-container";
  controlsContainer.className = "closed";
  container.appendChild(controlsContainer);

  const controlsIframe = document.createElement("iframe");
  controlsIframe.id = "abf-controls-iframe";
  controlsIframe.src = chrome.runtime.getURL("controls.html");
  controlsContainer.appendChild(controlsIframe);

  const toggleContainer = document.createElement("div");
  toggleContainer.id = "abf-toggle-container";
  toggleContainer.addEventListener("click", () => {
    if (controlsContainer.classList.contains("closed")) {
      controlsContainer.classList.remove("closed");
      controlsContainer.classList.add("opened");
    } else {
      controlsContainer.classList.remove("opened");
      controlsContainer.classList.add("closed");
    }
  });
  container.appendChild(toggleContainer);

  const toggleIframe = document.createElement("iframe");
  toggleIframe.id = "abf-toggle-iframe";
  toggleIframe.src = chrome.runtime.getURL("toggle.html");
  toggleContainer.appendChild(toggleIframe);
};