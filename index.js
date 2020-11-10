const morgan = require("morgan");
const colors = require("colors");
const nunjucks = require("nunjucks");
const express = require("express");
const app = express();
const port = process.env.PORT || 5001;

nunjucks.configure("views", {
  express: app,
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("assets"));

app.get("/", (req, res) => {
  // TODO if user is already logged in, redirect to dashboard
  // otherwsie render the login form
  res.render("index.njk", null);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(colors.cyan("Login using", { username, password }));
  // TODO check credential
  // if credential ok then redirect to dashboard
  res.redirect(`/dashboard?username=${username}`);
  // otherwise redirect to login page (homepage)
});

app.get("/dashboard", (req, res) => {
  const username = req.query.username;
  res.render("dashboard.njk", { username });
});

app.post("/logout", (req, res) => {
  // TODO log user out of the application
  // redirect to the login page
  console.log(colors.cyan("Log out!"));
  res.redirect("/");
});

app.get("/register", (req, res) => {
  res.render("register.njk", null);
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(colors.cyan("Register:", { username, password }));
  // TODO register the user!

  // redirect to the login page
  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Users' App is running at http://localhost:${port}`)
);
