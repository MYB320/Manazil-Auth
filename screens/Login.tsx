import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated'
import theme from '../theme'

export default function Login({
  handleAction,
}: {
  handleAction: (value: string) => void
}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Animated.View entering={FadeInLeft.delay(200)}>
          <Text style={styles.title}>Manazil</Text>
        </Animated.View>
        <Animated.View
          style={styles.titleBox}
          entering={FadeInRight.delay(200)}
        >
          <Ionicons name='person-outline' size={20} color='white' />
          <Text style={{ fontSize: 22, color: 'white' }}>Login</Text>
        </Animated.View>
      </View>
      <KeyboardAvoidingView>
        <Animated.View
          style={styles.Cardcontainer}
          entering={FadeInDown.delay(400)}
        >
          <View style={styles.inputBox}>
            <Ionicons name='at' size={16} color='black' />
            <TextInput
              style={styles.input}
              inputMode='email'
              placeholder='Email'
            />
          </View>
          <View style={styles.inputBox}>
            <Ionicons name='key-outline' size={16} color='black' />
            <TextInput
              style={styles.input}
              placeholder='Password'
              inputMode='text'
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Don't have an anccount?{' '}
            <TouchableOpacity onPress={() => handleAction('signup')}>
              <Text
                style={{
                  color: theme.light.secondary,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  textDecorationLine: 'underline',
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </Text>
        </Animated.View>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  Cardcontainer: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 16,
    borderRadius: 18,
    gap: 8,
  },
  headerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  title: {
    fontSize: 26,
    letterSpacing: 1.8,
    fontWeight: 'bold',
    color: 'white',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    backgroundColor: 'whitesmoke',
    borderRadius: 18,
  },
  input: { flex: 1 },
  btn: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 18,
    backgroundColor: theme.light.primary,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
  },
})
