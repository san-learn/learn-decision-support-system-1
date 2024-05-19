import { ContainerLayout } from "@/components/dashboard/container-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContainerLayout>{children}</ContainerLayout>;
}
