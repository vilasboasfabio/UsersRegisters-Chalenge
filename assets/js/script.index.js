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
   verifyPotentialClient() {
        if (this.age >= 18 && this.age <= 31) {
            return "Cliente em potencial";
        } else {
            return "Não é um cliente em potencial";
        }
    }
}
