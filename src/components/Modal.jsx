import React, { PropTypes } from 'react';

const propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  children: PropTypes.any,
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open ? props.open : false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      children: nextProps.children,
    });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    const classNames = `modal ${this.state.open ? 'open' : ''}`;
    return (
      <div className={classNames} onClick={this.props.closeModal}>
        <div className="modal-content" onClick={(e) => { e.stopPropagation(); }}>
          <div className="modal-close" onClick={this.props.closeModal}>
            <span>x</span>
          </div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = propTypes;

export default Modal;
