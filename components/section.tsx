import { cn } from '@/lib/utils';

export const Section = ({ className, children }: any) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center relative min-w-full w-full',
        'px-8 py-4 xl:px-24 2xl:py-12 2xl:min-h-[80vh] bg-white',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const HalfSection = ({ className, children }: any) => {
  return (
    <div className={cn('flex flex-col w-full h-full xl:w-1/2', className)}>
      {children}
    </div>
  );
};
