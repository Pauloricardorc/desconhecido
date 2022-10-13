import { useSession } from 'next-auth/react';
import { NextResponse } from 'next/server';

export default function middleware() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return NextResponse.redirect('/home');
  }

  return NextResponse.redirect('/');
}
