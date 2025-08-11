const express = require("express");
const cors = require("cors");
const app = express();
const pool= require("./db");
const projectDAO = require("./DAO/ProjectDAO")(pool);
const skillDAO = require("./DAO/SkillDAO")(pool);
const work_expDAO = require ("./DAO/Work_expDAO")(pool);



app.use(cors());// security for request and website integrity to avoid third party interfierence
app.use(express.json());//allows use of json packaging
// get skills
app.get("/getSkills", async (req, res) => {
  try {
    const skills = await skillDAO.getAll();
    if (skills.rows.length === 0) {
      return res.status(404).json({ message: "Skills not found" });
    }
    res.json(skills.rows);
  } catch (err) {
        console.log("there was an error");
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get workExp
app.get("/getWork_exp", async(req, res)=>{
    try {
        const work =await work_expDAO.getAll();
        if (work.rows.length==0){
            return res.status(404).body("work not found");
        }
        res.json(work.rows);
    } catch (err) {
        console.log("there was an error",err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// get projects
app.get("/getProjects", async(req, res)=>{
    try {
        const projects =await projectDAO.getAll();
        if (projects.rows.length==0){
            return res.status(404).body("skills not found");
        }
        res.json(projects.rows);
    } catch (err) {
        console.log("there was an error");
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.listen(5000,()=>{
    console.log("server is running on port 5000")
});