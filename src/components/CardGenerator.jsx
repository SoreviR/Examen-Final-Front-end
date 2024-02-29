const CardGenerator = () => {
  return (
    <div className="flex flex-col justify-center items-center  border-2">
      <div className="flex justify-center bg-slate-600 w-full">
        <h2 className=" text-white ">ID Card Generator</h2>
      </div>

      <div className="flex p-5">
        <div className="flex flex-col">
          <form
            className="flex flex-col gap-3 h-full border-black border p-10"
            action=""
          >
            <h3 className="self-center">Input Form</h3>
            <div className="grid grid-rows-3 gap-3 grid-cols-2">
              <p>Enter Name</p>
              <div>
                <input className="border rounded" type="text" />
              </div>
              <div>Enter College Name</div>
              <div>
                <input className="border rounded" type="text" />
              </div>
              <div>Enter Location</div>
              <div>
                <input className="border rounded" type="text" />
              </div>
            </div>
          </form>
        </div>
        <aside className="flex flex-col w-auto border border-black p-10">
          <h3>Generated Card</h3>
          <div className="w-[300px] h-[200px] border rounded-lg"></div>
        </aside>
      </div>
    </div>
  );
};

export default CardGenerator;
