import "@github/clipboard-copy-element"
import ClipboardCopyElement from "@github/clipboard-copy-element"
import { wrapWc } from "wc-react"

export type ClipboardCopyProps = Partial<ClipboardCopyElement & {
    clipboardCopy: () => void // TODO: Event doesn't dispatches
    children: any // TODO: `PropsWithChildren` doesn't work :(
}>

export const ClipboardCopy = wrapWc<ClipboardCopyProps>("clipboard-copy")
