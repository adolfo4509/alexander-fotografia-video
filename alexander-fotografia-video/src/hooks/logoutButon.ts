"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { logout } from "@/services/auth";
import "../app/globals.css";
export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    document.cookie = "firebase-auth=; Max-Age=0; path=/;";
    document.cookie = "firebase-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "firebase-auth=; path=/; secure; samesite=lax; Max-Age=0;";
     document.cookie = "firebase-auth=false; path=/";
    router.push("/login");
  };

  return React.createElement(
    "button",
    { type: "button", onClick: handleLogout },
    "Cerrar sesión"
  );
}