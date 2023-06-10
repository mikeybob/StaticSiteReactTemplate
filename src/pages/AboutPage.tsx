import styled from "styled-components"

const AboutPageDiv = styled.div`
    color: rgb(255, 255, 255);
`;

export function AboutPage() {
    return <AboutPageDiv>
        <h1>About Page</h1>
        <p>
            This example/template is based on what I have found works for me when writing static websites.
        </p>
    </AboutPageDiv>;
}