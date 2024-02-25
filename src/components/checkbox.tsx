import { styled } from '@mui/material/styles';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean; 
}

interface FilhoProps {
  setTypePay: React.Dispatch<React.SetStateAction<string>>;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ checked }) => ({
  '.MuiFormControlLabel-label': checked && {
  },
}));

const MyFormControlLabel = (props: FormControlLabelProps) => {
  const radioGroup = useRadioGroup();

  let checked = false;
  
  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

const UseRadioGroup: React.FC<FilhoProps> =  ({setTypePay}) => {
 
  return (
    <RadioGroup name="use-radio-group" defaultValue="dinheiro" style={{display: 'flex', flexDirection: 'row'}}>
      <MyFormControlLabel value="dinheiro" label="Dinheiro" control={<Radio style={{color: 'green'}}/>}/>
      <MyFormControlLabel value="cartao" label="Cartão" control={<Radio style={{color: 'green'}}/>} />
    </RadioGroup>
  );
}

export default UseRadioGroup;
