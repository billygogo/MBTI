export type Props = {
  image: string
}

type ChangeTextType = { newText: string }

export default class SignPost implements IScript<Props> {
  init() {}

  spawn(host: Entity, props: Props, channel: IChannel) {
    const sign = new Entity()
    sign.setParent(host)

    sign.addComponent(new GLTFShape('6ef2baf2-3d2e-4093-b22b-34c2b6bb0e7b/models/Screen_Independent.glb'))
    sign.addComponent(new Transform({}))

    const url = props.image

    const QRTexture = new Texture(url)
    const QRMaterial = new Material()
    QRMaterial.metallic = 0
    QRMaterial.roughness = 1
    QRMaterial.specularIntensity = 0
    QRMaterial.albedoTexture = QRTexture

    const QRPlane = new Entity()
    QRPlane.setParent(host)
    QRPlane.addComponent(new PlaneShape())
    QRPlane.addComponent(QRMaterial)
    QRPlane.addComponent(
      new Transform({
        position: new Vector3(0, 3.45, 0),
        rotation: Quaternion.Euler(180, 0, 0),
        scale: new Vector3(7, 3.8, 1)
      })
    )
  }
}
