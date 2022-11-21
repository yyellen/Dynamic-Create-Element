import { createPost, renderPosts } from "./post.js";
import { postData } from "./data.js";
import { generateInfo } from "./general.js";

const init = () => {
  const root = document.getElementById("root");
  const infoArea = document.createElement("div");
  infoArea.classList.add("info-area");

  const infoLeft = document.createElement("div");
  infoLeft.classList.add("info-left");

  const infoRight = document.createElement("div");
  infoRight.classList.add("info-right");

  infoArea.appendChild(infoLeft);
  infoArea.appendChild(infoRight);

  const postArea = document.createElement("div");
  postArea.classList.add("post-area");
  
  root.appendChild(infoArea);
  root.appendChild(postArea);
};

const generatePosts = () => {
  const myPosts = [];
  
  for (let i = 0; i < postData.length; i++) {
    const data = postData[i]; // 拿到每個貼文的資料
    const post = createPost(data.image) // 產生一個貼文的element
    myPosts.push(post);
  }
  
  renderPosts(myPosts);
}

init();
generatePosts();
generateInfo();