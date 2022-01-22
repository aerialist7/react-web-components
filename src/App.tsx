import React from "react"
import "@github/clipboard-copy-element"
import { useCopied } from "./hooks/useCopied"
import ClipboardCopy from "./components/ClipboardCopy"
import { css } from "@emotion/react"

function App() {
    const [copied, setCopied] = useCopied()

    return (
        <div
            css={css`
                display: grid;
                grid-template-rows: 100px;
                grid-template-areas:
                    "clipboard-copy";
                `}
        >
            <div css={css`grid-area: clipboard-copy`}>
                <h3>@github/clipboard-copy-element</h3>
                <ClipboardCopy
                    value={"Click here to copy the text to clipboard"}
                    onClipboardCopy={() => setCopied(true)}
                >
                    <span>Click here to copy the text to clipboard</span>
                    <br/>
                    <span hidden={!copied}>Copied! Now paste the value somewhere</span>
                </ClipboardCopy>
            </div>
        </div>
    )
}

export default App
