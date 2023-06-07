import { ContainerStyled } from './components/Container-style';
import { GlobalStyled } from './components/Global-style';
import { PhotoStyled } from './components/Photo-style';
import { CurrencyStyled, NameDataStyled, NameStyled, DataStyled, LineNameStyled } from './components/Currency-style';


export const  App = () =>  {

  const date = new Date()

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const monthOrganized = month[0].toUpperCase() + month.substring(1);
  const currentYear = date.getFullYear();
  const hours = date.getHours() ;
  const minutes = date.getMinutes();

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
        {/* <div>Teste2</div>
        <div>Teste3</div> */}
      </CurrencyStyled>
      <PhotoStyled>
        <img src="../public/money.webp" alt="Imagem de dinheiro" />
      </PhotoStyled>
    </ContainerStyled>
  )
}
