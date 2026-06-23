type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a className="logo" href="#inicio" aria-label="ISO SMART inicio">
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      {!compact && (
        <span className="logo-text">
          <strong>ISO</strong>
          <span>SMART</span>
        </span>
      )}
    </a>
  );
}
