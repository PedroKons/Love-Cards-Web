import { useState, useEffect } from "react";
import Question from "./components/Question"; // Importa o componente de exibição Perguntas/Cartas.
import { shuffle } from "lodash"; // Importa a função shuffle para embaralhar arrays.
import './styles/App.css'; // Importa os estilos CSS.
import Drawer from './components/Drawer' // Importa o componente Drawer.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importa componentes para criar rotas.
import ComoJogar from "./pages/ComoJogar"; // Importa a pagina de Como Jogar.
import PopUp from './components/PopUp'; // Importa o componente de PopUp.
import EmailPopUp from "./components/EmailPopUp";
import Cookies from 'js-cookie';
import CodePopUp from "./components/CodePopUp";
import MoreDecks from "./components/MoreDecks";
import TapGame from "./components/TapGame";

// Array com as perguntas/cartas Premium.
const cardsPremium = [
  {
    id: 1,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_163.svg?v=1734462157"
  },

  {
    id: 2,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_162.svg?v=1734462157"
  },

  {
    id: 3,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_159.svg?v=1734462157"
  },

  {
    id: 4,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_158.svg?v=1734462157"
  },

  {
    id: 5,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_161.svg?v=1734462157"
  },

  {
    id: 6,
    cardLink: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_160.svg?v=1734462157"
  }
] 

const deckFree = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_167.svg?v=1734462158",
  },
  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176.svg?v=1734462158",
  },
  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_154.svg?v=1734462157",
  },
  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_157.svg?v=1734462157",
  },
  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_144.svg?v=1734462157",
  },
  {
    id: 6,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_182.svg?v=1734462157"
  },
  {
    id: 7,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_175.svg?v=1734462157"
  },
  {
    id: 8,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_171.svg?v=1734462157"
  },
  {
    id: 9,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176.svg?v=1734462158"
  },
  {
    id: 10,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_169.svg?v=1734462157"
  },
];

const deckPaid = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_152.svg?v=1734462157"
  },

  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_156.svg?v=1734462157"
  },

  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_142.svg?v=1734462157"
  },

  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_141.svg?v=1734462157"
  },

  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_143.svg?v=1734462157"
  },

  {
    id: 6,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_155.svg?v=1734462157"
  },

  {
    id: 7,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_153.svg?v=1734462157"
  },

  {
    id: 8,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_184.svg?v=1734462157"
  }, 

  {
    id: 9,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_147.svg?v=1734462157"
  },

  {
    id: 10,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_150.svg?v=1734462157"
  },

  {
    id: 11,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_146.svg?v=1734462157"
  },

  {
    id: 12,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_144.svg?v=1734462157"
  },

  {
    id: 13,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_174.svg?v=1734462157"
  },

  {
    id: 14,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_175.svg?v=1734462157"
  },

  {
    id: 15,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_178.svg?v=1734462157"
  },

  {
    id: 16,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_140.svg?v=1734462157"
  },

  {
    id: 17,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_149.svg?v=1734462157"
  },

  {
    id: 18,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_157.svg?v=1734462157"
  },

  {
    id: 19,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_164.svg?v=1734462157"
  },

  {
    id: 20,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_185.svg?v=1734462157"
  },

  {
    id: 21,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_183.svg?v=1734462157"
  },

  {
    id: 22,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_154.svg?v=1734462157"
  },

  {
    id: 23,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_180.svg?v=1734462157"
  },

  {
    id: 24,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_151.svg?v=1734462157"
  },

  {
    id: 25,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_169.svg?v=1734462157"
  },

  {
    id: 26,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_145.svg?v=1734462158"
  },

  {
    id: 27,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_179.svg?v=1734462157"
  },

  {
    id: 28,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_182.svg?v=1734462157"
  },

  {
    id: 29,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_168.svg?v=1734462157"
  },

  {
    id: 30,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_148.svg?v=1734462157"
  },

  {
    id: 31,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_181.svg?v=1734462157"
  },

  {
    id: 32,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_171.svg?v=1734462157"
  },

  {
    id: 33,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_172.svg?v=1734462157"
  },

  {
    id: 34,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_177.svg?v=1734462157"
  },

  {
    id: 35,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_165.svg?v=1734462158"
  },

  {
    id: 36,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_166.svg?v=1734462158"
  },

  {
    id: 37,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_173.svg?v=1734462158"
  },

  {
    id: 38,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176.svg?v=1734462158"
  },

  {
    id: 39,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_170.svg?v=1734462158"
  },

  {
    id: 40,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_167.svg?v=1734462158"
  },

];

const deckPaidQuestion = [
  {
    id: 1,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_94Cards_Q_A.svg?v=1741279113"
  },
  {
    id: 2,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_95Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 3,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_96Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 4,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_97Cards_Q_A.svg?v=1741279112"
  },  
  {
    id: 5,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_98Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 6,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_99Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 7,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_100Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 8,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_101Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 9,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_102Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 10,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_103Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 11,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_104Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 12,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_105Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 13,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_106Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 14,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_107Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 15,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_108Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 16,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_109Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 17,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_110Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 18,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_111Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 19,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_112Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 20,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_113Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 21,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_114Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 22,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_115Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 23,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_116Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 24,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_117Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 25,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_118Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 26,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_119Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 27,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_120Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 28,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_121Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 29,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_122Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 30,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_123Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 31,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_124Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 32,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_125Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 33,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_126Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 34,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_127Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 35,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_128Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 36,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_129Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 37,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_130Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 38,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_131Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 39,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_132Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 40,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_133Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 41,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_134Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 42,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_135Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 43,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_136Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 44,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_137Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 45,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_138Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 46,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_139Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 47,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_140Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 48,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_141Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 49,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_142Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 50,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_143Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 51,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_144Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 52,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_145Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 53,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_146Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 54,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_147Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 55,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_148Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 56,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_149Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 57,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_150Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 58,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_151Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 59,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_152Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 60,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_153Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 61,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_154Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 62,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_155Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 63,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_156Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 64,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_157Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 65,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_158Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 66,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_159Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 67,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_160Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 68,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_161Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 69,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_162Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 70,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_163Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 71,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_164Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 72,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_165Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 73,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_166Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 74,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_167Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 75,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_168Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 76,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_169Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 77,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_170Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 78,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_171Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 79,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_172Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 80,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_173Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 81,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_174Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 82,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_175Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 83,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_176Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 84,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_177Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 85,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_178Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 86,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_179Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 87,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_180Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 88,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_181Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 89,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_182Cards_Q_A.svg?v=1741279112"
  },
  {
    id: 90,
    svgOption1: "https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Asset_183Cards_Q_A.svg?v=1741279112"
  }
]

const App = () => {
  // Estados para controlar o fluxo e a interação do jogo.
  const [currentDeck, setCurrentDeck] = useState(shuffle(deckFree));
  const [currentQuestion, setCurrentQuestion] = useState(0); // Guarda a carta atual.
  const [isAnimating, setIsAnimating] = useState(false); // Controla se a animação está ocorrendo.
  const [isGameOver, setIsGameOver] = useState(false); // Indica que o jogo terminou.
  const [revealedCard, setRevealedCard] = useState(null); // Armazena o card premium revelado.
  const [showEmailPopup, setShowEmailPopup] = useState(false); // Controla se o pop-up de email deve abrir. 
  const [showCpfPopup, setShowCpfPopup] = useState(false);
  const [email, setEmail] = useState(''); // Armazena o email do usuário.
  const [cpf, setCpf] = useState('');
  const [isVerified, setIsVerified] = useState(null); // Indica se o pagamento foi verificado.
  const [emailSent, setEmailSent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailCookie, setEmailCookie] = useState(false);
  const [showCodePopUp, setShowCodePopUp] = useState(false);
  const [messageResponseCpf, setMessageResponseCpf] = useState('');
  const [showMoreDecks, setShowMoreDecks] = useState(false);
  const [showTapToPlay, setShowTapToPlay] = useState(true);
  const [currentDeckType, setCurrentDeckType] = useState("free");
  const [checkoutLink, setCheckoutLink] = useState('');
  

  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }

  useEffect(() => {
    if (Cookies.get('isLoggedIn') === 'true') {
      setIsVerified(true);
      setCurrentDeck(shuffle(deckPaid));
    }
    
    const userEmail = getQueryParam("userEmail");
    if (userEmail) {
      Cookies.set('userEmail', userEmail, { expires: 30 });
    }

    const savedEmail = Cookies.get('userEmail');
    if (savedEmail) {
      setEmail(savedEmail);
      setEmailCookie(true);
    }
  }, []);

  // Função para logout
  const handleLogout = () => {
    Cookies.remove('isLoggedIn'); 
    Cookies.remove('love-cards0');
    Cookies.remove('love-cards1');
    setIsVerified(false);
    setCurrentDeck(shuffle(deckFree));
    setCurrentDeckType('free');
  };

  // Embaralha os Arrays.
  const shuffledCardsPremium = shuffle(cardsPremium); 

  // Função que avança para próxima carta.
  const handleNext = () => {
    setShowTapToPlay(false);
    setIsAnimating(true);
    setTimeout(() => {
      if (!emailCookie && !isVerified && !emailSent && (currentQuestion + 1) % 5 === 0) {
        setShowEmailPopup(true);
      }
      // Se o pagamento foi verificado, pula o if das 10 cartas
      if (!isVerified && (currentQuestion + 1) % 10 === 0) {
        setShowCpfPopup(true); // Mostra o pop-up apenas se o pagamento não foi verificado
      } else {
        if (currentQuestion < currentDeck.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setIsGameOver(true);
        }
      }
      setIsAnimating(false);
    }, 700);
  };

  const handleEmailSubmission = async () => {
    setIsLoading(true);
    setEmailSent(null);

    try {
      
      const response = await fetch('https://lovesite.lovechocolate.com.br/love-cards/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Envia o e-mail no corpo da requisição.
      });

      if (response.ok) {
        Cookies.set('userEmail', email, { expires: 30 });
        setTimeout(() => {
          setShowEmailPopup(false);
        }, 1000);
        setEmailSent(true);
        // grva cookie 
      } else {
        setEmailSent(false);
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar o e-mail. Tente novamente.');
      setEmailSent(false);
    } finally {
      setIsLoading(false);
    }
  };
  // Função para verificar o pagamento através de uma API.
  const handleCpfVerification = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://lovesite.lovechocolate.com.br/love-cards/request-code?cpf=${cpf}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      // Verifica se o pagamento está OK.
      if (response.ok) {
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        setMessageResponseCpf(data.message);
        setTimeout(() => {
          setShowCpfPopup(false); // Fecha o Pop-up.
        }, 1000);
        setShowCodePopUp(true);
      } else {
        setIsVerified(false); // Define que o pagamento não foi verificado.
      }
    } catch (error) {
      console.error('Erro ao verificar pagamento:', error); // Mostra o erro no console.
      setIsVerified(false); // Define que o pagamento não foi verificado.
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeValidation = async (code) => {
    setIsLoading(true);
  
    try {
      const response = await fetch(`https://lovesite.lovechocolate.com.br/love-cards/validate-code?cpf=${cpf}&code=${code}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        for (let i = 0; i < data.products.length; i++) {
          if (data.products.length === 0) {
            return
          } else {
            const product = data.products[i];
            Cookies.set(`love-cards${i}`, product, { expires: 1 });
          }
        }
        
        Cookies.set('isLoggedIn', 'true', { expires: 1 });
        setIsVerified(true);
        setTimeout(() => {
          setShowCodePopUp(false);
        }, 1000);
        setShowCodePopUp(false);
        setTimeout(() => {
          setShowMoreDecks(true);
        }, 1000);
        setCurrentQuestion(0);
      } else {
        const errorData = await response.json();
        alert(errorData.detail || 'Código inválido ou expirado.');
        setIsVerified(false);
      }
    } catch (error) {
      console.error('Erro ao validar o código:', error);
      setIsVerified(false);
      alert('Erro ao validar o código. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowCpfPopup = () => {
    setCpf('');
    setShowCpfPopup(true);
  };

  const handleResetGame = () => {
    setCurrentDeck(isVerified ? currentDeck : shuffle(deckFree));
    setCurrentQuestion(0);
    setIsGameOver(false);
    setRevealedCard(null);
  };

  const handleSelectDeck = (deckType) => {
    setCurrentDeckType(deckType);
    switch (deckType) {
      case "free":
        setCurrentDeck(shuffle(deckFree));
        break;
      case "classic":
        if (isVerified) {
          setCurrentDeck(shuffle(deckPaid));
        } else {
          setShowCpfPopup(true);
          return;
        }
        break;
      case "question":
        if (isVerified) {
          setCurrentDeck(shuffle(deckPaidQuestion));
        } else {
          setShowCpfPopup(true);
          return;
        }
        break;
    }
    setCurrentQuestion(0);
    setIsGameOver(false);
    setRevealedCard(null);
  };

  return (
    <Router>
      <Drawer isVerified = {isVerified} handleShowCpfPopup = {handleShowCpfPopup} handleLogout = {handleLogout}/>
      <div className="container-logo" onClick={() => setShowMoreDecks(true)}>
        <img
          src="https://cdn.shopify.com/s/files/1/0777/8245/0483/files/Icones_Canva.svg?v=1731609916"
          alt="logo"
          className="logo-svg"
        />
      </div>
      <div className="container-more-decks" onClick={() => setShowMoreDecks(true)}>
        <img src="https://cdn.shopify.com/s/files/1/0777/8245/0483/files/VideoFy_099e234a-f784-4a22-b9df-cd1974d04447.svg?v=1741285248" alt="more-decks" width={80} height={80}/>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container-app">
              {!isGameOver ? (
                <>
                  <Question
                    questionData={currentDeck[currentQuestion]}
                    onChoice={handleNext}
                    isAnimating={isAnimating}
                  />
                  <div className="container-buttons">
                    <button onClick={handleNext} className="buttons-game" style={{display: 'none'}}>
                      Próximo
                    </button>
                    <button onClick={() => setIsGameOver(true)} className="buttons-game" style={{width: '40%'}}>
                      Finalizar
                    </button>
                  </div>
                  {showTapToPlay && <TapGame onTap={handleNext} />}
                </>
              ) : (
                <div>
                  <h2 className="title-close">Jogo Finalizado!</h2>
                  {revealedCard && (
                    <div>
                      <img src={revealedCard.cardLink} alt="Card Premium" className="premium-card" />
                    </div>
                  )}
                  <div className="container-extra">
                    <button
                      onClick={() => {
                        if (isVerified) {
                          setRevealedCard(shuffledCardsPremium[0]);
                        } else {
                          setShowCpfPopup(true);
                        }
                      }}
                      className="buttons-game"
                      style={{width: '70%'}}
                    >
                      Revelar Card Premium
                    </button>
                    <button onClick={handleResetGame} className="buttons-game" style={{width: '70%'}}>
                      Reiniciar Jogo
                    </button>
                  </div>
                </div>
              )}
            </div>
          }
        />
        <Route path="/como-jogar" element={<ComoJogar />} />
      </Routes>

      {showMoreDecks && (
        <MoreDecks 
          onClose={() => setShowMoreDecks(false)} 
          onSelectDeck={handleSelectDeck}
          currentDeckType={currentDeckType}
          setShowCpfPopup={setShowCpfPopup}
          setCheckoutLink={setCheckoutLink}
        />
      )}

      {showCpfPopup && (
        <PopUp
          cpf={cpf}
          setCpf={setCpf}
          onVerify={handleCpfVerification}
          onClose={() => setShowCpfPopup(false)}
          isVerified={isVerified}
          isLoading={isLoading}
          checkoutLinkCurrent={checkoutLink}
        />
      )}

      {showEmailPopup && (
        <EmailPopUp
          email = {email}
          setEmail = {setEmail}
          onConfirm = {handleEmailSubmission}
          isLoading = {isLoading}
          emailSent = {emailSent}
        />
      )}

      {showCodePopUp && (
        <CodePopUp
          cpf={cpf}
          onVerifyCode={handleCodeValidation}
          onClose={() => setShowCodePopUp(false)}
          isLoading={isLoading}
          message={isVerified ? "Código validado com sucesso!" : "Código inválido ou expirado."}
          responseMessageCpf = {messageResponseCpf}
        />
      )}
    </Router>
  );
};

export default App;
