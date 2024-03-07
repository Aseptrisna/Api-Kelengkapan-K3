const DataService = require('../../service/route');

class DataController {
    async getAllData(req, res) {
        try {
            const { page, pageSize } = req.query;
            const data = await DataService.getAllData(parseInt(page), parseInt(pageSize));
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async getAll(req, res) {
        try {
            const data = await DataService.getAll();
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async getDataById(req, res) {
        try {
            const { id } = req.params;
            const data = await DataService.getDataById(id);
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async createData(req, res) {
        try {
            const data = await DataService.createData(req.body);
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async updateData(req, res) {
        try {
            const { id } = req.params;
            const data = await DataService.updateData(id, req.body);
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }

    async deleteData(req, res) {
        try {
            const { id } = req.params;
            const data = await DataService.deleteData(id);
            res.status(data.code).json(data);
        } catch (error) {
            res.status(500).json({ status: false, code: 500, message: "Internal Server Error" });
        }
    }
}

module.exports = new DataController();
