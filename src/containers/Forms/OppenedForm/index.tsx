import { PlatformSelector } from '../../../components/Form/PlatformSelector'
import { StyledScore } from '../../../components/UI/Tag'
import { GenrerTag } from '../../../components/UI/Tag/Genrer'
import { Subtitle } from '../../../components/UI/Typography/Title'
import {
  StyledClassificationDiv,
  StyledContainer,
  StyledDivLeft,
  StyledDivRight,
  StyledGameName,
  StyledImg,
  StyledMetaeDiv,
  StyledP,
  StyledClassificationimg,
  StyledTagContainer,
  StyledContainerDescription,
  StyledContainerScore,
  StyledPara,
  StyledComments,
  StyledCommentsContainer,
  BtnDiv,
  BtnCancel,
  BtnSucess,
  StyledContainerTwo
} from './style'

const genres: string[] = ['Action', 'Adventure', 'Sci-fy', 'Romance', 'Horror']
const scores: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const OppenedForm = () => {
  return (
    <>
      <StyledContainer>
        <StyledContainerTwo>
          <StyledDivLeft>
            <StyledImg src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2531310/header.jpg?t=1750959180"></StyledImg>
            {/* SEPARATION */}
            <Subtitle>
              <StyledP>Game:</StyledP>
            </Subtitle>
            {/* SEPARATION */}
            <StyledGameName>
              The Last of Us™ Parte II Remastered
            </StyledGameName>
            {/* SEPARATION */}
            <StyledMetaeDiv>
              <StyledClassificationDiv>
                <StyledClassificationimg src="https://placehold.co/96x96/png" />
                <StyledClassificationimg src="https://placehold.co/96x96/png" />
              </StyledClassificationDiv>
              <PlatformSelector />
            </StyledMetaeDiv>
          </StyledDivLeft>
          {/* SEPARATION */}
          <StyledDivRight>
            <Subtitle>
              <StyledP>Genders:</StyledP>
              {/* SEPARATION */}
              <StyledTagContainer>
                {genres.map(genero => (
                  <GenrerTag key={genero} label={genero} />
                ))}
              </StyledTagContainer>
              {/* SEPARATION */}
            </Subtitle>
            <Subtitle>
              <StyledP>Description:</StyledP>
              <StyledContainerDescription>
                <StyledPara>
                  Cinco anos depois de uma jornada perigosa pelos Estados Unidos
                  num cenário pós-pandêmico, Ellie e Joel foram morar em
                  Jackson, Wyoming. A vida numa comunidade próspera de
                  sobreviventes lhes trouxe paz e estabilidade, apesar da ameaça
                  constante dos infectados e de outros sobreviventes mais
                  desesperados. Quando um evento violento interrompe a paz,
                  Ellie parte numa jornada incansável para fazer justiça e virar
                  a página.
                </StyledPara>
              </StyledContainerDescription>
            </Subtitle>
            <Subtitle>
              <StyledP>Score:</StyledP>
            </Subtitle>
            <StyledContainerScore>
              {scores.map(Num => (
                <StyledScore key={Num} label={Num}></StyledScore>
              ))}
            </StyledContainerScore>
            <StyledCommentsContainer>
              <Subtitle>
                <StyledP>Review(Opcional):</StyledP>
              </Subtitle>
              <StyledComments />
            </StyledCommentsContainer>
          </StyledDivRight>
        </StyledContainerTwo>
        <BtnDiv>
          <BtnSucess>
            <Subtitle>Add</Subtitle>
          </BtnSucess>
          <BtnCancel>
            <Subtitle>Cancel</Subtitle>
          </BtnCancel>
        </BtnDiv>
      </StyledContainer>
    </>
  )
}
