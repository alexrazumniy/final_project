export class Form {
    constructor(options) {
        const { inputs } = options;

        this.submitBtn = document.createElement('button');
        this.inputs = inputs;
        this.form = document.createElement('form');
        this.createForm(options);
        this.form.classList.add('form');
    }

    static getFormValues(inputs) {
        return inputs.reduce((values, input) => {
            values[input.name] = input.value;
            return values
        }, {})
    }

    createForm({ onSubmit, submitBtnText, title: titleText }) {
        const title = document.createElement('h4');

        title.innerText = titleText;
        title.classList.add('form-title');

        this.submitBtn.type = 'submit';
        this.submitBtn.innerText = submitBtnText;
        this.submitBtn.classList.add('button', 'form-btn-submit');

        this.form.addEventListener('submit', async (event) => {
            event.preventDefault();

            this.formValues = Form.getFormValues(this.inputs);

            this.submitBtn.setAttribute('disabled', '');

            try {
                await onSubmit(this.formValues, event);
            } catch (err) {
                console.log(`err`, err.data);
                err.data.details.forEach(({ path, message }) => {
                    // найти инпут
                    const erroredInput = this.inputs.find((input) => {
                        return input.name === path[0];
                    });
                    // вывести сообщение в инпуте
                    erroredInput.updateErrorMessage(message);
                });
            }
            this.submitBtn.removeAttribute('disabled');
        })

        this.form.append(title);

        this.inputs.forEach(input => {
            input.render(this.form);
        });

        this.form.append(this.submitBtn);
    }

    render(container) {
        container.append(this.form);
    }
}