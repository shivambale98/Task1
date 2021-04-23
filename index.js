
  





const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const comapanyInput = document.querySelector('input[name="company"]');
const textarea = document.querySelector('textarea');
const charactercount = document.querySelector('.character-count');
const main = document.querySelector('.home-page')
const thankBox = document.querySelector('.Thank-you');

function emailvalidate() {
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  var email = emailInput.value;

  if (email.match(pattern))
  {
    text.classList.add("emailValid");
    text.classList.remove("emailInvalid");
    text.innerHTML = "Your email is valid.";
    text.style.color = "#00ff00";
  }
  else{
    text.classList.remove("emailValid");
    text.classList.add("emailInvalid");
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "#ff0000";
  }
}

(function() {
  document.addEventListener("keyup", function(event){
    if(event.target.matches(".count-chars")){
      //get input value and length
      const value = event.target.value;
      const valueLength = event.target.value.length;

      //get data values
      const maxChars = parseInt(event.target.getAttribute("data-max-chars"));
      const remainingChars = maxChars - valueLength;
      charactercount.innerHTML = remainingChars + " characters remaining";
      console.log(remainingChars);
    }
  })
})();




const inputs = [nameInput, emailInput, comapanyInput, textarea];

let isFormValid = false;
let isValidationOn = false


const resetElm= (elm) => {
    elm.classList.remove("invalid");
   elm.nextElementSibling.classList.add("hidden");
};


const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
}

const validateInputs = () => {
  if(!isValidationOn) return;


   isFormValid = true;
   resetElm(nameInput);
   resetElm(comapanyInput);
   resetElm(emailInput);

  if (!nameInput.value) {
    invalidateElm(nameInput);
    isFormValid = false;
  }

  if (!emailInput.value) {
      isFormValid = false;
      invalidateElm(emailInput);
  }

  if(!comapanyInput.value) {
      isFormValid = false;
      invalidateElm(comapanyInput);
  }
  if(!textarea.value) {
    isFormValid = false;
    invalidateElm(textarea);
}
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
   if (isFormValid) {
    // main.remove();
    swal("Thank You!", "We will contact You shortly", "success");
   }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs()
  })
})

