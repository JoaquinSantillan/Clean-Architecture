const express =  require('express')
const v1WorkOutRouter = require('./v1/routes/workoutRoutes')

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use("/api/v1/workouts",v1WorkOutRouter)

app.get("/",(req,res)=>{
    res.send("<h1>hello world!</h1>")
})

app.listen(PORT,()=>{
    console.log(`server en puerto ${PORT}`)
})
