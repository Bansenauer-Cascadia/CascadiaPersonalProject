function setUpDB(tx) {
    tx.executeSql('DROP TABLE IF EXISTS Login'); //this line is for testing the database
    tx.executeSql('DROP TABLE IF EXISTS RecipeBook'); //this line is for testing the database

    console.log("creating the first table");
    tx.executeSql('CREATE TABLE IF NOT EXISTS Login ( loginId, Validated)');

    console.log("creating the second table");
    tx.executeSql('CREATE TABLE IF NOT EXISTS RecipeBook ( recipeBookId, RecipeName, Show)');
    tx.executeSql('INSERT INTO Login (loginId, Validated) VALUES (1, "false")');

    //check for record
    tx.executeSql('SELECT * FROM Login', [], querySuccess, errorDB);
}

function errorDB(err) {
    console.log("Error with SQL: " + err.code + ", message: " + err.message);
}

function successDB() {
    console.log('Database SetUp Successful');
}

function querySuccess(tx, results) {
    var len = results.rows.length;
    console.log("Login table: " + len + " rows found.");
    console.log(len == 0);
    if (len == 0) {
        tx.executeSql('INSERT INTO Login (loginId, Validated) VALUES (1, "false")');
        $.mobile.changePage('#login');
        tx.executeSql('INSERT INTO RecipeBook (recipeBookId, RecipeName, Show) VALUES (1, "MoltenLavaCake", "False")');
        tx.executeSql('INSERT INTO RecipeBook (recipeBookId, RecipeName, Show) VALUES (2, "PumpkinSpicePancakes", "False")');
        tx.executeSql('INSERT INTO RecipeBook (recipeBookId, RecipeName, Show) VALUES (3, "HoggiesFamousHotdogs", "False")');
        tx.executeSql('INSERT INTO RecipeBook (recipeBookId, RecipeName, Show) VALUES (4, "AuntMarthasWaffles", "False")');

    }
}