module.exports=(app)=>{
    app.post("/register", (req, res) => {
        res.send({
          message: `Hello ${req.body.email} Yor user was registerd. ${req.body.password}`
        });
      });
}