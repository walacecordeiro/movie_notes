import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export function BackButton({ buttonText = 'Voltar', ...rest }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <Container tabIndex='-1' type='button' onClick={handleClick} {...rest}>
      <FiArrowLeft />
      {buttonText}
    </Container>
  );
}
