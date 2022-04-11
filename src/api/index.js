import http from "@/tools/request";
import {downloadFile} from "@/tools/downloadFile";

export function getByUrl(url){
    return new Promise((resolve, reject) =>{
        http.get("/api" + url)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function get(url, param){
    let ran = new Date().getTime();
    return new Promise((resolve, reject) =>{
        http.get("/api" + url + "?ran=" + ran, {params : param} )
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function post(url, param){
    return new Promise((resolve, reject) =>{
        http.post("/api" + url, param)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function upload(url, file, data, img){
    let formData = new FormData();
    // formData.append('file', file)
    if (img) {
        img.forEach((value) => {
            formData.append('img', value);
        });
    }
    if (file) {
        file.forEach((value) => {
            formData.append('file', value);
        });
    }
    if (data) {
        // data.forEach((value, key) => {
        //   formData.append(key, value)
        // })
        Object.keys(data).forEach(function(key){
            formData.append(key, data[key]);
        });
    }
    return new Promise((resolve, reject) =>{
        http({
            url: "/api" + url,
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: formData
        }).then(response => {
            resolve(response)
        }, err => {
            reject(err)
        }).catch((error) => {
                reject(error)
        })
    })
}

export function put(url, param){
    return new Promise((resolve, reject) =>{
        http.put("/api" + url, param)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function del(url){
    return new Promise((resolve, reject) =>{
        http.delete("/api" + url)
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export function download(url, param, fileName){
    return new Promise((resolve, reject) =>{
        http({
            url: "/api" + url,
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: JSON.stringify(param),
            responseType: 'blob'
        }).then(response => {
            resolve(response)
            if(response.data.size != 0){
                downloadFile(response.data, fileName)
            }
        }, err => {
            reject(err)
        }).catch((error) => {
            reject(error)
        })
    })
}

