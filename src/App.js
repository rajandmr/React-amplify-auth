//* Login with OAuth and Form

// import React from 'react';

// import { Auth } from 'aws-amplify';

// function App() {
//   async function checkUser() {
//     const user = await Auth.currentAuthenticatedUser();
//     console.log('user', user);
//   }

//   const signOut = async () => {
//     Auth.signOut();
//   };

//   return (
//     <div>
//       <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
//         Sign In with Google
//       </button>
//       <button onClick={() => Auth.federatedSignIn()}> Sign In </button>
//       <button onClick={checkUser}>Check User</button>
//       <button onClick={signOut}>Sign Out</button>
//     </div>
//   );
// }
// export default App;

//* Form Login

import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function App() {
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    const info = await Auth.currentUserCredentials();
    console.log('user:', user);
    console.log('session', info);
  }

  const signOut = async () => {
    Auth.signOut();
  };
  return (
    <div>
      <AmplifySignOut />
      <button onClick={checkUser}>Check User</button>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
