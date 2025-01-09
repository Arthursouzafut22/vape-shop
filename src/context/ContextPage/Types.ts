export type ContextProps = {
  page: number;
  activePrev: boolean;
  activeNext: boolean;
  nextPage: () => void;
  prevPage: () => void;
  indexColor: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setIndexColor: React.Dispatch<React.SetStateAction<number>>;
  replacePage: (event: React.MouseEvent<HTMLButtonElement>, i: number) => void;
};
