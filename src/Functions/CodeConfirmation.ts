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

export const checkCodeLength = (value : number[]) => {
    return value.map(v => !isNaN(v)).every(v => v);
}

export const checkCode = (value: number[], arrayNum: number[]) => {    
    return value.every((v, i) => v === arrayNum[i]) && checkCodeLength(value);
}

export const handleCode = (v: string, index: number, value: number[], setValue: Function, arrayNum: number[], setCodeCorrect: Function) => {
    const newValue = [...value];
    if (isNaN(parseInt(v))) {
        newValue[index] = NaN;
        setValue(newValue);
    } else {
        newValue[index] = parseInt(v);
        console.log(checkCode(newValue, arrayNum));
        setValue(newValue);
        checkCode(newValue, arrayNum) ? setCodeCorrect(2) : checkCodeLength(newValue) ? setCodeCorrect(1) : setCodeCorrect(0);
        // 1 = wrong code, 2 = correct code, 0 = code not complete
    }
}

export const clearInputs = (inputs: any) => {
    inputs.current.forEach((input: any) => {
        input.clear();
    });
    inputs.current[0].focus();
}