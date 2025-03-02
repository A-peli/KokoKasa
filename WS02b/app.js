const axios = require('axios');

function get_test() { //haetaan Ylen teksti-tv:n sivun 100 tiedot ja tulostetaan se consoliins
/* ylen teksti-tv API https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY%22 */

axios.get("https://external.api.yle.fi/v1/teletext/pages/100.json?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY%22")
    .then((response) => 
        console.log(response.data),
        console.log("testi!")
    
)};

get_test();
