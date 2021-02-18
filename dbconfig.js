var dbConfig = {
    server: 'localhost',
    port: 1433,
    database: 'dbtest',
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true
    }
  }
  module.export = dbConfig