"use client";

import { useRouter } from "next/navigation";

export default function LogowaniePage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Zaloguj się do swojego konta
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Przedszkole nr14 "Biały Żagiel"
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Adres email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-800 rounded-t-md focus:outline-none focus:ring-[#005FA6] focus:border-[#005FA6] focus:z-10 sm:text-sm"
                placeholder="Adres email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Hasło
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-800 rounded-b-md focus:outline-none focus:ring-[#005FA6] focus:border-[#005FA6] focus:z-10 sm:text-sm"
                placeholder="Hasło"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#005FA6] focus:ring-[#005FA6] border-gray-300 dark:border-gray-600 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-white">
                Zapamiętaj mnie
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-[#005FA6] hover:text-[#005FA6]">
                Zapomniałeś hasła?
              </a>
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#005FA6] hover:bg-[#005FA6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005FA6]"
            >
              Zaloguj się
            </button>
          </div>

          <div className="text-center">
            <a href="/rejestracja" className="font-medium text-[#005FA6] hover:text-[#005FA6]">
              Nie masz konta? Zarejestruj się
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
