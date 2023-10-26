import React from "react";
import {
  Drop,
  DropTitle,
  DropSpan,
  Form,
  Input,
  InputWrapper,
  TextInput,
  EmailInput,
  SubInput,
  Textarea,
  SubmitInput,
} from "./style.js";

import Container from "../styles/Container.styled.js";
import Footer from "../Footer/index.js";

function Contact() {
  return (
    <>
      <Drop>
        <Container>
          <DropTitle>
            <DropSpan>Drop </DropSpan>Me A line
          </DropTitle>
          <Form action="">
            <InputWrapper>
              <TextInput type="text" placeholder="Your Name" />
              <EmailInput type="email" placeholder="Your Email" />
            </InputWrapper>
            <SubInput type="text" className="sub" placeholder="Your Subject" />
            <Textarea cols="30" rows="10" placeholder="Your Message"></Textarea>
            <SubmitInput type="submit" value="Send Message" />
          </Form>
        </Container>
      </Drop>
      <Footer />
    </>
  );
}
export default Contact;
