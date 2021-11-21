const x = document.getElementsByClassName('quesTion');
  
  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function(){
      this.classList.toggle("active");
      const myClass = this.nextElementSibling;
      if (myClass.style.maxHeight) {
        myClass.style.maxHeight = null;
      } else {
        myClass.style.maxHeight = myClass.scrollHeight + "px";
      }
    });
  }
