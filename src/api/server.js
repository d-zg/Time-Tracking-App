const express =         require('express'), // creates express erver
        dbOperation =   require('../../dbFiles/dbOperation'), // TODO: figure out how these imports are different from the other ones
        cors =          require('cors'),
        bodyParser   =  require('body-parser');



const API_PORT = process.env.PORT || 5000; 
const app = express();

app.use(bodyParser.json({}));
app.use(cors());

app.listen(API_PORT, () => console.log(`Server running, listening on port ${API_PORT}`));

app.post('/task/update', async (req, res) => {
    console.log('Called update');
    await dbOperation.uploadDayTimes(req.body); 
    res.status(200).send();
});

app.post('/api', async (req, res) => {
    console.log('Called get');
    const data = await dbOperation.getDay(req.body); 
    console.log(data.recordset[0]);
    res.send(data);
});
