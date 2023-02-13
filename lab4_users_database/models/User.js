const mongoose = require('mongoose')
const userData = require('../UserData.json')

var validateEmail = function (email) {
    var re = /\S+@\S+\.\S+/
    return re.test(email)
};

var validateCity = function (city) {
    var validations = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/
    return validations.test(city)
}

function validateHttpUrl(string) {
    let url

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:"
}

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter Name'],
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: [true, 'Enter Username'],
        trim: true,
        lowercase: true,
        minlength: 4,
    },
    email: {
        type: String,
        required: [true, 'Enter Email'],
        trim: true,
        lowercase: true,
        validate: [validateEmail, 'Enter Valid Email'],
    },
    address: {
        street: {
            type: String,
            required: [true, 'Enter Street'],
            trim: true,
            lowercase: true
        },
        suite: {
            type: String,
            required: [true, 'Enter Suite'],
            trim: true,
            lowercase: true
        },
        city: {
            type: String,
            required: [true, 'Enter City'],
            trim: true,
            lowercase: true,
            validate: [validateCity, "Enter Alphabets & Spaces Only"]
        },
        zipcode: {
            type: String,
            required: [true, 'Enter Zipcode'],
            trim: true,
            lowercase: true,
            validate: {
                validator: function (v) {
                    return /\d{5}-\d{4}/.test(v)
                },
                message: props => `${props.value} Whoops...not valid`
            }
        },
        geo: {
            lat: {
                type: Number,
                rrequired: [true, 'Enter Lat'],
                trim: true,
                lowercase: true
            },
            lng: {
                type: Number,
                required: [true, 'Enter Lng'],
                trim: true,
                lowercase: true
            }
        }
    },
    phone: {
        type: String,
        required: [true, 'Enter Phone'],
        trim: true,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v)
            },
            message: props => `${props.value} is not a Valid Phone Number`
        },
    },
    website: {
        type: String,
        required: [true, 'Enter Website'],
        validate: [validateHttpUrl, 'Enter Valid Website'],
        trim: true,
        lowercase: true
    },
    company: {
        name: {
            type: String,
            required: [true, 'Enter Company Name'],
            trim: true,
            lowercase: true

        },
        catchPhrase: {
            type: String,
            required: [true, 'Enter Catch Phrase'],
            trim: true,
            lowercase: true
        },
        bs: {
            type: String,
            required: [true, 'Enter Bs'],
            trim: true,
            lowercase: true
        }
    }
})

const User = mongoose.model("User", UserSchema)
module.exports = User

User.insertMany(userData)