export default function ErrorAlert({ errorMessage }: { errorMessage: string }) {
  return (
    <div className="absolute rounded-2xl mx-4 px-4 py-2 bg-red-100 flex flex-row gap-2 justify-center tablet:left-20 desktop:top-20 desktop:left-1/3">
      <span className="my-auto">
        <div className="rounded-lg text-red-600 text-sm px-2 bg-white">
          Error
        </div>
      </span>
      <p className="text-red-600">{errorMessage}</p>
    </div>
  );
}
