import AnimalList from './AnimalList';
import backgroundImg from './images/background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>
  );
}
