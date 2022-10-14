import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function Home() {
  return <h1>Home</h1>;
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
