function openLogin(type) {
    const loginWindow = document.createElement('div');
    loginWindow.style.position = 'fixed';
    loginWindow.style.top = '50%';
    loginWindow.style.left = '50%';
    loginWindow.style.transform = 'translate(-50%, -50%)';
    loginWindow.style.backgroundColor = '#000';
    loginWindow.style.color = '#fff';
    loginWindow.style.padding = '20px';
    loginWindow.style.borderRadius = '10px';
    loginWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    loginWindow.style.textAlign = 'center';

    const title = document.createElement('h1');
    title.textContent = `Login ${type.charAt(0).toUpperCase() + type.slice(1)}`;
    loginWindow.appendChild(title);

    const form = document.createElement('form');
    form.id = 'login-form';
    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.id = 'username';
    userInput.placeholder = 'Usuário';
    userInput.style.margin = '10px 0';
    userInput.style.padding = '10px';
    userInput.style.width = '100%';
    userInput.style.borderRadius = '5px';
    form.appendChild(userInput);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.placeholder = 'Senha';
    passwordInput.style.margin = '10px 0';
    passwordInput.style.padding = '10px';
    passwordInput.style.width = '100%';
    passwordInput.style.borderRadius = '5px';
    form.appendChild(passwordInput);

    const rememberMeLabel = document.createElement('label');
    rememberMeLabel.style.display = 'block';
    rememberMeLabel.style.margin = '10px 0';
    const rememberMeCheckbox = document.createElement('input');
    rememberMeCheckbox.type = 'checkbox';
    rememberMeCheckbox.id = 'remember-me';
    rememberMeLabel.appendChild(rememberMeCheckbox);
    rememberMeLabel.appendChild(document.createTextNode('Lembrar de mim'));
    form.appendChild(rememberMeLabel);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Entrar';
    submitButton.style.marginTop = '10px';
    submitButton.style.padding = '10px 20px';
    submitButton.style.backgroundColor = '#fffff';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    form.appendChild(submitButton);

    loginWindow.appendChild(form);

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.marginTop = '10px';
    closeButton.style.padding = '10px 20px';
    closeButton.style.backgroundColor = '#fffff';
    closeButton.style.border = 'none';
    closeButton.style.borderRadius = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.onclick = () => document.body.removeChild(loginWindow);
    loginWindow.appendChild(closeButton);

    document.body.appendChild(loginWindow);
}

function recoverPassword() {
    const email = prompt("Por favor, insira seu e-mail para recuperação de senha:");
    if (email) {
        alert(`Um link de recuperação foi enviado para o e-mail: ${email}`);
        // Aqui você pode adicionar lógica para enviar o e-mail ao servidor
    } else {
        alert("E-mail não fornecido. Tente novamente.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('#login-form');
    const rememberMeCheckbox = document.getElementById('remember-me');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Validate credentials
        if (username === 'admin' && password === '1234') {
            if (rememberMeCheckbox && rememberMeCheckbox.checked) {
                localStorage.setItem('rememberedUser', username);
            }

            alert('Login bem-sucedido!');
            window.location.replace('area-restrita.html'); // Use replace to avoid keeping entrar.html in history
        } else {
            alert('Usuário ou senha inválidos.');
        }
    });

    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
        const usernameField = document.getElementById('username');
        if (usernameField) {
            usernameField.value = rememberedUser;
        }
        if (rememberMeCheckbox) {
            rememberMeCheckbox.checked = true;
        }
    }

    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            alert('Você foi desconectado.');
            window.location.replace('index.html');
        });
    }
});