"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Atriz"] = 0] = "Atriz";
    Profissao[Profissao["Professora"] = 1] = "Professora";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Jogadora"] = 3] = "Jogadora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: "Vanessa",
    idade: 30,
    profissao: Profissao.Desenvolvedora
};
const adelaide = {
    nome: "Adelaide",
    idade: 42,
    profissao: Profissao.Desenvolvedora
};
const ramon = {
    nome: "Rebeca",
    idade: 23,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matematia', 'programação', 'machine learn']
};
