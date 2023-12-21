import isEmailValid from "../../utils/isEmailValid";

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import React, { useState } from "react";
import useFormErrors from "../../hooks/useFormError";

interface ContactFormProps {
  buttonLabel: string;
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { errors, addError, removeError, getErrorByFieldName } =
    useFormErrors();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);

    if (!event.target.value) {
      addError("name", "Nome é obrigatório.");
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    const email = event.target.value;

    if (email && !isEmailValid(email)) {
      const errorExists = errors.find((error) => error.field === "email");

      if (errorExists) return;

      addError("email", "O formato do e-mail é inválido.");
    } else {
      removeError("email");
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(`nome:${name}, email:${email}`);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorByFieldName("name")}>
        <Input
          placeholder="Nome"
          onChange={handleNameChange}
          $error={Boolean(getErrorByFieldName("name"))}
        />
      </FormGroup>
      <FormGroup error={getErrorByFieldName("email")}>
        <Input
          placeholder="E-mail"
          onChange={handleEmailChange}
          $error={Boolean(getErrorByFieldName("email"))}
        />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
