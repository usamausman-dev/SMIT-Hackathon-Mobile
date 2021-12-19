import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import img from '../../src/screens/LogoKhanaSabkliye.png'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>KHANA SAB K LIYE</Header>
      <Paragraph>
        Needy People Get Food Easily Through Saylani.
      </Paragraph>

      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>

      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>

      
    </Background>
  )
}
