import { TextInputKeyPressEventData } from 'react-native';

export const focusNext  = (key: number, value: string | any[], inputs: any) => {
    if (value.length > 0 && inputs.current[key + 1]) {
        inputs.current[key + 1].focus();
    }
}

export const focusPrev = (key: number, nativeKey: TextInputKeyPressEventData, inputs: any) => {
    if (nativeKey.key === 'Backspace' && inputs.current[key - 1]) {
        inputs.current[key - 1].focus();
    }
}

export const focusFirst = (inputs: any) => {
    if (inputs.current[0]) {
        inputs.current[0].focus();
    }
}