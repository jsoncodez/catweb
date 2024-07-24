const express = require('express')
const app = express()

app.use(express.static("build"));
//if any reqquest comes in build folder and simply serve it.

// "users": ["user1", "user2", "user3", "user4"],

const items = [
    {
        title: "My First Blog",
        body: "1111wasoidjfowiejfoiwajfsdkfjsdf",
        author: "mario",
        id: 1
    },
    {
        title: "My 2nd Blog",
        body: "2222wasoidjfowiejfoiwajfsdkfjsdf",
        author: "steve",
        id: 2,
    }
];

app.get("/api/items", (req, res) => {
    res.send(items);

});


app.listen(5000, () => {console.log("Server started on port 5000")})
