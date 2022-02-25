import arrowRight from "../../images/arrow-right.svg";
import { Container, RepoInfo } from "./styles";

interface RepoProps {
  name: string;
  description: string;
  html_url: string;
  starred:string;
}

export function Repo({ name, description, html_url, starred }: RepoProps) {
  return (
    <Container>
      <a href={html_url} target="_blank">
        <RepoInfo>
          <strong>{name}</strong>
          <span>{description || "Repositório sem descrição"}</span>
          <span>{starred} </span>
        </RepoInfo>

        <img src={arrowRight} alt="arrow right" />
      </a>
    </Container>
  );
}
