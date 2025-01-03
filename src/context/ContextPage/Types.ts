export type ContextProps = {
  page: number;
  activePrev: boolean;
  activeNext: boolean;
  nextPage: () => void;
  prevPage: () => void;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  replacePage: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
