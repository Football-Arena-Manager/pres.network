export default function StoreBadges({ justify = "center" }: { justify?: string }) {
  return (
    <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: justify, alignItems: "center" }}>
      <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="52" viewBox="0 0 160 52">
          <rect width="160" height="52" rx="8" fill="#000"/>
          <rect x="0.5" y="0.5" width="159" height="51" rx="7.5" fill="none" stroke="#555" strokeWidth="1"/>
          <path d="M18 14.5L18 37.5L33 26Z" fill="#4285F4"/>
          <path d="M18 14.5L27.5 24L18 26Z" fill="#34A853"/>
          <path d="M18 26L27.5 28L18 37.5Z" fill="#EA4335"/>
          <path d="M27.5 24L33 26L27.5 28Z" fill="#FBBC04"/>
          <text x="42" y="22" fontFamily="Arial,sans-serif" fontSize="10" fill="#ccc" letterSpacing="0.3">GET IT ON</text>
          <text x="42" y="38" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="bold" fill="#fff">Google Play</text>
        </svg>
      </a>
      <a href="#" style={{ display: "inline-block", textDecoration: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="160" height="52" viewBox="0 0 160 52">
          <rect width="160" height="52" rx="8" fill="#000"/>
          <rect x="0.5" y="0.5" width="159" height="51" rx="7.5" fill="none" stroke="#555" strokeWidth="1"/>
          <path d="M26.5 13.5c1.8 0 3.4 1 4.4 2.5-3.8 2-3.2 7.3.6 8.8-.5 1.3-1 2.5-1.8 3.5-1 1.5-2 3-3.8 3s-2.4-1-4-1-2.3 1-3.9 1-2.8-1.5-3.8-3c-2.2-3.3-2.5-7-1-10.2 1-2 3-3.4 5.1-3.4 1.5 0 2.8.8 3.8.8s2.8-.9 4.4-.9zm-.3-4c.3 1.3-.3 2.5-1 3.3-.8.9-2 1.6-3.2 1.5-.3-1.2.3-2.5 1-3.3.8-.9 2.1-1.6 3.2-1.5z" fill="#fff"/>
          <text x="42" y="22" fontFamily="Arial,sans-serif" fontSize="9.5" fill="#ccc" letterSpacing="0.3">Download on the</text>
          <text x="42" y="38" fontFamily="Arial,sans-serif" fontSize="16" fontWeight="bold" fill="#fff">App Store</text>
        </svg>
      </a>
    </div>
  );
}
