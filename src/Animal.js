export default function Animal({ name, type, says, top, left }) {
  return <div>
    <img src={`/images/${type}.svg`} alt={type} />
    <p>{name}</p>
    <p>{says}</p>
  </div>;
}
