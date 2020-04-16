import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { connect } from 'react-redux';
import SupportPure from './SupportPure';

class Support extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
  }

  state = {
    questionShow: false,
    draftsShow: false,
    dialogShow: null,
  }

  handleToggleQuestion = () => this.setState({
    questionShow: !this.state.questionShow,
    draftsShow: false,
  });

  handleToggleDrafts = () => this.setState({
    draftsShow: !this.state.draftsShow,
    questionShow: false,
  });

  handleToggleDialog = index => () => this.setState({
    dialogShow: this.state.dialogShow === index ? null : index,
  });

  render() {
    return (
      <SupportPure
        name={this.props.name}
        onToggleQuestion={this.handleToggleQuestion}
        onToggleDrafts={this.handleToggleDrafts}
        onToggleDialog={this.handleToggleDialog}
        questionShow={this.state.questionShow}
        draftsShow={this.state.draftsShow}
        dialogShow={this.state.dialogShow} />
    );
  }
}

export default connect(
  ({ personal, languages }) => ({
    localization: languages.translate,
    name: personal.name,
  }),
)(Support);
