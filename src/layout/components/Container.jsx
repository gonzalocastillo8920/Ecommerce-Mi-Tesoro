
import Box from '../../components/Box'
import cx from 'classnames'

function Container({children, className, ...props }) {
  return (
    <Box {...props} className={cx("container", className)}>
      {children}
    </Box>
  )
}

export default Container