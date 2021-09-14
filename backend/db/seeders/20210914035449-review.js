"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reviews", [
      {
        userId: 2,
        businessId: 1,
        rating: 3,
        answer: "My favorite spot",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        businessId: 2,
        rating: 5,
        answer: "One of the best take out, fast food experiences ever.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        businessId: 3,
        rating: 5,
        answer:
          "This place is awesome, I am doing my first online order here. It's so easy and fast.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        businessId: 4,
        rating: 3,
        answer: "The food was horrible",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        businessId: 5,
        rating: 4,
        answer: "The food is good, hot and fresh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        businessId: 6,
        rating: 2,
        answer: "Service is horrible the language barrier is obvious.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        businessId: 7,
        rating: 1,
        answer: "Ok the chicken sandwich is a sleeper hit!",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        businessId: 8,
        rating: 3,
        answer: "Large variety of interesting hot dogs",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /*
    userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users'}
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Businesses'}
      },
      rating: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      answer: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
