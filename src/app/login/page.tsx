'use client';

import { Container, ImageContainer } from './styles';
import { Logo } from 'assets';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { CustomText } from '../../styles/globalComponents';

export default function Login() {
  const session = useSession();

  if (session.status === 'authenticated') {
    redirect('/');
  }

  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} alt="Logo do CITi" />
      </ImageContainer>
      <CustomText bold white size="40px" margin="20px 0">
        NextJS Boilerplate
      </CustomText>
      <CustomText regular white secondary>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{' '}
        <strong>&hearts;</strong> by CITi
      </CustomText>
    </Container>
  );
}