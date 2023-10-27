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


    &:hover,
  &:focus {
    background: #d9dce3;
  }
`
export const Links = styled.li`
border-radius: 12px;
    border: 3px solid white;
    padding: 6px 12px;
    list-style: none;
    `