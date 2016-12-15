import { AppRegistry, UIManager } from 'react-native';
import App from './src/App';

UIManager.setLayoutAnimationEnabledExperimental(true); // need this line for animations!
AppRegistry.registerComponent('tech_stack', () => App);
