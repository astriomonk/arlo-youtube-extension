let arloImages = [
  "https://bit.ly/3UDXJQh",
  ];

const imgs = document.getElementByTagName ("img");

for (image of imgs) {
const index = Math.floor(Math.random() * arloImages.lengh);
  image.src = arloImages[index];
}
