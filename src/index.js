import './styles/style.css'
import { Input } from './components/Input.js';

const input = new Input ({
    name: "email",
    placeholder: "Enter email",
    label: "Email",
});

input.render(document.body);

// console.log(input);