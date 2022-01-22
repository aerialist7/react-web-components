import "@justinribeiro/lite-youtube"
import { wrapWc } from "wc-react"
import { LiteYTEmbed } from "@justinribeiro/lite-youtube"

const LiteYoutube = wrapWc<Partial<LiteYTEmbed>>("lite-youtube")

export default LiteYoutube
