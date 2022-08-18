import { alice } from 'src/game'
import { anwser, mbti_userInfo } from 'src/types'
//import { AliceDialog, ResultDialog } from './dialogData'
import { getUserData } from '@decentraland/Identity'
import { saveMBTI } from 'src/serverHandeler'

import { Dialog } from '@dcl/npc-scene-utils'
//import resources from './resources'
//import { alice } from '../game'
//import { saveData, showResult } from './data'

// get player data
const userData = executeTask(async () => {
  const data = await getUserData()
  return data?.displayName
})

let user_anwser: anwser[] = []

export function saveData(questionId: string, criteriaId: string, anwserId: string, textid: string) {
  if (userData.result ? true : false) {
    //user_anwser push
    user_anwser.push({ userId: userData.result, questionId: questionId, criteriaId: criteriaId, anwserId: anwserId })

    alice.dialog.openDialogWindow(AliceDialog, textid)
  } else {
    log('userData undefined ', userData.result)
  }
}

// MBTI resut
export function showResult() {
  let _first: string = ''
  let _second: string = ''
  let _third: string = ''
  let _fourth: string = ''
  let _result: string = ''

  let count_I: number = 0
  let count_E: number = 0
  let count_S: number = 0
  let count_N: number = 0
  let count_T: number = 0
  let count_F: number = 0
  let count_J: number = 0
  let count_P: number = 0
  if (user_anwser.length > 0) {
    for (let i = 0; i < user_anwser.length; i++) {
      if (user_anwser[i].criteriaId === 'I') {
        count_I += 1
      }
      if (user_anwser[i].criteriaId === 'E') {
        count_E += 1
      }
      if (user_anwser[i].criteriaId === 'S') {
        count_S += 1
      }
      if (user_anwser[i].criteriaId === 'N') {
        count_N += 1
      }
      if (user_anwser[i].criteriaId === 'T') {
        count_T += 1
      }
      if (user_anwser[i].criteriaId === 'F') {
        count_F += 1
      }
      if (user_anwser[i].criteriaId === 'J') {
        count_J += 1
      }
      if (user_anwser[i].criteriaId === 'P') {
        count_P += 1
      }
    }

    _first = count_I > count_E ? 'I' : 'E'
    _second = count_S > count_N ? 'S' : 'N'
    _third = count_T > count_F ? 'T' : 'F'
    _fourth = count_J > count_P ? 'J' : 'P'

    _result = _first + _second + _third + _fourth

    //log('result=====>', _result)

    const mbti_userinfo: mbti_userInfo = {
      test_id: 't3',
      user_name: userData.result?.toString(),
      mbti_result: _result
    }
    saveMBTI(mbti_userinfo).catch((error) => log(error))
    //_result = 'INTJ'
    alice.dialog.openDialogWindow(ResultDialog, _result)
    //alice.addComponentOrReplace(new AudioSource(resources.sounds.result))
    //alice.getComponent(AudioSource).playOnce()
  }
  user_anwser = []
}

export const AliceDialog: Dialog[] = [
  {
    //0
    text: '안녕하세요. Alice라고해요 <br>질문을 통해 16가지 성향 중 당신의 유형을 알아보세요. ',
    fontSize: 25
  },
  {
    //1
    text: '성향 검사를 진행하시겠습니까?',
    isQuestion: true,
    buttons: [
      { label: '예', goToDialog: 'q1' },
      { label: '아니오', goToDialog: 2 }
    ]
  },
  {
    //2
    text: '안녕히 가세요. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    //3
    name: 'q1',
    text: 'Q1.당신은 모임에서<br>A: 대화를 먼저 시작하는 편 <br>B: 상대방이 말을 거는 걸 기다리는 편 ',
    isQuestion: true,
    //right image
    image: {
      path: 'images/dialog_right/1.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q2',
        triggeredActions: () => {
          saveData('q1', 'I', 'B', 'q2')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q2',
        triggeredActions: () => {
          saveData('q1', 'E', 'A', 'q2')
        }
      }
    ]
  },

  {
    //4
    name: 'q2',
    text: 'Q2.당신이 보다 즐거운 쪽은 <br>A:실제 경험을 할 때<br>B:상상의 나래를 펼칠 때    ',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/2.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q3',
        triggeredActions: () => {
          saveData('q2', 'N', 'B', 'q3')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q3',
        triggeredActions: () => {
          saveData('q2', 'S', 'A', 'q3')
        }
      }
    ]
  },
  {
    name: 'q3',
    text: 'Q3.당신은 누군가 문제를 일으켰을 때<br>A:합당한 이유가 있어야 마음이 풀린다. <br>B:사과를 하면 마음이 풀린다.',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/3.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q4',
        triggeredActions: () => {
          saveData('q3', 'F', 'B', 'q4')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q4',
        triggeredActions: () => {
          saveData('q3', 'T', 'A', 'q4')
        }
      }
    ]
  },
  {
    name: 'q4',
    text: 'Q4.당신은 약속 시간을 정할 때 <br>A:빨리 확정하고 변수가 생기면 조정하는 편<br>B:어떻게 될지 모르니 천천히 확정하는 편',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/4.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q5',
        triggeredActions: () => {
          saveData('q4', 'P', 'B', 'q5')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q5',
        triggeredActions: () => {
          saveData('q4', 'J', 'A', 'q5')
        }
      }
    ]
  },
  {
    name: 'q5',
    text: 'Q5.당신이 되고 싶은 사람은  <br>A:누구나 쉽게 다가갈 수 있는 친근한 사람<br>B:상대방이 어느 정도 조심스럽게 접근하는 사람',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/5.png',
      height: 500,
      width: 800,
      offsetX: -150,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q6',
        triggeredActions: () => {
          saveData('q5', 'I', 'B', 'q6')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q6',
        triggeredActions: () => {
          saveData('q5', 'E', 'A', 'q6')
        }
      }
    ]
  },
  {
    name: 'q6',
    text: 'Q6.당신은 어떤 현상을 볼 때  <br>A:세부적인 것부터 관찰하는 편이다.<br>B:전체적으로 먼저 관찰하는 편이다.',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/6.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q7',
        triggeredActions: () => {
          saveData('q6', 'N', 'B', 'q7')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q7',
        triggeredActions: () => {
          saveData('q6', 'S', 'A', 'q7')
        }
      }
    ]
  },
  {
    name: 'q7',
    text: 'Q7.우연히 예쁜 옷을 발견했을 때  <br>A:사야하는 이유를 먼저 고민하는 편이다.<br>B:느낌이 오면 바로 사는 편이다.',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/7.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'F', 'B', 'q8')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'T', 'A', 'q8')
        }
      }
    ]
  },
  {
    name: 'q8',
    text: 'Q8.당신은 일을  <br>A:마감시간을 정하고 하는 것을 선호 <br>B: 집중력있게 일할 수 있는 때 하는 것을 선호',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/8.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q9',
        triggeredActions: () => {
          saveData('q8', 'P', 'B', 'q9')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q9',
        triggeredActions: () => {
          saveData('q8', 'J', 'A', 'q9')
        }
      }
    ]
  },
  {
    name: 'q9',
    text: 'Q9.당신은 파티에서  <br>A:낯선 사람들과도 잘 교류하는 편<br>B:아는 몇 사람과 교류하는 편',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/9.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q10',
        triggeredActions: () => {
          saveData('q9', 'I', 'B', 'q10')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q10',
        triggeredActions: () => {
          saveData('q9', 'E', 'A', 'q10')
        }
      }
    ]
  },
  {
    name: 'q10',
    text: 'Q10.당신이 보다 끌리는 쪽은  <br>A:믿을 수 있는 정보<br>B:믿을 만한 가설',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/10.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q11',
        triggeredActions: () => {
          saveData('q10', 'N', 'B', 'q11')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q11',
        triggeredActions: () => {
          saveData('q10', 'S', 'A', 'q11')
        }
      }
    ]
  },
  {
    name: 'q11',
    text: 'Q11.토론시 당신이 선호하는 쪽은  <br>A:쟁점을 철처하게 토론하는 것<br>B:쟁점을 합의에 이르게 하는 것',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/11.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q12',
        triggeredActions: () => {
          saveData('q11', 'F', 'B', 'q12')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q12',
        triggeredActions: () => {
          saveData('q11', 'T', 'A', 'q12')
        }
      }
    ]
  },
  {
    name: 'q12',
    text: 'Q12.당신이 보다 잘하는 쪽은  <br>A:체계가 잡힌 일들을 하는 것<br>B:변화가 가능한 일들을 하는 것',
    isQuestion: true,
    image: {
      path: 'images/dialog_right/12.png',
      height: 500,
      width: 800,
      offsetX: -310,
      offsetY: 250,
      section: { sourceHeight: 1000, sourceWidth: 1500 }
    },
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q13',
        triggeredActions: () => {
          saveData('q12', 'P', 'B', 'q13')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q13',
        triggeredActions: () => {
          saveData('q12', 'J', 'A', 'q13')
        }
      }
    ]
  },
  {
    name: 'q13',
    text: '수고 많으셨습니다.<br> 테스트 결과를 확인하시겠습니까?',
    isEndOfDialog: true,
    isQuestion: true,
    buttons: [
      {
        label: '확인',
        goToDialog: 'q13',
        triggeredActions: () => {
          showResult()
        }
      },
      { label: '확인안함', goToDialog: 2 }
    ]
  }
]
export const ResultDialog: Dialog[] = [
  {
    name: 'INFP',
    text: '당신은 INFP 입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/INFP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INFJ',
    text: '당신은 INFJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/INFJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTP',
    text: '당신은 INTP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/INTP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTJ',
    text: '당신은 INTJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/INTJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFP',
    text: '당신은 ISFP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ISFP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFJ',
    text: '당신은 ISFJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ISFJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTP',
    text: '당신은 ISTP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ISTP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTJ',
    text: '당신은 ISTJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ISTJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFP',
    text: '당신은 ENFP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ENFP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFJ',
    text: '당신은 ENFJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ENFJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTP',
    text: '당신은 ENTP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ENTP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTJ',
    text: '당신은 ENTJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ENTJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFP',
    text: '당신은 ESFP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ESFP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFJ',
    text: '당신은 ESFJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ESFJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTP',
    text: '당신은 ESTP입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ESTP.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTJ',
    text: '당신은 ESTJ입니다.',
    isEndOfDialog: true,
    image: {
      path: 'images/result/ESTJ.png',
      height: 500,
      width: 850,
      offsetX: -350,
      offsetY: 350,
      section: { sourceHeight: 700, sourceWidth: 1300 }
    },
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    //1
    name: 'goodbye',
    text: '감사합니다. 안녕히 가세요. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
]
