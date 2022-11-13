import styled from "styled-components";
const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 30px 32px;
    gap: 16px;
    background-image: url("https://images.unsplash.com/photo-1607112812619-182cb1c7bb61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
  }
`;
export default function Header(props) {
  const user = props.user;
  return (
    <StyledHeader>
      <section className="user-info">
        <img src={`https://github.com/${user.picture}.png`} />
        <div>
          <h2>{user.name}</h2>
          <p>{user.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
