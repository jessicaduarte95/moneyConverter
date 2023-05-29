import { ContainerStyled } from './components/Container-style';
import { GlobalStyled } from './components/Global-style';
import { PhotoStyled } from './components/Photo-style';
import { CurrencyStyled, NameDataStyled, NameStyled, DataStyled } from './components/Currency-style';
import moment from 'moment';

export const  App = () =>  {

  moment.locale(); 
  const data = moment().format('LL'); 

  return (
    <ContainerStyled>
      <GlobalStyled/>
      <CurrencyStyled>
        <NameDataStyled>
          <NameStyled>
            converter
          </NameStyled>
          <DataStyled>
            <p>
              {data}
            </p>
            <p>Dados disponibilizados pela Morningstar.</p>
          </DataStyled>
        </NameDataStyled>
        <div>Teste2</div>
        <div>Teste3</div>
      </CurrencyStyled>
      <PhotoStyled>
        <img src="../public/money.webp" alt="Imagem de dinheiro" />
      </PhotoStyled>
    </ContainerStyled>
  )
}
