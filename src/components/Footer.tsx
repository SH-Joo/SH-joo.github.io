import yonseiLogo from "src/images/logo_yonsei.png";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#002a5c]/50 bg-gradient-to-b from-[#003876] to-[#002a5c] py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-5">
          <img
            src={yonseiLogo}
            alt="Yonsei University Logo"
            className="h-12 object-contain opacity-95"
          />
          <p className="text-white/70 text-center tracking-wide text-sm font-medium">
            © {new Date().getFullYear()} Siheon Joo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
