import { InputSearchContainer } from "./styles";

interface SearchInputProps {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  visible: boolean;
}
export default function SearchInput({
  searchValue,
  onChange,
  visible,
}: SearchInputProps) {
  if (!visible) {
    return null;
  }

  return (
    <InputSearchContainer>
      <input
        type="text"
        value={searchValue}
        placeholder="Pesquisar contato..."
        onChange={onChange}
      />
    </InputSearchContainer>
  );
}
