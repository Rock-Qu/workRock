import services from "./http";

const api = {

    api({method, url, data, params}) {

        return new Promise( (resolve) => {
            services({method, url, data, params}).then((res) => resolve({data : res.data}));
        });
    }, 
    getReq({url, data, params}) {
        return this.api ({method : "GET", url, data, params})
    },

    postReq({url, data, params}) {
        return this.api ({method : "POST", url, data, params})
    }
};

const ProductAPI = {

    getProductList(){
        return api.getReq({url: '/data/product.json'});
    }

};

const UserInfoAPI = {

    getUserInfoList(){
        return api.getReq({url: '/data/users.json'});
    }

};

export {ProductAPI, UserInfoAPI};