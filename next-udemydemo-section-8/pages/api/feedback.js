import fs from 'fs'; // file system Node.js module
import path from 'path'; // path Node.js module

function handler(req, res) {
    if (req.method === 'POST'){
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback ={ 
            id: new Date().toISOString(),
            email: email,
            text: feedbackText,
        };

        // store that in a database or in a file
        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath); // fs module to write to a file
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: 'Success!', feedback: newFeedback });
    } else {
        res.status(200).json({ message: 'This works!' });
    }
    
}

export default handler;