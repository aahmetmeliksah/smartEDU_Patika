const indexPage = (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
};

const aboutPage = (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
};

const registerPage = (req, res) => {
  res.status(200).render("register", {
    page_name: "register",
  });
};

module.exports = { indexPage, aboutPage, registerPage };
