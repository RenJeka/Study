class Database {
    constructor(data) {
        if (Database.exist) {
            return Database.instance;
        }

      Database.instance = this; // link for current instance;
      Database.exist = true; // flag to check if instance exist;
      this.data = data;
    }

    getData() {
        return this.data;
    }
}


const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mySql = new Database('MySQL');
console.log(mySql.getData());
