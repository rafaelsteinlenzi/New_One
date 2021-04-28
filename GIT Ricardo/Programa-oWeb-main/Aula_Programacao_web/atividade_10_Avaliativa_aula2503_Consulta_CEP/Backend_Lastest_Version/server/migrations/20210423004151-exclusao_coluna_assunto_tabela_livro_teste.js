'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.removeColumn(
  'livro_teste2', 
   'assunto',
   );
  },

  down: async (queryInterface, Sequelize) => {

  }
};
