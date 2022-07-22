
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ origin: true }))

app.get('/hello-world', (req: any, res: any) => {
  return res.status(200).send('Hello World!')
})

exports.app = functions.https.onRequest(app)


var admin = require('firebase-admin')

var serviceAccount = require('../serviceAccount.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://bluedragontree.firebaseio.com',
})

const db = admin.firestore()

let mbti = db.collection('mbti')

app.get('/get-mbti', async (req: any, res: any) => {
  try {
    let response: any = []
    await mbti.get().then((queryResult: { docs: any }) => {
      for (let doc of queryResult.docs) {
        response.push(doc.data())
      }
    })
    return res.status(200).send(response)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
})

app.post('/add-mbti', async (req: any, res: any) => {
  let newMbti = req.body
  console.log('server body===>', newMbti)
  console.log('server body.mbti_result===>', newMbti.mbti_result)

  try {
    await mbti
      //.doc('/' + Math.floor(Math.random() * 100000) + '/')
      .doc('/' + newMbti.user_name + '/')
      .create({
        user_name: newMbti.user_name,
        test_id: newMbti.test_id,
        mbti_result: newMbti.mbti_result,
        reg_data: admin.firestore.Timestamp.fromDate(new Date())
      })
    return res.status(200).send('Save complete~!')
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
})