const Sequelize = require("sequelize");
const logger = require("./logger");

const database = new Sequelize("sqlite:./database.sqlite", { logging: msg => logger.debug(msg) });

const Categoria = database.define("categoria", {
    id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const Game = database.define("game", {
    id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    dataLancamento: {
        type: Sequelize.DATEONLY
    }
});

const Usuario = database.define("usuario", {
    id: {
        type: Sequelize.UUIDV1,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,   
        isEmail: true
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
});

Usuario.hasMany(Game);
Game.belongsTo(Usuario);

Categoria.hasMany(Game);
Game.belongsTo(Categoria);

module.exports = {
    database,
    Categoria,
    Game,
    Usuario
}