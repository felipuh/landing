type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a className={`logo ${compact ? 'logo-compact' : ''}`} href="#inicio" aria-label="ISO SMART AI inicio">
      <img
        className="logo-image"
        src={compact ? '/iso-smart-ai-isotipo-azul.png' : '/iso-smart-ai-logo-oficial.png'}
        alt="ISO SMART AI"
        width={compact ? 42 : 178}
        height={compact ? 42 : 63}
      />
    </a>
  );
}
