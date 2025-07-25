import React from "react";
import { Tabs } from "../compound/Tabs/Tabs";
import { Accordion } from "../compound/Accordion/Accordion";
import { Dropdown } from "../compound/Dropdown/Dropdown";
import { Carousel } from "../compound/Carousel/Carousel";
import { Modal } from "../compound/Modal/Modal";
import { Form } from "../compound/Form/Form";

const codeBlockStyle = {
  background: "#23272f",
  color: "#f8f8f2",
  borderRadius: "8px",
  padding: "2rem",
  margin: "2rem 0",
  fontSize: "0.95rem",
  lineHeight: 1.7,
  overflowX: "auto" as const,
};

const sectionHeaderStyle = {
  fontSize: "2rem",
  margin: "0 0 2rem 0",
  textAlign: "center" as const,
};

const CompoundComponentShowcasePage: React.FC = () => {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 32 }}>
      <h1>🧩 Compound Components Showcase</h1>
      <section>
        <h2>Tabs</h2>
        <Tabs defaultIndex={1}>
          <Tabs.List>
            <Tabs.Tab index={0}>Tab One</Tabs.Tab>
            <Tabs.Tab index={1}>Tab Two</Tabs.Tab>
            <Tabs.Tab index={2}>Tab Three</Tabs.Tab>
            <Tabs.Tab index={3}>Tab Four</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel index={0}>Content for Tab One</Tabs.Panel>
          <Tabs.Panel index={1}>Content for Tab Two</Tabs.Panel>
          <Tabs.Panel index={2}>Content for Tab Three</Tabs.Panel>
          <Tabs.Panel index={3}>Content for Tab Four</Tabs.Panel>
        </Tabs>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Tabs defaultIndex={1}>
  <Tabs.List>
    <Tabs.Tab index={0}>Tab One</Tabs.Tab>
    <Tabs.Tab index={1}>Tab Two</Tabs.Tab>
    <Tabs.Tab index={2}>Tab Three</Tabs.Tab>
    <Tabs.Tab index={3}>Tab Four</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panel index={0}>Content for Tab One</Tabs.Panel>
  <Tabs.Panel index={1}>Content for Tab Two</Tabs.Panel>
  <Tabs.Panel index={2}>Content for Tab Three</Tabs.Panel>
  <Tabs.Panel index={3}>Content for Tab Four</Tabs.Panel>
</Tabs>`}</code>
          </pre>
        </div>
      </section>
      <section>
        <h2>Accordion</h2>
        <div>
          <Accordion allowMultiple={true}>
            <Accordion.Item index={0}>
              <Accordion.Header>Section 1</Accordion.Header>
              <Accordion.Panel>Panel 1 content</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item index={1}>
              <Accordion.Header>Section 2</Accordion.Header>
              <Accordion.Panel>Panel 2 content</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </div>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Accordion allowMultiple={true}>
  <Accordion.Item index={0}>
    <Accordion.Header>Section 1</Accordion.Header>
    <Accordion.Panel>Panel 1 content</Accordion.Panel>
  </Accordion.Item>
  <Accordion.Item index={1}>
    <Accordion.Header>Section 2</Accordion.Header>
    <Accordion.Panel>Panel 2 content</Accordion.Panel>
  </Accordion.Item>
</Accordion>`}</code>
          </pre>
        </div>
      </section>
      <section>
        <h2>Dropdown</h2>
        <Dropdown>
          <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
          <Dropdown.Menu>
            <Dropdown.Item>Option 1</Dropdown.Item>
            <Dropdown.Item>Option 2</Dropdown.Item>
            <Dropdown.Item>Option 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Dropdown>
  <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
  <Dropdown.Menu>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
    <Dropdown.Item>Option 3</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>`}</code>
          </pre>
        </div>
      </section>
      <section>
        <h2>Modal</h2>
        <Modal>
          <Modal.Trigger>Open Modal</Modal.Trigger>
          <Modal.Overlay />
          <Modal.Content>
            <h3>Modal Title</h3>
            <p>
              This is a modal dialog. Press Escape or click outside to close.
            </p>
          </Modal.Content>
        </Modal>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Modal>
  <Modal.Trigger>Open Modal</Modal.Trigger>
  <Modal.Overlay />
  <Modal.Content>
    <h3>Modal Title</h3>
    <p>This is a modal dialog. Press Escape or click outside to close.</p>
  </Modal.Content>
</Modal>`}</code>
          </pre>
        </div>
      </section>
      <section>
        <h2>Form</h2>
        <Form
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (!values.email) errors.email = "Email required";
            if (!values.password) errors.password = "Password required";
            return errors;
          }}
          onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        >
          <Form.Field name="email">
            <Form.Label>Email</Form.Label>
            <Form.Input type="email" placeholder="Email" />
            <Form.Error />
          </Form.Field>
          <Form.Field name="password">
            <Form.Label>Password</Form.Label>
            <Form.Input type="password" placeholder="Password" />
            <Form.Error />
          </Form.Field>
          <button type="submit">Submit</button>
        </Form>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Form
  initialValues={{ email: '', password: '' }}
  validate={values => {
    const errors: Record<string, string> = {};
    if (!values.email) errors.email = 'Email required';
    if (!values.password) errors.password = 'Password required';
    return errors;
  }}
  onSubmit={values => alert(JSON.stringify(values, null, 2))}
>
  <Form.Field name="email">
    <Form.Label>Email</Form.Label>
    <Form.Input type="email" placeholder="Email" />
    <Form.Error />
  </Form.Field>
  <Form.Field name="password">
    <Form.Label>Password</Form.Label>
    <Form.Input type="password" placeholder="Password" />
    <Form.Error />
  </Form.Field>
  <button type="submit">Submit</button>
</Form>`}</code>
          </pre>
        </div>
      </section>
      <section>
        <h2>Carousel</h2>
        <Carousel>
          <Carousel.Slide index={0}>
            <div
              style={{
                height: 120,
                background: "#eee",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Slide 1
            </div>
          </Carousel.Slide>
          <Carousel.Slide index={1}>
            <div
              style={{
                height: 120,
                background: "#ddd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Slide 2
            </div>
          </Carousel.Slide>
          <Carousel.Slide index={2}>
            <div
              style={{
                height: 120,
                background: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Slide 3
            </div>
          </Carousel.Slide>
          <Carousel.Prev />
          <Carousel.Next />
          <Carousel.Indicators />
        </Carousel>
        <div style={codeBlockStyle}>
          <h2 style={sectionHeaderStyle}>Implementation Example</h2>
          <pre style={{ margin: 0 }}>
            <code>{`<Carousel>
  <Carousel.Slide index={0}>
    <div style={{ height: 120, background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Slide 1
    </div>
  </Carousel.Slide>
  <Carousel.Slide index={1}>
    <div style={{ height: 120, background: '#ddd', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Slide 2
    </div>
  </Carousel.Slide>
  <Carousel.Slide index={2}>
    <div style={{ height: 120, background: '#ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      Slide 3
    </div>
  </Carousel.Slide>
  <Carousel.Prev />
  <Carousel.Next />
  <Carousel.Indicators />
</Carousel>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default CompoundComponentShowcasePage;
