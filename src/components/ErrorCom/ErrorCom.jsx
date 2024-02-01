const ErrorCom = ({ msg }) => {
  return (
    <div className=" h-screen flex justify-center items-center flex-col gap-5">
      <h1 className=" text-purple-400 text-3xl font-semibold text-center">
        Oops! Something went wrong
      </h1>
      <h2 className=" text-red-500 text-4xl font-semibold text-center">
        {msg}
      </h2>
    </div>
  );
};

export default ErrorCom;
