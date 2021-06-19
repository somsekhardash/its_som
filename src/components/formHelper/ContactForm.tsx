import React, { useState } from "react";
import { Button, Card, Image, Segment } from "semantic-ui-react";

export default function ContactForm({ contactDefinition, setContact }: any) {
  const [definition, setDefinition] = useState(contactDefinition || null);
  if (!contactDefinition.contactMe) return null;
  const cards = definition.contactMe;

  const deleteMe = (id: string) => {
    const cardsNew = cards.filter((card: any) => card.id != id);
    setDefinition({
      contactMe: [...cardsNew],
    });
  };

  const saveForm = () => {
    setContact(definition, true);
  };

  return (
    <div className="dash" id="contact">
      <Segment placeholder>
        <h3>Messages</h3>
        <Card.Group>
          {cards.map((card: any, index: number) => {
            return (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>{card.fullName}</Card.Header>
                  <Card.Meta>{card.email}</Card.Meta>
                  <Card.Description>{card.message}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button
                      basic
                      color="red"
                      onClick={() => {
                        deleteMe(card.id);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
        <button className="ui secondary button" onClick={() => saveForm()}>
          Save
        </button>
      </Segment>
    </div>
  );
}
