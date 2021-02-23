import express from 'express'

const app = express();

app.get("/users", (request, response) => {
    return response.send("hello")
})

app.post("/users", (request, response) => {
    return response.json({message: "user created!"})
})

app.listen(3333, ()=> console.log('Server is running!'))