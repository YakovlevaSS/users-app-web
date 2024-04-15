/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLatest } from "../../utilits/debounce";
import { debounce } from "lodash-es";
import { FC, useEffect, useMemo, useState } from "react";
import s from "./index.module.sass";

interface IProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

function makeDebouncedHook(debounceFn: any) {
  return function useDebounce(cb: any, ms: number) {
    const latestCb = useLatest(cb);

    const debouncedFn = useMemo(
      () =>
        debounceFn((...args: any[]) => {
          latestCb.current(...args);
        }, ms),
      [ms, latestCb]
    );

    useEffect(() => () => debouncedFn.cancel(), [debouncedFn]);

    return debouncedFn;
  };
}
const useDebounce = makeDebouncedHook(debounce);

export const Search: FC<IProps> = ({ setInputValue }) => {
  const [query, setQuery] = useState<string>("");
  const makeRequest = useDebounce(() => {
    setInputValue(query);
  }, 500);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    makeRequest(value);
    setQuery(value);
  };
  return (
    <input
      className={s.inputSearch}
      onChange={handleSearch}
      placeholder="Search"
      type="text"
    />
  );
};
