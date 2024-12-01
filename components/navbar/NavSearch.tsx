"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";  //client side
import { useDebouncedCallback } from "use-debounce"; //runs a fun with delay
import { useState, useEffect } from "react";

function NavSearch() {
  const searchParams = useSearchParams(); //grab the params from NavSearch
  const { replace } = useRouter();
  const [search, setSearch] = useState(
    searchParams.get("search")?.toString() || ""
  ); //check what is searchQuery value in URL if there use it if not ''

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);  //built in constructor with methods like set & delete
    if (value) {
      params.set("search", value);  //if user provided sertc term add searchQuery params to our params 
    } else {
      params.delete("search"); //if no value given or user deleted
    }
    replace(`/products?${params.toString()}`);
  }, 300);
  //params will be send here to ProductsContainer to be fetched on server side

  useEffect(() => {
    if (!searchParams.get("search")) {  //set state value back to '' if no value in search params
      setSearch("");
    }
  }, [searchParams.get("search")]); //run everytime change in searchParams
  return (
    <Input
      type="search"
      placeholder="search product..."
      className="max-w-xs dark:bg-muted "
      onChange={(e) => {
        setSearch(e.target.value); //control state value
        handleSearch(e.target.value);//navigate to products with correct query params
      }}
      value={search}
    />
  );
}
export default NavSearch;

//useRouter to navigate back to products page