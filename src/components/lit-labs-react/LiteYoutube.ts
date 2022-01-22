import "@justinribeiro/lite-youtube"
import { LiteYTEmbed } from "@justinribeiro/lite-youtube"
import { createComponent } from "@lit-labs/react"
import React from "react"

export const LiteYoutube = createComponent(
    React,
    "lite-youtube",
    LiteYTEmbed,
    {
        onLiteYoutubeIframeLoaded: "liteYoutubeIframeLoaded",
    },
)
