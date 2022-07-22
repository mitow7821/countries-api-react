import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Dispatch, SetStateAction } from "react";

interface Props {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  selectedRegion: string | null;
  setSelectedRegion: Dispatch<SetStateAction<string | null>>;
}

export default function HomeFilters(props: Props) {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div className="flex justify-between flex-wrap gap-2.5">
      <span className="p-input-icon-left ">
        <i className="pi pi-search dark:!text-light"></i>

        <InputText
          className="w-[400px] dark:bg-primary dark:!border-primary dark:text-light"
          value={props.searchValue}
          onChange={(e) => props.setSearchValue(e.target.value)}
          placeholder="Search for a country..."
        />
      </span>

      <Dropdown
        className="w-[220px] dark:bg-primary dark:!border-primary dark:!text-light"
        value={props.selectedRegion}
        options={regions}
        onChange={(e) => props.setSelectedRegion(e.value)}
        showClear={true}
        placeholder="Filter by Region"
      />
    </div>
  );
}
