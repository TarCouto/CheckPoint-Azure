const path = require("path");

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds")
    },
    useNullAsDefault: true
  },

  production: {
    client: 'mssql',
    connection: {
      host: 'dimdimserver.database.windows.net',
      user: 'DimDimLogin',
      password: 'DimDim123456',
      database: 'DimDimSQL',
      options: {
        encrypt: true,
        enableArithAbort: true
      }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations")
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds")
    }
  }
};
