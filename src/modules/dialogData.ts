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
    text: 'Q1.당신은 모임에서<br>A: 대화를 먼저 시작하는 편이다.    <br>B: 상대방이 말을 거는 걸 기다리는 편이다.   ',
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
    text: 'Q3.당신은 사람들을 <br>A:공정하게 대하는 것을 선호 <br>B:기분 좋게 대하는 것을 선호',
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
    text: 'Q4.당신은 약속 시간을 정할 때 <br>A:빨리 확정하고 변수가 생기면 조정하는 편<br>B:다른 변수를 고려하려 마지막까지 신중하게 확정하는 편',
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
    text: 'Q6.당신은 보다  <br>A:개별적인 사안에 먼저 관심을 갖는 편이다.<br>B:전체적인 사안에 먼저 관심을 갖는 편이다.',
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
    text: 'Q7.당신은 판단을 내릴 때 <br>A:객관적으로 하는 편<br>B:감정적으로 하는 편',
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
        label: 'choose B',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'F', 'B', 'q8')
        }
      },
      {
        label: 'choose A',
        goToDialog: 'q8',
        triggeredActions: () => {
          saveData('q7', 'T', 'A', 'q8')
        }
      }
    ]
  },
  {
    name: 'q8',
    text: 'Q8.당신은 일을  <br>A:마감시간을 정하고 하는 것을 선호 <br>B:아무 때나 하는 것을 선호',
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
    text: 'Q9.당신은 파티에서   <br>A:낯선 사람을 포함하여 많은 사람들과 교류하는 편?<br>B:아는 몇 사람과 교류하는 편?',
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
    text: 'Q10.당신이 보다 끌리는 쪽은  <br>A:믿을 수 있는 정보<br>B:믿은 만한 가설',
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
    text: 'Q11.당신이 선호하는 쪽은  <br>A:쟁점을 철처하게 토론하는 것<br>B:쟁점을 합의에 이르게 하는 것',
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
    text: '당신은 INFP로서 언뜻 보기에 조용하고 자신을 내세우지 않는 것처럼 보이지만, 사실은 에너지와 열정이 넘치는 마음을 지닌 성격입니다. 이들은 창의적이고 상상력이 뛰어나며 몽상을 즐기는 성격으로, 머릿속에서 수많은 이야기를 만들어 내곤 합니다. 또한 음악과 예술과 자연에 대한 감수성이 뛰어나며 다른 사람의 감정을 빠르게 알아차리곤 합니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INFJ',
    text: '당신은 INFJ로서 매우 희귀한 성격임에도 불구하고 세상에 큰 영향력을 발휘하곤 합니다. 이들은 이상주의적이고 원칙주의적인 성격으로, 삶에 순응하는 대신 삶에 맞서 변화를 만들어 내고자 합니다. 이들에게 성공이란 돈이나 지위가 아니라 자아를 실현하고 다른 사람을 도우며 세상에서 선을 실천하는 일입니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTP',
    text: '당신은 INTP로서 자신의 독특한 관점과 활기 넘치는 지성에 자부심을 느끼며, 우주의 미스터리에 대해 깊이 생각하곤 합니다. 유명한 철학자와 과학자 중 논리술사 성격이 많은 것도 이 때문일 것입니다. 논리술사는 상당히 희귀한 성격이지만 뛰어난 창의성과 독창성으로 많은 사람 사이에서 존재감을 드러내곤 합니다. 이렇게 논리적이면서도 마술사와 같은 창의력을 발휘하는 성격이기에 ‘논리술사’라고 부르게 되었습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTJ',
    text: '당신은 INTJ로서 전략가는 이성적이면서도 두뇌 회전이 빠른 성격으로, 자신의 뛰어난 사고 능력을 자랑스러워하며 거짓말과 위선을 꿰뚫어 보는 능력이 있습니다. 하지만 이로 인해 끊임없이 생각하고 주변의 모든 것을 분석하려는 자신의 성향을 이해할 수 있는 사람을 찾는 데 어려움을 겪기도 합니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFP',
    text: '당신은 ISFP 진정한 의미의 예술가라고 할 수 있습니다. 하지만 모험가라고 반드시 예술 업계에만 종사하는 것은 아닙니다. 이들에게는 삶 자체가 자신을 표현하기 위한 캔버스이기 때문입니다. 이들은 입는 옷부터 여가 시간을 보내는 방식까지 다양한 측면에서 자신의 독특한 개성을 생생히 드러냅니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFJ',
    text: '당신은 ISFJ 겸손한 자세로 세상을 지탱하는 역할을 합니다. 이들은 근면하고 헌신적인 성격으로 주변 사람들에 대한 깊은 책임감을 느낍니다. 이들은 마감 기한을 철저히 지키고 동료와 친구의 생일과 기념일을 챙기며, 기존 질서를 유지하고 주변 사람을 배려하는 동시에 기꺼이 도움의 손길을 건넵니다. 또한 감사를 요구하기보다는 뒤에서 묵묵히 헌신하는 성격이라고 할 수 있습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTP',
    text: '당신은 ISTP 이성과 호기심을 통해 세상을 바라보며 눈과 손으로 직접 탐구하는 일을 즐깁니다. 이들은 타고난 손기술을 지니고 있으며, 다양한 프로젝트에서 유용하고 재미있는 물건을 만들어 내고 주변 환경에서 배울 점을 찾습니다. 장인은 보통 기술자나 엔지니어로 일하는 경우가 많으며 물건을 직접 분해하고 조립해 개선하는 일을 즐깁니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTJ',
    text: '당신은 ISTJ 진실하게 행동하는 자신의 모습에서 자부심을 느끼며, 자기 생각을 솔직하게 이야기하고 어떤 것에 헌신하기로 한 경우 최선을 다합니다.화려한 삶이나 다른 사람의 주의를 끄는 일에는 관심이 없으며, 안정된 사회를 위해 자신의 몫보다 많은 기여를 하곤 합니다. 이들은 가족이나 주변 사람들로부터 믿음직한 사람이라는 평판을 받을 때가 많으며, 현실 감각이 뛰어나 스트레스가 극심한 상황에서도 현실적이고 논리적인 태도를 유지하는 사람으로 인정받곤 합니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFP',
    text: '당신은 ENFP로서 활동가(ENFP)는 진정으로 자유로운 영혼이라고 할 수 있으며 외향적이고 솔직하며 개방적인 성격입니다. 이들은 활기차고 낙관적인 태도로 삶을 대하며 다른 사람들 사이에서 돋보이곤 합니다. 그러나 신나는 삶을 사는 것처럼 보인다고 해서 즐거움만을 좇는 성격은 아니며, 다른 사람과 감정적으로 깊고 의미 있는 관계를 맺는 일을 추구합니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFJ',
    text: '당신은 ENFJ로서 선도자는 타고난 지도자라고 할 수 있으며 많은 선도자가 정치인, 코치, 교사로 활동하고 있습니다. 이들의 열정과 카리스마는 직업뿐만 아니라 인간관계 등 삶의 다양한 측면에서 다른 사람에게 영향을 주곤 합니다. 또한 이들은 친구와 사랑하는 사람이 발전할 수 있도록 돕는 일에서 즐거움과 깊은 만족감을 느낍니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTP',
    text: '당신은 ENTP로서 두뇌 회전이 빠르고 대담한 성격으로 현재 상황에 이의를 제기하는 데 거리낌이 없습니다. 변론가는 어떤 의견이나 사람에 반대하는 일을 두려워하지 않으며, 논란이 될 만한 주제에 대해 격렬하게 논쟁하는 일을 즐깁니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTJ',
    text: '당신은 ENTJ로서 타고난 지도자라고 할 수 있습니다. 이들은 카리스마와 자신감을 지니고 있으며 자신의 권한을 이용해 사람들이 공통된 목표를 위해 함께 노력하도록 이끕니다. 또한 이들은 냉철한 이성을 지닌 것으로 유명하며, 자신이 원하는 것을 성취하기 위해 열정과 결단력과 날카로운 지적 능력을 활용합니다. 이들은 전체 인구의 3%에 불과하지만 다른 많은 성격을 압도하는 존재감을 뽐내며, 많은 비즈니스와 단체를 이끄는 역할을 할 때가 많습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFP',
    text: '당신은 ESFP 활동가(ENFP)는 진정으로 자유로운 영혼이라고 할 수 있으며 외향적이고 솔직하며 개방적인 성격입니다. 이들은 활기차고 낙관적인 태도로 삶을 대하며 다른 사람들 사이에서 돋보이곤 합니다. 그러나 신나는 삶을 사는 것처럼 보인다고 해서 즐거움만을 좇는 성격은 아니며, 다른 사람과 감정적으로 깊고 의미 있는 관계를 맺는 일을 추구합니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFJ',
    text: '당신은 ESFJ  삶에서 위대한 사명을 위해 힘써야 한다는 느낌을 받곤 합니다. 사려 깊고 이상주의적 성향을 지닌 선도자는 다른 사람과 주변 세상에 긍정적인 영향력을 발휘하기 위해 최선을 다하며, 어려운 상황에서도 올바른 일을 할 기회를 마다하지 않습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTP',
    text: '당신은 ESTP 항상 주변 사람에게 영향력을 행사하곤 합니다. 파티에서 가는 곳마다 사람들에게 둘러싸여 있는 사람을 발견한다면 아마 사업가일 것입니다. 이들은 직설적인 유머 감각을 지니고 있으며 수많은 사람의 관심을 받는 일을 즐깁니다. 한 마디로 사회자가 무대로 올라올 사람을 찾을 때 직접 무대로 올라가는 성격이라고 할 수 있습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTJ',
    text: '당신은 ESTJ 전통과 질서를 중시하는 성격으로, 자신이 생각하는 옳고 그름과 사회적 기준에 따라 가족과 공동체가 화합할 수 있도록 노력합니다. 이들은 정직과 헌신과 존엄성을 중시하며, 어려운 길을 기꺼이 앞장서고 다른 사람들에게 명확한 조언과 지도를 제공합니다. 이들은 사람들이 화합하도록 하는 일에서 자부심을 느끼며, 모든 사람이 지역 축제를 즐길 수 있도록 노력하거나 가족과 공동체의 전통적인 가치관을 지키는 역할 등을 맡곤 합니다.',
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
