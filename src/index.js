import './styles/style.css'
import { Input } from './components/Input';
import { Form } from './components/Form';
import { Auth } from './components/Auth';
import { api } from './components/API';

const appContainer = document.getElementById('app-container');

const onLoginSuccess = async () => {
    console.log('HELLO!');
    appContainer.innerHTML = '';
    const user = await api.getSelf();
    renderAppLayout(user);
}

const auth = new Auth({
    appContainer,
    onLoginSuccess
})

const renderAppLayout = (user) => {
    auth.user = user;
    auth.renderHeaderControls();
}

const init = async () => {
    const isLoggedIn = api.isLoggedIn();
    if (isLoggedIn) {
        const user = await api.autoLogin();
        renderAppLayout(user);
    } else {
        auth.renderAuthForm();
    }
}

init();

// const loginForm = new Form({
//     inputs: loginConfig.map(config => new Input(config)),
//     onSubmit: (values) => console.log('values', values),
//     submitBtnText: 'Войти',
//     title: 'Login',
// });

// loginForm.render(appContainer);

// api.register({
//     email: "alex@gmal.com",
//     password: "alex123",
//     name: 'alex',
// }).then(() => {
//     api.login({
//         email: "alex@gmal.com",
//         password: "alex123",
//     }).then((response) => {
//         api.getSelf();
//     }).catch((err) => {
//         console.log(`err`, err);
//     })
// })

// api.getSelf();

// const isLoggedIn = api.isLoggedIn();
// if (isLoggedIn) {
//     api.autoLogin()
// } else {
//     // ... render auth form
//     console.log('LOGIN');
// }


// const input = new Input ({
//     name: "email",
//     placeholder: "Enter email",
//     label: "Email",
// });

// input.render(document.body);
