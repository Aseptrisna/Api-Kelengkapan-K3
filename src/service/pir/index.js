const DataModel = require('../../model/sensor_pir_model');
const DataModelImage = require('../../model/result_pir_model');

class DataService {
    async getAllData(page = 1, pageSize = 10) {
        try {
            // const image = await DataModelImage.findOne({}, { _id: 0, __v: 0 });
            const data = await DataModel.find({}, { _id: 0, __v: 0 })
                .sort({ _id: -1 })
                .limit(pageSize * 1)
                .skip((page - 1) * pageSize);
            const count = await DataModel.countDocuments();
            const totalPages = Math.ceil(count / pageSize);
            return { status: true, code: 200, message: "Data retrieved successfully", data, totalItems: count, totalPages, currentPage: page };
        } catch (error) {
            console.error("Error fetching data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async getDataById(id) {
        try {
            const data = await DataModel.find({ guid: id }).sort({ _id: -1 });
            if (!data) {
                return { status: false, code: 404, message: "Data not found" };
            }
            return { status: true, code: 200, data };
        } catch (error) {
            console.error("Error fetching data by ID:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async createData(data) {
        try {
            const newData = await DataModel.create(data);
            return { status: true, code: 201, message: "Data created successfully", newData };
        } catch (error) {
            console.error("Error creating data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async updateData(id, newData) {
        try {
            const updatedData = await DataModel.findByIdAndUpdate(id, newData, { new: true });
            if (!updatedData) {
                return { status: false, code: 404, message: "Data not found" };
            }
            return { status: true, code: 200, message: "Data updated successfully", updatedData };
        } catch (error) {
            console.error("Error updating data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }

    async deleteData(id) {
        try {
            const deletedData = await DataModel.findByIdAndDelete(id);
            if (!deletedData) {
                return { status: false, code: 404, message: "Data not found" };
            }
            return { status: true, code: 200, message: "Data deleted successfully" };
        } catch (error) {
            console.error("Error deleting data:", error);
            return { status: false, code: 500, message: "Internal Server Error" };
        }
    }
}

module.exports = new DataService();
