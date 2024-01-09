import { Header } from "./styles";
import arrow from "../../../../assets/images/icons/arrow.svg";

interface ListHeaderProps {
  orderBy: string;
  handleToggleOrderBy: () => void;
}

export default function ListHeader({
  orderBy,
  handleToggleOrderBy,
}: ListHeaderProps) {
  return (
    <Header $orderBy={orderBy}>
      <button type="button" onClick={handleToggleOrderBy}>
        <span>Nome </span>
        <img src={arrow} alt="Arrow" />
      </button>
    </Header>
  );
}
