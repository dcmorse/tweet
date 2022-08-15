export const TextInput = ({ text, setText }) => (
  <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
);
