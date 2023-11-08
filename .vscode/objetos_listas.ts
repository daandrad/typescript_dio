enum Profissao {
  Atriz,
  Professora,
  Desenvolvedora,
  Jogadora
}

interface Pessoa {
  nome: string,
  idade: number,
  profissao?: Profissao
}

interface Estudante extends Pessoa{
  materias: string[]
}

const vanessa: Pessoa = {
  nome: "Vanessa",
  idade: 30,
  profissao: Profissao.Desenvolvedora
}

const adelaide: Pessoa = {
  nome: "Adelaide",
  idade: 42,
  profissao: Profissao.Desenvolvedora
}

const ramon: Estudante = {
  nome: "Rebeca",
  idade: 23,
  profissao: Profissao.Desenvolvedora,
  materias:['Matematia', 'programação', 'machine learn']

}