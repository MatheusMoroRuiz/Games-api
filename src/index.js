const { database, Categoria, Game } = require("./models");

const init = async () => {
    await database.sync(); // Sincroniza o BD (cria ou remove tabelas)

    const categorias = await Categoria.findAll(); // Consulta todos
    for (const i in categorias) {
        console.log(categorias[i].id, categorias[i].nome);
    };
    const games = await Game.findAll( { include: [Categoria]}); // Consulta todos
    for (const i in games) {
        console.log(games[i].id, games[i].nome, games[i].categorium.nome);
    };
};

init();