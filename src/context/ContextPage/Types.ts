export type ContextProps = {
  page: number;
  activePrev: boolean;
  activeNext: boolean;
  nextPage: () => void;
  prevPage: () => void;
  replacePage: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
