import { useState } from "react";
import { CharacterLengthContainer, CharacterLengthNum, CharacterLengthText,  CharacterSettingContainer, CharacterSettingLabel, CheckboxContainer, GenerateButton, GeneratorContainer, MainContainer, PasswordInput, RangeInput, SettingsContainer, StrengthContainer, StrengthText, StrengthValue } from "./styles";

const Main = () => {
    const [passwordSetting, setPasswordSetting] = useState({
		charLength: 0,
		uppercase: false,
		lowercase: false,
		numbers: false,
		symbols: false,
        strength: 'TOO SHORT',
        notGenerable: true,
        password: ''
	});
	return (
	<>
        <MainContainer>
            <GeneratorContainer>
                <PasswordInput type="text" placeholder="P4$5W0rD!" readOnly={true} value={passwordSetting.password}/>

                <SettingsContainer>
                        <CharacterLengthContainer>
                            <CharacterLengthText>Character Length</CharacterLengthText>
                            <CharacterLengthNum>{passwordSetting.charLength}</CharacterLengthNum>
                        </CharacterLengthContainer>
                        <RangeInput onChange={e => handleChange(e.target, passwordSetting, setPasswordSetting)} name="charLength" type="range" min={0} max={20} step={1} value={passwordSetting.charLength}/>    
                        <CharacterSettingContainer>
                            <CheckboxContainer>
                                <input  onChange={e => handleChange(e.target, passwordSetting, setPasswordSetting)} id="uppercase_checkbox" name="uppercase" type="checkbox"/>
                                <CharacterSettingLabel htmlFor="uppercase_checkbox">Include Uppercase Letters</CharacterSettingLabel>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <input  onChange={e => handleChange(e.target, passwordSetting, setPasswordSetting)} id="lowercase_checkbox" name="lowercase" type="checkbox"/>
                                <CharacterSettingLabel  htmlFor="lowercase_checkbox">Include Lowercase Letters</CharacterSettingLabel>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <input  onChange={e => handleChange(e.target, passwordSetting, setPasswordSetting)} id="numbers_checkbox" name="numbers" type="checkbox"/>
                                <CharacterSettingLabel  htmlFor="numbers_checkbox">Include Numbers</CharacterSettingLabel>
                            </CheckboxContainer>
                            <CheckboxContainer>
                                <input onChange={e => handleChange(e.target, passwordSetting, setPasswordSetting)} id="symbols_checkbox" name="symbols" type="checkbox"/>
                                <CharacterSettingLabel  htmlFor="symbols_checkbox">Include Symbols</CharacterSettingLabel>
                            </CheckboxContainer>
                        </CharacterSettingContainer>  
                        <StrengthContainer>
                            <StrengthText>STRENGTH</StrengthText>
                            <StrengthValue>{passwordSetting.strength}</StrengthValue>
                        </StrengthContainer>
                        <GenerateButton type="submit" onClick={e=>generatePassword(e,passwordSetting, setPasswordSetting)} disabled={passwordSetting.notGenerable}>Generate</GenerateButton>
                </SettingsContainer>
            </GeneratorContainer>
        </MainContainer>
	</>
	);
};
const handleChange = (input, passwordSetting, setPasswordSetting) => {
    let chars = passwordSetting.charLength;
    let upper = passwordSetting.uppercase;
    let lower = passwordSetting.lowercase;
    let nums = passwordSetting.numbers;
    let syms = passwordSetting.symbols;
    let power;
    let generationDisbled;
  
    // ---------Change values-------
    if (input.type==="checkbox") {
        switch (input.name) {
            case "uppercase":
                upper=input.checked;
                break;
            case "lowercase":
                lower=input.checked;
                break;
            case "numbers":
                nums=input.checked;
                break;
            case "symbols":
                syms=input.checked;
                break;
        
            default:
                break;
        }
         
     }else{
         chars=input.value;
        
     } 
     
    const checkboxArray = [upper,lower,nums,syms];
    const trueCont = countTrues(checkboxArray);
    // ---------Check if password is generable-------    
  
    if (chars<5) {
        power='TOO SHORT';
        generationDisbled=true;
    }else if(chars>5){
    
    switch (trueCont) {
        case 0:
            power='NO OPTIONS CHECKED';
            generationDisbled=true;
            break;
        case 1:
            power='TOO WEAK!';
            generationDisbled=false;
            break;
        case 2:
            power='WEAK';
            generationDisbled=false;
            break;
        case 3:
            power='MEDIUM';
            generationDisbled=false;
            break;
        case 4:
            power='STRONG';
            generationDisbled=false;
            break;
    
        default:
            break;
    }
    }else{
    switch (trueCont) {
        case 0:
            power='NO OPTIONS CHECKED';
            generationDisbled=true;
            break;
        case 1:
            power='TOO WEAK!';
            generationDisbled=true;
            break;
        case 2:
            power='WEAK';
            generationDisbled=true;
            break;
        case 3:
            power='MEDIUM';
            generationDisbled=true;
            break;
        case 4:
            power='STRONG';
            generationDisbled=true;
            break;
    
        default:
            break;
    }
    }
    
    // ---------Save new state values------- 
    setPasswordSetting({ ...passwordSetting, 
    
        charLength: chars,
		uppercase: upper,
		lowercase: lower,
		numbers: nums,
		symbols: syms,
        strength: power,
        notGenerable: generationDisbled
    
    });
       
    
};

const generatePassword = (e,passwordSetting, setPasswordSetting) => {
    e.preventDefault();
    const chars = passwordSetting.charLength;
    const upper = passwordSetting.uppercase;
    const lower = passwordSetting.lowercase;
    const nums = passwordSetting.numbers;
    const syms = passwordSetting.symbols;
    const lettersUppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lettersLowercase= 'abcdefghijklmnopqrstuvwxyz';
    const numbers= '1234567890';
    const symbols= '!@·#$~%€&¬/()?¿¡_-+{}:.';

    // ---------Specify allowed chars-------   
    const allowedChars= getAllowedChars(upper, lettersUppercase,lower,lettersLowercase,nums,numbers,syms,symbols);

    // ---------Generate Password-------   
    const newPassword=generate(chars, allowedChars);

    // ---------Save Password------- 
   setPasswordSetting({ ...passwordSetting, 
    
        password: newPassword
    
    });
   
       
    
};

const countTrues = (checkboxArray) => {
    let trueCont=0;
    checkboxArray.forEach(element => {
        if (element) {
            trueCont++;
        }
    });

    return trueCont;
}
const generate = (chars, allowedChars) => {
    let newPassword='';

    let arrayPos;
    let charPos;
    for (let index = 0; index < chars; index++) {
        arrayPos= Math.floor(Math.random() * allowedChars.length);
        charPos= Math.floor(Math.random() * allowedChars[arrayPos].length);
        
        newPassword+=allowedChars[arrayPos][charPos];
    }

    return newPassword;
}
const getAllowedChars = (upper, lettersUppercase,lower,lettersLowercase,nums,numbers,syms,symbols) => {

    const allowedChars= [];
    if (upper) {
        allowedChars.push(lettersUppercase)
    }
    if (lower) {
        allowedChars.push(lettersLowercase)
    }
    if (nums) {
        allowedChars.push(numbers)
    }
    if (syms) {
        allowedChars.push(symbols)
    }

    return allowedChars;
}

export default Main;