import isEmailValid from "../../utils/isEmailValid";
import formatPhone from "../../utils/formatPhone";

import { Form, ButtonContainer } from "./styles";

import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import Button from "../Button";

import React, { Ref, forwardRef, useImperativeHandle, useState } from "react";
import useFormErrors from "../../hooks/useFormError";
import useCategories from "../../hooks/useCategories";

import ContactWithoutId from "../../types/ContactWithoutId";

interface ContactFormProps {
  buttonLabel: string;
  onSubmit: (contactData: ContactWithoutId) => Promise<void>;
}

export type ContactFormRef = {
  setFieldsValues: (contact: ContactWithoutId) => void;
  resetFieldsValues: () => void;
};

const ContactForm = forwardRef(
  ({ buttonLabel, onSubmit }: ContactFormProps, ref: Ref<ContactFormRef>) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { errors, addError, removeError, getErrorByFieldName } =
      useFormErrors();
    const { categories, isLoading } = useCategories();

    const isFormValid = name && errors.length === 0;

    function setFieldsValues(contact: ContactWithoutId) {
      const {
        name: cName,
        email: cEmail,
        phone: cPhone,
        category_id: cCatId,
      } = contact;

      setName(cName);
      if (cEmail) setEmail(cEmail);
      if (cPhone) setPhone(formatPhone(cPhone));
      if (cCatId) setCategoryId(cCatId);
    }

    function resetFieldsValues() {
      setName("");
      setPhone("");
      setEmail("");
      setCategoryId("");
    }

    useImperativeHandle(
      ref,
      () => ({
        setFieldsValues,
        resetFieldsValues,
      }),
      []
    );

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
        addError({
          field: "email",
          message: "O formato do e-mail é inválido.",
        });
      } else {
        removeError("email");
      }
    }

    function handlePhoneChange(event: React.ChangeEvent<HTMLInputElement>) {
      setPhone(formatPhone(event.target.value));
    }

    function handleCategoryIdChange(
      event: React.ChangeEvent<HTMLSelectElement>
    ) {
      setCategoryId(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();

      setIsSubmitting(true);

      await onSubmit({ name, email, phone, category_id: categoryId });

      setIsSubmitting(false);
    }

    return (
      <>
        <Form onSubmit={handleSubmit} noValidate>
          <FormGroup error={getErrorByFieldName("name")}>
            <Input
              placeholder="Nome *"
              value={name}
              disabled={isSubmitting}
              onChange={handleNameChange}
              $error={Boolean(getErrorByFieldName("name"))}
            />
          </FormGroup>
          <FormGroup error={getErrorByFieldName("email")}>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              disabled={isSubmitting}
              onChange={handleEmailChange}
              $error={Boolean(getErrorByFieldName("email"))}
            />
          </FormGroup>
          <FormGroup>
            <Input
              placeholder="Telefone"
              value={phone}
              disabled={isSubmitting}
              onChange={handlePhoneChange}
              maxLength={15}
            />
          </FormGroup>
          <FormGroup isLoading={isLoading}>
            <Select
              value={categoryId}
              onChange={handleCategoryIdChange}
              disabled={isLoading || isSubmitting}
            >
              <option value="">Sem categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FormGroup>
          <ButtonContainer>
            <Button
              type="submit"
              disabled={!isFormValid}
              isLoading={isSubmitting}
            >
              {buttonLabel}
            </Button>
          </ButtonContainer>
        </Form>
      </>
    );
  }
);
export default ContactForm;
