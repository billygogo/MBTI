import { DialogWindow, ImageData } from "@dcl/npc-scene-utils"
import { alice } from "src/game"
import { anwser } from "src/types"
import { AliceDialog, ResultDialog } from "./dialogData"
import { getUserData } from '@decentraland/Identity'

// get player data
const userData = executeTask(async () => {
  const data = await getUserData()
  return data?.displayName
})

let user_anwser : anwser[]=[]

/*
  function saveData(questionId: string, criteriaId:string, anwserId:string, textid:string)
  questionId:
  criteriaId:
  anwserId:
  textid: next question textid in dialogData.ts
*/
export function saveData(questionId: string, criteriaId:string, anwserId:string, textid:string){
  
   if (userData.result?true:false){
    //user_anwser push
    user_anwser.push({ userId: userData.result, questionId: questionId, criteriaId:criteriaId, anwserId: anwserId})
    
    alice.dialog.openDialogWindow(AliceDialog,textid)
   }else{
    log('userData undefined ',userData.result)
   }    
 } 

 // MBTI result
export function showResult(){
    let _first: string =''
    let _second: string =''
    let _third: string =''
    let _fourth: string =''
    let _result: string =''

    let count_I : number = 0
    let count_E : number = 0
    let count_S : number = 0
    let count_N : number = 0
    let count_T : number = 0
    let count_F : number = 0
    let count_J : number = 0
    let count_P : number = 0
    if(user_anwser.length>0){
      for (let i=0 ; i<user_anwser.length ; i++) {

        if(user_anwser[i].criteriaId==='I'){count_I +=1}
        if(user_anwser[i].criteriaId==='E'){count_E +=1}
        if(user_anwser[i].criteriaId==='S'){count_S +=1}
        if(user_anwser[i].criteriaId==='N'){count_N +=1}
        if(user_anwser[i].criteriaId==='T'){count_T +=1}
        if(user_anwser[i].criteriaId==='F'){count_F +=1}
        if(user_anwser[i].criteriaId==='J'){count_J +=1}
        if(user_anwser[i].criteriaId==='P'){count_P +=1}

          //log("user_anwser===>",i, user_anwser[i].userId,user_anwser[i].questionId,user_anwser[i].criteriaId,user_anwser[i].anwserId)
          //log('count======>',count_I,count_E,count_S,count_N,count_T,count_F,count_J,count_P)
      }   
    
      _first = (count_I>count_E)? 'I': 'E'
      _second= (count_S>count_N)? 'S': 'N'
      _third= (count_T>count_F)? 'T': 'F'
      _fourth= (count_J>count_P)? 'J': 'P'

      _result = _first + _second + _third + _fourth
          
      log('result=====>',_result)
  
      alice.dialog.openDialogWindow(ResultDialog, _result)
    }
      user_anwser=[]

}
 