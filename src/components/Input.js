export class Input {
    constructor(options) {
        const {
            name,
            placeholder,
            label,
            type = 'text',
            onInput,
            onChange,
        } = options;

        this.input = document.createElement('input');
        this.errorMsgText = document.createElement('span');

        this.name = name;
        this.input.name = name;
        this.input.type = type;
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
        this.input.classList.add('input');
        this.errorMsgText.classList.add('input-error');

        this.input.id = inputId;
        label.setAttribute('for', inputId);

        label.innerText = this.label;
        label.classList.add('input-label');

        container.append(label, this.input, this.errorMsgText);

        this.input.addEventListener('input', (event) => {
            this.value = event .target.value;
            this.updateErrorMessage('');
            if (onInput) {                
                onInput(event);
            }
        });

        if (onChange) {
            this.input.addEventListener('change', (event) => {
                onChange(event);
            });
        }
        return container;
    }

    updateErrorMessage(message) {
        this.errorMsgText.innerText = message;
    }

    render(container) {
        container.append(this.control);
    };
}
