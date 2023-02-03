let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form-input");
let elCardBody = document.querySelector(".card-body");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    let newLine = document.createElement("div");
    let newCheckBox = document.createElement("input");

    newLine.classList.add("alert", "alert-danger", "d-flex", "justify-content-between");
    newLine.textContent = elFormInput.value.trim();

    newCheckBox.setAttribute("type", "checkbox");
    newCheckBox.classList.add("form-check-input");
    newLine.appendChild(newCheckBox);

    elCardBody.appendChild(newLine);
    elFormInput.value = "";

    newCheckBox.addEventListener("click", function(){
        if(newCheckBox.checked){
            newLine.classList.remove("alert-danger");
            newLine.classList.add("alert-dark", "text-decoration-line-through");
        }else{
            newLine.classList.add("alert-danger");
            newLine.classList.remove("alert-dark", "text-decoration-line-through");
        };
    });
});