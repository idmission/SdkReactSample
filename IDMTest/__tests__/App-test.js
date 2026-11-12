/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {NativeModules} from 'react-native';
import App from '../App';

jest.useFakeTimers();

test('renders correctly and initializes the SDK', async () => {
  let renderer;
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });
  expect(NativeModules.IDMissionSDK.initializeSDK).toHaveBeenCalledTimes(1);
  expect(renderer.root.findAllByType('Text').length).toBeGreaterThan(0);
  await ReactTestRenderer.act(() => renderer.unmount());
});
