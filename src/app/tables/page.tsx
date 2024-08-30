'use client'

import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/Tables/TableOne";
import TableThree from "@/components/Tables/TableThree";
import TableTwo from "@/components/Tables/TableTwo";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useAirdropTable, AirdropTables } from "@/components/Tables/setting/hooks/useTable";
import React from "react";

// export const metadata: Metadata = {
//   title: "Next.js Tables | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Tables page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const TablesPage: React.FC = () => {
  const {airdropDetails} = useAirdropTable("");
  return (
    <>
    <DefaultLayout>
    <AirdropTables.Provider value={{airdropDetails}}>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
        <TableThree />
      </div>
    </AirdropTables.Provider>
    </DefaultLayout>
    </>
  );
};

export default TablesPage;
