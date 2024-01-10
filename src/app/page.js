import Company from "@/Components/Company";
import DataTable from "@/Components/DataTable";
import Spinner from "@/Utils/Spinner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10 p-10">
      <Company />
    </div>
  );
}
