import React from 'react';
import { Deck, Slide, Heading, Text, FlexBox, DefaultTemplate, Image } from 'spectacle';

// Importer bildene
import pult from './assets/Pult.jpg';
import prest2 from './assets/Prest 2.jpg';
import server2 from './assets/Server 2.jpg';
import joel3 from './assets/Joel 3.jpg';
import prest3 from './assets/Prest 3.jpg';
import bord4 from './assets/Bord 4.jpg';
import prest4 from './assets/Prest 4.jpg';
import docking5 from './assets/Docking 5.jpg';
import ap6 from './assets/AP 6.jpg';
import ea7 from './assets/EA 7.jpg';

// ============================================
// REDIGER INNHOLDET HER - Endre titler og tekster etter behov
// ============================================
const frontPage = {
  title: "Praksis Presentasjon",
  subtitle: "Olav",
  text: "Savne vinterferie glede mæ te påske"
};  

const slides = [
  {
    title: "Min fine pult",
    subtitle: "Hvor jeg satt når jeg var der, jobben på mye forskellig",
    images: [pult]
  },
  {
    title: "Server og ting",
    subtitle: "Serverrommet på bygget og en prestentasjon om powerchell i intune",
    images: [prest2, server2]
  },
  {
    title: "Joel og Servere",
    subtitle: "Joel som har en intresang bruker i telefonen og hvordan serverene er satt opp",
    images: [joel3, prest3]
  },
  {
    title: "Byggmester Bob",
    subtitle: "Bygget sammen en pult og så en presentasjon på digitale angrep",
    images: [bord4, prest4]
  },
  {
    title: "Docking",
    subtitle: "Satte opp en docking stasjon hos en tannlege og ga han en låne pc",
    images: [docking5]
  },
  {
    title: "Access Point",
    subtitle: "Satte opp accsess points på en barneskole",
    images: [ap6]
  },
  {
    title: "EA Smith",
    subtitle: "Tanket pcer hver dag og vurderte å hacke hele jævla serveren deres",
    images: [ea7]
  }
];
// ============================================

// Tilpasset tema med lysere bakgrunn
const theme = {
  colors: {
    primary: '#f5f5f5',
    secondary: '#333',
    tertiary: '#666'
  },
  fontSizes: {
    header: '64px',
    text: '28px'
  }
};

function App() {
  return (
    <Deck 
      template={<DefaultTemplate />} 
      theme={theme}
      printMode={false}
    >
      
      {/* Forside */}
      <Slide backgroundColor="#e8f4f8">
        <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
          <Heading fontSize="72px" margin="0 0 40px 0" color="#333">{frontPage.title}</Heading>
          <Text fontSize="36px" margin="0 0 20px 0" color="#555">{frontPage.subtitle}</Text>
          <Text fontSize="28px" color="#666">{frontPage.text}</Text>
        </FlexBox> color="#333"
      </Slide>

      {slides.map((slide, index) => (
        <Slide key={index} backgroundColor="#f8f9fa">
          <FlexBox height="100%" flexDirection="column" justifyContent="center" alignItems="center">
            <Heading fontSize="h2" margin="0 0 20px 0">{slide.title}</Heading>
            
            {slide.subtitle && (
              <Text fontSize="24px" margin="0 0 30px 0" color="#555">{slide.subtitle}</Text>
            )}
            
            {slide.text && (
              <Text fontSize="20px" margin="0 0 30px 0" color="#666">{slide.text}</Text>
            )}
            
            <FlexBox 
              flexDirection="row" 
              flexWrap="wrap" 
              justifyContent="center" 
              alignItems="center"
              gap="20px"
              width="100%"
            >
              {slide.images.map((img, imgIndex) => (
                <Image 
                  key={imgIndex}
                  src={img} 
                  width={slide.images.length > 1 ? "45%" : "70%"}
                  style={{ 
                    objectFit: 'contain',
                    maxHeight: slide.images.length > 1 ? '400px' : '500px',
                    borderRadius: '10px'
                  }}
                />
              ))}
            </FlexBox>
          </FlexBox>
        </Slide>
      ))}

    </Deck>
  );
}

export default App;