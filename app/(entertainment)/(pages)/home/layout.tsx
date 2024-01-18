export default function HomeLayout({
  children,
  trending,
  recommended,
}: {
  children: React.ReactNode;
  trending: React.ReactNode;
  recommended: React.ReactNode;
}) {
  return (
    <div className='flex flex-auto flex-col'>
      {children}
      {trending}
      {recommended}
    </div>
  );
}
