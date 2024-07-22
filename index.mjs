import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as userRoutes } from './src/routes/userRoutes.mjs';
// import { adminDefault } from './src/controllers/defaultAdminController.mjs';
import { router as otpRoutes } from './src/routes/otpRoutes.mjs';
import { router as galleryRoutes } from './src/routes/galleryRoutes.mjs';
import { router as pagineRoutes } from './src/routes/paginateRoutes.mjs';
import { router as myPostRoutes } from './src/routes/myPostRoutes.mjs';
import { router as eventsRouter } from './src/routes/eventRoutes.mjs';
import { router as devotionalRouter } from './src/routes/devotionalRoutes.mjs';

dotenv.config();
const corsConfig = {
  origin: '*',
  credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}

const PORT = process.env.SERVER_PORT;

const app = express();
app.use(express.json());
app.options("", cors(corsConfig));
app.use(cors(corsConfig));
// user routes
app.use(userRoutes);
app.use(otpRoutes);
app.use(galleryRoutes);
app.use(pagineRoutes);
app.use(myPostRoutes);
app.use(eventsRouter);
app.use(devotionalRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  // adminDefault();
});