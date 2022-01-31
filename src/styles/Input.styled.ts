import styled from "styled-components"

export const StyledInput = styled.input`
    color: white;
    position: relative;
    margin: 10px 0;
    width: 200px;

    appearance: none;
    --moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;

    &[type="range"]::before, &[type="range"]::after {
        position: absolute;
        display: inline-block;
        top: -6px;
    }

    &[type="range"]::before {
        content: attr(min);
        left: 0;
        transform: translateX(calc(-100% - 10px));
    }
    &[type="range"]::after {
        content: attr(max);
        right: 0;
        transform: translateX(calc(100% + 10px));
    }

    /* &[type="range"]::-moz-range-track {}
    &[type="range"]::-ms-track {} */
    &[type="range"]::-webkit-slider-runnable-track {
        appearance: none;
        --moz-appearance: none;
        -ms-appearance: none;
        -webkit-appearance: none;
        background-color: rgb(50, 50, 50);
        height: 5px;
    }

    /* &[type="range"]::-moz-range-thumb {}
    &[type="range"]::-ms-thumb {} */
    &[type="range"]::-webkit-slider-thumb {
        appearance: none;
        --moz-appearance: none;
        -ms-appearance: none;
        -webkit-appearance: none;
        background-color:#36D2EF;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-top: -7px;
    }
`