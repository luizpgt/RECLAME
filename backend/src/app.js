import express from 'express';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

import userRoutes from './modules/usuario/routes.js';
import complaintRoutes from './modules/reclamacao/routes.js';
import stateRoutes from './modules/estado/routes.js';
import cityRoutes from './modules/cidade/routes.js';
import commentRoutes from './modules/comentario/routes.js';
import categoryRoutes from './modules/categoria/routes.js';
import ratingRoutes from './modules/avaliacao/routes.js';
import { errorHandler } from './middlewares/error.js';

app.use('/user', userRoutes);
app.use('/complaint', complaintRoutes);
app.use('/state', stateRoutes);
app.use('/category', categoryRoutes);
app.use('/city', cityRoutes);
app.use('/rating', ratingRoutes);
app.use('/comment', commentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});