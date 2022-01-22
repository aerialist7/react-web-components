import "@justinribeiro/lite-youtube"
import { LiteYTEmbed } from "@justinribeiro/lite-youtube"
import { wrapWc } from "wc-react"

export const LiteYoutube = wrapWc<Partial<LiteYTEmbed & {
    liteYoutubeIframeLoaded: () => void
}>>("lite-youtube")
