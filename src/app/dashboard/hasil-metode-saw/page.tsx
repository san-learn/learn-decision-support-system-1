import { TabelNilaiKeputusan } from "@/components/dashboard/hasil-metode-saw/tabel-nilai-keputusan";
import { TabelNilaiKonversiKeputusan } from "@/components/dashboard/hasil-metode-saw/tabel-nilai-konversi-keputusan";
import { TabelNilaiNormalisasiBobot } from "@/components/dashboard/hasil-metode-saw/tabel-nilai-normalisasi-bobot";
import { TabelNilaiNormalisasiMatrik } from "@/components/dashboard/hasil-metode-saw/tabel-nilai-normalisasi-matrik";
import { TabelNilaiPerangkingan } from "@/components/dashboard/hasil-metode-saw/tabel-nilai-perangkingan";

export default async function DashboardMetodeSAWPage() {
  return (
    <>
      <h1>Metode SAW</h1>
      <hr className="my-8" />
      <h2>Nilai Keputusan</h2>
      <TabelNilaiKeputusan />
      <hr className="my-8" />
      <h2>Nilai Konversi Keputusan</h2>
      <TabelNilaiKonversiKeputusan />
      <hr className="my-8" />
      <h2>Normalisasi Matrik</h2>
      <TabelNilaiNormalisasiMatrik />
      <hr className="my-8" />
      <h2>Normalisasi Bobot</h2>
      <TabelNilaiNormalisasiBobot />
      <hr className="my-8" />
      <h2>Perangkingan</h2>
      <TabelNilaiPerangkingan />
    </>
  );
}
