const Sequelize = require("sequelize");

const database = new Sequelize("sqlite:./database.sqlite");

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