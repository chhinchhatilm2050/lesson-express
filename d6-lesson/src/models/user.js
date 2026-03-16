import mongoose from "mongoose";
const ageValidator = (value) => {
    return value >= 18 && value <= 100;
}
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    username: String,
    dateOfBirth: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        validate: {
            validator: ageValidator,
            message: 'Age must be between 18 and 100'
        },
        default: 18
    }
}, {
    timestamps: true
});

const UserModel = mongoose.model('User', userSchema);
export {UserModel};