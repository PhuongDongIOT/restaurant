function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={`${className} bg-accent animate-pulse rounded-md`}
      {...props}
    />
  );
}

export { Skeleton };
