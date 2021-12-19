import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
// import MobileDatePicker from '@mui/lab/MobileDatePicker'
// import * as React from 'react'

export default function Details({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [Fname, setFName] = useState({ value: '', error: '' })
  const [cnic, setcnic] = useState({ value: '', error: '' })
  const [sallary, setsallary] = useState({ value: '', error: '' })

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const FnameError = nameValidator(Fname.value)
    const cnicError = emailValidator(cnic.value)
    const sallaryError = passwordValidator(sallary.value)
    if (cnicError || sallaryError || nameError || FnameError) {
      setName({ ...name, error: nameError })
      setFName({ ...Fname, error: FnameError })
      setcnic({ ...cnic, error: cnicError })
      setsallary({ ...sallary, error: sallaryError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Make your Profile</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Father Name"
        returnKeyType="next"
        value={Fname.value}
        onChangeText={(text) => setFName({ value: text, error: '' })}
        error={!!Fname.error}
        errorText={Fname.error}
      />

      <TextInput
        label="CNIC"
        returnKeyType="next"
        value={cnic.value}
        onChangeText={(text) => setcnic({ value: text, error: '' })}
        error={!!cnic.error}
        errorText={cnic.error}
        autoCapitalize="none"
        autoCompleteType="cnic"
        textContentType="cnicAddress"
        keyboardType="cnic-address"
      />
      <TextInput
        label="sallary"
        returnKeyType="done"
        value={sallary.value}
        onChangeText={(text) => setsallary({ value: text, error: '' })}
        error={!!sallary.error}
        errorText={sallary.error}
        secureTextEntry
      />

      {/* <MobileDatePicker
        label="Date mobile"
        inputFormat="MM/dd/yyyy"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      /> */}
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
