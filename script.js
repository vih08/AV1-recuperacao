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
    console.log(`${this.nome} ataca`)
}

defende() {
    console.log(`${this.nome} defende`)
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
        console.log(`${this.nome} ataca com ${this.arma}`)
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
    console.log(`${this.nome} atira com ${this.arco}`)
    }
}

const guerreiro = new Guerreiro ("x", 10, 5, "espada")
const mago = new Mago("y", 10, 5, "fogo")
const arqueiro = new arqueiro('z',10, 5, 'varios arcos junto')

guerreiro.atacar()
mago.atacar()
arqueiro.atacar()

atacar(oponente)
    const dano = 10
    oponente.setVida(oponente.getVida() - dano)
    console.log(`Guerreiro atacou Vida do oponente reduziu ${dano}. Vida atual: ${oponente.getVida()}`)

class Jogo {
    constructor() {
        this.personagens = []
    }
    adicionarPersonagem(personagem) {
        this.personagens.push(personagem)
    }
    executarAtaques() {
        this.personagens.forEach((personagem, index) => {
            const oponente = this.personagens[(index + 1) % this.personagens.length]
            console.log(personagem.atacar(oponente))
        })
    }
}

function batalhar(p1, p2) {
    while (p1.getVida() > 0 & p2.getVida() > 0) {
        p1.atacar(p2)
        if (p2.getVida() > 0) {
            p2.atacar(p1)
        }
    }
    console.log(p1.getVida() > 0 ? `${p1.jogador} venceu` : `${p2.jogador} venceu`)
}

class Jogo {
    constructor() {
        this.personagens = []
    }
    adicionarPersonagem(personagem) {
        this.personagens.push(personagem)
    }
    turno() {
        this.personagens.forEach((personagem, index) => {
            const oponente = this.personagens[(index + 1) % this.personagens.length]
            console.log(`${personagem.constructor.name} é pra estar realizando a ação`)

            if (personagem instanceof Guerreiro) {
                personagem.atacar(oponente)
            } else if (personagem instanceof Mago) {
                personagem.usarMagia()
            } else if (personagem instanceof Arqueiro) {
                personagem.atacar(oponente)
            }
            
            const dano = 5
            oponente.setVida(oponente.getVida() - dano)
            console.log(`Vida ${oponente.constructor.name} depois do ataque: ${oponente.getVida()}`)
        })
    }
}

const jogo = new Jogo()
jogo.adicionarPersonagem(guerreiro)
jogo.adicionarPersonagem(mago)
jogo.adicionarPersonagem(arqueiro)
jogo.executarAtaques()
jogo.adicionarPersonagem(new Guerreiro(10, 5, "espada"))
jogo.adicionarPersonagem(new Mago(10, 5, "magia"))
jogo.adicionarPersonagem(new Arqueiro(10, 5, 'arco'))
jogo.turno()
