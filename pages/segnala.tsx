/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NextPage } from 'next';
import Button from '../components/Button';
import DangerLevelBar from '../components/DangerLevelBar';
import ImageInput from '../components/ImageInput';
import Input from '../components/Input';
import useReport from '../hook/useReport';

const segnala: NextPage = () => {
  const {
    siteLink,
    isUrlValid,
    setURL,
    siteName,
    dangerLevel,
    setDangerLevel,
  } = useReport();

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <section className="mx-4 pt-24 pb-6 lg:w-4/5 lg:py-24 flex flex-col justify-start items-start">
        <span className="text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-body font-bold">
          Hai trovato un Dark Pattern?
        </span>
        <span className="py-4 text-lg font-body text-justify lg:text-start">
          Faccelo sapere! Analizzeremo la tua segnalazione e, con il tuo
          consenso, la invieremo alla Hall of Shame (HoS)
        </span>
      </section>
      <section className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex flex-col lg:items-stretch lg:flex-row justify-center items-center">
          <div className="w-4/5 mb-6 lg:mb-0 flex flex-col lg:w-2/5 justify-between items-center lg:items-stretch">
            <div className="w-full my-4">
              <span className="text-sm font-body font-bold">
                Link del sito:*
              </span>
              <Input
                hint="link sito"
                value={siteLink?.toString() as string}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
                isInvalid={isUrlValid}
                errorText="l'url inserito non è valido"
                className="py-2"
              />
            </div>
            <div className="w-full my-4">
              <span className="text-sm font-body font-bold">Nome sito:*</span>
              <Input
                hint="nome sito"
                value={siteName as string}
                className="py-2"
              />
            </div>
            <select
              id="countries"
              className="border-2 border-gray-300 text-gray-900 text-sm font-body font-bold rounded-lg outline-none focus:ring-primary-main focus:border-primary-main w-full lg:w-full p-3 my-4"
            >
              <option selected>Scegli un Dark Pattern*</option>
              <option value="Nagging">Nagging</option>
              <option value="Obstruction">Obstruction</option>
              <option value="Sneaking">Sneaking</option>
              <option value="Interface Interference">
                Interface Interference
              </option>
              <option value="Forced Action">Forced Action</option>
            </select>
          </div>
          <div className="w-4/5 lg:w-2/5 flex justify-center items-center lg:justify-end">
            <ImageInput className="h-52 lg:w-96" />
          </div>
        </div>

        <textarea
          placeholder="Descrizione..."
          className="w-4/5 h-36 my-6 outline-none border-2 rounded-lg border-gray-400 focus:border-primary-main transition-all px-4 py-2"
        />
        <div className="w-4/5 mb-6 flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <span className="self-start">Livello di pericolosità:</span>
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <DangerLevelBar
              dangerLevel={dangerLevel}
              onChange={(e) => {
                setDangerLevel(e.target.value as '1' | '2' | '3' | '4' | '5');
              }}
            />
          </div>

          <Button variant="secondary" className="lg:self-end my-4">
            <span className="font-body text-white font-bold text-2xl">
              SEGNALA
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default segnala;
