export default function Footer(props) {
  return (
    <footer>
      <div>Copyright Alchemy Code Lab 2021-2022</div>
      <div><a href={`mailto:${props.email}`}>Contact the Farm</a></div>
    </footer>
  );
}
