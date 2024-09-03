import { useContext } from "react";
import { AirdropTables } from "./setting/hooks/useTable";
import { ChevronDown } from "../../../public/assets/svg/chevronDown";
import { Info } from "../../../public/assets/svg/info";
import { TableRow } from "./setting/components/TableRow";

const TableOne = () => {
  const { airdropDetails } = useContext(AirdropTables);
  console.log(airdropDetails)

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-3 xl:p-5">
              <div className="flex items-center">
                <b># &nbsp;</b>
                <ChevronDown />
              </div>
            </th>
            <th className="px-3 xl:px-5">Name</th>
            <th className="px-3 xl:px-5">Price</th>
            <th className="px-3 xl:px-5">24h %</th>
            <th className="px-3 xl:px-5">7d %</th>
            <th className="px-3 xl:px-5">
              <div className="flex">
                <p className="mr-2">Market Cap</p>
                <Info />
              </div>
            </th>
            <th className="px-3 xl:px-5">
              <div className="flex">
                <p className="mr-2">Volume(24h)</p>
                <Info />
              </div>
            </th>
            <th className="px-3 xl:px-5">
              <div className="flex">
                <p className="mr-2">Circulating Supply</p>
                <Info />
              </div>
            </th>
            <th className="px-3 xl:px-5">Last 7 days</th>
          </tr>
        </thead>
          {airdropDetails && Array.isArray(airdropDetails) ? (
            airdropDetails.slice(0, 10).map((airdropDetails: any, key: number) => (
              <TableRow 
              key={key}
              starNum={airdropDetails.cmc_rank}
              coinName={airdropDetails.name}
              coinSymbol={airdropDetails.symbol}
              hRate={airdropDetails.quote?.USD?.percent_change_24h}
              dRate={airdropDetails.quote?.USD?.percent_change_7d}
              hRateIsIncrement={(airdropDetails.quote?.USD?.percent_change_24h ?? 0) > 0}
              dRateIsIncrement={(airdropDetails.quote?.USD?.percent_change_7d ?? 0) > 0}
              price={airdropDetails.quote?.USD?.price}
              marketCapValue={airdropDetails.quote?.USD?.market_cap}
              volumeCryptoValue={airdropDetails.quote?.USD?.volume_24h}
              volumeValue={airdropDetails.total_supply}
              circulatingSupply={airdropDetails.circulating_supply}
            />
            ))
          )

          : (
            <tr>
              <td colSpan={9}>No data available</td>
            </tr>
          )}
      </table>
    </div>
  );
};

export default TableOne;
