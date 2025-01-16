import { useState } from "react";
import styles from "../../styles/form/form.module.css";

export const Form = () => {
  const [formData, setFormData] = useState({
    firtsname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    about: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["formContainer"]}>

      <div className={styles["img-form"]}>

      <div className={styles["bitcoinIcon"]}>₿</div>
        <h4 className={styles["title"]}>Contact Us</h4>

      </div>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Firts Name</label>
            <input
              className={styles["input"]}
              type="text"
              name="firtsname"
              placeholder="Enter your firts name"
              value={formData.firtsname}
              onChange={handleChange}
            />
          </div>
          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Last Name</label>
            <input
              className={styles["input"]}
              type="text"
              name="lastname"
              placeholder="Enter your last name"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Email Address</label>
            <input
              className={styles["input"]}
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Phone No.</label>
            <input
              className={styles["input"]}
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Company Name</label>
            <input
              className={styles["input"]}
              type="text"
              name="company"
              placeholder="Enter name of company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>Budget</label>
            <select
              className={styles["input"]}
              name="budget"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
            >
              <option value="" disabled>
                Select Budget
              </option>
              <option value="less_than_2500">Less than 2500</option>
              <option value="2500-5000">2500-5000</option>
              <option value="5000-10000">5000-10000</option>
              <option value="more_than_10000">More than 10000</option>
            </select>
          </div>

          <div className={styles["inputGroup"]}>
            <label className={styles["label"]}>About Us</label>
            <textarea
              className={styles["input"]}
              name="about"
              placeholder="We'd love to hear more about you!"
              value={formData.about}
              onChange={(e) =>
                setFormData({ ...formData, about: e.target.value })
              }
            />
          </div>

          <button type="submit" className={styles["submitButton"]}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
