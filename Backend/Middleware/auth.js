// Import the jsonwebtoken library to handle JWT operations
import jwt from 'jsonwebtoken'

/**
 * Authentication middleware for Express.js routes.
 * This middleware checks for a valid JWT in the Authorization header of incoming requests.
 * If the token is valid, the request proceeds to the next middleware or route handler.
 * If the token is missing, invalid, or expired, it responds with a 401 Unauthorized error.
 */
const auth = (req, res, next) => {
    // Retrieve the Authorization header from the request
    const authHeader = req.headers.authorization;

    // Check if the Authorization header exists and starts with 'Bearer '
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        // Respond with 401 if the header is missing or malformed
        return res.status(401).json({ message: "Authorization header does not include Bearer token" });
    }

    // Extract the token from the header (format: 'Bearer <token>')
    const token = authHeader.split(" ")[1];

    try {
        // Verify the token using the secret key from environment variables
        // If verification fails, an error will be thrown
        const decodjwt = jwt.verify(token, process.env.JWT_SECRET);

        // Optionally, you can attach the decoded payload to the request object for use in later middleware/routes
        // req.user = decodjwt;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Respond with 401 if the token is invalid or expired
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

// Export the middleware function for use in route protection
export default auth

