import logo from './logo.svg';
import store from './lib/redux';
import './App.css';
import {Button} from './stories/Button'
import InboxScreen from './components/InboxScreen';
import {Provider} from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}

export default App;
