/**
 * ==============================================================================
 * DIGITAL WEDDING INVITATION CONFIGURATION
 * Couple: Jay Singh & Neha Kunwar
 * Reference: Tezz.ai Interactive Wedding Invitation & Royal Rajputana Theme
 * ==============================================================================
 */

export const weddingConfig = {
  // 1. COUPLE & FAMILY
  couple: {
    groom: {
      firstName: "Jay",
      fullName: "Jay Singh",
      fatherName: "Shri Jitendra Singh Vaghela",
      familyTitle: "Vaghela Family",
      clan: "Vaghela Dynasty",
      city: "Kothar, Bali, Pali",
    },
    bride: {
      firstName: "Neha",
      fullName: "Neha Kunwar",
      fatherName: "Late Shri Laxman Singh Chouhan",
      familyTitle: "Chouhan Family",
      clan: "Chouhan Dynasty",
      city: "Rajasthan",
    },
    monogram: "J & N",
    weddingHashtag: "#JayKiNeha",
    inviteLine: "Together with their families, request the pleasure of your gracious company at their wedding",
    closingLine: "With love, the Vaghela & Chouhan families",
  },

  // 2. SACRED MOTIFS & INVOCATION
  spiritualQuote: {
    sanskrit: "॥ श्री गणेशाय नमः ॥",
    subSanskrit: "॥ ॐ श्री कुलदेवतायै नमः ॥",
    meaning: "Seeking divine grace and ancestors' blessings for an eternal union of two souls."
  },

  // 3. MAIN WEDDING DATE & MUHURAT
  mainCeremonyDate: "2027-01-29T10:00:00+05:30",
  dateDisplay: {
    day: "FRIDAY",
    date: "29",
    month: "January",
    year: "2027",
    fullString: "Friday, 29th January 2027",
    pherasTiming: "Pheras: 10:00 AM to 04:00 PM"
  },

  // 4. VENUE & DESTINATION
  venue: {
    title: "Raj Vilas Palace",
    fullAddress: "At Post Kothar, Tehsil- Bali, Jila- Pali, Rajasthan",
    shortLocation: "Kothar, Bali, Pali, Rajasthan",
    landmark: "Royal Rajputana Mandap",
    contactPhone: "9867436558",
    mapsUrl: "https://maps.google.com/?q=Kothar,+Bali,+Pali,+Rajasthan",
  },

  // 5. WEDDING FESTIVITIES (name | day & date | time | place | dress code | colour)
  functions: [
    {
      id: "mata-pujan",
      name: "Mata Pujan",
      dayDate: "Wednesday, 27 Jan 2027",
      time: "10:00 AM onwards",
      place: "Kothar Residence, Pali",
      dressCode: "Traditional",
      colourTheme: "Beige & Gold",
      colorHex: "#D8C5A2",
      icon: "Sparkles",
      description: "Invoking Kuldevi and Divine Mother's blessings for auspicious beginnings."
    },
    {
      id: "haldi",
      name: "Haldi Ceremony",
      dayDate: "Thursday, 28 Jan 2027",
      time: "11:00 AM onwards",
      place: "Courtyard Lawns, Kothar",
      dressCode: "Wear Yellow",
      colourTheme: "Sun Yellow",
      colorHex: "#F59E0B",
      icon: "Sun",
      description: "A joyful splash of turmeric, marigold petals, music, and laughter."
    },
    {
      id: "mehendi",
      name: "Mehendi Ceremony",
      dayDate: "Thursday, 28 Jan 2027",
      time: "04:00 PM onwards",
      place: "Heritage Courtyard, Kothar",
      dressCode: "Wear Green",
      colourTheme: "Emerald Green",
      colorHex: "#10B981",
      icon: "Sparkles",
      description: "Intricate henna adornments, folk geet, and sweet celebrations."
    },
    {
      id: "sangeet",
      name: "Royal Sangeet",
      dayDate: "Thursday, 28 Jan 2027",
      time: "07:30 PM onwards",
      place: "Royal Durbar Banquet, Kothar",
      dressCode: "Indo-Western",
      colourTheme: "Purple & Pink",
      colorHex: "#A855F7",
      secondaryColorHex: "#EC4899",
      icon: "Music",
      description: "An evening of dance, regal toasts, and melodious music."
    },
    {
      id: "baraat-pheras",
      name: "Baraat & Pheras",
      dayDate: "Friday, 29 Jan 2027",
      time: "10:00 AM to 04:00 PM",
      place: "Main Wedding Mandap, Kothar",
      dressCode: "Festive Rajputi",
      colourTheme: "Red & Gold",
      colorHex: "#DC2626",
      secondaryColorHex: "#D97706",
      icon: "Flame",
      description: "The sacred vows around the holy fire amidst Vedic mantras."
    },
    {
      id: "reception",
      name: "Grand Reception",
      dayDate: "Friday, 29 Jan 2027",
      time: "07:30 PM onwards",
      place: "Royal Palace Grounds, Kothar",
      dressCode: "Royal Formal",
      colourTheme: "Wine & Gold",
      colorHex: "#6E1F2F",
      secondaryColorHex: "#C5A059",
      icon: "Wine",
      description: "Feast of authentic Rajasthani delicacies and celebration."
    }
  ],

  // 6. AUDIO SETTINGS
  audio: {
    src: "https://assets.mixkit.co/music/preview/mixkit-traditional-indian-sitara-116.mp3",
    title: "Royal Shehnai & Sitar",
  }
};
