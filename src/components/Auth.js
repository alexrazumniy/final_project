import { api } from './API';
import { Input } from './Input';
import { Form } from './Form';
import { loginConfig, registerConfig } from './formConfigs';
import { taskBoard } from '../index';

const getLoginForm = (onSuccess) => {
    return new Form({
        title: 'LOGIN',
        inputs: loginConfig.map((input) => new Input(input)),
        submitBtnText: 'Submit',
        onSubmit: async (data) => {
            await api.login(data);
            onSuccess();
        }
    })
}

const getRegisterForm = (onSuccess) => {
    return new Form({
        title: 'Register',
        inputs: registerConfig.map((input) => new Input(input)),
        submitBtnText: 'Submit',
        onSubmit: async (data) => {
            await api.register(data);
            onSuccess();
        }
    })
}

export class Auth {
    constructor({ appContainer, onLoginSuccess }) {
        this.appContainer = appContainer;

        this.logoutBtn = document.createElement('button');
        this.userLogo = document.createElement('span');
        this.formContainer = document.createElement('div');
        this.switchBtn = document.createElement('button');

        this.form = null;
        this.user = null;
        this.isLogin = true;

        this.loginForm = getLoginForm(onLoginSuccess);
        this.registerForm = getRegisterForm(this.switchForms.bind(this));

        this.createFormContainer();
        this.createHeaderControls();
    }

    createFormContainer() {
        this.formContainer.classList.add('form-container');
        this.switchBtn.classList.add('form-switch-btn');
        this.switchBtn.innerText = 'REGISTER';
        this.formContainer.prepend(this.switchBtn);

        this.switchBtn.addEventListener('click', () => {
            this.switchForms();
        })
    }

    createHeaderControls() {
        this.logoutBtn.classList.add('btn-logout', 'button');
        this.logoutBtn.innerText = 'LOGOUT';
        this.userLogo.classList.add('user_logo');      
        
        this.logoutBtn.addEventListener('click', () => {
            this.logout();
            api.logout();
            taskBoard.logout();
        })
    }
    
    renderHeaderControls() {
        this.controlsContainer = document.getElementById('header-controls');
        this.userLogo.innerText = this.user.name[0];
        this.controlsContainer.append(this.logoutBtn, this.userLogo);
    }

    renderAuthForm() {
        if (this.form) {
            this.form.form.remove();
        }
        if (this.isLogin) {
            this.form = this.loginForm;
        } else {
            this.form = this.registerForm;
        }

        this.form.render(this.formContainer);
        this.appContainer.append(this.formContainer);
    }

    switchForms() {
        this.isLogin = !this.isLogin;

        if (this.isLogin) {
            this.switchBtn.innerText = 'REGISTER';
        } else {
            this.switchBtn.innerText = 'LOGIN';
        }

        this.renderAuthForm();
    }

    logout() {
        this.userLogo.remove();
        this.logoutBtn.remove();
        this.appContainer.innerHTML = '';
        this.isLogin = true;

        this.renderAuthForm();
    }
}