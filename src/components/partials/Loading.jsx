import loading from "/loading.gif"
const Loading = () => {
  return <div className="flex items-center justify-center w-screen h-screen bg-black">
    <img className="h-[60%] object-cover" src={loading} alt="" />
  </div>;
};

export default Loading;
