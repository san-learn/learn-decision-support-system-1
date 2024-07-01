"use client";

import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";

interface TablePrintProps {
  allAlternatif: {
    nama: string;
    nomor_kk: string;
    alamat: string;
    pekerjaan: string;
    nilai_simple_additive_weighting: number | null;
    rangking: number | null;
  }[];
}

export function TablePrint({ allAlternatif }: TablePrintProps) {
  const ref = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => ref.current,
    documentTitle: `Laporan Prioritas Warga Penerima BLT ${new Date().toLocaleDateString()}`,
  });

  useEffect(() => {
    handlePrint();
  }, [handlePrint]);

  return (
    <div
      className="min-h-screen w-full mx-auto bg-white p-6 rounded-lg shadow-lg absolute top-0 left-0 right-0 bottom-0 z-[-1]"
      ref={ref}
    >
      <h1 className="text-2xl font-bold mb-2 uppercase">
        Prioritas Warga Penerima BLT di Nagari Saok Laweh
      </h1>
      <p className="mb-2">
        Data dibawah diperoleh dari hasil perhitungan dengan metode Simple
        Additive Weighting.
      </p>
      <p className="text-sm text-gray-500 mb-8">
        Tanggal Cetak:
        <span id="tanggalCetak">{` ${new Date().toLocaleDateString()}`}</span>
      </p>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Nomor
            </th>
            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Nama
            </th>
            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Nomor KK
            </th>
            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Alamat
            </th>
            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Pekerjaan
            </th>

            <th className="py-1 px-2 border-b border-gray-200 bg-gray-100">
              Rangking
            </th>
          </tr>
        </thead>
        <tbody>
          {allAlternatif.map((alternatif, index) => {
            return (
              <tr key={index}>
                <td className="py-1 px-2 border-b border-gray-200">
                  {index + 1}
                </td>
                <td className="py-1 px-2 border-b border-gray-200">
                  {alternatif.nama}
                </td>
                <td className="py-1 px-2 border-b border-gray-200">
                  {alternatif.nomor_kk}
                </td>
                <td className="py-1 px-2 border-b border-gray-200">
                  {alternatif.alamat}
                </td>
                <td className="py-1 px-2 border-b border-gray-200">
                  {alternatif.pekerjaan}
                </td>

                <td className="py-1 px-2 border-b border-gray-200">
                  {alternatif.rangking}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="w-full flex justify-between mt-8">
        <div className="flex items-center flex-col">
          <p>Disetujui;</p>
          <p className="mb-16">Ketua BPN Saok Laweh</p>
          <p className="font-bold underline">S.INDRA JAYA</p>
        </div>
        <div className="flex items-center flex-col">
          <p>Diketahui;</p>
          <p className="mb-16">Wali Nagari Saok Laweh</p>
          <p className="font-bold underline">IRWIN SAPUTRA</p>
        </div>
      </div>
    </div>
  );
}
