let arloImages = [
  https://bit.ly/3USilEj
];

const imgs = document.getElementsByTagName("img");

for (image of imgs) {
  const index = Math.floor(Math.random() * arloImages.length);
  image.src = arloImages[index];
}
