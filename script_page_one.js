
const InputTypeTextEmailAddress=document.getElementById("Input_type_text")
const LabelInputTypeTextEmailAddress=document.querySelector("label[for='Input_type_text']")
const InputTypeTextPassword=document.getElementById('Input_type_text_password')
const LabelInputTypeTextPassword=document.querySelector('label[for="Input_type_text_password"]')
const LowVision=document.getElementById('switch_case_type_text')
const ShowAlt=document.getElementById('switch_case_type_password')

InputTypeTextEmailAddress.addEventListener('focus',()=>{
    LabelInputTypeTextEmailAddress.style.color="#1E90FF"
})
InputTypeTextEmailAddress.addEventListener('blur',()=>{
    LabelInputTypeTextEmailAddress.style.color="#1B2B41B7"
})
InputTypeTextPassword.addEventListener('focus',()=>{
    LabelInputTypeTextPassword.style.color="#1E90FF"
})
InputTypeTextPassword.addEventListener('blur',()=>{
    LabelInputTypeTextPassword.style.color="#1B2B41B7"
})

function toggleInputTypeTextSwitchInputTypePassword(){
    if(InputTypeTextPassword.type === "password"){
        InputTypeTextPassword.type="text"
        LowVision.style.display="none"

    }else {
        InputTypeTextPassword.type="password"
        LowVision.style.display="block"
        ShowAlt.style.display="block"
    }
}


function validation(from){
    function removeError(input){
        const parent=input.parentNode
        if(parent.classList.contains('error')){
           parent.querySelector('.error-label').remove()
           parent.classList.remove('error')
        }
    }
    function createError(input,text){
        const parent=input.parentNode;
        parent.classList.add('error')
        const errorLabel=document.createElement("label")
        errorLabel.classList.add("error-label")
        errorLabel.textContent=text
        parent.append(errorLabel)
        LabelInputTypeTextPassword.style.color="red"
        LabelInputTypeTextEmailAddress.style.color="red"
    }

    let result=true

    const allInputs=from.querySelectorAll('input')

    for (const input of allInputs){
        removeError(input)

        if (input.dataset.minLength){
            removeError(input)
            if (input.value.length < input.dataset.minLength){
                removeError(input)
                createError(input,`минимальное кол-во символов:${input.dataset.minLength}`)
                result=false
            }
        }

        if(input.dataset.maxLength){
            if (input.value.length > input.dataset.maxLength){
                removeError(input)
                createError(input,`максимальное кол-во символов:${input.dataset.maxLength}`)
                result =false
            }
        }
        if(input.dataset.required==="true"){
            if (input.value === ""){
                removeError(input)
                createError(input,"заполните поле")
                result =false
            }
        }
    }
    return result
}


document.getElementById("form").addEventListener('submit',function (event){
    event.preventDefault()
   if (validation(this)===true){
       alert("форма успешно отправлина ")
   }
})