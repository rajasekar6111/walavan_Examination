const express = require("express");
const { executeQuery } = require("../config/db");
const port = 9000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/Users", async (req, res) => {
  try {
    let usersData = await executeQuery("select * from users");
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.get("/users/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let usersData = await executeQuery(
      "select * from users where id=?",
      [id]
    );
    res.status(200).json(usersData);
  } catch (err) {
    res.status(500).json(err);
  }
});

app.post("/saveUsers", async (req, res) => {
  try {
    console.log("server1 users insert")
    req.body.Age=parseInt(req.body.Age)
    const { lastName, firstName, uuid, Age , user_role_id, email_id, password, phone_no, created} = req.body;
   
    let usersData = await executeQuery(
      "insert into users(lastName, firstName, uuid, Age , user_role_id, email_id, password, phone_no,created) values(?,?,?,?,?,?,?,?,?)",
      [lastName, firstName, uuid, Age , user_role_id, email_id, password, phone_no,created]
    );
    res.status(201).json(usersData);
  } catch (err) {
    res.status(400).json(err);
  }
});
app.listen(port, () => console.log(`server is running on port ${port}`));
