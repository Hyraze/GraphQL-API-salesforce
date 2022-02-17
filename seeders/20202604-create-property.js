'use strict'

import faker from '@ngneat/falso';


module.exports = {
  up: (queryInterface, Sequelize) => {
    const properties = []
    for (let i = 0; i < 3e3; i++) {
      properties.push({
        address: faker.randAddress(),
        city: faker.randCity(),
        state: faker.randState(),
        zipCode: faker.randZipCode(),
        country: faker.randCountry(),
        bedrooms: faker.randText({ charCount: 5 }),
        bathrooms: faker.randText({ charCount: 5 }),
        area: faker.randNumber(3000),
        description: faker.randWord(),
        approved: true,
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('properties', properties, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('properties', null, {})
  }
}