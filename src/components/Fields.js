import Field from "./Field";

function Fields({ company }) {
  const { name, detailed, doctype, docnum, employees } = company;
  return (
    <>
      <Field title="Nombre de la empresa" text={name} />
      <Field title="Razon Social" text={detailed} />
      <Field title="Tipo de identificacion" text={doctype} />
      <Field title="Identificacion" text={docnum} />
      <Field title="# de empleados" text={`1 - ${employees}`} />
    </>
  );
}

export default Fields;
