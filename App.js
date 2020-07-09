import "react-native-gesture-handler";
import React from "react";
import Main from "./components/maincomponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import { Loading } from "./components/LoadingComponent";
import * as Notifications from "expo-notifications";

const { persistor, store } = ConfigureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading></Loading>} persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}
