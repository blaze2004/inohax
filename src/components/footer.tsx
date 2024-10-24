import Link from "next/link";
import { Mail, Download } from "lucide-react";

export default function Footer() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDU2IDEwMCBIIDAgTCAwIDAgTCA1NiAwIEwgNTYgMTAwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Join Inohax 1.0
          </h2>
          <p className="text-blue-100 text-xl mb-6">
            Transform your ideas into reality. This is your chance to innovate,
            collaborate, and accelerate alongside other driven individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
            <Link
              href="https://play.google.com/store/apps/details?id=in.pranaydas.inovact"
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Download className="h-6 w-6 mr-2" />
              <div className="text-left">
                <div className="text-xs">Download Inovact Social</div>
                <div className="text-sm font-semibold">on Google Play</div>
              </div>
            </Link>
          </div>
          <p className="text-blue-200 font-semibold text-lg">
            Take your first step toward winning INR 10,000 and gaining industry
            recognition!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Contact Us</h3>
              <div className="flex items-center justify-center space-x-3 group">
                <Mail className="h-6 w-6 text-blue-300 group-hover:text-white transition-colors" />
                <a
                  href="mailto:inovacteam@gmail.com"
                  className="text-lg hover:underline"
                >
                  inovacteam@gmail.com
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Join Our Community</h3>
              <Link
                href="https://chat.whatsapp.com/GClxUdUctuaEUeWmJmNYHo"
                className="inline-flex items-center justify-center space-x-2 text-lg font-medium hover:underline bg-green-500 text-white px-4 py-2 rounded-lg transition-colors hover:bg-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="mr-2"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z" />
                </svg>
                <span>Join Inovact Community</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
