export class Input {
    constructor(options) {
        const {
            name,
            label,
            placeholder,
            type = 'text',
            onInput,
            onChange,
        } = options;

        this.input = document.createElement('input');
        this.errorMsgText = document.createElement('span');
        console.log(this);

        this.input.name = name;
        this.label = label;
        this.input.placeholder = placeholder;
        this.value = this.input.value;

        this.control = this.createControl(onInput, onChange);
    }

    createControl(onInput, onChange) {
        const container = document.createElement('div');
        const label = document.createElement('label');

        const inputId = `_${this.name}`;

        container.classList.add('input-container');
        this.errorMsgText.classList.add('error-message');
        this.input.classList.add('input');

        this.input.id = inputId;
        label.setAttribute('for', inputId);

        label.innerText = this.label;

        container.append(label, this.input, this.errorMsgText);

        if (onInput) {
            this.input.addEventListener('input', (event) => {
                this.value = this.target.value;
                onInput(event);
            });
        }
        if (onChange) {
            this.input.addEventListener('change', (event) => {
                onInput(event);
            });
        }
        return container
    }
    render(container) {
        container.append(this.control); 
    };
}
