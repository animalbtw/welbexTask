const {TableItem} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemsController {
    async createItem(req, res, next) {
        try {
            const {header, amount, distance} = req.body
            const item = await TableItem.create({header, amount, distance})
            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getItems(req, res) {
        const items = await TableItem.findAll()
        return res.json(items)
    }
}

module.exports = new ItemsController()