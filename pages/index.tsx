import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log('MAIN PAGE LOCALE', locale);

  return {
    props: {},
  };
};

const Home = function Home() {
  const { locale } = useRouter();

  return (
    <ul>
      <li>MAIN PAGE locale useRouter {locale}</li>
      <li>
        <NextLink href="/" locale="de">
          set de
        </NextLink>
      </li>
      <li>
        <NextLink href="/" locale="en">
          set en
        </NextLink>
      </li>
      <li>
        <NextLink href="/page/foo" prefetch={false}>
          go to /page/foo
        </NextLink>
      </li>
    </ul>
  );
};

export default Home;
