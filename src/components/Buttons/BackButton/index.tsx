import { ArrowIconContainer, Button, StyledArrowIcon } from "./style";
import { useNavigate } from 'react-router';

export function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  };

  return (
    <Button onClick={handleClick} type="button" title="Click here to go for Home Page" aria-label="Button to go back home page">
      <ArrowIconContainer>
        <StyledArrowIcon />
      </ArrowIconContainer>
      Back
    </Button>
  );
}