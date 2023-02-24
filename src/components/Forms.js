class Form {
    constructor(options) {
        const { name, email, password } = options;
        this.name = name;
        this.email = email;
        this.password = password;
        this.render();
    }

    render() {
        const form = document.createElement('form');
        const formTitle = document.createElement('h5');
        formTitle.innerText = 'REGISTER';
        const formSubtitle = document.createElement('h4');
        formSubtitle.innerText = 'LOGIN';

        const nameInputContainer = document.createElement('div');
        const nameInputLabel = document.createElement('label');
        const nameInput = document.createElement('input');
        nameInputLabel.innerText = 'Name';
        nameInput.type = 'text';
        nameInput.placeholder = 'Enter your name';
        const nameErrMsg = document.createElement('span'); ////

        const emailInputContainer = document.createElement('div');
        const emailInputLabel = document.createElement('label');
        const emailInput = document.createElement('input');
        emailInputLabel.innerText = 'Email';
        emailInput.type = 'email';
        emailInput.placeholder = 'Enter your email';
        const emailErrMsg = document.createElement('span'); ////

        const passwordInputContainer = document.createElement('div');
        const passwordInputLabel = document.createElement('label');
        const passwordInput = document.createElement('input');
        passwordInputLabel.innerText = 'Password';
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Enter your password';
        const passwordErrMsg = document.createElement('span'); ////

        const btnSubmit = document.createElement('button');
        btnSubmit.innerText = 'Submit';

        container.classList.add('container');
        form.classList.add('form');
        formTitle.classList.add('form-title');
        formSubtitle.classList.add('form-subtitle');

        const inputContainers = [nameInputContainer, emailInputContainer, passwordInputContainer];
        inputContainers.map(cont => cont.classList.add('input-container'))

        const labels = [nameInputLabel, emailInputLabel, passwordInputLabel];
        labels.map(label => label.classList.add('input-label'));

        const inputs = [nameInput, emailInput, passwordInput];
        inputs.map(input => input.classList.add('field-input'));

        const errMsgs = [nameErrMsg, emailErrMsg, passwordErrMsg];
        errMsgs.map(msg => msg.classList.add('error-message'));

        btnSubmit.classList.add('form-btn-submit', 'button');
    }

    show() {
        const container = document.getElementById('container');
        document.body.append(container);
        container.append(form);

        form.append(formTitle, formSubtitle, nameInputContainer, emailInputContainer, passwordInputContainer, btnSubmit);

        nameInputContainer.append(nameInputLabel, nameInput, nameErrMsg);
        emailInputContainer.append(emailInputLabel, emailInput, emailErrMsg);
        passwordInputContainer.append(passwordInputLabel, passwordInput, passwordErrMsg);
    }
}
class RegistForm extends Form {
    render() {
        super.render();
        this.show();
        console.log(this);
    }
    show()
}
// render()





// const handleSubmit = (event) => {
//     event.preventDefault();

//     const formValues = {
//         name: nameInput.value,
//         email: emailInput.value,
//         password: passwordInput.value,
//     };

//     console.log(formValues);

//     if (!name || !email || !password) {
//         // errorMessage.innerText = 'Все поля должны быть заполнены!'
//         return
//     }
//     // errorMessage.innerText = ''

// }

// form.addEventListener("submit", handleSubmit);

