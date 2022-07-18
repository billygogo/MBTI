import { Dialog } from '@dcl/npc-scene-utils'
import { alice } from '../game'
import { saveData, showResult } from './data'

export const AliceDialog: Dialog[] = [
  {
    //0
    text: '안녕하세요. 저는 Alice라고해요 반갑습니다. MBTI로 당신의 성향을 알아보세요. ',
    fontSize: 25
  },
  {
    //1
    text: 'MBIT 성향검사를 진행하시겠습니까?',
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
    text: 'Q1.당신은 파티에서.. <br>A: 낯선 사람에게도 쉽게 말을 건다. <br>B: 아는 사람들과 교류하는 것을 선호한다.',
    isQuestion: true,
    //right image
    image: {
      path: 'images/dialog_right/right2.png',
      height: 180,
      width: 180,
      offsetX: -70,
      offsetY: -20,
      section: { sourceHeight: 256, sourceWidth: 256 }
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
    /*
        image: {
            path: 'images/cocktail.png',
            height: 128,
            width: 128,
            offsetX: -40,
            section: { sourceHeight: 256, sourceWidth: 256 },
        },
        */
  },

  {
    //4
    name: 'q2',
    text: 'Q2.당신은... <br>A:사실적인 것이 보다 흥미롭다. <br>B:비유적인 것이 보다 흥미롭다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q3',
        triggeredActions: () => {
          saveData('q2', 'S', 'B', 'q3')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q3',
        triggeredActions: () => {
          saveData('q2', 'N', 'A', 'q3')
        }
      }
    ]
  },
  {
    name: 'q3',
    text: 'Q3.당신은 언제나 <br>A:공정한 편이다. <br>B:인정이 많은 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q4',
        triggeredActions: () => {
          saveData('q3', 'T', 'B', 'q4')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q4',
        triggeredActions: () => {
          saveData('q3', 'F', 'A', 'q4')
        }
      }
    ]
  },
  {
    name: 'q4',
    text: 'Q4.당신은 일을  <br>A:마감시간을 정하고 하는게 더 좋다. <br>B:마음이 동할때 그때그때 하는게 좋다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q5',
        triggeredActions: () => {
          saveData('q4', 'I', 'B', 'q5')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q5',
        triggeredActions: () => {
          saveData('q4', 'E', 'A', 'q5')
        }
      }
    ]
  },
  {
    name: 'q5',
    text: 'Q5.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q6',
        triggeredActions: () => {
          saveData('q5', 'S', 'B', 'q6')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q6',
        triggeredActions: () => {
          saveData('q5', 'N', 'A', 'q6')
        }
      }
    ]
  },
  {
    name: 'q6',
    text: 'Q6.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q7',
        triggeredActions: () => {
          saveData('q6', 'T', 'B', 'q7')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q7',
        triggeredActions: () => {
          saveData('q6', 'F', 'A', 'q7')
        }
      }
    ]
  },
  {
    name: 'q7',
    text: "Q7.What's your favorite color?<br>A:Blue <br>B:Green",
    isQuestion: true,
    buttons: [
      {
        label: 'choose B',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'J', 'B', 'q8')
        }
      },
      {
        label: 'choose A',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'P', 'A', 'q8')
        }
      }
    ]
  },
  {
    name: 'q8',
    text: 'Q8.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q9',
        triggeredActions: () => {
          saveData('q8', 'J', 'B', 'q9')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q9',
        triggeredActions: () => {
          saveData('q8', 'P', 'A', 'q9')
        }
      }
    ]
  },
  {
    name: 'q9',
    text: 'Q9.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
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
    text: 'Q10.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q11',
        triggeredActions: () => {
          saveData('q10', 'S', 'B', 'q11')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q11',
        triggeredActions: () => {
          saveData('q10', 'N', 'A', 'q11')
        }
      }
    ]
  },
  {
    name: 'q11',
    text: 'Q11.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q12',
        triggeredActions: () => {
          saveData('q11', 'J', 'B', 'q12')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q12',
        triggeredActions: () => {
          saveData('q11', 'P', 'A', 'q12')
        }
      }
    ]
  },
  {
    name: 'q12',
    text: 'Q12.당신은 언제나  <br>A:시간을 지키는 편이다. <br>B:서두르지 않는 편이다.',
    isQuestion: true,
    buttons: [
      {
        label: 'B선택',
        goToDialog: 'q13',
        triggeredActions: () => {
          saveData('q12', 'T', 'B', 'q13')
        }
      },
      {
        label: 'A선택',
        goToDialog: 'q13',
        triggeredActions: () => {
          saveData('q12', 'F', 'A', 'q13')
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
    text: '당신은 INFP로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INFJ',
    text: '당신은 INFJ로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTP',
    text: '당신은 INTP로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTJ',
    text: '당신은 INTJ로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFP',
    text: '당신은 ISFP ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFJ',
    text: '당신은 ISFJ ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTP',
    text: '당신은 ISTP ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTJ',
    text: '당신은 ISTJ ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFP',
    text: '당신은 ENFP로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFJ',
    text: '당신은 ENFJ로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTP',
    text: '당신은 ENTP로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTJ',
    text: '당신은 ENTJ로서 ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFP',
    text: '당신은 ESFP ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFJ',
    text: '당신은 ESFJ ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTP',
    text: '당신은 ESTP ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTJ',
    text: '당신은 ESTJ ~~~~',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    //1
    name: 'goodbye',
    text: '안녕히 가세요. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
]
