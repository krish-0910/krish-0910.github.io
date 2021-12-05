let text = document.getElementById("count");
      let like = document.getElementById("btn1");
      let dislike = document.getElementById("btn2");
      let count = 0;
      like.addEventListener("click", () => {
        count++;
        text.innerHTML = count;
      });

      dislike.addEventListener("click", () => {
        count--;
        text.innerHTML = count;
      });