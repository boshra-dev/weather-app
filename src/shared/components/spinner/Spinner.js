export default function Spinner({ loading }) {
  return <div className={`spinner ${loading ? "spinner-show" : ""}`}></div>;
}
