const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

if(hamburger && nav){
 hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("active");
 });
}
   const params = new URLSearchParams(window.location.search);
        const item = params.get("item");

       const food = document.getElementById("food");
       if(food && item){

       food.textContent = "You selected: " + item;
       }

   const orderPage = document.querySelector(".Order-page");

   if(orderPage){
    orderPage.addEventListener("submit", function(event){
    event.preventDefault();
    window.location.href = "success.html";
});
}