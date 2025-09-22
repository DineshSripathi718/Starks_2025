const fruits = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Papaya",
  "Kiwi",
  "Peach",
  "Cherry",
  "Pear",
  "Plum",
  "Lemon",
  "Lime",
  "Coconut",
  "Guava",
  "Apricot"
];

document.getElementById('generateBtn').addEventListener('click', () => {
    const indexNumber = Math.floor(Math.random() * fruits.length);
    document.querySelector('.fruit-name').innerText = fruits[indexNumber];
});