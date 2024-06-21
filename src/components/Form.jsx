import { useState } from "react";
import { UiButton } from "./ui/UiButton";
import { UiFile } from "./ui/UiFiles/UiFiles";
import { UiGroupCheckbox } from "./ui/UiGroupCheckbox";
import { UiHeader } from "./ui/UiHeader";
import { UiInput } from "./ui/UiInput";
import { UiSelect } from "./ui/UiSelect";
import { UiTextArea } from "./ui/UiTextArea";

const selectValues = [
  { id: 1, name: "Francia" },
  { id: 2, name: "Italia", default: true },
  { id: 3, name: "Spagna" },
  { id: 4, name: "Germania" },
];

const UiGroupCheckboxValuesEmail = [
  {
    id: "comments",
    label: "Comments",
    type: "checkbox",
    value: 1,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    id: "candidatea",
    label: "Candidatea",
    type: "checkbox",
    value: 2,
    description: "Get notified when a candidate accepts for a job.",
  },
  {
    id: "offers",
    label: "Offers",
    type: "checkbox",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

const UiGroupCheckboxValuesNotification = [
  {
    id: "everything",
    name: "push-notification",
    label: "Everything",
    type: "radio",
    value: 4,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    id: "sameAsEmail",
    name: "push-notification",
    label: "Same as email",
    type: "radio",
    value: 5,
    description: "Get notified when a candidate accepts for a job.",
  },
  {
    id: "NoPushNotification",
    name: "push-notification",
    label: "No push notifications",
    type: "radio",
    value: 6,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

export const Form = () => {
  const defaultValue = selectValues.find((el) => el.default)
    ? selectValues.find((el) => el.default).id
    : 1;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    description: "",
    country: defaultValue,
    notificationPush: null,
    files: null,
  });

  const sendForm = () => {
    alert("Form Inviato!");
  };
  const cancelForm = () => {
    alert("Form Cancellato!");
  };

  return (
    <div>
      <h3 className="title">Form</h3>
      <form className="space-y-6">
        <UiHeader
          title="Profilo"
          subtitle="Queste infromazioni verranno visualizzare pubblicamente, quindi fai attenzione a quello che condividi!"
        />
        <div className="div-grid">
          <UiInput
            onChange={(e) => {
              let val = e.target.value;
              setForm({ ...form, firstName: val });
            }}
            id="firstName"
            label="FirstName"
            value={form.firstName}
          />
          <UiInput
            onChange={(e) => {
              let val = e.target.value;
              setForm({ ...form, lastName: val });
            }}
            id="lastName"
            label="LastName"
            value={form.lastName}
          />
        </div>
        <UiTextArea
          onChange={(e) => {
            let val = e.target.value;
            setForm({ ...form, description: val });
          }}
          id="description"
          label="Description"
          value={form.description}
          didascalia="Scrivi una breve descrizione su di te..."
        />
        <UiSelect
          onChange={(e) => {
            let val = e.target.value;
            setForm({ ...form, country: parseInt(val, 0) });
          }}
          defaultValue={defaultValue}
          id="country"
          label="Country"
          values={selectValues}
        />

        <UiHeader
          title="Notifications"
          subtitle="Ti faremo sempre sapere di cambiamenti importanti, ma sei tu a scegliere cos'altro vuoi sapere."
        />

        <UiGroupCheckbox
          title="By Email"
          values={UiGroupCheckboxValuesEmail}
          onChange={(selected) => {
            // const val = event.target.value;
            setForm({ ...form, notificationPush: selected });
          }}
        />
        <UiGroupCheckbox
          title="Push Notification"
          values={UiGroupCheckboxValuesNotification}
          onChange={(selected) => {
            // const val = event.target.value;
            setForm({ ...form, notificationPush: selected });
          }}
        />

        <UiFile
          id="myfile"
          label="Add photo"
          onAddFile={(files) => {
            setForm({ ...form, files });
          }}
        />

        <div style={{ paddingTop: "30px" }}>
          <div
            className="send-section"
            style={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}
          >
            <UiButton text="Cancel" onClick={cancelForm} classes="no-solid" />
            <UiButton text="Invio" onClick={sendForm} classes="solid" />
          </div>
        </div>
      </form>
      <div className="alert-stampa">
        <pre>
          <code>{JSON.stringify(form, undefined, 2)}</code>
        </pre>
      </div>
    </div>
  );
};
