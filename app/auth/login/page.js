import ProtectedAuth from "@/component/protectRoute/ProtectedAuth";
import Form from "@/component/reusable/Form/Form";

const Login = async () => {
  return (
    <ProtectedAuth>
      <Form />
    </ProtectedAuth>
  );
};

export default Login;
