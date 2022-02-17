'use strict'

import faker from '@ngneat/falso';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const customers = []
    for (let i = 0; i < 3e3; i++) {
      customers.push({
        firstName: faker.randFirstName(),
        lastName: faker.randLastName(),
        email: faker.randEmail(),
        phone: faker.randPhoneNumber(),
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }

    return queryInterface.bulkInsert('customers', customers, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {})
  }
}