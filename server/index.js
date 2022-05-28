const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const {authHandler} = require('./middleware/authMiddleware')

const app = express();
const PORT = process.env.PORT || 5000;

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({extensions: true})) //Для понимание сервером фаормата json

app.use('/api/auth', require('./routes/auth.route'))

app.use('/api/user', require('./routes/user.route'))


const start = async () => {
   try{
      await mongoose.connect('mongodb://localhost:27017/social-network',{
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })

      app.listen(PORT, () => {
         console.log("Server listening on port " + PORT)
      })

      // const db = mongoClient.db("admin");
   }
   catch(err){
      console.error(err)
   }
}

start()
