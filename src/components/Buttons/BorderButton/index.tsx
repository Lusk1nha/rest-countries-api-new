import { useNavigate } from 'react-router';
import { IBorderButtonProps } from '../../../shared/props/IBorderButtonProps';
import { Button } from './../BackButton/style';



export function BorderButton({ name }: IBorderButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    const newPath = `/details/${name.toLowerCase()}`;
    navigate(newPath);
  };

  return (
    <Button onClick={handleClick} type="button">
      {name}
    </Button>
  )
}