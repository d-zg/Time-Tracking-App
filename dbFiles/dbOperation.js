const config               = require('./dbConfig'),
        sql                = require('mssql')

const getActivityTimes = async() => {
    try {
        pool = await sql.connect(config);
        dailyActivities = pool.request().query("SELECT * from ActivityTimes");
        console.log(dailyActivities);
        return dailyActivities;
    }
    catch (error) {
        console.log(error); 
    }
}

const getDay = async(activityTimes) => {
    try {
        pool = await sql.connect(config);
        dailyActivities = pool.request().query(`SELECT * from ActivityTimes WHERE activityDate = '${activityTimes.date}`);
        console.log(dailyActivities);
        return dailyActivities;
    }
    catch (error) {
        console.log(error); 
    }
}

const uploadDayTimes = async(activityTimes) => {
    try {
        pool = await sql.connect(config);
        dailyActivities = pool.request().query(`IF NOT EXISTS (SELECT 1 FROM ActivityTimes WHERE activityDate = '${activityTimes.date}')
        BEGIN 
            INSERT INTO ActivityTimes VALUES
        (${activityTimes.classwork}, ${activityTimes.research}, ${activityTimes.exercise}, ${activityTimes.reading}, ${activityTimes.planning}, 
            ${activityTimes.reflection}, ${activityTimes.learning}, ${activityTimes.meditation}, ${activityTimes.gratitude}, 
            ${activityTimes.media}, ${activityTimes.social}, ${activityTimes.sleep}, '${activityTimes.date}')
        END
        ELSE 
        BEGIN
            UPDATE ActivityTimes
            SET Classwork=${activityTimes.classwork}, Research=${activityTimes.research}, Exercise=${activityTimes.exercise}, Reading=${activityTimes.reading}, Planning=${activityTimes.planning}, Reflection=${activityTimes.reflection}, Learning=${activityTimes.learning}, Meditation=${activityTimes.meditation}, Gratitude=${activityTimes.gratitude}, Media=${activityTimes.media}, Social=${activityTimes.social}, Sleep=${activityTimes.sleep}
            WHERE activityDate = '${activityTimes.date}'
        END` 
        ); 
            // TODO: make this more modular --> loop through all column values, change activityTimes to a specific user's name
        return dailyActivities; 
    }
    catch (error) {
        console.log(error); 
    }
}
module.exports = {
    getActivityTimes,
    uploadDayTimes
} 