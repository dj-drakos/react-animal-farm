import Animal from './Animal';

export default function AnimalList({ animals }) {
  return animals.map((animal, i) => <Animal key={i} {...animal}/>);
}
