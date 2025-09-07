const fruits = [
  { name: "Apple", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg" },
  { name: "Banana", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg" },
  { name: "Orange", image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Half.jpg" },
  { name: "Mango", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Mangoes_pic.jpg" },
  { name: "Pineapple", image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Pineapple_and_cross_section.jpg" },
  { name: "Grapes", image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Kyoho-grape.jpg" },
  { name: "Strawberry", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg" },
  { name: "Watermelon", image: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Watermelon_cross_section.jpg" },
  { name: "Peach", image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Peach_and_cross_section.jpg" },
  { name: "Cherry", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Cherry_Stella.jpg" },
  { name: "Blueberry", image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Blueberries.jpg" },
  { name: "Kiwi", image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg" },
  { name: "Papaya", image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Papaya.jpg" },
  { name: "Pear", image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Pear_DS.jpg" },
  { name: "Plum", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Plums.jpg" },
  { name: "Coconut", image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Coconut.jpg" },
  { name: "Apricot", image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Apricot_and_cross_section.jpg" }
];



document.getElementById('generate-fruit').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  document.getElementById('fruit-name').innerText = fruits[randomIndex].name;
  document.getElementById('fruit-image').src = fruits[randomIndex].image;
});