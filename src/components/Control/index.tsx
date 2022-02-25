import { Section } from "../../styles/page/Home";
import Button from '../Button/index'
import Input from '../Input';




export default function Control() {

  return (
    <Section>
        <Input type="text" placeholder="Digite a tag do user"></Input>
        <Button>Clique</Button>
    </Section>
  );
}
