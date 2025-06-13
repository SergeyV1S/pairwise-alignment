export const Container = ({ children }: { children: React.ReactNode }) => (
  <div className='flex justify-center min-h-screen bg-base-dark-3'>
    <div className='w-full max-w-7xl max-xl:mx-10'>{children}</div>
  </div>
);
