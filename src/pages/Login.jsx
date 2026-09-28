import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/authService";

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Mise à jour de l'état credentials
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // credentials contient maintenant les bonnes valeurs !
      const data = await authService.login(credentials);
      console.log("Connexion réussie :", data);
      navigate("/todos", { replace: true });
    } catch (error) {
      console.error("Erreur de connexion :", error);
      setErrorMsg(error.response?.data?.message || "Identifiants invalides.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-100">
        Connexion
      </h2>

      {/* Affichage du message d'erreur */}
      {errorMsg && (
        <div className="p-3 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 rounded-lg text-sm text-center">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Adresse Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="exemple@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            Mot de passe
          </label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition-colors cursor-pointer flex justify-center items-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              Connexion en cours...
            </>
          ) : (
            "Se connecter"
          )}
        </button>
      </form>

      <p className="text-center text-sm text-slate-500 dark:text-slate-400">
        Pas encore de compte ?{" "}
        <Link
          to="/auth/register"
          className="text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          S'inscrire
        </Link>
      </p>
    </div>
  );
}