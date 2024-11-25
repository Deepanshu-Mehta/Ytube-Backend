import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/index.js';

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
        });
    } catch (error) {
        console.error(`Failed to start server: ${error.message}`);
        process.exit(1);
    }
})();
