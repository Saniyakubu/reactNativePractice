import { Tabs } from 'expo-router';

import React from 'react';

export default () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          header: () => false,
        }}
      />
    </Tabs>
  );
};
