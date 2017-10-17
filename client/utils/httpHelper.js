function Get (url, data, cb ){
	wx.request({
        method:'GET',
		url: url,
		data: data,
		success: (res) => {
			typeof cb == "function" && cb(res.data,"");
		},
		fail:(err) => {
			typeof cb == "function" && cb(null,err.errMsg);
		},
		complete:()=>{
		}
	});
};

function Post (url,data, cb ){
	wx.request({
        method:'POST',
		url: url,
		data: data,
		success: (res) => {
			typeof cb == "function" && cb(res.data,"");
		},
		fail:(err) => {
			typeof cb == "function" && cb(null,err.errMsg);
			// console.log("http请求:"+config.HTTP_url);
			console.log(err)
		},
		complete:()=>{
		}
	});
};

function Upload (url ,file ,data, cb ){
	wx.uploadFile({
		url: url,
		filePath: file,
		name:"file",
		formData:data,
		success: (res) => {
			if( typeof(res.data)=="string"  ){
				typeof cb == "function" && cb( JSON.parse(res.data),"");
			}else{
				typeof cb == "function" && cb(res.data,"");
			}
		},
		fail:(err) => {
			typeof cb == "function" && cb(null,err.errMsg);
		}
	});
};


module.exports ={
    get:Get,
    post:Post,
	upload:Upload
};