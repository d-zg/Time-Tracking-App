const express =         require('express'), // creates express erver
        dbOperation =   require('../../dbFiles/dbOperation'), // TODO: figure out how these imports are different from the other ones
        cors =          require('cors'),
        Day =      require('../../dbFiles/day');

// const API_PORT = process.env.PORT || 5000; 
// const app = express();

// app.use(cors());

// app.get('/api', (req, res) => {
//     console.log('Called');
//     res.send({result: 'Test'});
// });

// app.get('/quit', (req, res) => {
//     console.log('Called quit');
//     res.send({result: 'Test2'});
// });

const today = new Day(0,0,0,0,0,0,0,0,0,0,0,0, '2022-05-20');

// dbOperation.getActivityTimes().then(res => {
//     console.log(res); 
// })

dbOperation.uploadDayTimes(today);
// console.log(today);


// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));