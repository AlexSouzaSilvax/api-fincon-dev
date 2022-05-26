const express = require("express");

const LancamentoController = require("./controllers/LancamentoController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({
    Descricacao: "API FINCON",
    Github: "https://github.com/alexsouzasilvax/api-fincon-dev",
    Twitter: "https://twitter.com/alexsouzasilvax",
    LinkedIn: "https://www.linkedin.com/in/alexsouzasilvax/",
    rotas: [
      {
        //lancamento
        Lancamento: [
          {
            lista: [
              {
                method: "POST",
                route: "/fincon/lancamentos",
                body: [
                  {
                    _idUsuario: "_idUsuario",
                  },
                ],
              },
            ],
            buscar: [
              {
                method: "POST",
                route: "/fincon/lancamento/buscar",
                body: [
                  {
                    _id: "_id",
                  },
                ],
              },
            ],
            criar: [
              {
                method: "POST",
                route: "/fincon/lancamento/criar",
                body: [
                  {
                    tipo: "String",
                    descricao: "String",
                    valor: "String",
                    mensal: "String",
                    pagamento: "String",
                    parcelas: "String",
                    dataPagamento: "String",
                    mesReferencia: "String",
                    dataVencimento: "String",
                    observacao: "String",
                    usuario: "_idUsuario",
                  },
                ],
              },
            ],
            atualizar: [
              {
                method: "POST",
                route: "/fincon/lancamento/atualizar",
                body: [
                  {
                    _id: "_id",
                    tipo: "String",
                    descricao: "String",
                    valor: "String",
                    mensal: "String",
                    pagamento: "String",
                    parcelas: "String",
                    dataPagamento: "String",
                    mesReferencia: "String",
                    dataVencimento: "String",
                    observacao: "String",
                    usuario: "_idUsuario",
                  },
                ],
              },
            ],
            apagar: [
              {
                method: "POST",
                route: "/fincon/lancamento/apagar",
                body: [
                  {
                    _id: "_id",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
});

routes.post("/fincon/lancamentos", LancamentoController.index);
routes.post("/fincon/lancamento/criar", LancamentoController.store);
routes.post("/fincon/lancamento/atualizar", LancamentoController.update);
routes.post("/fincon/lancamento/apagar", LancamentoController.destroy);

module.exports = routes;
