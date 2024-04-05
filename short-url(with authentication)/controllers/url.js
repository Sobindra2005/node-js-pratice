const URL = require("../models/user");
const shortid = require("shortid");

async function HandleGenerateUrl(req, res) {
  const Body = req.body;
  if (!Body.url) return res.status(400).json({ error: "url is required !!" });
  const shortID = shortid(8);
  await URL.create({
    shortId: shortID,
    redirectURL: Body.url,
    visitHistroy: [],
    createdBy:req.user._id
  });
  const allurls=await URL.find({ createdBy:req.user._id});
  return res.render("home",{
    id : shortID,
    urls: allurls
  })

}

async function HandleRedirectUrl(req, res) {
  try {
    const shortId = req.params.shortId;
const timestamp=Date.now();
console.log("shortId:", shortId);
console.log("timestamp:", timestamp);
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistroy: {
            timestamp
          },
        },
      }
    );
    if (!entry || !entry.redirectURL) {
      res.status(404).json({ error: "url not found !!" });
    }
    res.status(200).redirect(entry.redirectURL);
  } catch (err) {
    console.log("error is :", err);
  }
}

async function HandleClickNumber(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  if (!result) {
    return res.status(404).json({ error: "URL not found!" });
  }
  res.status(200).json({
   Total_Visits: result.visitHistroy.length,
    analytics: result.visitHistroy,
  });
}

async function ejsRender(req,res){
  if(!req.user) return res.render('login')
  const alluser=await URL.find({createdBy: req.user._id});
  return res.render("home",
  {
      urls: alluser
  });
}

module.exports = { HandleGenerateUrl, HandleRedirectUrl, HandleClickNumber,ejsRender };
