import validator from "validator";

export const validatePassword = (password) => {
    if (!password) {
        return 'Please enter a password';
    }
    if (!validator.isLength(password, { min: 8 })) {
        return 'Password must be at least 8 characters long';
    }
    if (!validator.isAlphanumeric(password)) {
        return 'Password can only contain letters and numbers';
    }
    return "";
};

export const validateText = (username) => {
    if (!username) {
        return 'Please enter a text';
    }
    if (!validator.isLength(username, { min: 3, max: 30 })) {
        return 'Text must be between 3 and 30 characters long';
    }
    if (!validator.isAlphanumeric(username)) {
        return 'Text can only contain letters and numbers';
    }
    return "";
}
export const validateEmail = (email) => {
    if (!validator.isEmail(email)) {
        return 'Please enter a valid email address';
    }
    return "";
}
