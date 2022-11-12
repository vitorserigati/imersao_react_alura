import styled from "styled-components";

export default function Favorites(props) {
  const persons = props.persons;
  return (
    <StyledFavorites>
      <div>
        {persons.map((person) => {
          return (
            <a key={person.id} href={`https://github.com/${person.url}`}>
              <img src={`https://github.com/${person.foto}.png`} />
              {person.name}
            </a>
          );
        })}
      </div>
    </StyledFavorites>
  );
}

const StyledFavorites = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  div {
    margin: 0 16px;
    display: flex;
    padding: 0 16px;
    flex: 1;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
  a:link {
    text-decoration: inherit;
    color: inherit;
    margin: 0 16px;
  }

  a:visited {
    text-decoration: inherit;
    color: inherit;
  }
  img {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
`;
