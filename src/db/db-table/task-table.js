exports.taskTable = (databaseUrl) => { 
  databaseUrl.run('CREATE TABLE IF NOT EXISTS task(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'); 
}