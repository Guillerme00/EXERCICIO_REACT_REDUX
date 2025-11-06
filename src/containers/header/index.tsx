import { StyledTitle, Subtitle } from '../../components/Typography/Title'
import { StyledHeader } from './styles'

const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledTitle>GameList</StyledTitle>
        <Subtitle>
          Your <strong>BEST</strong> Game Tier-list
        </Subtitle>
      </StyledHeader>
    </>
  )
}
export default Header
