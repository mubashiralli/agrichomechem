const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitbtn');
const inputFields = form.querySelectorAll('input');
const textarea = form.querySelector('textarea'); // Moved this line up

// Add event listeners to input fields
inputFields.forEach(inputField => {
    inputField.addEventListener('input', checkFields);
});

// Add event listener to textarea
textarea.addEventListener('input', checkFields);
function checkFields() {
    // console.log('input fields ',inputFields);
    const allFilled = Array.from(inputFields).every(field => field.value.trim() !== '');
    // console.log('hello hello fucntion working ',allFilled)
    if (allFilled && textarea.value.trim() !== '') {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', 'disabled');
    }
}
function SubmitMessage(event){
    event.preventDefault();
    let name = form.querySelector('input[name="name"]').value;
    let csrftoken = form.querySelector('input[name="csrfmiddlewaretoken"').value;
    let email =  form.querySelector('input[name="email"]').value;
    let phone_number = form.querySelector('input[name="contact_number"]').value;
    let msg = form.querySelector('textarea[name=message]').value;
    // console.log('the value of name is ' + name + ' and email is ' +email+' msg: ',msg);
    $.ajax({
        url:'/',
        type:'POST',
        data:{
            name:name,
            csrfmiddlewaretoken: csrftoken,
            email: email,
            contact_number: phone_number,
            message: msg
        },
        success: function(response){

            document.getElementById('submitSuccessMessage').classList.remove('d-none');
            document.getElementById('submitbtn').classList.add('d-none');
        },
        error:function(error){
            document.getElementById('submitErrorMessage').classList.remove('d-none');
        }

    })
}