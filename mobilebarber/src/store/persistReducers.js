import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      timeout: 0,
      key: 'gobarber',
      storage: AsyncStorage,
      blacklist: ['auth', 'user'],
    },
    reducers
  );

  return persistedReducer;
};
