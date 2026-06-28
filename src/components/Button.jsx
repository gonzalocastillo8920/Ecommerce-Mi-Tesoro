
import cx from 'classnames'

function Button({
    type = "button",
    text,
    onClick,
    color = "primary",
    variant = "solid",
    className,
    ...props
}) {
    return (
        <button
            type={type}
            className={cx("btn", `btn__${color}-${variant}`, className)}
            onClick={onClick}
            {...props}
        >{text}
        </button>
    )
}

export default Button