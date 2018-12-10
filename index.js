const express = require("express");
const app = express();
const fib = require("fibonacci");
const sequence = require("./sequence.js")


app.use(express.static("./public"));

app.get("/getdata", (req, resp) => {
  const value = Number(req.query.inputVal);
  const selectedFnName = req.query.ddVal;

  const selectedFn = {
    "fibonacci": fib,
    "linear": x => x,
    "exponential": x => x*x,
    "logarithmic": Math.log,// Instead I could write x => Math.log(x)
    "random": x => Math.ceil(Math.random()*x), //ceil rundet die Zahl auf die nächst höhere auf
    "circle": x => Math.sqrt(25 - x*x)
  }


  
  const output = sequence(selectedFn[selectedFnName], value); //dependency injection => von außen wird die Abh. eingegeben (hier die Fn)
  // const output = sequence(x => x, value);
  resp.json(output);
})

app.listen(8081, () => {
    console.log(`listening on port 8081`);
  });