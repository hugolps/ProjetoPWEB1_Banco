let contaController = new ContaController();
let clienteController = new ClienteController();


contaController.listar();
clienteController.listar()

const c1 = new Conta('1', 100);
const c2 = new Conta('2', 200);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

const clientes = new Clientes();
const cliente1 = new Cliente('Hugo', '1234', c1);
const cliente2 = new Cliente('Leonardo', '5678', c2);
const cliente3 = new Cliente('Ana', '7777', c1);
const cliente4 = new Cliente('Beatriz', '4444', c2);
clientes.inserir(cliente1)
clientes.inserir(cliente2)
clientes.inserir(cliente3)
clientes.inserir(cliente4)

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


console.log(clientes.listar())
clientes.remover('1234')
console.log(clientes.listar())

