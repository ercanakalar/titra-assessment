import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.post("/api/rectangle", async (req: Request, res: Response) => {
  try {
    const { name, long } = req.body;
    const calculateArea = (long: number[]) => {
      return long[0] * long[1];
    };
    const area = calculateArea(long);
    return res.status(200).json({ area });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
