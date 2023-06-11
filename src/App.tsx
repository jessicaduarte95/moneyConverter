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
  import UseRadioGroup from './components/checkbox';
  import { useForm, SubmitHandler } from "react-hook-form";

  type Input = {
    money: number,
  };

export const  App = () =>  {

  const date = new Date()
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const monthOrganized = month[0].toUpperCase() + month.substring(1);
  const currentYear = date.getFullYear();
  const hours = date.getHours() ;
  const minutes = date.getMinutes();
  const { register, handleSubmit, reset } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
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
              <input type="number" placeholder='$0.00' {...register("money")}/>
            </MoneyConverter>
            <TypeMoney>
              <p>Tipo de Compra</p>
              <CheckboxStyeld>
                <UseRadioGroup/>
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
