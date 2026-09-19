import { cn } from '../utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className, align = 'left' }) => {
  return (
    <div className={cn("mb-12", align === 'center' ? 'text-center' : '', className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">{title}</h2>
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1 w-20 bg-primary-600 mt-6 rounded-full",
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
};
