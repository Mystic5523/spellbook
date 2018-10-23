<div>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{spell.name}</ModalHeader>
        <ModalBody>{spell.desc}</ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
        </ModalFooter>
    </Modal>
</div>