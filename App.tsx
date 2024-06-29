import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image } from 'react-native'
import Login from './screens/Login'
import Signup from './screens/Signup'
import { useState } from 'react'

export default function App() {
  const [action, setAction] = useState<string>('login')
  return (
    <>
      <StatusBar style='light' />
      <Image
        source={require('./assets/bg.jpg')}
        style={[
          StyleSheet.absoluteFill,
          {
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          },
        ]}
      />
      {action === 'login' ? (
        <Login handleAction={(value) => setAction(value)} />
      ) : (
        <Signup handleAction={(value) => setAction(value)} />
      )}
    </>
  )
}

const styles = StyleSheet.create({})
