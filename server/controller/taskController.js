const taskSchema = require('../schema/taskSchema');

const post = async (req, res) => {
    const { name, password } = req.body;
    try {
        const result = await taskSchema.create({ name, password });
        res.status(200).json({ message: "Data inserted successfully" });
    } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).json({ error: "An error occurred while inserting data" });
    }
};

module.exports = { post };
