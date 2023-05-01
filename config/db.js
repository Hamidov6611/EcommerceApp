import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(chalk.bgMagentaBright(`Connected To MongoDb Database ${conn.connection.host}`))
    } catch (error) {
        console.log(chalk.bgRed.white(`Error in MongoDB ${error}`))
    }
}

export default connectDB