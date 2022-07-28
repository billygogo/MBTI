import { mbti_userInfo } from './types'

//export const fireBaseServer = 'http://localhost:5001/bluedragontree/us-central1/app/' // dev-mode
export const fireBaseServer = 'https://us-central1-bluedragontree.cloudfunctions.net/app/'

export async function saveMBTI(mbti_userInfo: mbti_userInfo) {
  if (mbti_userInfo.user_name !== null && mbti_userInfo.mbti_result !== null) {
    try {
      const url = fireBaseServer + 'add-mbti'
      const body = JSON.stringify({
        test_id: mbti_userInfo.test_id,
        user_name: mbti_userInfo.user_name,
        mbti_result: mbti_userInfo.mbti_result
      })
      //log('body========>', body)
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      })
      //log('response=========>', response.json())
      return response.json()
    } catch (e) {
      log('error posting to server ', e)
    }
  }
}
