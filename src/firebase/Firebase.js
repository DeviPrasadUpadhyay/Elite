// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// // Initialize Firebase with your project's config
// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCC5L2ecbaKrJSZJSmG9mfUtK4gAHcpsz0",
//     authDomain: "elite-94418.firebaseapp.com",
//     projectId: "elite-94418",
//     storageBucket: "elite-94418.appspot.com",
//     messagingSenderId: "1069991690317",
//     appId: "1:1069991690317:web:f727b8c9145538ded21c04"
// };
// firebase.initializeApp(firebaseConfig);

// // Get a reference to the Firebase database
// const database = firebase.database();

// // Write user data to the database
// export function writeUserData(userId, name, email, imageUrl) {
//     console.log(userId)
//     database.ref('users/' + userId).set({
//         username: name,
//         email: email,
//         profile_picture: imageUrl
//     });
// }
const URL = 'https://elite-94418-default-rtdb.firebaseio.com/users.json';
export async function addUser(data) {
    const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const finalRes = await res.json();
    console.log("data: ", finalRes);
}
export async function getUsers() {
    const res = await fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let finalRes = await res.json();
    finalRes = finalRes ? finalRes : {};
    return Object.values(finalRes);
}