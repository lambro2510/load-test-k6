const user = {
    "username": "09681485864",
    "password": "$2a$10$py4teKqboF4ihT5gTZCoNuhnQMJg8wmwgyYsPQdQYWGR8jWw4FJIi",
    "confirmed_at": { "$date": { "$numberLong": "1675482441129" } },
    "last_login_at": { "$date": { "$numberLong": "1675482441129" } },
    "state": "VERIFIED",
    "login_type": "PARTNER",
    "profile": {
        "full_name": "MytelDS01",
        "avatar_url": "https://s3.mytel.com.mm/myid-avatar/avatar/e8f2770b-00f8-4c16-961d-e06b6f9160ff-.Profileavatar_facebook.jpg"
    },
    "point": { "point": { "$numberLong": "28" } },
    "gold": { "gold": { "$numberLong": "0" } },
    "turn": 0,
    "is_updated": true,
    "is_rookie_gift": false,
    "created_at": { "$numberLong": "1675482440937" },
    "updated_at": { "$numberLong": "1675686988686" },
    "_class": "com.isport.sportservice.domain.entities.User"
};

const users = () => {
    let listUser = [];
    for (let i = 1485864; i < 9999999; i++) {
        username = '0968' + i
        let user = {
            'username': '' + i,
            'password': 'py4teKqboF4ihT5gTZCoNuhnQMJg8wmwgyYsPQdQYWGR8jWw4FJIi',
            "confirmed_at": { "$date": { "$numberLong": "1675482441129" } },
            "last_login_at": { "$date": { "$numberLong": "1675482441129" } },
            "state": "VERIFIED",
            "login_type": "PARTNER",
            "profile": {
                "full_name": "MytelDS01",
                "avatar_url": "https://s3.mytel.com.mm/myid-avatar/avatar/e8f2770b-00f8-4c16-961d-e06b6f9160ff-.Profileavatar_facebook.jpg"
            },
            "point": { "point": { "$numberLong": "28" } },
            "gold": { "gold": { "$numberLong": "0" } },
            "turn": 0,
            "is_updated": true,
            "is_rookie_gift": false,
            "created_at": { "$numberLong": "1675482440937" },
            "updated_at": { "$numberLong": "1675686988686" },
            "_class": "com.isport.sportservice.domain.entities.User"
        }
        listUser.push(user)
    }
    console.log(listUser);
    return listUser;
}

export default{
    user,
    users
}