async function test() {
    const Redis = require('ioredis')

    const redis = new Redis({
        port: 6379,
        password: 12345
    })

    await redis.set('c', 123)

    const keys = await redis.keys('*')
    console.log(await redis.get('c'))
    console.log(keys)
}
test()