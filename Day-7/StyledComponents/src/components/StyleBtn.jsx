import styled from "styled-components";
// export const Button = ({children}) => {
//     return <button className="btn">{ children }</button>
// }


const StyButton = styled.button`
   width: 129px;
    height: 33px;
    background:${props => props.background};
    color: white;
    font-weight: bold;
    border: none;
    box-sizing: content-box;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    &:hover{
    background:${props => props.hoverbackground};
    color: blue;
    }
`;

export { StyButton };