
import Box from '../../components/Box'
import cx from 'classnames'

function Col({
    as = "div",
    children,
    size = {},
    offset = {},
    className,
    ...props
}) {

    const sizeIsNumber = typeof size === "number"
    const offsetIsNumber = typeof offset === "number"

    return (
        <Box
            as={as}
            className={cx(
                {
                    [`col-${size}`]: sizeIsNumber,
                    [`col-xs-${size.xs}`]: !sizeIsNumber && size.xs,
                    [`col-sm-${size.sm}`]: !sizeIsNumber && size.sm,
                    [`col-md-${size.md}`]: !sizeIsNumber && size.md,
                    [`col-lg-${size.lg}`]: !sizeIsNumber && size.lg,
                    [`col-xl-${size.xl}`]: !sizeIsNumber && size.xl,
                    [`col-xxl-${size.xxl}`]: !sizeIsNumber && size.xxl,
                },
                {
                    [`col-offset-${offset}`]: offsetIsNumber,
                    [`col-offset-xs-${offset.xs}`]: !offsetIsNumber && offset.xs,
                    [`col-offset-sm-${offset.sm}`]: !offsetIsNumber && offset.sm,
                    [`col-offset-md-${offset.md}`]: !offsetIsNumber && offset.md,
                    [`col-offset-lg-${offset.lg}`]: !offsetIsNumber && offset.lg,
                    [`col-offset-xl-${offset.xl}`]: !offsetIsNumber && offset.xl,
                    [`col-offset-xxl-${offset.xxl}`]: !offsetIsNumber && offset.xxl,

                },
                className
            )}
            {...props}
        >{children}
        </Box>
    )
}

export default Col