"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
type Props = {
  defaultValue?: string;
  hiddenOnSearch?: boolean;
};
export const SearchInput = ({ defaultValue, hiddenOnSearch }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const [searchInput, setSearchInput] = useState(
    defaultValue ? defaultValue : ""
  );

  const handleSearchEnter = () => {
    if (searchInput) {
      router.push(`/search?q=${encodeURIComponent(searchInput)}`);
    }
  };

  if (hiddenOnSearch && pathName === "/search") return;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(t) => setSearchInput(t)}
      onEnter={handleSearchEnter}
    />
  );
};
