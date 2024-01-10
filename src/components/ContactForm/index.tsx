import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import React, { useState } from "react";
import useFormErrors from "../../hooks/useFormError";
import useCategories from "../../hooks/useCategories";

interface ContactFormProps {
  buttonLabel: string;
}

export default function ContactForm({ buttonLabel }: ContactFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { errors, addError, removeError, getErrorByFieldName } =
    useFormErrors();
  const { categories, isLoading } = useCategories();

  const isFormValid = name && errors.length === 0;

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
    const name = event.target.value;

    if (!name) {
      addError({ field: "name", message: "Nome é obrigatório." });
    } else {
      removeError("name");
    }
  }

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    const email = event.target.value;

    if (email && !isEmailValid(email)) {
      addError({ field: "email", message: "O formato do e-mail é inválido." });
    } else {
      removeError("email");
    }
  }

  function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPhone(formatPhone(event.target.value));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorByFieldName("name")}>
          <Input
            placeholder="Nome *"
            onChange={handleNameChange}
            $error={Boolean(getErrorByFieldName("name"))}
          />
        </FormGroup>
        <FormGroup error={getErrorByFieldName("email")}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            $error={Boolean(getErrorByFieldName("email"))}
          />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={15}
          />
        </FormGroup>
        <FormGroup isLoading={isLoading}>
          <Select disabled={isLoading}>
            <option value="">Sem categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </FormGroup>
        <ButtonContainer>
          <Button type="submit" disabled={!isFormValid}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
}
