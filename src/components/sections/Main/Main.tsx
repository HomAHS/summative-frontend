"use client";

import { FC, useState, useRef, useEffect } from "react";
import axios from "axios";

import Swal from "sweetalert2";

import styles from "./Main.module.scss";

const Main: FC = () => {
  const [type, setType] = useState<"voice" | "file">("voice");
  const [file, setFile] = useState(null);
  const [data, setData] = useState({
    phone: "",
    message: "",
    about: "",
    voiceId: "",
    type: "voice",
  });

  const fileInputRef: any = useRef(null);

  const API_URL: any = process.env.API_URL;

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "audio/mpeg") {
      setFile(selectedFile);
    } else {
      Swal.fire({
        title: "Not Valid MP3",
        text: "Please upload a valid MP3 file.",
        icon: "error",
      });
    }
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleChoice = (typeValue: "voice" | "file") => {
    if (type === typeValue) return;

    setType(typeValue);
    setData({ ...data, type: typeValue });
    setFile(null);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (data.phone.length !== 10) {
      Swal.fire({
        title: "Phone length is 10!",
        text: "Phone length supposed to be 10",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    if (file) formData.append("file", file);
    formData.append("data", JSON.stringify(data));

    console.log(formData.get("file"), formData.get("data"));

    Swal.fire({
      title: "Wait!",
      text: "We waiting for call!",
      icon: "info",
    });

    try {
      const response = await axios.post(`${API_URL}/call`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      Swal.fire({
        title: "Is Calling!",
        text: "Bot is calling right now!",
        icon: "success",
      });
    } catch (error: any) {
      console.error("Error:", error.response?.data.error || error.message);
      Swal.fire({
        title: "Error!",
        text: error.response?.data.error || error.message,
        icon: "error",
      });
    }
  };

  // useEffect(() => {
  //   for (let i = 0; i <= 10000; i++) {
  //     axios.get(`${API_URL}/get`);
  //   }
  // }, []);

  return (
    <section className={styles.wrapper} id="section-main">
      <div className="container">
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1 className={styles.title}>
              Phone <span>Call</span>
            </h1>

            <input
              type="phone"
              placeholder="111 222-0000"
              className={styles.input}
              name="phone"
              required={true}
              value={data.phone}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Message"
              name="message"
              className={styles.input}
              required={true}
              value={data.message}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Description"
              name="about"
              className={styles.input}
              required={true}
              value={data.about}
              onChange={handleInputChange}
            />

            <div className={styles.choices}>
              <div
                className={`${styles.choice} ${
                  type == "voice" ? styles.activeChoice : ""
                }`}
              >
                <span
                  className={styles.line}
                  onClick={() => handleChoice("voice")}
                ></span>
                <input
                  type="text"
                  placeholder="Voice ID"
                  name="voiceId"
                  className={`${styles.input} ${styles.voiceInput}`}
                  value={data.voiceId}
                  onChange={handleInputChange}
                />
              </div>
              <div
                className={`${styles.choice} ${
                  type == "file" ? styles.activeChoice : ""
                }`}
              >
                <span
                  className={styles.line}
                  onClick={() => handleChoice("file")}
                ></span>
                <input
                  type="file"
                  placeholder="MP3"
                  accept=".mp3"
                  name="audio"
                  className={`${styles.input} ${styles.audioInput}`}
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
                <button
                  type="button"
                  className={styles.audioButton}
                  onClick={handleFileButtonClick}
                >
                  MP3
                </button>
              </div>
            </div>

            <button type="submit" className={styles.button}>
              Call
            </button>
          </form>
        </div>
        <h2 className={styles.subtitle}>Voices:</h2>
        <ul className={styles.voices}>
          <li className={styles.voice}>
            ysVYSfBJOHpqT1ulcOCT <span>(Old Man)</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Main;
