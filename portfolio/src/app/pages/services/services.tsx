import { useState } from "react";
import styles from "./services.module.css";

const Contacto = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://api-oyh9.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSuccess(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Contacto</h2>

        <input
          className={styles.input}
          name="name"
          placeholder="Nombre"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Mensaje"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button
          className={styles.button}
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>

        {success && (
          <p className={styles.success}>
            Mensaje enviado correctamente
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacto;