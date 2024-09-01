const Skeleton = () => {
  return (
    <div className="flex w-82 justify-center items-center flex-col gap-4 mt-10 mb-10">
     <div className="skeleton w-14 h-14 flex mb-4 rounded-full bg-gray-500 animate-pulse"></div>
      <div className="skeleton h-6 w-28  bg-gray-500 animate-pulse"></div>
      {/* <div className="skeleton h-4 w-full bg-gray-500 animate-pulse"></div> */}
      {/* <div className="skeleton h-4 w-full bg-gray-500 animate-pulse"></div> */}
    </div>
  );
};

export default Skeleton;
