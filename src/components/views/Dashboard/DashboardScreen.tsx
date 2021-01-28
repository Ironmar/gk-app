import React, { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { NewsContex } from "../../../context/newsContext";
import { addNew } from "../../../helpers/newsRepository";
import { useForm } from "../../../hooks/useForm";
import Sidebar from "./Sidebar";

const DashBoardScreen: React.FC = () => {
  const [handleChange, newsForm, reset] = useForm({
    title: "",
    content: "",
  });

  const { title, content } = newsForm;
  const { news, setNews } = useContext(NewsContex)!;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      Swal.fire("Error", "Todos los campos son requeridos", "error");
      return;
    }
    addNew(newsForm);
    setNews([newsForm, ...news]);
    Swal.fire("Éxito!", "Datos Guardados", "success");
    reset();
  };
  return (
    <div className="dashboard__main">
      <Sidebar />
      <main className="dashboard__main-content">
        <nav className="dashboard__navbar">
          <img
            src="https://mk0gkcity5058p9mp0g.kinstacdn.com/wp-content/uploads/2017/01/GK-logo-normal.png"
            alt="gk-logo"
          />
          <Link
            to={`/news/1fCSZiJsvMaWTDJvDADR`}
            className="dashboard__preview"
          >
            Visualizar
          </Link>
        </nav>
        <form onSubmit={handleSubmit} className="dashboard__form-container">
          <label htmlFor="title" className="dashboard__label">
            <input
              type=" text"
              name="title"
              value={title}
              autoComplete="off"
              placeholder="Titulo..."
              onChange={handleChange}
            />
          </label>
          <label htmlFor="entry" id="label__grow" className="dashboard__label">
            <textarea
              name="content"
              value={content}
              placeholder="Contenido..."
              className="dashboard__textarea"
              onChange={handleChange}
            ></textarea>
          </label>
          <button className="form__button">Guardar</button>
        </form>
      </main>
    </div>
  );
};
export default DashBoardScreen;
