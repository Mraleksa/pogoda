var sqlite3 = require("sqlite3").verbose();

# Open a database handle
var db = new sqlite3.Database("data.sqlite");
db.serialize(function() {

  # Create new table
  db.run("CREATE TABLE IF NOT EXISTS data (title TEXT)");

  # Insert a new record
  var statement = db.prepare("INSERT INTO data(title) VALUES (?)");
  statement.run('A new title to add');
  statement.finalize();
});


console.log("done")
