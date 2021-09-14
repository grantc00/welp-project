"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Businesses", [
      {
        ownerId: 1,
        title: "In-N-Out Burger",
        description:
          "In-N-Out Burger is an American regional chain of fast food restaurants with locations primarily in California and the Southwest. It was founded in Baldwin Park, California, in 1948 by Harry Snyder and Esther Snyder.",
        address: "445 Industrial Rd, San Carlos, CA 94070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Mcdonald",
        description:
          "McDonald's is an American fast food company, founded in 1940 as a restaurant operated by Richard and Maurice McDonald, in San Bernardino, California, United States",
        address: "3128 El Camino Real, Palo Alto, CA 94306",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Jersey Joe's Cheesesteak",
        description:
          "Specialized in Cheesesteak made with half pound Ribeye daily sliced on premise and fresh bread baked daily in local bakery",
        address: "21 El Camino Real, San Carlos, CA 94070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Wendy's",
        description:
          "Wendy's is an American international fast food restaurant chain founded by Dave Thomas on November 15, 1969, in Columbus, Ohio.",
        address: "698 Ralston Avenue, Belmont, CA 94002",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Chick-fil-A",
        description:
          "Chick-fil-A is one of the largest American fast food restaurant chains and the largest whose specialty is chicken sandwiches.",
        address: "536 Whipple Ave, Redwood City, CA 94063",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Dog Haus",
        description:
          "Dog Haus creates hand-crafted hormone- and antibiotic-free hot dogs, sausages, burgers, plant-based proteins and one Bad Mutha Clucka, all served on King's Hawaiian rolls. Crush one, then wash it down with one of our local craft beers or premium shakes.",
        address: "1000 El Camino Real, Belmont, CA 94002",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Jack in the Box",
        description:
          "Jack in the Box is an American fast-food restaurant chain founded February 21, 1951, by Robert O.",
        address: "1100 El Camino Real, San Carlos, CA 94070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Taco Bell",
        description:
          "Taco Bell is an American-based chain of fast food restaurants originating in Irvine, California in 1962, by founder Glen Bell. Taco Bell is a subsidiary of Yum!",
        address: "259 El Camino Real, San Carlos, CA 94070",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Shake Shack",
        description:
          "Shake Shack is an American fast casual restaurant chain based in New York City.",
        address: "33 Hillsdale Shopping Ctr, San Mateo, CA 94403",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ownerId: 1,
        title: "Panda Express",
        description:
          "Panda Express is an American fast food restaurant chain that serves American Chinese cuisine. ",
        address: "1050 El Camino Real, Belmont, CA 94002",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /*
    title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING
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
    return queryInterface.bulkDelete("Businesses", null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
