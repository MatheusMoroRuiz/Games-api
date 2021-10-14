const { Game, database, Categoria } = require("../models");

const init = async () => {
    await database.sync(); // Sincroniza o BD (cria ou remove tabelas)

   const catAventura = await Categoria.create({ nome: "Aventura" }); // Insere um novo objeto
   const catCorrida = await Categoria.create({ nome: "Corrida" });
   const catTerror = await Categoria.create({ nome: "Terror" });

   await Game.create({
       nome: "Zelda",
       categoriumId: catAventura.id,
       dataLancamento: new Date(1979,3, 12)
    });

    await Game.create({
        nome: "Need for Speed Underground",
        categoriumId: catCorrida.id,
        dataLancamento: new Date(2000,3, 12)
    });

    await Game.create({
        nome: "Devour",
        categoriumId: catTerror.id,
        dataLancamento: new Date(2021,3, 12)
    });
}

init();