import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const defaultTextStyles = (theme) => `
font-family : ${theme.fonts.body};
font-weight:${theme.fontWeights.regular};
color:${theme.colors.text.primary};
flex-wrap:wrap;
margin-top:0px;
margin-bottom:0px;

`;
const body = (theme)=>`
font-size :${theme.fontSizes.body};
`;

const error = (theme)=>`
color:${theme.colors.text.error};
`

const  caption  = (theme)=>`
font-size :${theme.fontSizes.caption};
font-weight:${theme.fontWeights.bold};

`
const label  = (theme)=>`
font-weight:${theme.fontWeights.medium};
font-family : ${theme.fonts.heading};
font-size :${theme.fontSizes.body};

`

const variants = {
    body,
    error,
    caption,
    label,
}
// ${(props) => defaultTextStyles(props.theme)};
const TextComponent = styled(Text)`
${(props) =>variants[props.variant](props.theme)}

`
function CustomText(props){
    const {variant  = "caption",children} = props;
    return <TextComponent variant = {variant}>{children}</TextComponent>
}
export default CustomText;
