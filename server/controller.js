const createPic = (req, res) => {
  const { title, rating, imageURL } = req.body;
  console.log("newpic");
  const newPic = {
    id,
    title,
    rating,
    imageURL,
  };

  pictures.push(newPic);

  id++;

  res.status(200).send(newPic);
};

const exportObj = {
  createPic,
};
module.exports = exportObj;
