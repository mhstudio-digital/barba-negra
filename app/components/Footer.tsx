import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D2E] pt-14 pb-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png"
            alt="Barba Negra Sea Food"
            width={130}
            height={52}
            style={{ filter: "invert(1) brightness(10)" }}
          />
        </div>

        <p className="font-dm text-[#7A8FA0] text-sm mb-6">
          Mariscos frescos · Barva, Heredia
        </p>

        {/* Social / Delivery icons */}
        <div className="flex justify-center gap-5 mb-6">
          {/* Instagram */}
          <a
            href="#"
            aria-label="Instagram"
            className="text-[#7A8FA0] hover:text-[#C9A84C] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="#"
            aria-label="Facebook"
            className="text-[#7A8FA0] hover:text-[#C9A84C] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* Uber Eats */}
          <a
            href="#"
            aria-label="Uber Eats"
            className="text-[#7A8FA0] hover:text-[#06C167] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3a9 9 0 110 18A9 9 0 0112 3zm-1 4v5.586l3.707 3.707-1.414 1.414L9 14.414V7h2z" />
            </svg>
          </a>
          {/* DiDi */}
          <a
            href="#"
            aria-label="DiDi Food"
            className="text-[#7A8FA0] hover:text-[#FF6B00] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
            </svg>
          </a>
          {/* Rappi */}
          <a
            href="#"
            aria-label="Rappi"
            className="text-[#7A8FA0] hover:text-[#FF441B] transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
          </a>
        </div>

        <p className="font-dm text-[#7A8FA0] text-sm mb-6">
          Mar–Dom 12:00md–8:45pm &nbsp;·&nbsp;{" "}
          <a href="tel:+50664110563" className="hover:text-[#C9A84C] transition-colors">
            +506 6411-0563
          </a>
        </p>

        <div className="border-t border-[#C9A84C]/30 pt-6">
          <p className="font-dm text-[#7A8FA0] text-xs">
            © 2025 Barba Negra Sea Food · Diseño por{" "}
            <span className="text-[#C9A84C]">MH Studio</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
