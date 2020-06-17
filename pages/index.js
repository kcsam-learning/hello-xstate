import React from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const changeTheme = Machine({
  id: 'theme',
  initial: 'light',
  states: {
    light: {
      'on': {
        CHANGE: 'dark'
      }
    },
    dark: {
      'on': {
        CHANGE: 'light'
      }
    }
  }
})

const App = () => {
  const [current, send] = useMachine(changeTheme);
  console.log(current);

  return (
    <div>
      <h1>{current.matches('dark') ? 'It is DARK!': 'It is LIGHT!'}</h1>
      <button onClick={() => send('CHANGE')}>Change Theme</button>
    </div>
  )
};

export default App;
