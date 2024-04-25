import notfound from "/404.gif";
const Notfound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-black">
      <img className="h-[60%] object-cover" src={notfound} alt="" />
    </div>
  );
};

export default Notfound;
