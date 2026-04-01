import Placeholder from 'react-bootstrap/Placeholder';

function BasicExample2() {
  return (
    <>
      <p aria-hidden="true">
        <Placeholder xs={6} />
      </p>

      <Placeholder.Button xs={4} aria-hidden="true" />
    </>
  );
}

export default BasicExample2;