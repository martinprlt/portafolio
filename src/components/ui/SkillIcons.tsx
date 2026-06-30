export const ReactLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12,6.5c3.5,0,6.5,2.46,6.5,5.5s-3,5.5-6.5,5.5S5.5,15.04,5.5,12,8.5,6.5,12,6.5z"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M3.5,12c0-3,3.5-5.5,8.5-5.5s8.5,2.5,8.5,5.5-3.5,5.5-8.5,5.5S3.5,15,3.5,12z"/>
    <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12,6.5c-3.5,0-6.5,2.46-6.5,5.5s3,5.5,6.5,5.5,6.5-2.46,6.5-5.5S15.5,6.5,12,6.5z"/>
  </svg>
);

export const NextLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" opacity="0.3"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M14.5 16L10 8h1.5l3.5 6.5V8H17v8h-1.5z"/>
  </svg>
);

export const TypeScriptLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="2" fill="#3178C6"/>
    <path d="M15.5 16.5v-2h-5v-1h3v-1.5h-3V10.5h5v-2h-7v9h7z" fill="white"/>
    <path d="M17 16.5c.3.5.8.8 1.5.8.5 0 1-.2 1-.7 0-.4-.3-.6-1.1-.8l-.8-.2c-1.2-.3-2-1-2-2.2 0-1.3 1-2.2 2.5-2.2.8 0 1.5.2 2 .6l-.8 1.5c-.3-.3-.7-.5-1.2-.5-.5 0-.8.3-.8.6 0 .4.3.5 1 .7l.8.3c1.4.4 2.2 1 2.2 2.3 0 1.4-1.1 2.3-2.7 2.3-.9 0-1.8-.3-2.3-.8l.9-1.5z" fill="white"/>
  </svg>
);

export const TailwindLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 6C9.33 6 7.67 7.33 7 10c1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.55 10.99 14.85 12 17 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.45 7.01 14.15 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.55 16.99 9.85 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.45 13.01 9.15 12 7 12z" fill="#06B6D4"/>
  </svg>
);

export const NodeLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#339933" opacity="0.2"/>
    <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="none" stroke="#339933" strokeWidth="1"/>
    <text x="12" y="15" textAnchor="middle" fontSize="8" fill="#339933" fontWeight="bold">N</text>
  </svg>
);

export const ExpressLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="currentColor" opacity="0.1"/>
    <text x="12" y="15" textAnchor="middle" fontSize="7" fill="currentColor" fontWeight="bold" fontFamily="monospace">Ex</text>
  </svg>
);

export const PythonLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C9.33 2 8 3.33 8 5.5V8h4v1H6.5C4 9 2 11 2 13.5S4 18 6.5 18H8v-2.5C8 13.33 9.33 12 12 12h4c2.21 0 4-1.79 4-4V5.5C20 3.33 18.67 2 16 2h-4z" fill="#3776AB"/>
    <circle cx="10" cy="5" r="1" fill="white"/>
    <path d="M12 22c2.67 0 4-1.33 4-3.5V16h-4v-1h5.5c2.5 0 4.5-2 4.5-4.5S20 6 17.5 6H16v2.5c0 2.17-1.33 3.5-4 3.5H8c-2.21 0-4 1.79-4 4v2.5C4 20.67 5.33 22 8 22h4z" fill="#FFD43B"/>
    <circle cx="14" cy="19" r="1" fill="white"/>
  </svg>
);

export const MySQLLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <ellipse cx="12" cy="6" rx="8" ry="3" fill="#4479A1" opacity="0.6"/>
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#4479A1" strokeWidth="1.5"/>
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" fill="none" stroke="#4479A1" strokeWidth="1.5"/>
  </svg>
);

export const PostgresLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <rect width="24" height="24" rx="4" fill="#336791" opacity="0.2"/>
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="#336791" fontWeight="bold">PG</text>
  </svg>
);

export const MongoLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8 2 6 5 6 8c0 4 2 6 6 12 4-6 6-8 6-12 0-3-2-6-6-6z" fill="#47A248" opacity="0.6"/>
    <path d="M12 2C8 2 6 5 6 8c0 4 2 6 6 12 4-6 6-8 6-12 0-3-2-6-6-6z" fill="none" stroke="#47A248" strokeWidth="1"/>
    <line x1="12" y1="2" x2="12" y2="20" stroke="#47A248" strokeWidth="0.5"/>
  </svg>
);

export const GitLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.5 11.4L12.6.5c-.7-.7-1.8-.7-2.5 0L8.3 2.3l3.1 3.1c.8-.3 1.7-.1 2.3.5.6.6.8 1.5.5 2.3l3 3c.8-.3 1.7-.1 2.3.5.9.9.9 2.4 0 3.4-.9.9-2.4.9-3.3 0-.7-.7-.9-1.6-.6-2.4l-2.8-2.8v7.3c.2.1.4.2.6.4.9.9.9 2.4 0 3.3-.9.9-2.4.9-3.3 0-.9-.9-.9-2.4 0-3.3.2-.2.5-.3.7-.4v-7.4c-.2-.1-.5-.2-.7-.4-.7-.7-.9-1.6-.6-2.5L8 3.7 2.5 9.1c-.7.7-.7 1.8 0 2.5l10.9 10.9c.7.7 1.8.7 2.5 0l7.6-7.6c.7-.6.7-1.8 0-2.5z" fill="#F05032"/>
  </svg>
);

export const GitHubLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

export const DockerLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 3h2v2h-2V3zm-4 0h2v2H9V3zm-4 0h2v2H5V3zm-2 6h2v2H3V9zm4 0h2v2H7V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm4 0h2v2h-2V9zm-8 4h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 3h2v2H3V3zm8 0h2v2h-2V3zm-8 4h2v2H3V7zm16-4h2v2h-2V3zm-4 4h2v2h-2V7zM3 15c0 2.21 3.58 4 8 4s8-1.79 8-4v-2H3v2z" fill="#2496ED"/>
  </svg>
);

export const LinuxLogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="10" r="6" fill="#FCC624" opacity="0.3"/>
    <circle cx="12" cy="10" r="6" fill="none" stroke="#FCC624" strokeWidth="1.5"/>
    <circle cx="10" cy="9" r="1" fill="#FCC624"/>
    <circle cx="14" cy="9" r="1" fill="#FCC624"/>
    <path d="M9 13c1 1.5 5 1.5 6 0" fill="none" stroke="#FCC624" strokeWidth="1" strokeLinecap="round"/>
    <path d="M12 16v4M10 20h4" fill="none" stroke="#FCC624" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

export const OpenAILogo = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
    <text x="12" y="16" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">AI</text>
  </svg>
);
