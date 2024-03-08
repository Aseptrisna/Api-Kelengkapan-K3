const dataService = require('../../service/pir');

class DataController {
    async getAllData(req, res) {
        const page = req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
        const result = await dataService.getAllData(page, pageSize);
        res.status(result.code).json(result);
    }

    async getDataById(req, res) {
        const result = await dataService.getDataById(req.params.id);
        res.status(result.code).json(result);
    }

    async createData(req, res) {
        const result = await dataService.createData(req.body);
        res.status(result.code).json(result);
    }

    async updateData(req, res) {
        const result = await dataService.updateData(req.params.id, req.body);
        res.status(result.code).json(result);
    }

    async deleteData(req, res) {
        const result = await dataService.deleteData(req.params.id);
        res.status(result.code).json(result);
    }
}

module.exports = new DataController();
