const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const mustacheExpress = require('mustache-express')

//app.engine('mustache',mustacheExpress())
const models = require('../models')

// app.set('views','./views')
// app.set('view engine','mustache')

app.get('/posts',function(req,res){

  models.post.findAll({
    include : [
      {
        model : models.comment,
        as : 'comments'
      }
    ]
  }).then(function(posts){
    //res.render('posts',{'posts':posts})
  })
})

models.sequelize.sync().then(() => {
  app.listen(3001,function(){
    console.log("node server has started")
  });
} )



// creating a post
/*
const post = models.post.build({
  title :'Hello World',
  body : 'This is my first app'
}) */

/*
// save the post
post.save().then(function(newPost){
  console.log(newPost)
}) */

/*
models.post.findById(1).then(function(post){

  const comment = models.comment.build({
    title : 'My second comment',
    body :'This is body of comment',
    postId : post.id
  })

  comment.save().then(function(newComment){
    console.log(newComment)
  })

})
*/

/*
// fetch a post with comments
models.post.findOne({
  include :[
    {
      model: models.comment,
      as : 'comments'
    }
  ]
}).then(function(post){
  console.log(post.comments)
}) */

/*
// fetch a comment from the database
models.comment.findOne().then(function(comment){
  console.log(comment)
})

// fetch the comment and include the post
models.comment.findOne({
  include :[{
    model: models.post,
    as : 'post'
  }

  ]
}).then(function(comment){
  // print the post associated with the comment
  console.log(comment.post)
})*/
