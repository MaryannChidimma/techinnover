import http = require('http')
import express, { Express, Request, Response } from 'express';
import helmet from "helmet";
import { ErrorMiddleware } from './middleware/errorHandler';
import constants from './config/constants';
import apiRoutes from './routes/index'
import 'express-async-errors'

const app: Express = express();
const port = constants.PORT || 8080;
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiRoutes());

app.use("/", (req: Request, res: Response) => {
  res.status(200).send("Route Not Found")
});

app.use(ErrorMiddleware);


const server = http.createServer(app);

server.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

app.on("error", (error: any) => {
  console.log(`Error occured on the server ${error}`);
});



