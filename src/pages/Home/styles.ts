import styled from "styled-components";


export const Container = styled.div`

`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 50px;
`;

export const Main = styled.main`
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  text-align: center;
  font-size: 48px;
  line-height: 52px;
  color: var(--text);
`;
export const Form = styled.form`
  margin-bottom: 120px;
  .group {
    display: flex;
    align-items: center;

    input {
      padding: 24px 30px;
      width: 100%;
      height: 100%;

      font-size: 20px;
      border: 0;
      border-radius: 5px 0 0 5px;
    }

    button {
      height: 100%;

      padding: 24px 30px;
      font-size: 20px;
      font-weight: bold;
      border: 0;
      border-radius: 0px 5px 5px 0px;
      background: var(--green);
      color: #fff;
      transition: 0.2s;
      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;

export const SectionUsers = styled.section`
  padding-bottom: 4rem;
`;

export const ListUsers = styled.ul``;
