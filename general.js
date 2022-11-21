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

export const generateInfo1 = () => {
  
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