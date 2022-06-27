const fs = require('fs-extra')
const _ = require('lodash')
const bcrypt = require('bcrypt');

const path = './users.json';
fs.readJson(path, (err, users) => {
    if (err) {
        console.error(err)
        process.exit
    }
    users.forEach((user) => {
        user.age = _.get(user, 'user_data.age', 18);
        user.can_drink = user.age > 21
        user.password = bcrypt.hashSync(user.password, 10);
        if (_.get(user, 'user_data.is_admin', false)){
            user.user_name += " Admin"
        }
        console.log(user.user_name)
    });
    fs.writeJsonSync('user-parsed.json', users)
});
