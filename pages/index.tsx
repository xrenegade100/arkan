import type { NextPage } from 'next';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  useDisclosure,
  Modal,
  Image,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
} from '@chakra-ui/react';
import { useState } from 'react';

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModal] = useState(0);
  let src, text, title;

  switch (modal) {
    case 1: {
      title = 'Nagging';
      src = '/nagging.jpg';
      text =
        'I dark pattern appartenenti alla categoria Nagging si manifestano durante la normale interazione dell’utente come delle ripetute intrusioni. L’utente che è intenzionato a svolgere un task viene interrotto una o più volte da altri task non direttamente collegati al suo intento originale. La presenza di Nagging si può manifestare con pop-up che oscurano l’interfaccia, pubblicità improvvise a schermo intero causando disturbo, oppure qualunque azione che ostruisce o sposta il focus dell’utente. Nell’esempio riportato , nell’app Instagram un pop-up per attivare le notifiche interrompe il task che sta svolgendo l’utente, cioè scorrere il proprio feed. All’interno del pop-up non abbiamo un’ opzione per dire “No”, ma solo “Non adesso” e quindi il pop-up in seguito verrà mostrato nuovamente.';
      break;
    }
    case 2: {
      title = 'Roach Motel';
      src = '/roachmotel.png';
      text =
        'Descrive una situazione in cui è facile entrare ma da cui è difficile uscire. Molto spesso questo si verifica quando un utente si può iscrivere facilmente a un servizio ma chiudere l’account o disiscriversi dal servizio risulta essere difficile o impossibile. Un esempio di Roach Motel è stato individuato in Spotify in cui per effettuare la cancellazione della sottoscrizione all’abbonamento, bisogna cliccare quattro volte su cancel.';
      break;
    }
    case 3: {
      title = 'Price Comparison Prevention';
      src = '/pricecomparisonprevention.jpg';
      text =
        'Con la presenza di questo pattern viene reso difficile il confronto del prezzo di un prodotto, o servizio, rispetto ad altri, in modo da impedire all’utente di informarsi per prendere una decisione. Un’istanza di questo pattern è stata rilevata nel sito “sainsburys.co.uk” dove non è possibile confrontare il primo articolo (mele singole), espresso con un prezzo unitario, con il secondo articolo (box di mele di cui non conosciamo il peso), espresso con un prezzo al kilogrammo, motivo per cui non possiamo valutare qual’è l’articolo conveniente da acquistare';
      break;
    }
    case 4: {
      title = 'Intermediate Currency';
      src = '/intermediatecurrency.png';
      text =
        'È un altro sottotipo di Obstruction dove viene utilizzata una valuta “finta” per effettuare gli acquisti online: l’utente spende soldi veri per acquistare una certa quantità di una valuta virtuale (es. gemme); quest’ultima permette poi di acquistare beni o servizi. L’obiettivo di questo pattern è confondere l’utente sul valore della valuta reale in modo che egli interagisca in modo differente con la valuta virtuale. Questo modello è molto ricorrente per gli acquisti inapp, soprattutto nei videogiochi, dove congiuntamente alla valuta virtuale vengono utilizzati anche formulazioni confusionarie (tramite ad esempio percentuali) sui beni o servizi che si vanno ad acquistare. Nell’esempio mostrato, il pattern è rilevato nell’app Heroes and Generals: tramite le gemme è possibile ottenere dei potenziamenti sulle caratteristiche del proprio personaggio virtuale ma, al momento dell’acquisto dei potenziamenti, vengono utilizzate delle percentuali per confondere l’utente sui benefici che otterrà.';
      break;
    }
    case 5: {
      title = 'Forced Continuity';
      src = '/forcedcontinuity.jpg';
      text =
        'Il costo di un servizio richiesto dall’utente continua ad essergli addebitato anche dopo la sua scadenza. Si verifica, quindi, quando termina la prova gratuita di un servizio, o quando la scadenza di esso viene raggiunta. L’abbonamento viene rinnovato automaticamente senza preavviso, addebitando il costo all’utente.';
      break;
    }
    case 6: {
      title = 'Hidden Costs';
      src = '/hiddencosts.png';
      text =
        'Un determinato prodotto o servizio viene “pubblicizzato” con un prezzo, al quale vengono successivamente aggiunti altri costi, dovuti a tasse, commissioni o costi di spedizione elevati non precedentemente comunicati. In si mostra una camera pubblicizzata a $ 86,43. Tuttavia, il prezzo finale al netto di tasse e commissioni è di $ 218,77.';
      break;
    }
    case 7: {
      title = 'Sneak into Basket';
      src = '/sneakintobasket.jpg';
      text =
        'Il pattern Sneak into Basket aggiunge prodotti non scelti dall’utente al suo carrello online. L’inserimento di nuovi prodotti è spesso giustificato come dei suggerimenti basati su altri articoli acquistati. Ciò può indurre l’utente ad acquistare involontariamente questi articoli, a meno che non se ne accorga prima del check-out. Un esempio di questo comportamento è possibile trovarlo sul sito sportdirect.com in cui al momento dell’inserimento di un prodotto al carrello viene inserita automaticamente anche una rivista in modo da ingannare l’utente.';
      break;
    }
    case 8: {
      title = 'Bait and Switch';
      src = '/baitandswitch.jpg';
      text =
        'L’utente si propone di fare una cosa, ma invece accade una cosa diversa e indesiderabile: un pulsante “X” rosso esegue un’operazione/azione diversa dalla chiusura di una finestra pop-up. Questo dark pattern è stato impiegato da Microsoft durante la campagna di aggiornamento di Windows 10: la finestra permette di effettuare l’aggiornamento, ma la classica X in alto a destra invece che chiudere la finestra e non effettuare l’aggiornamento, dà inizio al processo.';
      break;
    }
    case 9: {
      title = 'Social Pyramid';
      src = '/socialpyramid.jpg';
      text =
        'Questo pattern forza un utente ad invitare altri utenti per accedere al servizio. È un modello usato soprattutto in piattaforme di social media e giochi online, in cui l’utente viene premiato con potenziamenti (o benefici) se invita altri utenti ad utilizzare la piattaforma. Rilevato nell’app FarmVille: il gioco suggerisce di invitare amici, per ottenere accesso a funzionalità che non sono accessibili se si gioca da soli';
      break;
    }
    case 10: {
      title = 'Privacy Zuckering';
      src = '/privacyzuckering.jpg';
      text =
        'L’obiettivo è quello di ingannare l’utente in modo da fargli condividere più informazioni personali di quante ne voglia fornire. Molto spesso è utilizzato per vendere le informazioni degli utenti ad aziende di terze parti, includendo una clausola nei termini e condizioni o privacy policy dei siti web. Per esempio, questo pattern è stato rilevato nell’app mobile Messenger: appena installata l’app viene chiesto il permesso all’utente di accedere alla sua rubrica per creare una rete di amici; in questo modo l’azienda può utilizzare questa rete creata, per mostrare annunci pertinenti agli interessi dell’utente e dei suoi amici. Tuttavia il modo in cui questo viene fatto è ingannevole, dal momento che, l’utente per evitare l’accesso alla rubrica da parte dell’app, deve, in ordine, cliccare su “Learn More”, leggere l’intera privacy policy, e infine negare il consenso.';
      break;
    }
    case 11: {
      title = 'Gamification';
      src = '/gamification.jpg';
      text =
        'Si vanno ad indicare tutte quelle circostanze all’interno di un servizio in cui alcuni aspetti possono essere "guadagnati" soltanto attraverso lo svolgimento ripetuto di determinate azioni. Nella Figura, vediamo come il sito turntable.fm cerca di convincere gli utenti a usarlo per più tempo, in modo da far guadagnare più punti esperienza a chi è più popolare o lo utilizza maggiormente, andando a discapito degli utenti occasionali.';
      break;
    }
    case 12: {
      title = 'Hidden Information';
      src = '/hiddeninformation.jpg';
      text =
        'Si tratta di informazioni che non sono rese note all’utente attraverso contenuti nascosti, testo scolorito o di piccole dimensioni. L’obiettivo di questo dark pattern è quello di far passare informazioni rilevanti come irrilevanti. Questa tecnica viene utilizzata dal sito Greenpeace, in particolare nelle email di newsletter l’opzione per disiscriversi dalla mailing list non è evidenziata come se fosse un link, bensì come un testo normale.';
      break;
    }
    case 13: {
      title = 'Preselection';
      src = '/preselection.jpg';
      text =
        'Una situazione in cui un’opzione è già selezionata di default nella pagina. Di solito si manifesta come una scelta che il proprietario del sito vuole che l’utente compia. Molto spesso però è utilizzata per scopi che vanno contro gli interessi dell’utente, o che causano effetti indesiderati. Un utilizzo è stato rilevato sul sito next.co.uk, che al momento della registrazione, preseleziona un radio button per ricevere la prima copia della loro brochure gratuitamente, ma leggendo i termini di utilizzo si scopre che dopo il primo invio ce ne saranno altri 3 a pagamento (3.75£ ognuno), i cui costi saranno addebitati direttamente sulla carta di credito inserita dall’utente.';
      break;
    }
    case 14: {
      title = 'Aesthetic Manipulation';
      src = '/aestheticmanipulation.png';
      text =
        'Questa sottocategoria contiene 3 ulteriori sottocategorie (Toying with emotions, False Hierarchy, Disguised Ad) che riguardano più l’aspetto che le funzionalità di app e siti web. Si tratta di manipolazioni dell’interfaccia utente, effettuate tramite scelte di design che hanno lo scopo di attirare l’attenzione dell’utente, facendo cadere l’occhio su determinati elementi piuttosto che altri, per distrarlo o convincerlo diversamente.';
      break;
    }
    case 15: {
      title = 'Toying with Emotions';
      src = '/toyingwithemotions.jpg';
      text =
        'Consiste nel cercare di far provare determinate emozioni all’utente mediante l’utilizzo di uno o più aspetti dell’interfaccia, come testo, colori, immagini. L’esempio in figura è tratto da un’email inviata da “Trump Headquarters” contente un sondaggio di parte, che cerca di far provare emozioni negative se non si vuole selezionare la prima opzione (“Sto con il presidente Trump), poiché il testo della seconda opzione è “Credo ai democratici e alle fake news”.';
      break;
    }
    case 16: {
      title = 'False Hierarchy';
      src = '/falsehierarchy.jpg';
      text =
        'È un dark pattern con il quale si cerca di convincere l’utente ad effettuare una scelta piuttosto che un’altra rendendola più appetibile con maggiori decorazioni o più interattività. In particolare si cerca di dare l’impressione che l’opzione evidenziata sia l’unica o la migliore, come sul sito reddit.com.';
      break;
    }
    case 17: {
      title = 'Disguised Ad';
      src = '/disguisedad.jpg';
      text =
        'Un tipo di design pattern che implica l’utilizzo di giochi , pulsanti o altri elementi interattivi che l’utente trova in una pagina, che mascherano in realtà una pubblicità. In casi estremi l’intera pagina web è trasformata in un annuncio, facendo sì che l’utente in qualsiasi punto clicchi viene ridirezionato verso un’altra pagina. In questo esempio tratto dal sito softpedia.com viene mostrato un bottone di “Download Now” che in realtà rimanda ad un sito esterno, invece che effettuare il download del programma richiesto.';
      break;
    }
    case 18: {
      title = 'Trick Questions';
      src = '/trickquestions.jpg';
      text =
        'Questo tipo di dark pattern comprende frasi formulate volontariamente in maniera confusa, con doppie negazioni, o che sembrano indicare una cosa, ma in realtà significano tutt’altro. Con questo pattern si utilizza il linguaggio in maniera tale da manipolare le intenzioni dell’utente. Nella Figura si può vedere come sul sito codemasters.com viene utilizzata una doppia negazione correlata a questa checkbox per confondere l’utente ed indurlo ad iscriversi a una newsletter. Da notare la formulazione volutamente confusionaria “Non deselezionare questa casella se vuoi essere contattato tramite email...”';
      break;
    }
  }

  return (
    <>
      <div className='flex flex-col items-center justify-between w-full'>
        <div
          className='flex justify-around items-center w-full h-[200px]'
          style={{
            background: "url('/lineshomepage.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 200px',
          }}
        >
          <div className='flex items-center w-[450px] h-[65px] rounded-3xl'>
            <div className='flex items-center justify-around w-[60px] h-full bg-white rounded-l-3xl border-[1px] border-black'>
              <span className='material-icons-outlined '>content_paste</span>
            </div>
            <div className='flex justify-around items-center w-[315px] h-full rounded-r-3xl border-[1px] border-black bg-white z-10'>
              <input
                type='url'
                placeholder='Inserisci URL'
                className='h-full w-full outline-none rounded-r-3xl placeholder:pl-3 placeholder:text-lg text-lg pl-4'
              ></input>
            </div>
            <div className='flex items-center justify-around w-[100px] h-full rounded-r-3xl border-[1px] border-black bg-primary-main -ml-8'>
              <span className='material-icons-outlined text-white ml-5'>
                search
              </span>
            </div>
          </div>
        </div>
        <div className='w-full mt-5 mb-8 flex items-start justify-evenly'>
          <div className='flex flex-col items-center w-[550px] bg-secondary-main rounded-3xl'>
            <div className='flex items-center justify-around w-full h-[50px]'>
              <span className='font-bold text-2xl text-secondary-gray-almost-black'>
                Cosa sono i dark pattern?
              </span>
            </div>
            <div className='bg-gray-200 rounded-b-3xl px-6'>
              <span className='text-base text-secondary-gray-almost-black'>
                Il termine Dark Pattern, coniato nel 2010 da Harry Brignull,
                designer londinese di UX, è stato definito come segue: “I dark
                pattern sono modelli di design utilizzati nei siti web e nelle
                app per indurre gli utenti ad agire contro il proprio reale
                interesse, ad esempio spingendoli a comprare servizi o beni non
                desiderati o sottoscrivere abbonamenti non voluti” I dark
                pattern, neologismo coniato dallo user experience designer Harry
                Brignull, sono quei modelli di design utilizzati nei siti web e
                nelle app per indurre gli utenti ad agire contro il proprio
                reale interesse, ad esempio spingendoli a comprare servizi o
                beni non desiderati o sottoscrivere abbonamenti non voluti.
              </span>
            </div>
          </div>
          <div className='flex flex-col items-center w-[550px] bg-secondary-main rounded-3xl'>
            <div className='flex items-center justify-around w-full h-[50px]'>
              <span className='font-bold text-2xl text-secondary-gray-almost-black'>
                Tassonomia
              </span>
            </div>
            <div className='w-full bg-gray-200 rounded-b-3xl'>
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex='1'
                        textAlign='left'
                        className='text-base font-bold'
                      >
                        Nagging
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    L’utente che è intenzionato a svolgere un task viene
                    interrotto una o più volte da altri task non direttamente
                    collegati al suo intento originale. La presenza di Nagging
                    si può manifestare con pop-up che oscurano l’interfaccia,
                    pubblicità improvvise a schermo intero causando disturbo,
                    oppure qualunque azione che ostruisce o sposta il focus
                    dell’utente.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex='1'
                        textAlign='left'
                        className='text-base font-bold'
                      >
                        Obstruction
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    È come un “ostacolo” che viene inserito durante l’esecuzione
                    di un determinato task, che ne intralcia il normale flusso
                    con l’intento di dissuadere un’azione.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex='1'
                        textAlign='left'
                        className='text-base font-bold'
                      >
                        Sneaking
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    È una categoria che include meccanismi per nascondere,
                    mascherare o ritardare la comunicazione di informazioni che
                    risultano essere rilevanti per l’utente. Lo scopo di queste
                    tecniche è quello di far eseguire all’utente delle azioni
                    non desiderate che non avrebbe compiuto se avesse avuto
                    conoscenza delle informazioni che sono state nascoste
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex='1'
                        textAlign='left'
                        className='text-base font-bold'
                      >
                        Interface Interferance
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Questa categoria comprende tecniche di manipolazione
                    dell’interfaccia che limitano la possibilità dell’utente di
                    capire che può effettuare determinate azioni. In altre
                    parole si cerca di confondere l’utente facendogli effettuare
                    delle azioni invece che altre, nascondendo o mascherandone
                    alcune.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  borderRadius={'3xl'}
                  __css={{ borderBottomRadius: '3xl' }}
                  _hover={{
                    borderBottomRadius: '3xl',
                    opacity: '0.91',
                    textColor: 'black',
                  }}
                >
                  <h2>
                    <AccordionButton borderBottomRadius={'1.5rem'}>
                      <Box
                        flex='1'
                        textAlign='left'
                        className='text-base font-bold'
                        _hover={{
                          borderBottomRadius: '3xl',
                          opacity: '0.91',
                          textColor: 'black',
                        }}
                      >
                        Forced Action
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    La categoria Forced Action è definita come “qualunque
                    situazione in cui un utente deve necessariamente effettuare
                    una specifica azione per accedere o utilizzare una specifica
                    funzionalità”. L’azione da svolgere spesso viene mascherata
                    come un’opzione da cui l’utente ottiene un forte beneficio o
                    si presenta come uno step obbligatorio da effettuare per
                    completare un task.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center justify-around w-full'>
          <span className='mb-8 text-4xl font-bold text-secondary-gray-almost-black'>
            Esempi
          </span>
          <div className='flex flex-col items-center justify-between w-full'>
            <div className='flex items-center justify-evenly w-full'>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  width={'200px'}
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  transition='all 0.2s'
                  as={Button}
                  onClick={() => {
                    setModal(1);
                    onOpen();
                  }}
                >
                  Nagging
                </MenuButton>
              </Menu>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  transition='all 0.2s'
                  as={Button}
                  rightIcon={
                    <span className='material-icons-outlined text-5xl'>
                      arrow_drop_down
                    </span>
                  }
                >
                  Obstruction
                </MenuButton>
                <MenuList bgColor={'gray.700'}>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(2);
                    }}
                  >
                    Roach Motel
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(3);
                    }}
                  >
                    Price Comparison Prevention
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(4);
                    }}
                  >
                    Intermediate Currency
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  transition='all 0.2s'
                  as={Button}
                  rightIcon={
                    <span className='material-icons-outlined text-5xl '>
                      arrow_drop_down
                    </span>
                  }
                >
                  Sneaking
                </MenuButton>
                <MenuList bgColor={'gray.700'} defaultChecked>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(5);
                    }}
                  >
                    Forced Continuity
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(6);
                    }}
                  >
                    Hidden Costs
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(7);
                    }}
                  >
                    Sneak into Basket
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(8);
                    }}
                  >
                    Bait and Switch
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  transition='all 0.2s'
                  as={Button}
                  rightIcon={
                    <span className='material-icons-outlined text-5xl'>
                      arrow_drop_down
                    </span>
                  }
                >
                  Forced Action
                </MenuButton>
                <MenuList bgColor={'gray.700'}>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(9);
                    }}
                  >
                    Social Pyramid
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(10);
                    }}
                  >
                    Privacy Zuckering
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(11);
                    }}
                  >
                    Gamification
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
            <div className='flex items-center justify-around w-full mt-12 mb-8'>
              <Menu>
                <MenuButton
                  rounded={'full'}
                  fontSize={'xl'}
                  fontWeight={'extrabold'}
                  transition='all 0.2s'
                  as={Button}
                  rightIcon={
                    <span className='material-icons-outlined text-5xl'>
                      arrow_drop_down
                    </span>
                  }
                >
                  Interface Interference
                </MenuButton>
                <MenuList bgColor={'gray.700'}>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(12);
                    }}
                  >
                    Hidden Information
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(13);
                    }}
                  >
                    Preselection
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(14);
                    }}
                  >
                    Aesthetic Manipulation
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(15);
                    }}
                  >
                    Toying with Emotion
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(16);
                    }}
                  >
                    False Hierarchy
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(17);
                    }}
                  >
                    Disguised Ad
                  </MenuItem>
                  <MenuItem
                    _hover={{ bg: '#FFD95A', opacity: '90%' }}
                    _focus={{ bg: '#FFD95A', opacity: '90%' }}
                    textColor={'white'}
                    onClick={() => {
                      onOpen();
                      setModal(18);
                    }}
                  >
                    Trick Questions
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        scrollBehavior='inside'
      >
        <ModalContent>
          <ModalHeader textAlign={'center'}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className='flex flex-col items-center justify-between'>
              <span>{text}</span>
              <Image src={src} />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              bgColor={'#1976D2'}
              mr={3}
              textColor='white'
              onClick={onClose}
              _hover={{
                bgColor: '#63A4FF',
              }}
            >
              Chiudi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
