import styled, { css } from "styled-components";
import { BUTTON } from "../../../styles/button.js";
import Link from "next/link";

const LI = styled.li<{ buttonType: string }>`
    ${({ buttonType }) =>
        
        (buttonType == "mobile" &&
        css`
            transition: transform .2s;
            & :hover {
                transform: translateX(1rem);
            }
        `)
    }
`

const NAVBUTTON = styled.a <{ buttonType: string }>`
    text-transform: UPPERCASE;
    text-decoration: none;
    ${({ buttonType }) =>
        
        (buttonType == "mobile" &&
            css`
                margin-left: 1rem; // Temp
                font-size: ${(props) => props.theme.fontSize.h3};
                background-color: ${(props) => props.theme.colors.white};
                padding: 1.5rem;
                color: ${(props) => props.theme.colors.primary};
                transition: all 0.2s;
                width: 100%;

                &:hover {
                    transform: translateX(1rem);
                }
            `) ||
        (buttonType == "desktop" &&
            css`
                background-color: ${(props) => props.theme.colors.white};
                font-size: ${(props) => props.theme.fontSize.p};
                white-space: nowrap;
                transition: all .2s;

                &:hover {
                    transform: scale(1.1);
                    border-bottom: solid 2px
                        ${(props) => props.theme.colors.primary};
                }
            `)}
`;

type Props = {
    navItem: string;
    buttonType: string;
    handleCloseNavPanel: (newState: boolean) => void
};

function getRoute(route: string): string {
    route = route.replace(" ", "-");
    if (route == "home") {
        return "/";
    } else {
        return "/" + route;
    }
}

const NavButton: React.FC<Props> = ({ navItem, buttonType, handleCloseNavPanel }) => {
    return (
        <LI buttonType={buttonType}>
            <Link href={getRoute(navItem)} passHref>
                <NAVBUTTON buttonType={buttonType} onClick={() => handleCloseNavPanel(false)}>      
                    {navItem}
                </NAVBUTTON>
            </Link>
        </LI>
    );
};

export default NavButton;
