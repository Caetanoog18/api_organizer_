const app = require('./Routes/routes');

const PORT = process.env.Port || 3000;

app.listen(PORT, async () => {
    console.log("Server is running on " + PORT);
});
