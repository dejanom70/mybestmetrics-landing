import Home from './pages/Home';
import CGVCGU from './pages/CGVCGU';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Disclaimer from './pages/Disclaimer';


export const PAGES = {
    "Home": Home,
    "CGV-CGU": CGVCGU,
    "politique-confidentialite": PrivacyPolicy,
    "contact": Contact,
    "mentions-legales": MentionsLegales,
    "disclaimer": Disclaimer,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};