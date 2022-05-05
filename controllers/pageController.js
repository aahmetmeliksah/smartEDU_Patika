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

module.exports = { indexPage, aboutPage };
