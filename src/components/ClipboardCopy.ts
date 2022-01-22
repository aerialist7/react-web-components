import React from "react"
import "@github/clipboard-copy-element"
import { createComponent } from "@lit-labs/react"
import ClipboardCopyElement from "@github/clipboard-copy-element"

const ClipboardCopy = createComponent(
    React,
    "clipboard-copy",
    ClipboardCopyElement,
    {
        onClipboardCopy: "clipboard-copy",
    },
)

export default ClipboardCopy
