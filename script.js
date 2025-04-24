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
    atacar() {
        console.log(`${this.nome} ataca com ${this.arma}!`)
    }
}

class Mago extends Personagem {
    constructor(vida, mana, magia) {
        super(vida, mana)
        this.magia = magia
    }
    usarMagia() {
        console.log(`${this.nome} usarMagia`)
    }
}

class Arqueiro extends Personagem {
    constructor(nome, vida, mana, arco) {
        super(nome, vida, mana)
        this.arco = arco
    }


atacar() {
    console.log(`${this.nome} atira com ${this.arco}!`)
    }
}

const guerreiro = new Guerreiro ("x", 10, 5, "Espada")
const mago = new Mago("y", 10, 5, "Fogo")
const arqueiro = new arqueiro('z',10, 5, 'varios arcos junto')

guerreiro.atacar()
mago.atacar()
arqueiro.atacar()

