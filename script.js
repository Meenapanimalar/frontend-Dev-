const buttons = document.querySelectorAll(".btn");
const images = document.querySelectorAll(".image");
const search = document.querySelector("#search");


buttons.forEach(button =>{
    button.addEventListener("click",(e)=>{
        buttons.forEach(btn => btn.classList.remove("buttonClicked"));
        e.target.classList.add("buttonClicked");

        const filter=e.target.dataset.filter.toLowerCase();

        images.forEach(image =>{
            const data = image.dataset.items;
            if(data===filter|| filter=="all"){
                image.style.display="block";
            }else{
                image.style.display="none";
            }
        })
    })
})
search.addEventListener('keyup',(e)=>{
   var searchtext = e.target.value.toLowerCase().trim();


// e is the event object automatically passed to the event handler function by the browser when the keyup event is fired.
// It contains information about the event, such as which key was pressed, which element triggered the event, and more.

// e.target: This property references the element that triggered the event. In this case, it is the search input field.
// e.target.value: This property gets the current value of the input field at the time the event was triggered.

images.forEach((image)=>{
    const data = image.dataset.items;
    if(data===searchtext ||searchtext===""){
        image.style.display="block";
    }
    else{
        image.style.display="none";
    }
    
})})