export default function Animal({ name, type, says, top, left }) {
  return <section style={{ bottom: top, left: left }}>
    <img src={`/images/${type}.svg`} alt={type} />
    <h4>{name}</h4>
    <p>{says}</p>
  </section>;
}
