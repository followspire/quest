import React from 'react';
import tw from 'twin.macro';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import LandingImage from '../../assets/landing.png';

const Container = tw.div`grid gap-4 h-screen items-center justify-items-center text-center px-1 bg-gradient-to-b from-gray-400 to-gray-600`;

const Title = tw.h1`text-5xl md:text-6xl font-bold text-yellow-400`;
const Subtitle = tw.h2`text-3xl font-medium text-yellow-400`;
const Image = tw.img`w-full max-w-2xl`;

const Text = tw.p`text-lg text-black text-center px-4`;

function Landing() {
  return (
    <Container>
      <Title css={{
        'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;',
      }}
      >
        Следуй Своему Острию
      </Title>
      <Image src={LandingImage} alt="landing" />
      <Text>
        Готовы отправиться в путешевствие во времени и проникнуть в мир великих русских князей?
        <br />
        Тогда, приглашаем вас на наш новый квест «Следуй Своему Острию».
        <br />
        Покажи свою мужественность и «Иди на вы».
      </Text>
      <Subtitle css={{
        'text-shadow': '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;',
      }}
      >
        Скоро открытие
      </Subtitle>
    </Container>
  );
}

export default React.memo(Landing);
