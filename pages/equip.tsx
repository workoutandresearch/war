import { useWallet } from '@txnlab/use-wallet'
import Head from 'next/head'
import Link from 'next/link'
import Account from 'components/MainTools/Account'
import React, { useState } from 'react'
import Connect from 'components/MainTools/Connect'
import Navbar from 'components/Navbar'
import Transact from 'components/MainTools/Transact'
import { Center, useColorModeValue, SimpleGrid, Text, Box, HStack } from '@chakra-ui/react'
import { FullGlowButton } from 'components/Buttons'
import styles2 from '../styles/glow.module.css'
import Footer from 'components/Footer'
import EquipCharacter from 'components/MainTools/EquipChar'

export default function Equip() {
  const { isActive } = useWallet()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const gradientText = useColorModeValue(styles2.textAnimatedGlowL, styles2.textAnimatedGlowD)
  const xLightColor = useColorModeValue('orange.100','cyan.100')
  const lightColor = useColorModeValue('orange.200','cyan.200')

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>Abyssal Portal - Fallen Order</title>
        <meta name="description" content="Developed by Angels Of Ares" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Text mt='20px' className={`${gradientText} responsive-font`}>Character Equip</Text>
      <Center my={4}>
        <EquipCharacter />
      </Center>
      <Footer />
    </>
  )
}