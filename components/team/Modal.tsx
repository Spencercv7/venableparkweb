// UTILS
import styled from "styled-components";
import { useEffect } from "react";
import media from "../../utils/MediaQueries";

// TYPES
import { Employee } from "../../types/Employee";

// COMPONENTS
import HeadshotWrapper from "./HeadshotWrapper";
import NameTag from "./NameTag";
import ExitButton from "../comps/ExitButton";
import Image from "next/image";

const MODAL = styled.div`
    position: absolute;
    z-index: 100;
    height: 100%;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.blackTrans75};
    display: grid;
`;

const CONTENT = styled.div`
    height: 90%;
    width: 100%;
    clip-path: polygon(0% 5%, 100% 0%, 100% 95%, 0% 100%);
    background-color: ${(props) => props.theme.colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5rem;

    display: grid;
    grid-template-columns: 1fr 2fr;

    ${media.width_650`
        grid-template-columns: 100%;
        grid-template-rows: 1fr 2fr 
    `}
`;

const TEXTWRAPPER = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    ${media.width_650`
        justify-content: unset;
    `}
`;

const DESCRIPTION = styled.p`
    font-size: ${(props) => props.theme.fontSize.p};
    width: 90%;

    ${media.width_650`
        width: 100%;
    `}
`;

const EMAIL = styled.a`
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;

    & p {
        font-size: ${(props) => props.theme.fontSize.p};
        color: ${(props) => props.theme.colors.primary};
    }
`

export interface Props {
    handleTileClick: (employee: Employee | null) => void;
    currentModal: Employee;
}

const Modal: React.FC<Props> = ({ handleTileClick, currentModal }) => {
    useEffect(() => {
        window.addEventListener("keydown", () => handleTileClick(null));
        return () =>
            window.removeEventListener("keydown", () => handleTileClick(null));
    }, [handleTileClick]);

    const handleESCPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key == "Esc") {
            handleTileClick(null);
        }
    };

    return (
        <MODAL onKeyPress={(event) => handleESCPress(event)}>
            <CONTENT>
                <ExitButton handleTileClick={handleTileClick} />
                <HeadshotWrapper
                    employeeData={currentModal}
                    dimension={"clamp(15rem, 20vw, 30rem)"}
                />
                <TEXTWRAPPER>
                    <NameTag employeeData={currentModal} modal={true} />
                    <DESCRIPTION>
                        {currentModal.desc}
                    </DESCRIPTION>
       
                    <EMAIL href={"mailto:" + currentModal.email}>
                        <Image 
                            src="/images/svgs/mail.svg"
                            alt="Mail"
                            height="30"
                            width="30"
                        />
                        <p>{currentModal.email}</p>
                    </EMAIL> 
                </TEXTWRAPPER>
            </CONTENT>
        </MODAL>
    );
};

export default Modal;
