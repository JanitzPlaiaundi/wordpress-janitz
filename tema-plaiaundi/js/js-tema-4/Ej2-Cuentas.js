let cuenta1 = {titular: "Janitz", saldo: 10}
let cuenta2 = {titular: "Odei", saldo: 20}


cuenta1.describir = function() {
    console.log(this.titular + " " + this.saldo)
}

cuenta1.describir()

cuenta2.describir = cuenta1.describir

cuenta2.describir()