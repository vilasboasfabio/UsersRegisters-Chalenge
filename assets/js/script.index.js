class User {
    constructor(name, email, birthDate, city, phone, cpf){
        this.name = name;
        this.email = email;
        this.birthdate = birthDate;
        this.city = city;
        this.phone = phone;
        this.cpf = cpf;
        this.age = this.calcAge();
        this.zodiacSign = this.getZodiacSign();
        this.potencialCliente = this.verifyPotencialClient(this.age);
    }
    calcAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        const age = today - birth;
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      }
      getZodiacSign() {
        let birthDate = new Date(this.birthDate);
        let day = birthDate.getDate();
        let month = birthDate.getMonth() + 1;
        console.log("Passou pelo getSigno() da class User");
    
        if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
            return "Capricórnio ♑";
        } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
            return "Aquário ♒";
        } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
            return "Peixes ♓";
        } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
            return "Áries ♈";
        } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
            return "Touro ♉";
        } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
            return "Gêmeos ♊";
        } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
            return "Câncer ♋";
        } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
            return "Leão ♌";
        } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
            return "Virgem ♍";
        } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
            return "Libra ♎";
        } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
            return "Escorpião ♏";
        } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
            return "Sagitário ♐";
        }
    }
    verifyPotencialClient(age) {
        return age >= 18 && age <= 31;
      }
}
const formRgister = document.getElementById("user-form");
const sendButton = document.getElementById("button-register");
const sucessMessage = document.getElementById("success-msg");
const errorMessage = document.getElementById("error-msg");
const userList = document.getElementById("user-list");
const backToForm = document.getElementById("button-register");
const usersList = [];

function registerUser() {
   
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const birthDate = document.getElementById("birthdate").value;
    const city = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const cpf = document.getElementById("cpf").value;
   
    errorMessage.style.display = "none";

    if(name.length < 3) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Nome deve ter pelo menos 3 caracteres";
        return;
    }

    const today = new Date();
    const birth = new Date(birthDate);
    if (birth > today) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Data de nascimento inválida";
        return;
    }
    if (!validCPF(cpf)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "CPF inválido";
        return;
    }
    if(alredyRegistered(cpf)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "CPF já cadastrado";
        return;
    }

    usersList.push(new User(name, email, birthDate, city, phone, cpf));
    sucessMessage.style.display = "block";
    sucessMessage.innerHTML = "Usuário cadastrado com sucesso";
    formRgister.reset();

    return false;
}

function alredyRegistered(cpf) {
    return usersList.some(user => user.cpf === cpf);
}
function validCpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}
function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}
function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");

}
function backToRegister() {
    document.getElementById("sub-div").classList.remove("hidden");
    document.getElementById("title-page").classList.add("hidden");
    document.getElementById("main-div").classList.add("hidden");
    console.log("Passou pela funcao backToRegister()");
}
function updateList(){
    userList.innerHTML = "";
    usersList.forEach(user => {
        let userItem = document.createElement("li");
        userItem.innerHTML = `
            <p>Nome: ${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>Data de nascimento: ${user.birthDate}</p>
            <p>Cidade: ${user.city}</p>
            <p>Telefone: (${user.phone.slice(0, 2)}) ${usuario.telefone.slice(2, 7)}-${usuario.telefone.slice(7)}</p>
            <p>CPF: ${user.cpf.slice(0, 3)}.${usuario.cpf.slice(3, 6)}.${usuario.cpf.slice(6, 9)}-${usuario.cpf.slice(9)}</p>
            <p>Idade: ${user.age}</p>
            <p>Signo: ${user.zodiacSign}</p>
            <p>Potencial cliente: ${user.potencialCliente ? "Sim" : "Não"}</p>
        `;
        userList.appendChild(userItem);
    });
}