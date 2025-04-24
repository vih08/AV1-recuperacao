const canvas = document.getElementById('recuperacao');
const ctx = canvas.getContext('av1');

class Personagem {
constructor(força, mana, vida) {
this.força = força;
this.mana = mana;
this.vida = vida;
}}

class Jogador extends Personagem {
    constructor() {
        super(15, 20, 5)
    }}
    

