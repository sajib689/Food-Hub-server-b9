const express = require('express');
const cors = require('cors');
require('dotenv').config()

var cookieParser = require('cookie-parser')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())






const uri = `mongodb+srv://${process.env.Db_user}:${process.env.Db_password}@cluster0.2m0rny5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const foodCollection = await client.db('foodDb').collection('foodCollection')
    // get all food items
    app.get('/foods', async (req, res) => {
        const result = await foodCollection.find().toArray();
        res.send(result);
    })
    // post foods
    app.post('/foods', async (req, res) => {
      const query = req.body
      const result = await foodCollection.insertOne(query)
      res.send(result);
    })
    // get food by email
    app.get('/foods', async (req, res) => {
      const email = req.query.email
      const result = await foodCollection.findOne({email: email}).toArray()
      res.send(result)
    })
    // find food id wise from database
    app.get('/foods/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await foodCollection.findOne(query)
      res.send(result)
    })
    // delete data from database id wise
    app.delete('/foods/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const result = await foodCollection.deleteOne(query)
      res.send(result)
    })
    // update food data 
    app.put('/foods/:id', async (req, res) => {
      const id = req.params.id
      const query = {_id: new ObjectId(id)}
      const update = req.body
      const options = {upsert: true}
      const updateFood = {
        $set: {
          foodImage: update.foodImage,
        foodName: update.foodName,
        quantity: update.quantity,
        pickupLocation: update.pickupLocation,
        expiredDateTime: update.expiredDateTime,
        additionalNotes: update.additionalNotes,
        }
      }
      const result = await foodCollection.updateOne(query,updateFood,options)
      res.send(result)
    })
 } finally {
 
  }
}
run().catch(console.dir);




app.get('/', async (req,res) => {
    res.send('server start')
})

app.listen(port, async () => {
    console.log(`Listening on ${port}`)
})