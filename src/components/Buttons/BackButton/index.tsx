import { ArrowIconContainer, Button, StyledArrowIcon } from "./style";
import { useNavigate } from 'react-router';

export function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  };

  return (
    <Button onClick={handleClick} type="button" title="Click here to go for Home Page...">
      <ArrowIconContainer>
        <StyledArrowIcon />
      </ArrowIconContainer>
      Back
    </Button>
  );
}