import User from "../models/userModel.js";



// Signup Controller
export const usersignup = async (req, res) => {
    try {
        console.log(req.body);
        const newUser = new User(req.body);
        await newUser.save();  // Save user in the database
        res.status(200).json({ message: "successfully signup" });  // Send success message in JSON
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "failed to register", error: err.message });  // Send error response
    }
};



export const usersignin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Check password
        const isPasswordMatch = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Respond with success
        res.status(200).json({ message: "Successfully signed in" });
    } catch (err) {
        console.error("Error during signin process:", err);
        res.status(500).json({ message: "Server error" });
    }
};
