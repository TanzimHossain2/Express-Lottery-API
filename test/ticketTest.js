const myDB = require('../db/db');

myDB.create('user1', 100);
myDB.create('user2', 100);
myDB.create('user3', 100);

myDB.bulkCreate('user4', 100, 10);
const tickets = myDB.find();
console.log(tickets);

const winner = myDB.draw(3);
console.log(winner);
