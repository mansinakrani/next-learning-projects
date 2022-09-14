import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://mansi:S8cEdU8sXC2fXbqc@cluster0.q0hg9sj.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
}