
// const a = require('body-parser');
// app.use(a.json());
// app.use(a.urlencoded({extended:false}));

// const workersController = require('./controllers/workers');
// const coursesController = require('./controllers/courses');

// app.use('/workers', workersController);
// app.use('/courses', coursesController);






import express from 'express';
import { connectToDatabase } from './services/db.service';

const app = express();

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.stack);
    res.status(500).send('error in the router, please try later');
  });


app.get("*",function (req,res){
	res.status(404).send("יש לך טעות בכתובת");
})

/**
 * פונקציה שמתחילה את השרת.
 * מנסה להתחבר למסד הנתונים לפני שהשרת מתחיל להאזין לבקשות.
 */
const startServer = async () => {
  try {
    await connectToDatabase(); // התחברות למסד הנתונים
    const port = process.env.PORT || 3000; // הגדרת הפורט ממשתנה סביבה או ברירת מחדל
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`); // הודעת הצלחה שהשרת רץ
    });
  } catch (error) {
    console.error('Failed to start server:', error); // הודעת שגיאה אם יש בעיה בהתחברות למסד הנתונים
    process.exit(1); // סיום התהליך עם קוד שגיאה
  }
};

startServer();
