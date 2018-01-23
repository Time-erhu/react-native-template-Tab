import RNFetchBlob from 'react-native-fetch-blob';

const encodeQuery = (url,  params = {}) => {
    let _url = url;
    if (!params || !Object.keys(params).length) {
        return _url
    };

    _url = _url.indexOf("?") === -1 ? `${_url}?` : `${_url}&`;

    const query = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join("&");

    return `${_url}${query}`;
};

// 处理错误请求
const throwError = (json) => {
    const error = new Error(json)
    error.msg = json.msg;
    error.status = json.status;
    throw error;
};


const checkStatus = (resp, json) => {
    if (resp.respInfo.status === 200 && json.status === 0){
        return json;
    }else{
        throwError(json);
    };
    return json;
};

const Request = {
    header:{
        // 'Accept': 'application/json',
        // 'Content-Type': 'application/json',
    },

    config:{
        // 指示器,iOS专属
        // indicator:true,
        // 超时
        // timeout:3000
        // 缓存
        // fileCache : bool,
        // 缓存地址
        // path : string,
        // appendExt : string,
        // session : string,
        // addAndroidDownloads : any,
    },

    fetch: async( { method, url, params = {}, config = {}, header = {} } ) => {
        let _method;
        let _params;
        let _url = url;
        let _config = { indicator:true, timeout:3000,  ...config};;
        let _header = { 'Content-Type': 'application/json', ...header };;


        if (!method) _method = 'GET';
        else _method  = method.toUpperCase();

        if (_method === 'GET' && params) {
            _url = encodeQuery(url, params);
        }

        if (_method === 'POST' && params) {
            _params =  JSON.stringify(params);
        }
        return RNFetchBlob
            .config(_config)
            .fetch(_method ,_url, _header, _params)
            .then(resp => {
                return checkStatus(resp, resp.json());
            })
            .then((response)=>{
                return response;
            })
            .catch((error)=>{
                throw error
            })
    },

    get:( url, params = {}, header = {}, config = {} ) => {

        return RTRequest.fetch({method:'get', url, params, header, config })
            .then((data)=>{
                return data;
            })
            .catch((error)=>{
                throw error;
            })
    },

    post:( url, params = {}, header = {}, config = {} ) => {

        return RTRequest.fetch({method:'post', url, params, header, config })
            .then((data)=>{
                return data;
            })
            .catch((error)=>{
                throw error;
            })
    },


    upload:(url,body,uploadProgress,successCallBack,failCallBack) => {
        return RNFetchBlob
            .config(Request.config)
            .fetch('POST',url,{
                'Content-Type' : 'multipart/form-data',
            },body)
            .uploadProgress((written, total) => {

            })
            .progress((received, total) => {
                let perent = received / total;
                uploadProgress(perent);
            })
            .then((response)=>{
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=> {
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }
};

export default Request;
