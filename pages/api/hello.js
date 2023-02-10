// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudinary = require("cloudinary").v2;


export default async function handler(req, res) {
  cloudinary.config({
    cloud_name: "dwpcdujkq",
    api_key: "828616356891841",
    api_secret: "MjyjNWvjsV3wIX8T5b7x6UjNVYE"
  });

  var data;
  const temp = await cloudinary.api.resources().then(result=>data = result);
  const temp1 = await cloudinary.search.expression('resource_type:image').max_results(30).execute().then(result=>data=result);

  var alldata = data.resources;
  var urls = []

  for(var i=0 ; i<alldata.length ; i++){
    urls.push({
      "id" : i+1,
      "url" : alldata[i].url
    })
  };
  
  res.status(200).json({ result : urls })
}
