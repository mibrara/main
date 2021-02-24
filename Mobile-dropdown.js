      const menuBtn = document.querySelector(".menu-btn");
      const mobileMenuContainer = document.querySelector(
        ".mobile-menu-container"
      );
      const mobileMenuItems = document.querySelectorAll(
        ".mobile-menu-container ul li a"
      );

      menuBtn.addEventListener("click", function () {
        mobileMenuContainer.classList.toggle("active");
      });

      mobileMenuItems.forEach((i) => {
        i.addEventListener("click", function () {
          mobileMenuContainer.classList.remove("active");
        });
      });
