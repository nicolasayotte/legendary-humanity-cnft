import { cn } from '@/lib/utils';

export const SectionTitle = ({ className, children }: any) => {
  return (
    <h2 className={cn('font-armata text-base font-normal py-4', className)}>
      {children}
    </h2>
  );
};

export const HugeText = ({ className, children }: any) => {
  return (
    <h1
      className={cn(
        'font-poppins text-3xl xl:text-7xl font-light py-6',
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const LargeText = ({ className, children }: any) => {
  return (
    <h3
      className={cn(
        'font-poppins text-3xl xl:text-5xl font-light py-6',
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const NormalText = ({ className, children }: any) => {
  return (
    <p
      className={cn(
        'font-poppins text-base xl:text-lg font-light pb-4',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const SmallerText = ({ className, children }: any) => {
  return (
    <p
      className={cn(
        'font-poppins text-sm xl:text-base font-light pb-4',
        className,
      )}
    >
      {children}
    </p>
  );
};

export const Heading = ({ className, children }: any) => {
  return (
    <NormalText className={cn('font-bold pb-0', className)}>
      {children}
    </NormalText>
  );
};

export const MutedText = ({ className, children }: any) => {
  return (
    <p
      className={cn(
        'font-armata text-lg font-light text-muted-foreground py-2',
        className,
      )}
    >
      {children}
    </p>
  );
};
