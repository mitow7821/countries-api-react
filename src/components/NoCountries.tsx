export default function NoCountries() {
  return (
    <div className="grow grid place-content-center text-dark">
      <i
        className="pi pi-exclamation-triangle text-center text-orange-500"
        style={{ fontSize: "2.25rem" }}
      ></i>

      <h1 className="text-2xl font-semibold dark:text-white">
        There are no countries to show!
      </h1>
    </div>
  );
}
