import Digitalclock from "@/components/DigitalClock";

const page = () => {
  return (
    <div className="ml-72 pt-10 flex flex-col gap-5 justify-center">
      <h2 className="text-2xl">Digital Clock</h2>
      <Digitalclock />
    </div>
  );
};

export default page;
