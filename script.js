const canvas = document.getElementById('recuperacao');
const ctx = canvas.getContext('2d');

class Personagem {
#forca
#mana
#vida
constructor(forca, mana, vida) {
this.#forca = forca
this.#mana = mana
this.#vida = vida
}

getForca() {
    return this.#forca
}

getMana() {
    return this.#mana
}

getVida() {
    return this.#vida
}

setForca(forca) {
    this.#forca = forca
}

setMana(mana) {
    this.#mana = mana
}

setVida(vida) {
    this.#vida = vida
}

atacar() {
    console.log(`${this.nome} ataca!`)
}

defende() {
    console.log(`${this.nome} defende!`)
}
}

class Guerreiro extends Personagem {
#arma   
    constructor(vida, mana, arma) {
        super(vida, mana)
        this.#arma = arma
    }

    getArma() {
        return this.#arma
    }

    setArma(arma) {
        this.#arma = arma
    }

    atacar() {
        console.log(`${this.nome} ataca com ${this.arma}!`)
    }

}

class Mago extends Personagem {
#magia    
    constructor(vida, mana, magia) {
        super(vida, mana)
        this.#magia = magia
    }

    getMagia() {
        return this.#magia
    }

    setMagia(magia) {
        this.#magia = magia
    }

    usarMagia() {
        console.log(`${this.nome} usarMagia`)
    }
}

class Arqueiro extends Personagem {
#arco
    constructor(nome, vida, mana, arco) {
        super(nome, vida, mana)
        this.#arco = arco
    }
   
    getArco() {
        return this.#arco
    }

    setArco(arco) {
        this.#arco = arco
    }

    atacar() {
    console.log(`${this.nome} atira com ${this.arco}!`)
    }
}

const guerreiro = new Guerreiro ("x", 10, 5, "espada")
const mago = new Mago("y", 10, 5, "fogo")
const arqueiro = new arqueiro('z',10, 5, 'varios arcos junto')

guerreiro.atacar()
mago.atacar()
arqueiro.atacar()

