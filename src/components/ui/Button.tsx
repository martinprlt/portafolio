import { motion } from 'framer-motion';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
}

const v = {
  primary: 'bg-[#4F8CFF] text-white hover:bg-[#3A7AEF]',
  secondary: 'text-[#A1A1AA] hover:text-white border border-white/[0.08] hover:border-white/[0.15] bg-transparent',
  ghost: 'text-[#71717A] hover:text-white hover:bg-white/[0.04]',
};

const s = {
  sm: 'px-3.5 py-1.5 text-xs gap-1.5 rounded-lg',
  md: 'px-5 py-2.5 text-sm gap-2 rounded-lg',
  lg: 'px-6 py-3 text-base gap-2.5 rounded-xl',
};

export function Button({ variant = 'primary', size = 'md', children, icon, href, disabled, className = '', ...props }: ButtonProps) {
  const Tag = href && !disabled ? 'a' : 'button';
  const cls = `inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none ${v[variant]} ${s[size]} ${disabled ? 'opacity-30 pointer-events-none' : ''} ${className}`;

  return (
    <motion.div whileHover={disabled ? undefined : { scale: 1.02 }} whileTap={disabled ? undefined : { scale: 0.98 }}>
      {Tag === 'a' ? (
        <a href={href} className={cls} target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>
          {icon}{children}
        </a>
      ) : (
        <button className={cls} disabled={disabled} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
          {icon}{children}
        </button>
      )}
    </motion.div>
  );
}
