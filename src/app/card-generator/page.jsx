import CardGenerator from "@/components/CardGenerator";

const page = () => {
  return (
    <div className="ml-72 pt-10 flex flex-col gap-5 justify-center">
      <h2 className="text-2xl">Card Generator</h2>
      <CardGenerator />
    </div>
  );
};

export default page;
