const RulesModel = require('../model/RulesModel');

class RulesController {

    async create(req, res) {
        const rules = new RulesModel(req.body);
        await rules
            .save()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async update(req, res) {
        await RulesModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async all(req, res) {
        /*filtrar por URL, usar o código { url: { '$in': req.params.url } } */
        await RulesModel.find()
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }

    async delete(req, res) {
        await RulesModel.deleteOne({ '_id': req.params.id })
            .then(response => {
                return res.status(200).json(response);
            })
            .catch(error => {
                return res.status(500).json(error);
            })
    }
}

module.exports = new RulesController();