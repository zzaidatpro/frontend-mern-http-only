import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { authService } from "../services/authService";

export default function PrivateRoute({ children, allowedRoles }) {
  const [status, setStatus] = useState({ loading: true, authorized: false });

  useEffect(() => {
    let isMounted = true;

    // Récupère toujours le profil de l'utilisateur connecté
    authService
      .getMe()
      .then((data) => {
        if (!isMounted) return;

        const user = data?.user || data;

        // Si la route a des restrictions de rôles
        if (allowedRoles && allowedRoles.length > 0) {
          const userRole = user?.role?.toLowerCase();
          const hasRole = allowedRoles.some(
            (role) => role.toLowerCase() === userRole
          );

          setStatus({ loading: false, authorized: hasRole });
        } else {
          // Route protégée classique sans filtre de rôle
          setStatus({ loading: false, authorized: true });
        }
      })
      .catch(() => {
        if (isMounted) {
          setStatus({ loading: false, authorized: false });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [allowedRoles]);

  if (status.loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-3">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        <p className="text-xs text-slate-500">Vérification des accès...</p>
      </div>
    );
  }

  return status.authorized ? children : <Navigate to="/auth/login" replace />;
}