'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      [
        queryInterface.renameColumn('posts', 'authorName', 'author'),
        queryInterface.renameColumn('posts', 'author2', 'authorName')
      ]
    )

  },

  down: (queryInterface, Sequelize) => {
    // return Promise.all(
    //   [
    //     queryInterface.renameColumn('posts', 'title', 'postTitle1'),
    //     queryInterface.renameColumn('posts', 'author', 'author2')
    //   ]
    //)
  }
};
