import { ContainerStyled } from './components/Container-style';
import { GlobalStyled } from './components/Global-style';
import { PhotoStyled } from './components/Photo-style';
import { 
  CurrencyStyled, 
  NameDataStyled, 
  NameStyled, 
  DataStyled, 
  LineNameStyled, 
  ContainerConverter, 
  MoneyConverter,
  ButtonConverter,
  TypeMoney, 
  CheckboxStyeld } 
  from './components/Currency-style';
  import { VscArrowSwap } from 'react-icons/vsc';
  import { useForm, SubmitHandler } from "react-hook-form";
  import { styled } from '@mui/material/styles';
  import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
  import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
  import Radio from '@mui/material/Radio';

  const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
    <FormControlLabel {...props} />
  ))(({ checked }) => ({
    '.MuiFormControlLabel-label': checked 
  }));
  
  function MyFormControlLabel(props: FormControlLabelProps) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <StyledFormControlLabel checked={checked} {...props} />;
  }

  type Input = {
    dinheiro: string,
    cartao: string,
  };

  interface IFormInput {
    dolar: number,
    typePay: Input;
  }

  interface StyledFormControlLabelProps extends FormControlLabelProps {
    checked: boolean;
  }

export const  App = () =>  {

  const date = new Date()
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const monthOrganized = month[0].toUpperCase() + month.substring(1);
  const currentYear = date.getFullYear();
  const hours = date.getHours() ;
  const minutes = date.getMinutes();
  const { register, handleSubmit, reset, getValues } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('Teste', data)
    reset()
  }

  return (
    <ContainerStyled>
      <GlobalStyled/>
      <CurrencyStyled>
        <NameDataStyled>
          <NameStyled>
            <div>converter</div> 
            <LineNameStyled>
              <div></div>
              <p>currency</p> 
            </LineNameStyled>
          </NameStyled>
          <DataStyled>
            <p>
              {day} {monthOrganized} {currentYear} {"|"} {hours}{":"} {minutes}
            </p>
            <p>Dados disponibilizados pela Morningstar.</p>
          </DataStyled>
        </NameDataStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ContainerConverter>
            <MoneyConverter>
              <p>Dólar:</p>
              <input type="number" placeholder='$0.00' {...register("dolar")}/>
            </MoneyConverter>
            <TypeMoney>
              <p>Tipo de Compra</p>
              <CheckboxStyeld>
                <RadioGroup {...register("typePay")} name="use-radio-group" defaultValue="dinheiro" style={{display: 'flex', flexDirection: 'row'}}>
                  <MyFormControlLabel value="dinheiro" label="Dinheiro" control={<Radio style={{color: 'green'}} />} />
                  <MyFormControlLabel value="cartao" label="Cartão" control={<Radio style={{color: 'green'}}/>} />
                </RadioGroup>
              </CheckboxStyeld>
            </TypeMoney>
            <ButtonConverter type="submit">
              <VscArrowSwap style={{color: "white"}}/>
              <p>Converter</p>
            </ButtonConverter>
          </ContainerConverter>
        </form>
      </CurrencyStyled>
      <PhotoStyled>
        <img src="../public/money.webp" alt="Imagem de dinheiro" />
      </PhotoStyled>
    </ContainerStyled>
  )
}
