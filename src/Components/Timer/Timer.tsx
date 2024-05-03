import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './Timer.style';

interface TimerProps {
    timervalue: number;
}


export const Timer = ({
    timervalue
}: TimerProps) => {
    
    const [timer, setTimer] = useState<number>(timervalue);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <TouchableOpacity style={styles.resend} disabled={timer > 0} onPress={() => setTimer(30)}>
            <Text style={[timer > 0 ? styles.resendWait : styles.resendText]}>
                {timer > 0 ? `Resend code in 00:${timer < 10 ? `0${timer}` : timer}` : "Resend code"}
            </Text>
        </TouchableOpacity>
    )
}