import { NPC, NPCDelay } from '@dcl/npc-scene-utils'
//import { AliceDialog } from './modules/dialogData'
import { AliceDialog } from 'src/data'
import resources from './resources'

import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import Script1 from '../c1da72b5-fbda-4ba5-ad96-a921a3ef0d3b/src/item'
import Script2 from '../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item'
import { neat } from 'neat/neat'
import { neatBG } from './neat/ui'
//import { NeatSystem } from 'neat/system'
//import { neatBG } from 'neat/ui'
//import { scene } from './scene'

export const alice = new NPC(
  {
    position: new Vector3(3, 1.6, 8.5),
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

const squareSignpost = new Entity('squareSignpost')
engine.addEntity(squareSignpost)

//squareSignpost.setParent(scene)

const transform = new Transform({
  position: new Vector3(2, 0, 10.5),
  rotation: new Quaternion(0, 0.2902846932411194, -3.4604628496026635e-8, 0.9569403529167175),
  scale: new Vector3(1.5313056707382202, 1.2, 0.5663504600524902)
})
squareSignpost.addComponentOrReplace(transform)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
//const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
//const options = { inventory }

/*
const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
//nftPictureFrame.setParent(scene)
const transform30 = new Transform({
  position: new Vector3(12.09399700164795, 1.6921573877334595, 11.662574768066406),
  rotation: new Quaternion(-0.06048033386468887, -0.7621920704841614, -0.050982605665922165, 0.6424999833106995),
  scale: new Vector3(3.703580379486084, 3.1973347663879395, 1.0034245252609253)
})
nftPictureFrame.addComponentOrReplace(transform30)


const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
//nftPictureFrame2.setParent(scene)
const transform31 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
nftPictureFrame2.addComponentOrReplace(transform31)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
//nftPictureFrame3.setParent(scene)
const transform34 = new Transform({
  position: new Vector3(12.473897933959961, 1.6921573877334595, 8.651859283447266),
  rotation: new Quaternion(-0.06048033386468887, -0.7621920704841614, -0.050982605665922165, 0.6424999833106995),
  scale: new Vector3(3.703580379486084, 3.1973347663879395, 1.0034245252609253)
})
nftPictureFrame3.addComponentOrReplace(transform34)
*/
const script1 = new Script1()
const script2 = new Script2()
script1.init()
script2.init()
script1.spawn(
  squareSignpost,
  { text: 'MBTI \n성격테스트', fontSize: 20 },
  createChannel(channelId, squareSignpost, channelBus)
)
/*
script2.spawn(
  nftPictureFrame,
  {
    id: '2094',
    contract: '0xd532b88607b1877fe20c181cba2550e3bbd6b31c',
    style: 'Canvas',
    color: '#FFFFFF',
    ui: true,
    uiText: ''
  },
  createChannel(channelId, nftPictureFrame, channelBus)
)

script2.spawn(
  nftPictureFrame2,
  {
    id: '558536',
    contract: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    style: 'Classic',
    color: '#FFFFFF',
    ui: true,
    uiText: ''
  },
  createChannel(channelId, nftPictureFrame2, channelBus)
)


script2.spawn(
  nftPictureFrame3,
  {
    id: '6247',
    contract: '0xdf3407636bbf3a015a8e48a079ef7ba49e687fd3',
    style: 'Canvas',
    color: '#FFFFFF',
    ui: true,
    uiText: ''
  },
  createChannel(channelId, nftPictureFrame3, channelBus)
)
*/
/*
const beamExterior = new Entity('beamExterior')
engine.addEntity(beamExterior)
//beamExterior.setParentscene)
const transform32 = new Transform({
  position: new Vector3(11.889525413513184, 0.29577505588531494, 11.560519218444824),
  rotation: new Quaternion(0.06990209221839905, 0.6354784965515137, -0.059609632939100266, 0.7666338682174683),
  scale: new Vector3(0.43272560834884644, 0.369143009185791, 0.9533857107162476)
})
beamExterior.addComponentOrReplace(transform32)
const gltfShape12 = new GLTFShape('models2/Beam Exterior 1.glb')
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
beamExterior.addComponentOrReplace(gltfShape12)

const beamExterior2 = new Entity('beamExterior2')
engine.addEntity(beamExterior2)
//beamExterior2.setParent(_scene)
beamExterior2.addComponentOrReplace(gltfShape12)
const transform33 = new Transform({
  position: new Vector3(12.275545120239258, 0.29577505588531494, 8.549803733825684),
  rotation: new Quaternion(0.06990209221839905, 0.6354784965515137, -0.059609632939100266, 0.7666338682174683),
  scale: new Vector3(0.43272560834884644, 0.36914291977882385, 0.9533857107162476)
})
beamExterior2.addComponentOrReplace(transform33)
*/

// eslint-disable-next-line @typescript-eslint/no-floating-promises
neat.init(
  true,
  true,
  false,
  2,
  { position: new Vector3(3, 1, 2), rotation: Quaternion.Euler(0, 270, 0), scale: new Vector3(1, 1, 1) },
  null
)
