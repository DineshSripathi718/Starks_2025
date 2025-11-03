const fruits = [
    { name: "Apple", image: "https://plus.unsplash.com/premium_photo-1724249989963-9286e126af81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlfGVufDB8fDB8fHww"},
    { name: "Banana", image: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFuYW5hfGVufDB8fDB8fHww" },
    { name: "Orange", image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JhbmdlfGVufDB8fDB8fHww" },
    { name: "Strawberry", image: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Grapes", image: "https://plus.unsplash.com/premium_photo-1724250449759-f9bbb5fd4f63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGVzfGVufDB8fDB8fHww" },
    { name: "Watermelon", image: "https://plus.unsplash.com/premium_photo-1724256227267-cfe917bc1d9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJtZWxvbnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Pineapple", image: "https://plus.unsplash.com/premium_photo-1676466899612-d11f634c3041?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGluZWFwcGxyfGVufDB8fDB8fHww" },
    { name: "Mango", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuZ298ZW58MHx8MHx8fDA%3D" },
    { name: "Cherry", image: "https://images.unsplash.com/photo-1528821154947-1aa3d1b74941?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlcnJ5fGVufDB8fDB8fHww" },
    { name: "Pear", image: "https://images.unsplash.com/photo-1570115114436-63d3405246e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhcnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Kiwi", image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2l3aXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "Blueberry", image: "https://images.unsplash.com/photo-1425934398893-310a009a77f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZWJlcnJ5fGVufDB8fDB8fHww" },
    { name: "Lemon", image: "https://images.unsplash.com/photo-1582287104445-6754664dbdb2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb258ZW58MHx8MHx8fDA%3D" },
    { name: "Papaya", image: "https://plus.unsplash.com/premium_photo-1722938907181-08d806f7b9a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFwYXlhfGVufDB8fDB8fHww" },
    { name: "Coconut", image: "https://images.unsplash.com/photo-1588413335653-34b770bca7c1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D" }
];




document.getElementById('generate-fruit').addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fruits.length);
  document.getElementById('fruit-name').innerText = fruits[randomIndex].name;
  document.getElementById('fruit-image').src = fruits[randomIndex].image;
});