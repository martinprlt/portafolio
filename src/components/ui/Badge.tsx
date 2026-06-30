interface BadgeProps {
  label: string;
  color?: string;
}

export function Badge({ label, color = '#4F8CFF' }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-[10px] font-mono rounded-sm"
      style={{ color, backgroundColor: `${color}10` }}
    >
      {label}
    </span>
  );
}
