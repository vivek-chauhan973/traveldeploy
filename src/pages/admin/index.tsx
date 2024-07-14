import { useEffect, useState } from "react";
import Login from "../account/login";
import { useRouter } from "next/router";
import AdminDashboard from "./dashboard";
import Layout from "@/components/admin/Layout";

export default function AdminIndex() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();
  const page = "Admin";

  const checkLoggedInStatus = () => {
    const userIsLoggedIn = localStorage.getItem("accessToken") !== null;
    setLoggedIn(userIsLoggedIn);
  };

  useEffect(() => {
    checkLoggedInStatus();
    if (!isLoggedIn) {
      // router.push('/login');
    }
  }, [isLoggedIn, router]);

  return (
    <div>
      {isLoggedIn ? <AdminDashboard /> : <Login page={page} />}
      {/* {isLoggedIn ? <AdminDashboard /> : <AdminDashboard />} */}
      <h1></h1>
    </div>
  );
}
