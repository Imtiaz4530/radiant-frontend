import ProtectedAuth from "@/component/protectRoute/ProtectedAuth";
import Form from "@/component/reusable/Form/Form";

const Register = () => {
  return (
    <ProtectedAuth>
      <Form />
    </ProtectedAuth>
  );
};

export default Register;
