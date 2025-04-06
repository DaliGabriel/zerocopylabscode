import { findUserByEmail } from "../services/userService.js";
import { generateToken, passwordsMatch } from "../utils/auth.js";


export const login = async (req, res) => {
    const { email, password } = req.body;

    const user = findUserByEmail(email);
    if (!user || !passwordsMatch(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken({ id: user._id });
    res.json({ token });
};
