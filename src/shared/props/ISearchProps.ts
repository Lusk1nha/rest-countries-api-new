export interface ISearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string | null>>;
  setRegion: React.Dispatch<React.SetStateAction<string | null>>;
  isDisabled: boolean;
};