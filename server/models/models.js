const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const TableItem = sequelize.define('table_item', {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    header: {type: DataTypes.STRING, allowNull: false, unique: true},
    amount: {type: DataTypes.INTEGER, allowNull: false},
    distance: {type: DataTypes.INTEGER, allowNull: false}
})

module.exports = {
    TableItem
}