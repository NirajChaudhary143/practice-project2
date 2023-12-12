import "../../App.css";
import styles from "./Contact.module.css";
import Button from "../Button/Button.jsx";
import { MdCall } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [content, setContent] = useState("");
  const onSubmitBtn = (event) => {
    event.preventDefault();
    console.log("clicked submit");
    const UpdatedName = event.target[0].value;
    const UpdatedEmail = event.target[1].value;
    const UpdatedText = event.target[2].value;
    setName(UpdatedName);
    setEmail(UpdatedEmail);
    setText(UpdatedText);
    if (UpdatedName && UpdatedEmail && UpdatedText) {
      var content = `name= ${UpdatedName} email= ${UpdatedEmail} text= ${UpdatedText}`;
      setContent(content);
    }
  };
  return (
    <>
      <div className={`container ${styles.contact_us}`}>
        <h1>Contact Us</h1>
        <p>
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.{" "}
        </p>
        <div className={`${styles.contact_form_container}`}>
          <div className={`${styles.contact_form}`}>
            <div className={`${styles.btns}`}>
              <Button
                text={"VIA SUPPORT CHAT"}
                icon={<MdMessage fontSize={"24px"} />}
              ></Button>
              <Button
                text={"VIA CALL"}
                icon={<MdCall fontSize={"24px"} />}
              ></Button>
            </div>
            <Button
              borderLess={"true"}
              text={"VIA EMAIL FORM"}
              icon={<MdMessage fontSize={"24px"} />}
            ></Button>
            <form action="" onSubmit={onSubmitBtn}>
              <label htmlFor="">Name</label>
              <div className={`${styles.form_input}`}>
                <input type="text" name="name" />
              </div>
              <label htmlFor="">Email</label>
              <div className={`${styles.form_input}`}>
                <input type="email" name="email" />
              </div>
              <label htmlFor="">Name</label>
              <div className={`${styles.form_input}`}>
                <textarea name="text" id="" rows="5"></textarea>
              </div>
              <div className={`${styles.submit_btn}`}>
                <Button text={"Submit"}></Button>
              </div>
            </form>
          </div>
          <div className={`${styles.contact_img} `}>
            <img src="public/images/Service.svg" alt="" />
          </div>
        </div>
        <div>{content}</div>
      </div>
    </>
  );
};

export default Contact;
