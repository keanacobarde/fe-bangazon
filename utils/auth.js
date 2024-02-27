import firebase from 'firebase/app';
import 'firebase/auth';

const clientCredentials = 'https://localhost:7253';

const checkUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials}/checkuser/${uid}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(async (res) => {
      let data;
      console.warn('status:', res);
      if (res.ok) {
        resolve({});
      } else {
        data = await res.json();
        console.warn('data:', data);
        resolve(data);
      }
    })
    .catch(reject);
});

const registerUser = (userInfo) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/register`, {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((resp) => resolve(resp.json()))
    .catch(reject);
});

const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOut = () => {
  firebase.auth().signOut();
};

export {
  signIn, //
  signOut,
  checkUser,
  registerUser,
};
