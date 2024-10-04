import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import { useSearchParams } from "react-router-dom";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("discount");
  let filteredCabins;
  if (filter === "all") filteredCabins = cabins;
  else if (filter === "no-discount")
    filteredCabins = cabins.filter((el) => el.discount === 0);
  if (filter === "with-discount")
    filteredCabins = cabins.filter((el) => el.discount > 0);

  if (isLoading) return <Spinner />;
  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={filteredCabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      ></Table.Body>
    </Table>
  );
}

export default CabinTable;
