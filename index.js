const admin = require("firebase-admin"); // imports my firebase-admin tools / library of tools

const creds = require("./credentials.json"); // imports my secret credentials to connect to firebase

admin.initializeApp({ // uses certificate (below) to connect to firebase project
  credential: admin.credential.cert(creds) // wraps my credentials in a certificate
});

const db = admin.firestore() // now that we're in the project, let's get the firestore database

// db.collection('states').doc('FL').set({
//   name: 'Florida',
//   captial: 'Tallahassee',
//   regions: 'Southeast US',
//   color: 'purple leaning red',
//   peninsula: true,
//   residents: ['Todd', 'Nerissa', 'Carlie', 'Brahm', 'Neil', 'Maria', 'Jena', 'Arthur'],
// })

// db.collection('students').add({
//   first_name: 'Wade',
//   last_name: 'Booth',
// })

// db.collection('students').add({
//   first_name: 'Wade',
//   last_name: 'Booth',
// })

// db.collection('students').where('first_name', '==', 'Wade').get()
//   .then(snapshot => {
//     snapshot.docs.forEach(doc => {
//       console.log(doc.id, doc.data())
//     })
//   })
//   .catch(err => console.error(err))

db.collection('states').where('residents', 'array-contains', 'Nerissa').get()
  .then(snapshot => {
    console.log(snapshot.docs)
    // snapshot.docs.forEach(doc => {
    //   console.log(doc.data().name)
    // })
  })
  .catch(err => console.error(err))

// try {
//   const snapshot = await db.collection('states').where('residents', 'array-contains', 'Ludwigson').get()
//   snapshot.docs.forEach(doc => {
//     console.log(doc.data())
//   })
// } catch (err) {
//   console.error(err)
// }