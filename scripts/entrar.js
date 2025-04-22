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
    const userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Usuário';
    userInput.style.margin = '10px 0';
    userInput.style.padding = '10px';
    userInput.style.width = '100%';
    userInput.style.borderRadius = '5px';
    form.appendChild(userInput);

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Senha';
    passwordInput.style.margin = '10px 0';
    passwordInput.style.padding = '10px';
    passwordInput.style.width = '100%';
    passwordInput.style.borderRadius = '5px';
    form.appendChild(passwordInput);

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

    // Adicionando persistência de login usando localStorage
    form.onsubmit = (event) => {
        event.preventDefault();

        const username = userInput.value;
        const password = passwordInput.value;

        // Define the specific login credentials
        const validUsername = 'admin';
        const validPassword = '1234';

        if (username === validUsername && password === validPassword) {
            // Salva o estado de login no localStorage
            localStorage.setItem('isLoggedIn', 'true');
            // Redirect to restricted area on successful login
            window.location.href = 'area-restrita.html';
        } else {
            // Show error message for invalid credentials
            alert('Usuário ou senha inválidos. Tente novamente.');
        }
    };

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