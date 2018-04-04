var Sequelize = require('sequelize');



const connection = new Sequelize('postgres://localhost:5432/seqClass');

var Article = connection.define('article', {
    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    
    },
    body: {
        type: Sequelize.TEXT,
        defaultValue: 'Coming Soon'
    }
  },
{
    timestamps: false
});

  connection.sync({
      force: true,
      logging: console.log
  });

//   connection.sync().then(function(){
//     Article.findAll().then(function(articles){
//         var r = articles[0].body;
//         console.log(r);
//     })

//   connection.sync().then(function(){
//     Article.findAll().then(function(articles){
//         console.log(articles.length);
//     })

//   connection.sync().then(function(){
//     Article.create({
//         title: "hello world",
//         body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
//     });


  //});

//test connection string
// sequelize.authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });