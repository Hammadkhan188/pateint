let user = require("../Collection/user");

let main_function = {
    home: async function(req, res) {
        res.send("home page");
        res.end();
    },

    register_user: async function(req, res) {
        try {
            let { name, gender, address, age, phone, email } = req.body;
            let user_data = new user({ name, gender, address, age, phone, email });
            let create = await user_data.save();
            return res.status(200).json({ msg: "User registration successfully" });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "Error registering user", error: error.message });
        }
    },

    get_user: async function(req, res) {
        try {
            let getdata = await user.find().sort({ "created_at": -1 });
            return res.status(201).json(getdata);
        } catch (error) {
            return res.status(501).json({ msg: error.message });
        }
    }
};

module.exports = main_function;
