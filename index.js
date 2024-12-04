import app from "./src/app.js";
const PORT = 7000; // Set your port

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
