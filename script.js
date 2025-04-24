const canvas = document.getElementById('recuperacao');
const ctx = canvas.getContext('av1');

class Personagem {
constructor(força, mana, vida) {
this.força = força;
this.mana = mana;
this.vida = vida;
}

atacar() {
    console.log(`${this.nome} ataca!`)
}

defende() {
    console.log(`${this.nome} defende!`)
}
}
   
class Guerreiro extends Personagem {
    constructor(vida, mana, arma) {
        super(vida, mana)
        this.arma = arma
    }
}

class Mago extends Personagem {
    constructor(vida, mana, magia) {
        super(vida, mana)
        this.magia = magia
    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, mana, arco) {
        super(nome, vida, mana)
        this.arco = arco
    }
}



