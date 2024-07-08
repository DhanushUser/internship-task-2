
const button = document.getElementById("colorButton");
const greetings = document.getElementById("greetingsBtn");

let clicked = false;

    button.addEventListener('click', function() {
        if (clicked) {
            button.classList.remove('clicked');
        } else {
            button.classList.add('clicked');
            }
            
            clicked = !clicked;
        });


greetings.addEventListener("click", function(){

    const now = new Date();
    const currentHour = now.getHours();
  
    let greeting;
  
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon!";
    } else if (currentHour >= 18 && currentHour < 22) {
      greeting = "Good evening!";
    } else {
      greeting = "Good night!";
    }
    alert(greeting);

})

 

