import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
// props: this.props.library will be passed.
  render() { 
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
        <TouchableWithoutFeedback 
          onPress={() => {console.log('pressed'); this.props.selectLibrary(id)}}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default connect(null, actions)(ListItem); 
// null because I don't want access to the store (dont want to map to props)
// passes the actions as props to this component
