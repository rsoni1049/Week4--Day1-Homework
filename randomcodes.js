function generateCode() {
    let code = '';
    let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < 8; i++) {
        let randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
        code += randomChar;
    }
    
    document.getElementById("codes").innerText = code;
    document.getElementById("submitBtn").disabled = true;
}

window.onload = generateCode;