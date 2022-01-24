import React from 'react'
import appNavSlice from '../appNavSlice';

export default function navBarModal() {

    const dispatch = useDispatch();

    const navbarAppItem = useSelector(state => store.appNav.value);

    const closeNavbarModal = () => {
        const navbarApp = _.cloneDeep(navbarAppItem);
        navbarApp.navbarShowModal = false;
        dispatch(updateAppNav(navbarApp));
    }

    return (
    <>
        <Modal
            show={navbarAppItem.navbarShowModal}
            onHide={closeNavbarModal}
            backdrop="static"
            keyboard={false}
            style={{ position: 'relative', zIndex: '2' }}
        >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                I will not close if you click outside me. Don't even try to press
                escape key.
                </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
      </Modal>
    </>
    )
}
