import { useEffect, useState } from "react";
import { api } from "../../services/index";
import { Link, useParams } from "react-router-dom";
import arrowLeft from "../../images/arrow-left.svg";

import { Profile } from "../../components/Perfil";
import { Repo } from "../../components/Repositorio";
import { Container, ListRepos, SectionRepos, Wrapper } from "./styles";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  starred: string
}

export function User() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const { username } = useParams();

  async function fetchReposUser() {
    const response = await api.get<Repo[]>(`${username}/repos`);
    setRepos(response.data);
  }

  useEffect(() => {
    fetchReposUser();
  }, []);

  return (
    <Container>
      <Wrapper>
        <header>
          <Link to="/" id="back">
            <img src={arrowLeft} alt="arrow left" />
            <span>Voltar</span>
          </Link>
        </header>

        <main>
          <Profile totalRepositories={repos.length} />
          <SectionRepos>
            <ListRepos>
              {repos.map(repo => (
                <Repo
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  html_url={repo.html_url}
                  starred={repo.starred}
                />
              ))}
            </ListRepos>
          </SectionRepos>
        </main>
      </Wrapper>
    </Container>
  );
}
