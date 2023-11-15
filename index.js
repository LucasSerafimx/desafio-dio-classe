class Heroi {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      console.log(`o ${this.tipo} atacou usando ${this.tipo === 'mago' ? 'magia' : this.tipo === 'guerreiro' ? 'espada' : this.tipo === 'monge' ? 'artes marciais' : 'shuriken'}`);
    }
  }
  
  const heroi1 = new Heroi('Link', 20, 'guerreiro');
  const heroi2 = new Heroi('Merlin ', 100, 'mago');
  const heroi3 = new Heroi('Bico', 300, 'monge');
  const heroi4 = new Heroi('Genji', 18, 'ninja');
  
  heroi1.atacar();
  heroi2.atacar();
  heroi3.atacar();
  heroi4.atacar();