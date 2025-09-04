const imageMap = {
  lion: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  tiger: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  cat: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg",
  dog: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg",
  mouse: "https://upload.wikimedia.org/wikipedia/commons/4/45/Mouse.jpg"
};
 function showImage() {
      const category = document.getElementById("options").value;
      const container = document.getElementById("imageContainer");
      const hideBtn = document.getElementById("hideBtn");

      if (category) {
        container.innerHTML = `<img src="${imageMap[category]}" alt="${category} image">`;
        hideBtn.style.display = "block";
      } else {
        container.innerHTML = "";
        hideBtn.style.display = "none";
      }
    }

    function hideImage() {
      document.getElementById("imageContainer").innerHTML = "";
      document.getElementById("hideBtn").style.display = "none";
    }
