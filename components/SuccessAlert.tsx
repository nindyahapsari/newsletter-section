export default function SuccessAlert({
  successMessage,
}: {
  successMessage: string;
}) {
  return (
    <div className="absolute  rounded-2xl mx-4 px-4 py-2 bg-green-100 flex flex-row gap-2 justify-center tablet:left-20 desktop:top-20 desktop:left-1/3">
      <span className="my-auto">
        <div className="rounded-lg text-green-700 text-sm px-2 bg-white">
          Success
        </div>
      </span>
      <p className="text-green-700">{successMessage}</p>
    </div>
  );
}
