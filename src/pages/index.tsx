import { Envelope, Lock } from 'phosphor-react';

import { signIn } from 'next-auth/react';

import Image from 'next/image';
import Discord from '../assets/discord.svg';
import Github from '../assets/github.svg';
import GoogleIcon from '../assets/google.svg';
import { Logo } from '../assets/Logo';
import { TextInput } from '../components/TextInput';
import { ButtonAuth } from '../components/TypeLogin';

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Logo />

      <header className="mt-2 flex max-w-[360px] flex-col gap-2">
        <span className="text-3xl font-bold text-gray-100">
          Plataforma desconhecido
        </span>

        <span className="text-center text-base text-gray-600">
          uma plataforma de conhecimendo totalmente desconhecida
        </span>
      </header>

      <form className="mt-10 flex w-full max-w-[360px] flex-col items-stretch gap-4">
        <label htmlFor="email" className="flex flex-col gap-2">
          <span className="text-base text-gray-100">Endereço de e-mail</span>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-2">
          <span className="text-base text-gray-100">Sua senha</span>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
            />
          </TextInput.Root>
        </label>

        <button className="h-12 w-full rounded bg-indigo-700 text-base font-semibold text-gray-100 ring-indigo-700 transition focus-within:ring-2 hover:bg-indigo-800">
          Entrar agora
        </button>
      </form>

      <footer className="mt-4 flex items-center justify-center gap-4">
        <ButtonAuth>
          <Image width={24} height={24} src={GoogleIcon} alt="" />
        </ButtonAuth>
        <ButtonAuth onClick={() => signIn('github')}>
          <Image width={24} height={24} src={Github} alt="" />
        </ButtonAuth>
        <ButtonAuth>
          <Image width={24} height={24} src={Discord} alt="" />
        </ButtonAuth>
      </footer>
    </div>
  );
}
