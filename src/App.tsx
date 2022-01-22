import "@github/clipboard-copy-element"
import ClipboardCopy from "./components/ClipboardCopy";
import { useCopied } from "./hooks/useCopied";

function App() {
    const [copied, setCopied] = useCopied()

    return (
        <ClipboardCopy
            value={"Click here to copy the text to clipboard"}
            onClipboardCopy={() => setCopied(true)}
        >
            <span>Click here to copy the text to clipboard</span>
            <br/>
            <span hidden={!copied}>Copied! Now paste the value somewhere</span>
        </ClipboardCopy>
    )
}

export default App
