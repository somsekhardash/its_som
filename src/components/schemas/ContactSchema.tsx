import { useEffect, useState } from "react";
import {
  ISchema,
  ComponentTypes,
  SchemaTypes,
} from "components/schemas/interfaces";
import useHttp from "../share/UseHttp";
import { CONTACT_URL, SECRET_KEY } from "config";

export function ContactAPI() {
  const [ContactLoader, ContactData, ContactError, GetContact] = useHttp();
  const [SetContactLoader, SetContactData, SetContactError, SetContact] =
    useHttp();

  const [contactDefinition, setDefinition] = useState({} as any);

  const getContact = () => {
    GetContact(`${CONTACT_URL}/latest`, {
      method: "GET",
      headers: {
        "secret-key": SECRET_KEY,
      },
    });
  };

  const setContact = (data: string, direct: boolean = false) => {
    if (!direct) contactDefinition.contactMe.push(data);

    SetContact(CONTACT_URL, {
      method: "PUT",
      headers: {
        "secret-key": SECRET_KEY,
        "Content-Type": "application/json",
      },
      body: direct ? JSON.stringify(data) : JSON.stringify(contactDefinition),
    });
  };

  useEffect(() => {
    !ContactError && setDefinition(ContactData);
  }, [ContactError, ContactData]);

  return { contactDefinition, getContact, setContact };
}
