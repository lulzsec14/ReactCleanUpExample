import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
import { faker } from "@faker-js/faker";

const app = express();
app.use(express.json());
app.use(cors());

const apiRoutes = express.Router();

const arr = { id: uuidv4(), name: faker.name.fullName() };

apiRoutes.get("/getData", (req, res) => {
  // setTimeout()

  // setTimeout(
  //   () =>
  const temp = { id: uuidv4(), name: faker.name.fullName() };
  console.log(temp);
  res.send({
    success: true,
    data: temp,
  });
  return;
  //   3000
  // );
});

app.use("/api", apiRoutes);

const PORT = 8080;

app.listen(PORT, () => console.log(`Server listening on PORT:${PORT}`));
