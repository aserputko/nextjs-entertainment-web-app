interface HomeLayoutProps {
  children: React.ReactNode;
  trending: React.ReactNode;
  recommended: React.ReactNode;
}

export default function HomeLayout(props: HomeLayoutProps) {
  return (
    <div className='flex flex-auto flex-col'>
      {props.children}
      {props.trending}
      {props.recommended}
    </div>
  );
}
