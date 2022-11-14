import useForm from "../../hooks/useForm";
import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://htibwyfcbyajsfwifntr.supabase.co";
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0aWJ3eWZjYnlhanNmd2lmbnRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0MTM3ODksImV4cCI6MTk4Mzk4OTc4OX0.pvsuR7HY6nsVVk-vjXwY0U4Ojv860fV0Z7BASwusOuk";
const supabase = createClient(PROJECT_URL, PROJECT_KEY);
function getThumbNail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

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
            supabase
              .from("Video")
              .insert({
                title: values.title,
                url: values.url,
                thumb: getThumbNail(values.url),
                playlist: "jogos",
              })
              .then((response) => console.log(response))
              .catch((err) => console.log(err));
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
