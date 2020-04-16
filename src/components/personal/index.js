import React, { PureComponent } from 'react';
import pt from 'prop-types';

import { equals } from 'ramda';
import { connect } from 'react-redux';
import PersonalPure from './PersonalPure';
import setPersonalToBase from '../../actions/setPersonalToBase';
import mapStateToProps from './mappers';

const checkEmptyRows = (rows = []) => rows.filter(item => item.name && item.phone);

class Personal extends PureComponent {
  static propTypes = {
    name: pt.string.isRequired,
    id: pt.string.isRequired,
    list: pt.array.isRequired,
    setPersonalToBase: pt.func.isRequired,
  }

  state = {
    hint: false,
    data: false,
    list: this.props.list || [],
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.list !== nextProps.list) {
      this.setState({
        list: nextProps.list,
      });
    }
  }

  handleToggleHint = () => this.setState({
    hint: !this.state.hint,
  });

  handleToggleData = () => this.setState({
    data: !this.state.data,
  });

  handleAddRow = () => {
    this.setState({
      list: [
        ...this.state.list,
        {
          name: '',
          phone: '',
          email: '',
        },
      ],
    });
  };

  handleChange = (index, key, value) => {
    const newPersonalList = [...this.state.list];
    newPersonalList[index] = {
      ...newPersonalList[index],
      [key]: value,
    };

    this.setState({
      list: [
        ...newPersonalList,
      ],
    });
  };

  handleResetList = () => this.setState({
    list: this.props.list,
  });


  handleChangeIcon = index => () => {
    const newPersonalList = [...this.state.list];

    newPersonalList[index] = {
      ...newPersonalList[index],
      sex: newPersonalList[index].sex !== 'man' ? 'man' : 'woman',
    };

    this.setState({
      list: [
        ...newPersonalList,
      ],
    });
  };

  handleSaveData = data => {
    const normalizedData = checkEmptyRows(data);
    // если данные введенные пользователем равны данным базы - пропускаем сохранение
    if (!equals(normalizedData, this.props.list)) {
      this.props.setPersonalToBase(
        this.props.token,
        {
          contact_list: normalizedData,
          client_id: this.props.id,
          content: this.props.localization.notify_save_data,
        },
      );
    }
    this.setState({
      list: normalizedData,
    });
  }

  render() {
    return (
      <PersonalPure
        name={this.props.name}
        list={this.state.list}
        addRow={this.handleAddRow}
        changeField={this.handleChange}
        changeIcon={this.handleChangeIcon}
        isShowHint={this.state.hint}
        toggleHint={this.handleToggleHint}
        toggleData={this.handleToggleData}
        onResetList={this.handleResetList}
        onSave={this.handleSaveData} />
    );
  }
}

export default connect(mapStateToProps, { setPersonalToBase })(Personal);
