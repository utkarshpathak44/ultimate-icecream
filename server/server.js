import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.json());

const iceCreamData = [
  {
    id: 1,
    name: "Vanilla Delight",
    price: 3.5,
    stock: 120,
    about: "A classic creamy vanilla ice cream made with real vanilla beans.",
    image: "https://example.com/images/vanilla-delight.jpg",
  },
  {
    id: 2,
    name: "Chocolate Fudge",
    price: 4.0,
    stock: 85,
    about: "Rich and smooth chocolate ice cream with a fudgy swirl.",
    image: "https://example.com/images/chocolate-fudge.jpg",
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    price: 3.75,
    stock: 100,
    about: "Refreshing strawberry ice cream made with fresh strawberries.",
    image: "https://example.com/images/strawberry-bliss.jpg",
  },
  {
    id: 4,
    name: "Mint Chip",
    price: 3.8,
    stock: 90,
    about: "Mint ice cream with crunchy chocolate chips in every bite.",
    image: "https://example.com/images/mint-chip.jpg",
  },
  {
    id: 5,
    name: "Cookie Dough",
    price: 4.5,
    stock: 60,
    about: "Vanilla ice cream loaded with delicious cookie dough chunks.",
    image: "https://example.com/images/cookie-dough.jpg",
  },
  {
    id: 6,
    name: "Caramel Swirl",
    price: 4.25,
    stock: 110,
    about: "Creamy caramel ice cream with a sweet caramel ribbon.",
    image: "https://example.com/images/caramel-swirl.jpg",
  },
  {
    id: 7,
    name: "Pistachio Paradise",
    price: 4.2,
    stock: 80,
    about: "Smooth pistachio-flavored ice cream with roasted pistachios.",
    image: "https://example.com/images/pistachio-paradise.jpg",
  },
  {
    id: 8,
    name: "Coffee Crunch",
    price: 4.0,
    stock: 95,
    about: "A strong coffee ice cream with crunchy bits of caramelized sugar.",
    image: "https://example.com/images/coffee-crunch.jpg",
  },
  {
    id: 9,
    name: "Neapolitan Trio",
    price: 4.5,
    stock: 70,
    about:
      "A delightful combination of chocolate, vanilla, and strawberry flavors.",
    image: "https://example.com/images/neapolitan-trio.jpg",
  },
  {
    id: 10,
    name: "Lemon Sorbet",
    price: 3.25,
    stock: 130,
    about: "A refreshing, tangy lemon sorbet made with real lemon zest.",
    image: "https://example.com/images/lemon-sorbet.jpg",
  },
];

app.get("/api/records", (req, res) => {
  setTimeout(() => res.send(iceCreamData), 2000);
});

app.get("/api.records/:id", (req, res) => {
  const iceCream = iceCreamData.find(
    (record) => record.id === parseInt(params.id)
  );
  if (!iceCream) return res.status(404).send({ message: "Record not found" });

  res.send(iceCream);
});

app.post("/api/records", (req, res) => {
  const newRecord = req.body;
  newRecord.id = iceCreamData.length + 1;
  iceCreamData.push(newRecord);
  console.log("received a new ice cream type");
  res.status(201);
});

app.delete("/api/records/:id", (req, res) => {
  const { id } = req.params;
  const index = iceCreamData.findIndex((record) => record.id === parseInt(id));
  if (index === -1) {
    return res.status(404).send({ message: "Record not found" });
  }

  iceCreamData.splice(index, 1);
  res.status(204).send();
});

app.patch("/api/records/:id", (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const index = iceCreamData.findIndex((record) => record.id === id);
  iceCreamData[index] = newData;
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));
