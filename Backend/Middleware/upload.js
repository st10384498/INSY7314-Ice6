// Import the multer library for handling multipart/form-data, primarily used for file uploads
import multer from 'multer';

/**
 * Multer configuration for handling image uploads in memory.
 * This middleware restricts uploads to image files only and limits file size to 5MB.
 */

// Set up storage to keep uploaded files in memory as Buffer objects
const storage = multer.memoryStorage();

// Configure multer with storage, file size limit, and file type filter
const upload = multer({ 
    storage, // Use in-memory storage
    limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
    fileFilter: (req, file, cb) => {
        // Accept only files with MIME type starting with 'image/'
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            // Reject non-image files with an error
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// Export the configured multer instance for use as middleware in routes