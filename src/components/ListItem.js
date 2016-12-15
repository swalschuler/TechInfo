import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View, 
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
// props: this.props.library will be passed.
  constructor(props) {
    super(props);
    //if (Platform.OS === 'android') {
      //UIManager.setLayoutAnimationEnabledExperimental &&
      //UIManager.setLayoutAnimationEnabledExperimental(true);
    //}
  }

  componentWillUpdate() {
    LayoutAnimation.linear();
  }
  
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() { 
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
        <TouchableWithoutFeedback 
          onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>{title}</Text>
            </CardSection>
            {this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => { // you get access to its props in ownProps
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded }; // this.props.expanded : expanded
};

export default connect(mapStateToProps, actions)(ListItem); 
// null because I don't want access to the store (dont want to map to props)
// passes the actions as props to this component
