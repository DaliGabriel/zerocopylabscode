'use client'
import DashboardLoading from "./components/Loading";
import useAuthRedirect from "./hooks/useAuthRedirect";

export default function Home() {

  useAuthRedirect({ requireAuth: false, redirectTo: '/dashboard' });

  return (
    <>
      <DashboardLoading />
    </>
  );
}
