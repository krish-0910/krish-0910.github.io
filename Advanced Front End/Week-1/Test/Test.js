image1 = document.getElementById("img1");
      
      function enlargeImg() {
           image1.style.transform = "scale(2)";
      
        image1.style.transition = "transform 0.25s ease";
      }
      
      function resetImg() {
      
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.25s ease";
      }

    //   $(document).click((event) => {
    //     if (!$(event.target).closest('#element').length) {
    //         function resetImg() {
      
    //             img.style.transform = "scale(1)";
    //             img.style.transition = "transform 0.25s ease";
    //           }
    //     }        
    //   });