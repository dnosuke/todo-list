import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #202;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;
   
    input {
        width: 25px;
        height: 25px;
        margin-right: 10px;
    }

    label {
        color: #CCC;
        text-decoration: ${done? 'line-through' : 'initial'};  
    }

    div {
        align-self: center;
        margin-left: auto;
        cursor: pointer;
    }
`
));