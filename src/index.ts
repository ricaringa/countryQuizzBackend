import express, { Express, Request, Response } from 'express';
// @ts-ignore
import cors from 'cors';


// import router from "./routes";
import passport from 'passport';
import env from './utils/env';
const app = express();



app.use(passport.initialize());
app.use(cors())
app.use(express.json());
// app.use(router);
app.get('/', (req: Request, res: Response) => {
  res.send('Server Running');
});
app.listen(env.app.port, () => console.log(`⚡️[server]: Server listening at port ${env.app.port}`));
