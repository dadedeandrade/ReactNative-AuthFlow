import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import logo from "../../assets/ico.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);

  const passwordRef = React.createRef<TextInput>();

  const { onLogin } = useAuth();

  const login = async () => {
    const result = await onLogin(username, password);

    if (result && result.error) {
      setUsername("");
      setPassword("");
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.presentation_container}>
        <Image style={styles.tinyLogo} source={logo} />
        <Text style={styles.presentation_textBold}>LOGIN</Text>
        <Text style={styles.presentation_text}>
          Insira seus dados pra continuar
        </Text>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          onFocus={() => setError(false)}
          style={styles.input}
          value={username}
          onChangeText={(e) => setUsername(e)}
          placeholder="ex: joãofut123@exemplo.com"
          onSubmitEditing={() => {
            passwordRef.current!.focus();
          }}
          returnKeyType="next"
          blurOnSubmit={false}
        ></TextInput>
      </View>
      <View style={styles.input_container}>
        <Text style={styles.label}>SENHA</Text>
        <TextInput
          onFocus={() => setError(false)}
          style={styles.input}
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Precisa ter pelo menos 5 caracteres"
          secureTextEntry={true}
          ref={passwordRef!}
        ></TextInput>
      </View>

      {isError && (
        <View style={styles.error_container}>
          <Text style={styles.error_msg}>
            Confira os dados de acesso e tente novamente!
          </Text>
        </View>
      )}

      <Pressable style={styles.submit_button} onPress={login}>
        <Text style={styles.submit_button_text}>Entrar</Text>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  presentation_container: {
    marginBottom: 50,
    width: "80%",
    gap: 7,
  },
  tinyLogo: { width: 50, height: 50 },
  presentation_textBold: {
    fontSize: 16,
    fontWeight: "bold",
  },
  presentation_text: {},

  input_container: {
    alignItems: "flex-start",
    margin: 10,
    width: "80%",
  },
  label: {
    color: "#CB3BE6",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  error_container: {
    justifyContent: "flex-start",
    width: "80%",
  },
  error_msg: {
    fontSize: 12,
  },
  submit_button: {
    marginVertical: 25,
    backgroundColor: "#CB3BE6",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  submit_button_text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
