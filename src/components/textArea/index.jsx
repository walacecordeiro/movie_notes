// import { useState, useRef, useEffect } from 'react';
// import { Container } from './styles';

// export function TextArea({ value, ...rest }) {
//   const [description, setDescription] = useState(value || '');
//   const textareaRef = useRef(null);

//   useEffect(() => {
//     if (textareaRef.current) {
//       textareaRef.current.style.height = 'auto';
//       textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
//     }
//   }, [description]);

//   const handleChange = (event) => {
//     setDescription(event.target.value);
//   };

//   return (
//     <Container
//       ref={textareaRef}
//       value={description}
//       onChange={handleChange}
//       {...rest}
//     />
//   );
// }

import { Container } from "./styles";

export function TextArea({ ...rest }) {
  return (
    <Container
      {...rest}
    />
  );
}
