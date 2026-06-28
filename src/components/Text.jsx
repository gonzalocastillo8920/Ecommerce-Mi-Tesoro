
import { createElement } from "react"

function Text({ as = "p", className, children, props = {} }) {
    return createElement(as, { className, ...props }, children)
}

export default Text