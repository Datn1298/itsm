var axios = require('axios');
var https = require('https')
let data = '';
async function doGetRequest() {
  let config = {
    rejectUnauthorized: false,
    method: 'get',
    url: 'https://itsm.ho.fpt.vn/api/v3/releases/25/downtimes',
    headers: { 
      'authtoken': 'BC473F86-1A1F-4F8C-B725-38E6C00CFA28', 
    },
    agent: new https.Agent({
      rejectUnauthorized: false,
    }),
    // data : data
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response));
  })
  .catch(function (error) {
    console.log(error);
  });
}

doGetRequest();