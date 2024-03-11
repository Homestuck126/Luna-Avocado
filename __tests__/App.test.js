import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegistrationScreen from '../src/screens/RegistrationScreen.js';

describe('RegistrationScreen', () => {
    test('should update username state when typing in the username input field', () => {
        const { getByTestId } = render(<RegistrationScreen />);
        const usernameInput = getByTestId('username-input');

        fireEvent.changeText(usernameInput, 'testuser');

        expect(usernameInput.props.value).toBe('testuser');
    });

    test('should update password state when typing in the password input field', () => {
        const { getByTestId } = render(<RegistrationScreen />);
        const passwordInput = getByTestId('password-input');

        fireEvent.changeText(passwordInput, 'testpassword');

        expect(passwordInput.props.value).toBe('testpassword');
    });
});
