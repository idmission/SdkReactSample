/* eslint-env jest */
import 'react-native-gesture-handler/jestSetup';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';
import {NativeModules} from 'react-native';

jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// The IDMission SDK is a native module; stub its methods and event emitter
// hooks so JS screens can render under Jest.
NativeModules.IDMissionSDK = {
  initializeSDK: jest.fn(),
  customizeUserInterface: jest.fn(),
  detectFace: jest.fn(),
  videoConferencing: jest.fn(),
  genericDocument: jest.fn(),
  captureIDFront: jest.fn(),
  captureIDBack: jest.fn(),
  captureFingerprints: jest.fn(),
  processImageAndMatchFace: jest.fn(),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};
