import http from 'k6/http'
import { check } from "k6";
import db from '../../db_connect.js';
import document from '../../document.js';
const users = [];
var options = exports.options = {
    stages: [{ duration: '1s', target: 1 }],
};

export function setup() {
    console.log(document.user);
    db.insertMany(document.user);
}


export default function () {

    let res = http.post(`https://dev-api.isport.wiinvent.tv/luckyspin/spin/turn`,
        JSON.stringify({}), {
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer '  + ""
        }
    });

    check(res, {
        "status was 200": (r) => r.status == 200
    });
}

export function teardown(){
    db.deleteMany()
}