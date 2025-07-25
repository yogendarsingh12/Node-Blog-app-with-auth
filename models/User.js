const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilepic: {
        type: String,
    }


}, {
    timestamps: true,
})

//lets hash the password to secure user password



UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (err) {
        next(err);
    }
});
//password chack function
UserSchema.methods.PasswordCheck = async function (password) {
    return bcrypt.compare(password, this.password);

}

//lets user jwt

//genret token
UserSchema.methods.GenrateAccessToken = async function () {
    const payload = {
        id: this._id,
        username: this.username,
    }
    const token = jwt.sign(payload, process.env.ACCESS_SECRET_TOKENKEY, {
        expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    })
    return token
}

//refresh token
UserSchema.methods.GenrateRefreshToken = async function () {
    const payload = {
        id: this._id,
    }
    const token = jwt.sign(payload, process.env.REFRESH_SECRET_TOKENKEY, {
        expiresIn: process.env.EXPIRE_REFRESH_TOKEN,
    })
    return token
}

//verify jwt Token



const User = mongoose.model('User', UserSchema);

module.exports = User;