const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
      <p className="mt-4 text-blue-500 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
