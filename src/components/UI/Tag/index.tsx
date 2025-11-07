import { Subtitle } from '../Typography/Title'
import { Tag } from './Genrer/style'
import { StyledSub } from './ScoreCircle/style'

export const StyledScore = ({ label }: { label: number }) => {
  return (
    <>
      <StyledSub>
        <Tag>{label}</Tag>
      </StyledSub>
    </>
  )
}
