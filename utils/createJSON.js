const axios = require('axios');

class CreateJsonBin {
    constructor(root,route, collectionid,apikey) {
        this.root = root;
        this.route = route;
        this.collectionid = collectionid;
        this.apikey = apikey;
    }

    create(name){
        const headers = {
            'Content-Type': 'application/json',
            'X-Collection-Id': this.collectionid,
            'X-Master-Key': this.apikey,
            'X-Bin-Name': name
        };
        const res = await axios.post(`${ROOT}${ROUTE}`, {name}, {
            headers: headers
        })
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
        return res;
    }
}

module.exports = { CreateJsonBin }