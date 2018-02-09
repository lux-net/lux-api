import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () =>  console.log(`Mongoose default connection open to ${process.env.MONGODB_URI}`))
mongoose.connection.on('error', (err) => console.error(`Mongoose default connection error: ${err}`))
mongoose.connection.on('disconnected', () => console.log('Mongoose default connection disconnected'))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
})
