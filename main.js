const root = document.getElementById("root");

const init = () => {
  const infoArea = document.createElement("div");
  infoArea.classList.add("info-area");

  const postArea = document.createElement("div");
  postArea.classList.add("post-area");
  
  root.appendChild(infoArea);
  root.appendChild(postArea);
};

init();