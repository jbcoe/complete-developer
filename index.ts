import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, { Request, Response } from "express";

const server = express();
const port = 3000;

server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});

server.get(
  "/api/names",
  async function (_req: Request, res: Response): Promise<void> {
    let response;
    try {
      response = await routeAPINames();
    } catch (err) {
      console.log(err);
    }
    res.send(response);
  }
);

server.get(
  "/api/weather/:zipcode",
  async function (req: Request, res: Response): Promise<void> {
    try {
      const response = await routeWeather({
        zipcode: req.params.zipcode as string,
      });
      res.send(response);
    } catch (err) {
      console.log(err);
      res.status(500).send("Error fetching weather data");
    }
  }
);

server.listen(port, "0.0.0.0", function () {
  console.log(`Server is running on http://localhost:${port}\n`);
  console.log(
    `Visit http://localhost:${port}/hello to see a friendly greeting`
  );
  console.log(
    `Visit http://localhost:${port}/api/names to see names from the API`
  );
  console.log(
    `Visit http://localhost:${port}/api/weather/12345 to see weather data`
  );
});
