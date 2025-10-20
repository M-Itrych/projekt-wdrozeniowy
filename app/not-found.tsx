import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strona nie została znaleziona</h2>
          <p className="text-gray-600 mb-8">
            Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-[#80CEF4] text-white px-6 py-3 rounded-md hover:bg-[#005FA6] transition-colors"
          >
            Wróć do strony głównej
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Jeśli problem nadal występuje, skontaktuj się z administracją przedszkola.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
