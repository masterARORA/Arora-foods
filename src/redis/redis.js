const redis = require("redis")

let redisClient

(async () => {
    redisClient = redis.createClient()
    redisClient.on((err) => console.log(" Error" + err))
    await redisClient.connect()
})()