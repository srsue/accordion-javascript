
const accordion = document.querySelectorAll(".accordion-header");
accordion.forEach((selected) => {
  selected.addEventListener("click",()=>{
    let content = selected.nextElementSibling;
    content.classList.toggle("show");
  })
})
