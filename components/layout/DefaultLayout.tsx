import styled from "styled-components";
import Image from "next/image";
import media from "../../utils/MediaQueries";
import { ReactNode } from "react";

const DEFAULTLAYOUT = styled.div`
    display: grid;
    align-content: center;
    min-height: 100vh;
    background-image: url("https://res.cloudinary.com/spencercv7-dev/image/upload/v1632858041/VenablePark/2k-rotated-sean_zlsg8z.webp");
    background-repeat: repeat-y;
`

const CONTENTWRAPPER = styled.div`
    display: grid;
    position: relative;
    min-height: 90vh;
    padding: max(5%, 10rem) max(5%, 1rem);
    margin-block: 3rem;

    clip-path: polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%);
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: ${(props) => props.theme.boxShadow.boxShadowDefault};

    ${media.width_700`
        clip-path: polygon(0% 2.5%, 100% 0%, 100% 97.5%, 0% 100%);
    `}
`;

export interface Props {
    children: ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <DEFAULTLAYOUT>
            <CONTENTWRAPPER>
                { children }
            </CONTENTWRAPPER>
        </DEFAULTLAYOUT>
    );
};

export default DefaultLayout;
