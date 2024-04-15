import { StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { Text, View } from '@/components/Themed';
import BaseInput from '@/components/BaseInput';
import { useSession } from '@/context/ctx';

export default function signIn() {
  const { signIn } = useSession();

  return (
    <View style={styles.container}>
      <BaseInput label='EMAIL' />
      <BaseInput label='SENHA' />
      <Pressable
        style={styles.button}
        onPress={() => {
          signIn();
          router.replace('/');
        }}>
        <Text style={styles.text} >
          Entrar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: '#CB3BE6',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
});
