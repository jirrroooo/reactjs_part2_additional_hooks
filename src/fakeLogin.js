export default function fakeLogin(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'jiro' && password === 'testtest') {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }