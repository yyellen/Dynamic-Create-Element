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
