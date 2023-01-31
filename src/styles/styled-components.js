import styled from "styled-components";

export const RootLayout = styled.div`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginScreen = styled.form`
  width: 100%;
  height: 100vh;
  background: rgba(224, 224, 224, 0.8);
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  div:first-child {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0;

    h3 {
      margin: 0;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;

    label {
      font-size: 1.2rem;
    }

    input {
      border: 1px solid var(--gray);
      padding: 1rem;
      border-radius: 0.5rem;
      transition: 0.2s all;

      &:hover,
      &:focus {
        border: 1px solid var(--blue);
        outline: 0;
      }

      &::placeholder {
        font-style: italic;
        font-size: 0.9rem !important;
      }
    }
  }

  button {
    border: 0;
    cursor: pointer;
    padding: 0.8rem;
    color: var(--white);
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background: linear-gradient(to right,var(--blue) 50%, var(--blue-darker) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    margin-left: 10px;
    transition: all 0.3s ease;
    margin: 0;

    &:hover {
        background-position: right bottom;
    }
  }

  @media (min-width: 480px) {
    max-width: 450px;
    height: 500px;
    border-radius: 1rem;
    padding: 2rem;
    -webkit-box-shadow: 0px 0px 66px 10px rgba(157, 42, 42, 0.1);
    -moz-box-shadow: 0px 0px 66px 10px rgba(157, 42, 42, 0.1);
    box-shadow: 0px 0px 66px 10px rgba(157, 42, 42, 0.1);
  }
`;