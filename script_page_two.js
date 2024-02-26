    const InputTypeTextFullName=document.getElementById('Input_type_text')
    const LabelInputTypeTextFullName=document.querySelector('label[for="Input_type_text"]')
    const InputTypeTextEmailAddress=document.getElementById('input_type_email_address')
    const LabelInputTypeTextEmailAddress=document.querySelector('label[for="input_type_email_address"]')
    const InputTypePassword=document.getElementById("Input_type_text_password")
    const LabelInputTypePassword=document.querySelector('label[for="Input_type_text_password"]')
    const InputTypePasswordConfirm=document.getElementById('Input_type_text_password_confirm')
    const LabelInputTypePasswordConfirm=document.querySelector('label[for="Input_type_text_password_confirm"]')
    const LowVision=document.getElementById('switch_case_type_text')
    const ShowAlt=document.getElementById('switch_case_type_password')
    const LowVisionConfirm=document.getElementById("switch_case_type_text_confirm")
    const ShowAltConfirm=document.getElementById("switch_case_type_password_confirm")



    InputTypeTextFullName.addEventListener('focus',()=>{
        LabelInputTypeTextFullName.style.color="#1E90FF"
    })
    InputTypeTextFullName.addEventListener('blur',()=>{
        LabelInputTypeTextFullName.style.color="#1B2B41B7"
    })
    InputTypeTextEmailAddress.addEventListener('focus',()=>{
        LabelInputTypeTextEmailAddress.style.color="#1E90FF"
    })
    InputTypeTextEmailAddress.addEventListener('blur',()=>{
        LabelInputTypeTextEmailAddress.style.color="#1B2B41B7"
    })
    InputTypePassword.addEventListener("focus",()=>{
        LabelInputTypePassword.style.color="#1E90FF"
        ShowAlt.style.color="#1B2B41B7"
        LowVision.style.color="#1B2B41B7"
    })
    InputTypePassword.addEventListener('blur',()=>{
        LabelInputTypePassword.style.color="#1B2B41B7"
    })
    InputTypePasswordConfirm.addEventListener('focus',()=>{
        LabelInputTypePasswordConfirm.style.color="#1E90FF"
        ShowAltConfirm.style.color="#1B2B41B7"
        LowVisionConfirm.style.color="#1B2B41B7"
    })
    InputTypePasswordConfirm.addEventListener('blur',()=>{
        LabelInputTypePasswordConfirm.style.color="#1B2B41B7"
    })


    function toggleInputTypeTextSwitchInputTypePassword(){
        if(InputTypePassword.type==="password"){
            InputTypePassword.type="text"
            LowVision.style.display="none"
        }else {
            InputTypePassword.type="password"
            LowVision.style.display="block"
            ShowAlt.style.display="block"
        }
        validation(document.getElementById('form'))
    }
    function toggleInputTypeTextSwitchInputTypePasswordConfirm(){
        if(InputTypePasswordConfirm.type==="password"){
            InputTypePasswordConfirm.type="text"
            LowVisionConfirm.style.display="none"
        }else {
            InputTypePasswordConfirm.type="password"
            LowVisionConfirm.style.display="block"
            ShowAltConfirm.style.display="block"
        }
        validation(document.getElementById('form'))
    }
    function validation(from){
        function removeError(input) {
            const parent =input.parentNode
            if (parent.classList.contains("error")){
                parent.querySelector('.error-label').remove()
                parent.classList.remove('error')
            }
        }
        function createError(input,text){
            const parent =input.parentNode
            parent.classList.add('error')
            const errorLabel=document.createElement("label")
            errorLabel.classList.add("error-label")
            errorLabel.textContent=text
            parent.append(errorLabel)
            LabelInputTypePasswordConfirm.style.color="red"
            LabelInputTypePassword.style.color="red"
            LabelInputTypeTextEmailAddress.style.color="red"
            LabelInputTypeTextFullName.style.color="red"
            LowVision.style.color="#1B2B41B7"
            LowVisionConfirm.style.color="#1B2B41B7"
            ShowAltConfirm.style.color="#1B2B41B7"
            ShowAlt.style.color="#1B2B41B7"
        }

        let result=true

        const allInputs =from.querySelectorAll('input')

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

    document.getElementById('form').addEventListener("submit",function (event){
        event.preventDefault()
        if (validation(this )===true){
            alert("fort successfully dispatched")
        }
    })

