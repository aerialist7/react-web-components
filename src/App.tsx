import { css } from "@emotion/react"
import { useCopied } from "./hooks/useCopied"
import { ClipboardCopy as ClipboardCopy1 } from "./components/wc-react/ClipboardCopy"
import { ClipboardCopy as ClipboardCopy2 } from "./components/lit-labs-react/ClipboardCopy"
import { LiteYoutube as LiteYoutube1 } from "./components/wc-react/LiteYoutube"
import { LiteYoutube as LiteYoutube2 } from "./components/lit-labs-react/LiteYoutube"

function App() {
    const [copied1, setCopied1] = useCopied()
    const [copied2, setCopied2] = useCopied()

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

                <div
                    css={css`
                        display: grid;
                        grid-template-columns: auto auto;
                        grid-template-areas:
                            "clipboard-copy-1 clipboard-copy-2";
                        `}
                >
                    <ClipboardCopy1
                        css={css`grid-area: clipboard-copy-1`}
                        value={"Click here to copy the text to clipboard"}
                        clipboardCopy={() => setCopied1(true)}
                    >
                        <span>Click here to copy the text to clipboard</span>
                        <br/>
                        <span hidden={!copied1}>Copied! Now paste the value somewhere</span>
                    </ClipboardCopy1>


                    <ClipboardCopy2
                        css={css`grid-area: clipboard-copy-2`}
                        value={"Click here to copy the text to clipboard"}
                        onClipboardCopy={() => setCopied2(true)}
                    >
                        <span>Click here to copy the text to clipboard</span>
                        <br/>
                        <span hidden={!copied2}>Copied! Now paste the value somewhere</span>
                    </ClipboardCopy2>
                </div>
            </div>

            <div css={css`grid-area: lite-youtube`}>
                <h3>@justinribeiro/lite-youtube</h3>
                <div
                    css={css`
                        height: 100%;
                        display: grid;
                        grid-template-columns: auto auto;
                        grid-template-areas:
                            "lite-youtube-1 lite-youtube-2";
                        `}
                >
                    <LiteYoutube1
                        css={css`
                            height: 100%;
                            grid-area: lite-youtube-1;
                        `}
                        videoId="guJLfqTFfIw"
                        videoPlay="Mirar"
                        videoTitle="This is a video title"
                        videoStartAt={5}
                        liteYoutubeIframeLoaded={() => console.log("[liteYoutubeIframeLoaded]")}
                        // TODO: Unsupported props
                        //  params="controls=0&enablejsapi=1"
                        //  autoLoad
                    />
                    <LiteYoutube2
                        css={css`
                            height: 100%;
                            grid-area: lite-youtube-2;
                        `}
                        videoId="guJLfqTFfIw"
                        videoPlay="Mirar"
                        videoTitle="This is a video title"
                        videoStartAt={5}
                        onLiteYoutubeIframeLoaded={() => console.log("[liteYoutubeIframeLoaded]")}
                        // TODO: Unsupported props
                        //  params="controls=0&enablejsapi=1"
                        //  autoLoad
                    />
                </div>
            </div>
        </div>
    )
}

export default App
