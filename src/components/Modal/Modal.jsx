import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends React.Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onKeyDown);
  }
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.setState({ isModal: false });
    }
  };

  handleBackdrop = event => {
    if (event.currentTarget === event.target) {
      this.setState({ isModal: false });
    }
  };
  render() {
    const { onBackdrop, children } = this.props;

    return (
      <div className={styles.overlay} onClick={onBackdrop}>
        <div className={styles.modal}>
          <img src={children} alt={children} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onBackdrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
