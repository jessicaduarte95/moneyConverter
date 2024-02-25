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
  CheckboxStyeld,
  ContainerResultStyeld,
  ButtonResultStyeld,
  ResultStyeld,
  ResultMoneyStyeld,
  ResultCompraStyeld,
  TextStyled } 
  from './components/Currency-style';
  import { VscArrowSwap, VscArrowLeft } from 'react-icons/vsc';
  import { useForm, SubmitHandler } from "react-hook-form";
  // import { styled } from '@mui/material/styles';
  // import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
  // import FormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
  // import Radio from '@mui/material/Radio';
  import { useEffect, useState } from 'react';
  import axios from 'axios';
  import UseRadioGroup  from './components/checkbox';
  import * as React from 'react';

  type Input = {
    dinheiro: string,
    cartao: string,
  };

  interface IFormInput {
    dolar: number,
    typePay: Input;
    setTypePay: React.Dispatch<React.SetStateAction<string>>;
  }

  // interface StyledFormControlLabelProps extends FormControlLabelProps {
  //   checked: boolean;
  // }

  // interface PaiProps {
  //   setTypePay: React.Dispatch<React.SetStateAction<string>>;
  // }
  

export const  App: React.FC = () =>  {

  const date = new Date()
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const monthOrganized = month[0].toUpperCase() + month.substring(1);
  const currentYear = date.getFullYear();
  const hours = date.getHours() ;
  const minutes = date.getMinutes();
  const [result, setResult] = useState<boolean>(false);
  const [dataCotacao, setDataCotacao] = useState<number>(0);
  const [typePay, setTypePay] = useState<string>('');
  const [resultCalculation, setResultCalculation] = useState<number>(0);
  const { register, handleSubmit, reset } = useForm<IFormInput>();

  // const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  //   <FormControlLabel {...props} />
  // ))(({ checked }) => ({
  //   '.MuiFormControlLabel-label': checked 
  // }));
  
  // function MyFormControlLabel(props: FormControlLabelProps) {
  //   const radioGroup = useRadioGroup();
  //   const typeMoney = radioGroup ? radioGroup.value : '';
  //   setTypePay(typeMoney)
  //   let checked = false;
  
  //   if (radioGroup) {
  //     checked = radioGroup.value === props.value;
  //   }
  
  //   return <StyledFormControlLabel checked={checked} {...props} />;
  // }

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log('typePay: ', typePay)
    axios.get('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then((response) => {
      setResultCalculation(data.dolar * response.data.USDBRL.ask)
      setDataCotacao(response.data.USDBRL.ask)
    })
    .catch(error => console.log('Erro: ', error))
    setResult(true);
    reset()
  }
  
  useEffect(() => {
  }, [dataCotacao])

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
            <TextStyled>Dados disponibilizados pela Morningstar.</TextStyled>
          </DataStyled>
        </NameDataStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          {
            result === false ? 
            <ContainerConverter>
              <MoneyConverter>
                <p>Dólar:</p>
                <input type="number" placeholder='$0.00' {...register("dolar")}/>
              </MoneyConverter>
              <TypeMoney>
                <p>Tipo de Compra</p>
                <CheckboxStyeld>
                  <UseRadioGroup setTypePay={setTypePay}/>
                  {/* <RadioGroup {...register("typePay")} name="use-radio-group" defaultValue="dinheiro" style={{display: 'flex', flexDirection: 'row'}}>
                    <MyFormControlLabel value="dinheiro" label="Dinheiro" control={<Radio style={{color: 'green'}} />} />
                    <MyFormControlLabel value="cartao" label="Cartão" control={<Radio style={{color: 'green'}}/>} />
                  </RadioGroup> */}
                </CheckboxStyeld>
              </TypeMoney>
              <ButtonConverter type="submit">
                <VscArrowSwap style={{color: "white", fontSize: "1rem"}}/>
                <p>Converter</p>
              </ButtonConverter>
           </ContainerConverter>
           : 
           <ContainerResultStyeld>
              <ButtonResultStyeld onClick={() => setResult(false)}>
                <VscArrowLeft style={{color: "#575757"}}/>
                <p>Voltar</p> 
              </ButtonResultStyeld>
              <ResultStyeld>O resultado do cálculo é</ResultStyeld>
              <ResultMoneyStyeld>R$ {resultCalculation ? resultCalculation  : 0}</ResultMoneyStyeld>
              <ResultCompraStyeld>Compra no dinheiro</ResultCompraStyeld>
              <ResultCompraStyeld>Cotação do dólar: $1,00 = R$ {dataCotacao ? dataCotacao : 0}</ResultCompraStyeld>
           </ContainerResultStyeld>
          }
          
        </form>
      </CurrencyStyled>
      <PhotoStyled>
        <img src="../money.webp" alt="Imagem de dinheiro" />
      </PhotoStyled>
    </ContainerStyled>
  )
}
