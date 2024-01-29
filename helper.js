
const loader=document.querySelector(".tenor-gif-embed")

export function toggleForm() {
  
    setTimeout(() => {
      loader.classList.toggle("D-none")
        }, 1000);
  }