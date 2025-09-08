import React from 'react';
import {Button, ThemeButton} from "shared/ui/Button/Button";

const ErrorButton = () => {

    const ThrowError = () => {
        
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={(ThrowError) => {}}>

        </Button>
    );
};

export default ErrorButton;