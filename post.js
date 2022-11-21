export const createPost = (image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIB1_dG70pyj8riju4LDXwDnZu4xgoLReYA&usqp=CAU") => {
  // return一個post的element
  const container = document.createElement("div");

  container.classList.add("post-container");

  const img = document.createElement("img");
  img.src = image;
  img.setAttribute("width", "100%");
  img.setAttribute("height", "100%");
  
  container.appendChild(img);

  return container;
};

export const renderPosts = (posts) => {
  // 負責把所有貼文都渲染出來
  const postArea = document.querySelector(".post-area");
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i]; // 拿到每一個post的element
    postArea.appendChild(post);
  }
};