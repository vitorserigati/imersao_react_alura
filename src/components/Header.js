import styled from "styled-components";
const StyledHeader = styled.div`
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
    padding: 16px 32px;
    gap: 16px;
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
