import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

import complaintRoutes from './modules/reclamacao/routes.js';
import { errorHandler } from './middlewares/error.js';

app.use('/complaint', complaintRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});