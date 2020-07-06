<<<<<<< HEAD
const Account = function (obj) {
=======

function Account (obj) {
>>>>>>> 5955f35de8d8fd3861e64b91c58d7dc42ac62015
    this.login = obj.login;
    this.email = obj.email;
}

Account.prototype.getInfo = function () {
<<<<<<< HEAD
    return console.log(`Email: ${this.email} Login: ${this.login}`);
}




console.log(Account.prototype.getInfo); // function

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
=======
    return console.log(`Login ${this.login} Email ${this.email}`)
}

console.log(Account.prototype.getInfo); // functiong 

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
>>>>>>> 5955f35de8d8fd3861e64b91c58d7dc42ac62015
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
<<<<<<< HEAD
    login: 'Poly',
    email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
=======
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com


>>>>>>> 5955f35de8d8fd3861e64b91c58d7dc42ac62015
