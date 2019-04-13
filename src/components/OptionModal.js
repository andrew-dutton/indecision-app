import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleCloseButton}
  >
    <h3>Selected Optionsss</h3>
    {console.log(props.selectedOption)}
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseButton}>Close</button>
  </Modal>
);

export default OptionModal;
