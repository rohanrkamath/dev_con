const express = require('express');

const app = express(); //initialise app var

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5000; //when deployed in hiroku will look for an env var; if not by default willl run on 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) ; // second parameter to do after connection

