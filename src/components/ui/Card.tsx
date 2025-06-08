interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export default function Card({ children, className, ...props }: CardProps) {
    // function cn(arg0: string, className: string | undefined): string | undefined {
    //     throw new Error("Function not implemented.");
    // }

  return (
    <div
      className={( className)}
      {...props}
    >
      {children}
    </div>
  );
}