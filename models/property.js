'use strict'

module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define('property',{
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zipCode: DataTypes.STRING,
        country: DataTypes.STRING,
        bedrooms: DataTypes.INTEGER,
        bathrooms: DataType.INTEGER,
        area: DataTypes.INTEGER,
        description: DataTypes.STRING,
        approved: DataTypes.STRING
    }, {})
    Property.associate = function (models) {
        //associations can be defined here
    }
    return Property
} 