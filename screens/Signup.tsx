import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
} from 'react-native-reanimated'
import theme from '../theme'
import { useState } from 'react'

const StepCounter = ({ check }: { check: [boolean, boolean, boolean] }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32,
        marginBottom: 8,
      }}
    >
      <MaterialCommunityIcons
        name={check[0] ? 'check-circle-outline' : 'numeric-1-circle-outline'}
        size={24}
        color={check[0] ? theme.light.primary : 'black'}
      />
      <View
        style={{
          flex: 1,
          height: 2,
          backgroundColor: check[0] ? theme.light.primary : 'black',
          marginHorizontal: 4,
        }}
      />

      <MaterialCommunityIcons
        name={check[1] ? 'check-circle-outline' : 'numeric-2-circle-outline'}
        size={24}
        color={check[1] ? theme.light.primary : 'black'}
      />
      <View
        style={{
          flex: 1,
          height: 2,
          backgroundColor: check[1] ? theme.light.primary : 'black',
          marginHorizontal: 4,
        }}
      />
      <MaterialCommunityIcons
        name={check[2] ? 'check-circle-outline' : 'numeric-3-circle-outline'}
        size={24}
        color={check[2] ? theme.light.primary : 'black'}
      />
    </View>
  )
}

export default function Signup({
  handleAction,
}: {
  handleAction: (value: string) => void
}) {
  const [check, setCheck] = useState<[boolean, boolean, boolean]>([
    false,
    false,
    false,
  ])
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
          <Ionicons name='person-add-outline' size={20} color='white' />
          <Text style={{ fontSize: 22, color: 'white' }}>Signup</Text>
        </Animated.View>
      </View>
      <KeyboardAvoidingView>
        <Animated.View
          style={styles.Cardcontainer}
          entering={FadeInDown.delay(400)}
        >
          <StepCounter check={check} />
          {check[0] == false && (
            <>
              <View style={styles.inputBox}>
                <Ionicons name='person-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  inputMode='text'
                  placeholder='Username'
                />
              </View>
              <View style={styles.inputBox}>
                <Ionicons name='call-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  inputMode='tel'
                  placeholder='Phone number'
                />
              </View>
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
              <View style={{ flexDirection: 'row', gap: 8, marginVertical: 8 }}>
                <TouchableOpacity
                  disabled={check[0] == false}
                  style={[
                    styles.btn,
                    {
                      backgroundColor:
                        check[0] == false ? 'lightgray' : 'whitesmoke',
                    },
                  ]}
                  activeOpacity={0.6}
                  onPress={() => setCheck([false, false, false])}
                >
                  <Text
                    style={[
                      styles.btnText,
                      { color: check[0] == false ? 'gray' : 'black' },
                    ]}
                  >
                    Previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.6}
                  onPress={() => setCheck([true, false, false])}
                >
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {check[0] == true && check[1] == false && (
            <>
              <View style={styles.inputBox}>
                <Ionicons name='person-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  inputMode='text'
                  placeholder='Name'
                />
              </View>
              <View style={styles.inputBox}>
                <Ionicons name='person-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  inputMode='text'
                  placeholder='Last name'
                />
              </View>
              <View style={styles.inputBox}>
                <Ionicons name='refresh-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  inputMode='tel'
                  placeholder='Age'
                />
              </View>
              <View style={styles.inputBox}>
                <Ionicons name='map-outline' size={16} color='black' />
                <TextInput
                  style={styles.input}
                  placeholder='Adress'
                  inputMode='text'
                />
              </View>
              <View style={{ flexDirection: 'row', gap: 8, marginVertical: 8 }}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'whitesmoke',
                    },
                  ]}
                  activeOpacity={0.6}
                  onPress={() => setCheck([false, false, false])}
                >
                  <Text style={[styles.btnText, { color: 'black' }]}>
                    Previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.6}
                  onPress={() => setCheck([true, true, false])}
                >
                  <Text style={styles.btnText}>Next</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {check[0] == true && check[1] == true && check[2] == false && (
            <>
              <View style={styles.inputBox}>
                <Ionicons
                  name='information-circle-outline'
                  size={16}
                  color='black'
                />
                <TextInput
                  style={styles.input}
                  inputMode='text'
                  placeholder='Univercity'
                />
              </View>
              <View style={styles.inputBox}>
                <Ionicons
                  name='information-circle-outline'
                  size={16}
                  color='black'
                />
                <TextInput
                  style={styles.input}
                  inputMode='text'
                  placeholder='About you'
                />
              </View>
              <View style={{ flexDirection: 'row', gap: 8, marginVertical: 8 }}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'whitesmoke',
                    },
                  ]}
                  activeOpacity={0.6}
                  onPress={() => setCheck([true, false, false])}
                >
                  <Text style={[styles.btnText, { color: 'black' }]}>
                    Previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.6}
                  onPress={() => setCheck([true, true, true])}
                >
                  <Text style={styles.btnText}>Signup</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {check[0] && check[1] && check[2] && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
                justifyContent: 'center',
              }}
            >
              <Ionicons
                name='checkmark-done-outline'
                size={38}
                color={theme.light.accent}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 24,
                  color: theme.light.accent,
                }}
              >
                Signup seccessfully
              </Text>
            </View>
          )}
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <TouchableOpacity onPress={() => handleAction('login')}>
              <Text
                style={{
                  color: theme.light.secondary,
                  fontWeight: 'bold',
                  fontStyle: 'italic',
                  textDecorationLine: 'underline',
                }}
              >
                Login
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
    flex: 1,
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
