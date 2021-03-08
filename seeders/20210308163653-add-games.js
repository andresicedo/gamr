const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

let games = [];
for (let i = 0; i < 10; i++) {
  const game = {
    name: faker.random.word(),
    platform: faker.random.arrayElement(['PC', 'PS5', 'Xbox One']),
    genre: faker.random.arrayElement(['FPS', 'MMORPG', 'MMOFPS']),
    releaseDate: faker.date.past(),
    difficulty: faker.random.number({ min: 1, max: 10 }),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  games.push(game)
}    


   await queryInterface.bulkInsert('Games', [
     {
       name: 'GTA',
       platform: 'PC',
       genre: 'top down shooter',
       releaseDate: '1997-10-21',
       difficulty: 7,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     ...games
   ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
