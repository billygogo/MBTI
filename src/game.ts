import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
import { AliceDialog } from 'src/data'
import resources from './resources'

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
//import Script1 from '../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item'
import { neat } from 'neat/neat'

import Script2 from '../6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/src/item'
import Script3 from '../f89ab04f-46ef-42ea-912b-b194eb8d2f02/src/item'

export const alice = new NPC(
  {
    position: new Vector3(10, 1.6, 6.5),
    rotation: Quaternion.Euler(0, 270, 0)
  },
  resources.models.robots.alice,
  () => {
    alice.playAnimation('Hello', true, 2)

    const dummyent = new Entity()
    dummyent.addComponent(
      new NPCDelay(4, () => {
        alice.playAnimation('Talk')
      })
    )
    alice.addComponentOrReplace(new AudioSource(resources.sounds.alice))
    alice.getComponent(AudioSource).playOnce()

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

/*
const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)

//squareSignpost.setParent(scene)

const transform = new Transform({
  position: new Vector3(9, 0, 8.5),
  rotation: new Quaternion(0, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1.5313056707382202, 1.2, 0.5663504600524902)
})
squareSignpost.addComponentOrReplace(transform)
*/
const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
//const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
//const options = { inventory }

const imageScreen = new Entity('imageScreen')
engine.addEntity(imageScreen)
//imageScreen.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(3, 0, 14),
  rotation: new Quaternion(0, 90, 0, 0),
  scale: new Vector3(0.7, 0.7, 0.7)
})
imageScreen.addComponentOrReplace(transform21)

const twitterButtonLink = new Entity('twitterButtonLink')
engine.addEntity(twitterButtonLink)
//twitterButtonLink.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(2, 0, 13),
  rotation: new Quaternion(0, 0, 0, 0),
  scale: new Vector3(2, 2, 2)
})
twitterButtonLink.addComponentOrReplace(transform22)

//const script1 = new Script1() // squareSignpost
const script2 = new Script2() // imageScreen
const script3 = new Script3() // twitterButtonLink

//script1.init()
script2.init()
script3.init()

/*
script1.spawn(
  squareSignpost,
  { text: 'MBTI \n성격테스트', fontSize: 20 },
  createChannel(channelId, squareSignpost, channelBus)
)
*/
script2.spawn(imageScreen, { image: 'images/result/ENFJ.png' }, createChannel(channelId, imageScreen, channelBus))
script3.spawn(
  twitterButtonLink,
  { url: 'https://twitter.com/BlueDragonTree', bnw: false, name: 'BlueDragonTree' },
  createChannel(channelId, twitterButtonLink, channelBus)
)

// eslint-disable-next-line @typescript-eslint/no-floating-promises
neat.init(
  true,
  true,
  false,
  2,
  { position: new Vector3(3, 1, 2), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) },
  null
)
