import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyDatePicker extends Component {
  constructor(props){
    super(props);
    this.state = {date:''};
  }

  componentDidMount() {
    this.setState({ date: new Date(this.props.currentSticky.datePicked).toLocaleString() || new Date(Date.now()).toLocaleString('fr-FR') });
  }

  render(){
    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="datetime"
        placeholder="select date"
        format="DD-MM-YYYY"
        minDate="01-12-2017"
        maxDate="01-12-2018"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(dateOnly, datePicked) => this.props.handleDateChange(datePicked)}
      />
    )
  }
}
