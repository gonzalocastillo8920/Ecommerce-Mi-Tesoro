
import { createPortal } from 'react-dom'
import Box from './Box'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

function Modal({
    children,
    isOpen,
    handleClose
}) {
    return (
        isOpen ? (
            createPortal(
                <Box className="modal__overlay" onClick={handleClose} role="dialog">
                    <Box className="modal__container" onClick={(e) => e.stopPropagation()}>
                        <Box className="modal__header">
                            <Button
                                onClick={handleClose}
                                text={<FontAwesomeIcon icon={faClose} />}
                                color="secondary"
                            />
                        </Box>
                        {children}
                    </Box>
                </Box>,
                document.body
            )
        ) : null
    )
}

export default Modal