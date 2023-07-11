import React, { MouseEventHandler } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

interface ButtonProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
    btnText: string;
    loading: boolean;
}

function ButtonComponent({ onClick, btnText, loading }: ButtonProps) {
    return (
        <button className="info__button" onClick={onClick} disabled={loading}>
            {loading ? <FadeLoader color="antiquewhite" /> : btnText}
        </button>
    );
}

export default ButtonComponent;
