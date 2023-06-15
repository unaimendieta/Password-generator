import styled from "styled-components";

const MainContainer = styled.main`
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    height: 100vh;
`;

const GeneratorContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 540px;
`;
const PasswordInput = styled.input`
    
    width: 100%;
    height: 4rem;
    padding-left: 16px;
    border: none;
    background: #24232c;
    font-size: 1.5rem;
    color: #e6e5ea;
    font-family: inherit;
`;

const SettingsContainer = styled.form`
    
    display: flex;
    flex-direction: column;
     gap: 8px;
    width: 540px;
    padding: 16px;
    background: #24232c;
`;

const CharacterLengthContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const CharacterLengthText = styled.h3`
    
    font-size: 1.2rem;
    color: #e6e5ea;
    font-family: inherit;
`;
const CharacterLengthNum = styled.h2`
    
    font-size: 2rem;
    color: #e6e5ea;
    font-family: inherit;
`;
const RangeInput = styled.input`
    
    width: 100%;
`;
const CharacterSettingContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    padding: 8px 0;
`;
const CheckboxContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    gap: 8px;
`;
const CharacterSettingLabel = styled.label`
    font-size: 1.2rem;
    font-weight: 600;
    color: #e6e5ea;
    font-family: inherit;
`;
const StrengthContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const StrengthText = styled.h2`
    
    font-size: 2rem;
    color: #e6e5ea;
    font-family: inherit;
`;
const StrengthValue = styled.h2`
    
    font-size: 2rem;
    color: #e6e5ea;
    font-family: inherit;
`;
const GenerateButton = styled.button`
    width: 100%;
    text-align: center;
    padding: 16px 0;
    font-size: 1.2rem;
    font-weight: 600;
    color: #24232c;
    font-family: inherit;
`;


export {MainContainer,GeneratorContainer,PasswordInput,SettingsContainer, CharacterLengthContainer,CharacterLengthText,CharacterLengthNum,RangeInput,CharacterSettingContainer,CharacterSettingLabel,StrengthContainer,StrengthText,StrengthValue,GenerateButton,CheckboxContainer};