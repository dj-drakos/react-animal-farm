export default function Footer(props) {
  return (
    <footer>
      <div><a href={`mailto:${props.email}`}>Contact the Farm</a></div>
      <div>Copyright Alchemy Code Lab 2021-2022</div>
    </footer>
  );
}
