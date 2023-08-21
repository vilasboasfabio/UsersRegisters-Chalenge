class User {
    constructor(name, email, birthDate, city, phone, cpf){
        this.name = name;
        this.email = email;
        this.birthdate = birthDate;
        this.city = city;
        this.phone = phone;
        this.cpf = cpf;
        this.age = this.calcAge();
    }
    calcAge(birthDate) {
        const today = new Date();
        const birth = new Date(birthDate);
        const age = today - birth;
        return Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));
      }
   
}
