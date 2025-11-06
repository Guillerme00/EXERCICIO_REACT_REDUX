import { PlatformSelector } from '../../../components/Form/PlatformSelector'
import { StyledTitle, Subtitle } from '../../../components/UI/Typography/Title'
import {
  StyledClassificationDiv,
  StyledContainer,
  StyledDivLeft,
  StyledDivRight,
  StyledGameName,
  StyledImg,
  StyledMetaeDiv,
  StyledP,
  StyledClassificationimg
} from './style'
export const OppenedForm = () => {
  return (
    <>
      <StyledContainer>
        <StyledDivLeft>
          <StyledImg src="https://placehold.co/600x400/png"></StyledImg>
          {/* SEPARATION */}
          <Subtitle>
            <StyledP>Game:</StyledP>
          </Subtitle>
          {/* SEPARATION */}
          <StyledGameName>God of war</StyledGameName>
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
        <StyledDivRight>Hi</StyledDivRight>
      </StyledContainer>
    </>
  )
}
