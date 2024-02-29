import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'

export default function XonalarModal({open, toggle}) {

  return (
    <div>
        <Modal>
            <ModalBody>
                <form action="">
                    <input type="text" placeholder='hone' />

                </form>
            </ModalBody>
            <ModalFooter></ModalFooter>
        </Modal>
    </div>
  )
}
