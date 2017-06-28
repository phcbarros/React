const produto = {
    nome: 'IPhone 5',
    preco: 3000.99,
    desconto: 0.10
};

function clone(produto) {
    return { ...produto };
}

const produtoNovo = clone(produto);
produtoNovo.nome = 'IPhone 5S';
produtoNovo.preco = 5000.00;

console.log(produto, produtoNovo);