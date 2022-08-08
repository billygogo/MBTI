import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { AliceDialog } from './modules/dialogData'
import resources from './resources'

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import Script1 from '../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item'

export const alice = new NPC(
  {
    position: new Vector3(7, 1.6, 6),
    rotation: Quaternion.Euler(0, 270, 0)
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
// Create AudioClip object, holding audio file

const clip = new AudioClip('sounds/Sand_Castles.mp3')

// Create AudioSource component, referencing `clip`
const source = new AudioSource(clip)

// Add AudioSource component to entity
streamSource.addComponent(source)

// Play sound
source.loop = true
source.playing = true
engine.addEntity(streamSource)

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)

//squareSignpost.setParent(scene)

const transform = new Transform({
  position: new Vector3(3, 0, 10.5),
  rotation: new Quaternion(0, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1.5313056707382202, 1.2, 0.5663504600524902)
})
squareSignpost.addComponentOrReplace(transform)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
//const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
//const options = { inventory }

const script1 = new Script1()
script1.init()
script1.spawn(
  squareSignpost,
  { text: 'MBTI \n성격테스트', fontSize: 20 },
  createChannel(channelId, squareSignpost, channelBus)
)
