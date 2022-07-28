import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { AliceDialog } from './modules/dialogData'
import resources from './resources'
export const alice = new NPC(
  {
    position: new Vector3(8, 1.6, 5),
    rotation: Quaternion.Euler(0, 180, 0)
  },
  resources.models.robots.alice,
  () => {
    alice.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(2, () => {
        alice.playAnimation('Talk')
      })
    )
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    //alice.getComponent(AudioSource).playOnce()

    alice.talk(AliceDialog)
  },
  {
    faceUser: true,
    portrait: {
      path: 'images/portraits/alice.png',
      height: 256,
      width: 256,
      section: {
        sourceHeight: 512,
        sourceWidth: 512
      }
    },
    onWalkAway: () => {
      alice.playAnimation('Goodbye', true, 2)
    }
  }
)
// fixed animated rings under NPCs

const ringShape = resources.models.robots.rings

const aliceRings = new Entity()
aliceRings.addComponent(ringShape)
aliceRings.addComponent(
  new Transform({
    position: new Vector3(0, -0.65, 0)
  })
)
aliceRings.setParent(alice)

// BGM
const streamSource = new Entity()
streamSource.addComponent(new AudioStream('https://bluedragontree.web.app/sounds/Sand_Castles.mp3'))
engine.addEntity(streamSource)

streamSource.getComponent(AudioStream).playing = true
