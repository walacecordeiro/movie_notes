import { useState, useRef, useEffect } from 'react';
import { Container } from './styles';

export function TextArea({ value, ...rest }) {
  const [text, setText] = useState(value || '');
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Container
      ref={textareaRef}
      value={text}
      onChange={handleChange}
      {...rest}
    />
  );
}
