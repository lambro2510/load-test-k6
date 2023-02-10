import http from 'k6/http'

function insertMany(bodies) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/insertMany",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "documents": bodies
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
    console.log(res.body);
}

function insertOne(body) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/insertOne",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "documents": body
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
}

function deleteOne(filter) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/deleteOne",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "filter": filter
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
}

function deleteMany(filter) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/insertMany",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "filter": filter
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
    console.log(res.body);
}

function findOne(filter) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/insertMany",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "filter": filter
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
}

function findMany(filter) {
    let res = http.post("https://data.mongodb-api.com/app/data-cnuhc/endpoint/data/v1/action/insertMany",
        JSON.stringify({
            "collection": "test",
            "database": "test",
            "dataSource": "db-salespage",
            "filter": filter
        }), {
        headers: {
            "Content-Type": "application/json",
            "api-key": "LEuYYYBAzUsaOStBIIDGRfM6YyFciXHgXFYIKxrhxVYGcuj7esGpx0XhadcUJ16q"
        }
    });
}

export default {
    insertOne,
    insertMany,
    deleteOne,
    deleteMany
}