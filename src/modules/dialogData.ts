import { Dialog } from '@dcl/npc-scene-utils'
import { alice } from '../game'
import { saveData, showResult } from './data'

export const AliceDialog: Dialog[] = [
  {
    //0
    text: '안녕하세요. 저는 Alice라고해요 <br>질문을 통해 16가지 성향 중 당신의 유형을 알아보세요. ',
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
    text: 'Q9.당신은 파티에서   <br>A:낯선 사람을 포함하여 많은 사람들과 교류하는 편<br>B:아는 몇 사람과 교류하는 편',
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
    text: '공감능력 백배 힐러(INFP)<br>역대급 공감능력의 소유자. 음악, 예술, 자연에 대한 감성뿐 아니라 타인의 감정을 빠르게 캐취하며 공감하는 능력자. 타인 말을 편견없이 듣고, 이해해주며, 공감의 눈빛을 건낼 수 있는 당신은 이미 힐러입니다. 솔직함을 중시하는 당신, 창의적인 영역에서 자신을 드러내길 원합니다. 상상만 하지말고 한걸음씩 현실에 내딪어 보세요.새로운 기회가 열리고 있습니다. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INFJ',
    text: 'My way 이상주의자(INFJ)<br>주어진 삶에 순응하기 보자 자신의 삶을 만들어가는 사람. 돈이나 지위가 목적이 아니라 자아를 실현하고 타인의 도우며 선한 세상을 위한 한 스푼이 되는 사람. 겉모습의 화려함보다 내면의 깊은 성찰과 침잠을 즐기는 성향입니다. 다수의 사람들과 많은 관계를 맺기보다, 몇몇 사람과의 의미있는 관계와 대화에 더 큰 행복을 느낌니다. 자신의 선한 의도가 전달되지 않았을 때 좌절을 할 수도 있습니다. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTP',
    text: '호시심 많은 프쉬케(INTP)<br>창의성과 호기심이 뛰어난 당신은 당신앞의 상황이나 순간에 다양한 아이디어와 질문이 넘칩니다. 자신의 아이디어를 들어주는 사람들을 만나면 활발하게 의견을 나누며 지적 유희를 즐기기 좋아합니다. 톡톡 튀어오르는 생각에 자칫 처음 생각과 바뀌어 일관성이 없어보이기도 하지만 더 발전된 생각에 개방적인 자세로 탐구하는 당신이기에 유능함은 곧 빛을 발할것입니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'INTJ',
    text: '외롭운 심사숙고 (INTJ)<br>상황판단이 빠르고, 직관력도 뛰어나 타인의 진실과 거짓을 간파하는 능력이 있다. 뛰어나 사고능력과 지식탐구력을 바탕으로 남다른 아이디어를 이용해 성공할 수 있다. 독립적인 성향이 강한 당신은 남을 따르기보다는 자신이 주도적으로 상황을 이끌어가길 바란다. 현실에서 타인의 욕구와 계획에 무관심하게 보일 수도 있다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFP',
    text: '삶을 캔버스로..진정한 예술가(ISFP)<br>입는 옷, 먹는 음식, 인테리어등.. 라이프 스타일 전반에서 자신의 개성을 표현하는 예술가.유연한 사고와 생활방식을 가졌으며, 엄격한 일정과 계획에 따르는 일보다 자유도가 높은 일을 선호한다. 창의력이 넘치는 자유로운 영혼으로 자신의 리듬에 맞게 살기를 좋아한다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISFJ',
    text: '사려깊은 손길 (ISFJ)<br>도움이 필요한 사람에게 겸손하고 사려깊은 자세로 헌신하는 사람. 근면하고 헌신적인 성격으로 주변 사람들에게 깊은 책임감을 느낍니다. 친절과 감사에 더 큰 배려로 보답할 줄 아는 열정과 겸손의 소유자. 다른 사람의 세세한 변화도 감지할 만큼 세심하고 사려깊은 인품이기에 주변 사람들에게 안정감과 행복감을 주는 사람입니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTP',
    text: '뚝딱뚝딱 내 손으로 ( ISTP)<br>호기심이 많고 탐구하기를 좋아하며 뭐든 손으로 만지고 직접 눈으로 확인하며 분석하기를 좋아한다. 문제를 해결하고 시행착오를 거치며 개선하는 것을 즐기는 기술자나 엔지니어의 성향이 있다. 즉흥적이며 호기심이 넘쳐 새로운 관심사를 찾아 나서기도 하지만, 한번 몰입하면 대단한 집중력의 소유자이다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ISTJ',
    text: '책임감 강한 해결사 (ISTJ)<br>자신에게 주어진 일을 정해진 시간까지 미루지 않고 책임을 다하는 사람. 진솔한 자신의 모습에 자부심을 느끼며, 꿈꾸는 이상주의자 보다는 현실에서 가능한 해결책을 논리적으로 고민하여 실행하는 해결사. 하지만 강한 책임감으로 인해 다른 사람의 몫까지 책임지려 하다보면 자칫 절망감이 들 수도 있다. 책임의 한계에 대해서 고민하는 지혜가 필요하다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFP',
    text: '낮에도 꿈을 꾸는 자유로운 영혼(ENFP)<br>활기차고 낙천적이며, 사교적인 성격으로 다른 사람들과의 교류를 즐길 줄 아는 사람. 그저 놀기만 좋아하는 것이 아니라 깊이있는 내면을 간직하고 있어 상상력이 풍부하고 창의적인 성향이다.상상력을 자극하는 활동을 좋아하며, 이러한 열정을 함께 일하는 사람들에게도 전달되어 팀에 에너자이저 역할을 하기도 한다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENFJ',
    text: '헌신적 지도자(ENFJ)<br>올바른 일을 위해 사명을 갖고 임하려는 지도자. 진실함과 선함을 가지고 좋은 영향력을 주변인들에게 전파한다. 다른 사람의 감정을 빨리 파악하여 세심한 배려와 소통으로 다른 사람들이 더 나은 삶을 살도록 도우려고 한다. 그러나 모든 사람들이 변화에 대해 준비된 것이 아니라서 가끔 성급한 조언이 될 수도 있다. 당신에게는 모범을 보이며 다른 사람들이 당신을 따르도록 하는 능력이 있습니다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTP',
    text: 'Why Not?(ENTP)<br> 빠른 두뇌회전, 대담한 성격으로 논란이 되는 문제에도 직접 뛰어들어 중심에 서서 논쟁하기를 즐긴다. 타인이 당연히 여기는 것에도 왜? 라는 질문을 서슴없이 제기하고 자신의 신념을 객관적 관점에서 바라보기 위해 스스로에 대한 반론도 즐기는 편이다. 논쟁에서 이기는 것에만 집중하면 곤란하고, 유연성을 발휘해 서로다른 관점을 파악하고 조율 할 수 있는 배려가 필요하다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ENTJ',
    text: '나를 따르라(ENTJ)<br>강력한 의지의 소유자, 주어진 시간과 환경에서 자신의 목표를 달성하기 위해 집중할 줄 아는 사람. 카리스마와 자신감은 리더로서의 자질로 훌륭하지만 자칫 섬세한 감정과 감성을 배려하지 않는 경향도 있다. 뛰어난 전략적 사고능력, 목표에 대한 집중력, 결단력있는 실행으로 팀을 공통에 목표로 이끄는 멋진 리더이다. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFP',
    text: '현재를 즐겨라(ESFP)<br>지금 이 순간의 흥겨움과 즐거움을 즐길 줄 아는 성격. 다른 사람들의 시선을 사로잡고 관심받기를 즐긴다.매우 사교적인 성격으로 친구들과 재미있는 시간을 보내는 것에 큰 만족감을 느낀다.감각이 뛰어나 옷이나 악세사리등 새로운 패션 스타일을 찾는데도 소질이 있다. ',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESFJ',
    text: '긍정의 에너지 치어리더(ESFJ)<br>다양한 사람들에게도 선입견 없이 마음을 열며, 용기를 북돋고 사람들을 하나로 모으는 역할. 옳고 그름에 대한 명확히 판단하는 성향이 있어 독선적인 모습이라 보일 때도 있다. 하지만 배려심이 있고, 사교적인 성격이며 장기적이고 지속적인 관계를 구축하는 편이다. 질서과 체계를 중시하여 즉흥만남 보다는 계획된 행사를 선호한다.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTP',
    text: '과감한 프론티어(ESTP)<br>이론적이고 추상적인 토론보다는 직접 발로 뛰며 행동하고 시행착오를 겪는 프론티어.모험과 열정을 사랑하고, 결정을 내릴 때도 이론 보다는 현재의 사실과 상황에 집중한다. 관찰력이 뛰어나 새로운 패션 스타일을 발견하고 과감히 도전하는 트렌드 세터.',
    isEndOfDialog: true,
    triggeredByNext: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  },
  {
    name: 'ESTJ',
    text: '가치를 지키는 수호자(ESTJ)<br>전통과 질서, 공동체가 일구어갈 가치를 중시하는 성격으로 조금의 부정행위에도 단호박으로 대처하는 성격. 주위의 관찰력이 뛰어나고 , 자신의 지식에 대한 강한 믿음이 있어 강한 반대 저항이라도 원칙에 따라 자신의 비전을 밀어부침. 이웃을 돕고 법을 준수하며, 집단과 조직을 위해 이바지할 길을 찾아 노력합니다.',
    isEndOfDialog: true,
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
