let count = 0;
const value = document.querySelector(".value");
const buttons = document.querySelectorAll(".button");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const tap = e.currentTarget.classList;
        if(tap.contains("decrease")) {
            count--;
            value.textContent = count;
        }
        else if(tap.contains("increase")) {
            count++;
            value.textContent = count;
        }
        else {
            count = 0;
            value.textContent = count;
        }

        if(count < 0){
            value.style.color = "#F283A5";
        }
        if(count > 0){
            value.style.color = "#72CAAF";
        }
        if(count === 0){
            value.style.color = "#53657D";
        }
    });
});