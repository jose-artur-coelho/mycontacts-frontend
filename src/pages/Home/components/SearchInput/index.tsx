import { InputSearchContainer } from "./styles";

interface SearchInputProps {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function SearchInput({
  searchValue,
  onChange,
}: SearchInputProps) {
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
