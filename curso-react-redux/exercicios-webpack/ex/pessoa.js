export default class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        console.log(`Pessoa: ${this.nome}`);
    }
}