import "@github/clipboard-copy-element"
import ClipboardCopyElement from "@github/clipboard-copy-element"
import React from "react"
import { createComponent } from "@lit-labs/react"

export const ClipboardCopy = createComponent(
    React,
    "clipboard-copy",
    ClipboardCopyElement,
    {
        onClipboardCopy: "clipboard-copy",
    },
)
