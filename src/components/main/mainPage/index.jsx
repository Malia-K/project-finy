import { Header } from "../header";
import { Theory } from '../theory';
import { Zagolovok } from '../zagolovok';
import { Games } from '../games';
import { Footer } from '../footer';

export const Main = () => {
  return (
    <>
        <Header />
        <Zagolovok />
        <Theory />
        <Games />
        <Footer />
    </>
  );
}
