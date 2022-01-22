import { css } from "@emotion/react"
import { useCopied } from "./hooks/useCopied"
import ClipboardCopy from "./components/ClipboardCopy"
import LiteYoutube from "./components/LiteYoutube"

function App() {
    const [copied, setCopied] = useCopied()

    return (
        <div
            css={css`
                display: grid;
                grid-template-rows: 100px 400px;
                grid-template-areas:
                    "clipboard-copy"
                    "lite-youtube";
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

            <div css={css`grid-area: lite-youtube`}>
                <h3>@justinribeiro/lite-youtube</h3>
                <LiteYoutube
                    css={css`height: 100%`}
                    videoId="guJLfqTFfIw"
                    videoPlay="Mirar"
                    videoTitle="This is a video title"
                    videoStartAt={5}
                    // TODO: Unsupported props
                    //  params="controls=0&enablejsapi=1"
                    //  autoLoad
                />
            </div>
        </div>
    )
}

export default App
