
import { createElement } from "react"

function Box({ as = "div", className, children, ...props }) {
    return createElement(as, { className, ...props }, children)
}

export default Box