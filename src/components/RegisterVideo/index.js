import useForm from "../../hooks/useForm";
import { useState } from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
  const [show, setShow] = useState(false);
  const { values, handleChange, submit } = useForm({
    initialValues: { title: "", url: "" },
  });

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setShow(true)}>
        +
      </button>
      {show && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShow(false);
            submit();
          }}
        >
          <div>
            <button
              type="button"
              className="close-modal"
              onClick={() => setShow(false)}
            >
              x
            </button>
            <input
              placeholder="Título do vídeo"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
            <input
              placeholder="Url do vídeo"
              name="url"
              value={values.url}
              onChange={handleChange}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
