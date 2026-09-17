const Loading = () => {
  return (
    <div className='w-screen h-screen overflow-hidden bg-[#0b0f17] flex items-center justify-center'>
      <div className='flex flex-col items-center gap-4'>
        <div className='w-10 h-10 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin' />
        <span className='text-sm font-mono text-slate-500'>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
