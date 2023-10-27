import styled from 'styled-components';
import { Link, NavLink,  } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 0;
  width: auto;
 
`;
export const LinkLogo = styled(Link)`
    display: flex;
    gap: 8px;
    align-items: center;
    color: rgb(18, 20, 23);
    font-size: 26px;
    font-weight: 600;
    line-height: 1.11;
    padding: 10px 0px;
    list-style: none;
    text-decoration: none;
`
export const Div = styled(NavLink)`
    display: flex;
    gap: 8px;
    align-items: center;
    color: rgb(18, 20, 23);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.43;
    margin-right: 50px;
    text-decoration: none;

    border-radius: 12px;
     border: 1px solid rgba(18, 20, 23, 1); 
    padding: 6px 12px;
    display: flex;

    &:hover,
  &:focus {
    background: rgba(247, 247, 251, 1);
  }

  
`
export const Links = styled.li`
display: flex;
    padding: 6px 12px;
    list-style: none;
    `
