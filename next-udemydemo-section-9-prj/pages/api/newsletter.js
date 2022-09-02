import { MongoClient } from "mongodb";

async function handler(req,res){
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ mesage: 'Invalid email address.' });
            return;
        }
       const client = await MongoClient.connect('mongodb+srv://mansi:mansi06@cluster0.q0hg9sj.mongodb.net/newsletter?retryWrites=true&w=majority')
        const db = client.db();

        await db.collection('emails').insertOne({email: userEmail});

        client.close();
        
        res.status(201).json({ message: 'Signed up!' })
    }
}

export default handler;