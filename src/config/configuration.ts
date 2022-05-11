export default () => ({
    environment: process.env.NODE_ENV,
    appName: process.env.APP_NAME,
    appPort: process.env.APP_PORT,
    mongoDbName: process.env.DB_NAME,
    mongoDbUrl: process.env.MONGO_URL,
    rabbitMQUser: process.env.RABBITMQ_USER,
    rabbitMQPassword: process.env.RABBITMQ_PASSWORD,
    rabbitMQUrl: process.env.RABBITMQ_URL
})