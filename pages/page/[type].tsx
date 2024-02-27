import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log('DYNAMIC PAGE locale', locale);
  return {
    props: {},
  };
};

const OrderTypePage = function OrderTypePage() {
  const { locale } = useRouter();
  return <>DYNAMIC PAGE locale useRouter {locale}</>;
};

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export default OrderTypePage;
