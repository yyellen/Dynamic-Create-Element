export const generateImage = (image = "https://i.pinimg.com/736x/ed/21/f2/ed21f2c4e5fef735d23cc8711ad26d7e.jpg") => {
  const infoLeft = document.querySelector(".info-left");
  const container = document.createElement("div");
  
  container.classList.add("profile-image-container");
  
  const img = document.createElement("img");
  
  img.classList.add("profile-image");

  img.src = image;
  img.setAttribute("width", "150px");
  img.setAttribute("height", "150px");

  container.appendChild(img);
  
  infoLeft.appendChild(container);
}

export const generateInfo1 = (name) => {
  const infoRight = document.querySelector(".info-right");

  const container = document.createElement("div");
  container.classList.add("info-1-container");
  
  const nameBlock = document.createElement("div");
  const sendMessageBlock = document.createElement("div");
  const followBlock = document.createElement("div");
  const moreActionBlock = document.createElement("div");

  const nameText = document.createTextNode(name);
  nameBlock.appendChild(nameText);

  const sendMessageButton = document.createElement("button");
  const sendMessageButtonText = document.createTextNode("發送訊息");
  sendMessageButton.appendChild(sendMessageButtonText);
  sendMessageBlock.appendChild(sendMessageButton);

  const followButton = document.createElement("button");
  const followButtonText = document.createTextNode("追蹤");
  followButton.appendChild(followButtonText);
  followBlock.appendChild(followButton);

  const moreActionButton = document.createElement("button");
  const moreActionButtonText = document.createTextNode("...");
  moreActionButton.appendChild(moreActionButtonText);
  moreActionBlock.appendChild(moreActionButton);

  container.appendChild(nameBlock);
  container.appendChild(sendMessageBlock);
  container.appendChild(followBlock);
  container.appendChild(moreActionBlock);

  infoRight.appendChild(container);
}

export const generateInfo2 = (postCount = 0, followerCount = 0, followingCount = 0) => {
  const infoRight = document.querySelector(".info-right");

  const container = document.createElement("div");
  container.classList.add("info-2-container");
  
  const postCountBlock = document.createElement("div");
  const followerCountBlock = document.createElement("div");
  const followingCountBlock = document.createElement("div");

  const postCountText = document.createTextNode(`${postCount}貼文`);
  const followerCountText = document.createTextNode(`${followerCount}位粉絲`);
  const followingCountText = document.createTextNode(`${followingCount}追蹤中`);

  postCountBlock.appendChild(postCountText);
  followerCountBlock.appendChild(followerCountText);
  followingCountBlock.appendChild(followingCountText);

  postCountBlock.classList.add("info-2-block");
  followerCountBlock.classList.add("info-2-block");
  followingCountBlock.classList.add("info-2-block");

  container.appendChild(postCountBlock);
  container.appendChild(followerCountBlock);
  container.appendChild(followingCountBlock);

  infoRight.appendChild(container);
}

export const generateInfo3 = () => {

}