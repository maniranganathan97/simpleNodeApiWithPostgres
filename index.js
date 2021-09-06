var express = require('express')

var app = express();

app.use(express.json()) // use request body

const pool = require('./db.js');

//ROUTES

//get all toda data from postgres database

//post a new data
app.post('/addTodo', async (req, res) => {
    try{

        console.log(req.body);
        const {description} = req.body;
        const newTodo = await pool.query("insert into node_table(description) values($1) returning *", [description]);
        return res.json(newTodo);
    } catch (err){
        console.error(err.message);
    }
})

app.get('/getAllTodo', async (req, res) => {
    try{

        const allTodo = await pool.query('Select * from node_table');
        return res.json(allTodo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3000, () => {
    console.log("server is listening in port 3000");
})
