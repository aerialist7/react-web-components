import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useCopied(): [boolean, Dispatch<SetStateAction<boolean>>] {
    const [copied, setCopied] = useState(false)
    useEffect(
        () => {
            if (copied) {
                setTimeout(
                    () => setCopied(false),
                    3000,
                )
            }
        },
        [copied],
    )
    return [copied, setCopied]
}
