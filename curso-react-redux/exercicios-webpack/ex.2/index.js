class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    toString() {
        console.log(`Pessoa: ${this.nome}`);
    }
}

const pessoa = new Pessoa('Ana');
console.log(pessoa.toString());