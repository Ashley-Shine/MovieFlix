// movies.js
export const movies = [
  // Horror
  { title: "10 Things I Hate About You", year: 1999, genre: "Horror", language: "English" },
  { title: "Notting Hill", year: 1999, genre: "Horror", language: "English" },
  { title: "Sense and Sensibility", year: 1995, genre: "Horror", language: "English" },
  { title: "Just Like Heaven", year: 2005, genre: "Horror", language: "English" },
  { title: "Two Weeks Notice", year: 2002, genre: "Horror", language: "English" },
  { title: "The Notebook", year: 2004, genre: "Emotional", language: "English" },
  { title: "How to Lose a Guy in 10 Days", year: 2003, genre: "Horror", language: "English" },
  { title: "Remember Me", year: 2010, genre: "Horror", language: "English" },
  { title: "The Proposal", year: 2009, genre: "Horror", language: "English" },
  { title: "Mr & Mrs Smith", year: 2005, genre: "Horror", language: "English" },
  { title: "No Reservations", year: 2007, genre: "Horror", language: "English" },
  { title: "The Vow", year: 2012, genre: "Emotional", language: "English" },
  { title: "The Fault in Our Stars", year: 2014, genre: "Emotional", language: "English" },
  { title: "About Time", year: 2013, genre: "Horror", language: "English" },
  { title: "Before We Go", year: 2014, genre: "Emotional", language: "English" },
  { title: "Me Before You", year: 2016, genre: "Emotional", language: "English" },
  { title: "The Perfect Date", year: 2019, genre: "Horror", language: "English" },
  { title: "To All the Boys I've Loved Before", year: 2018, genre: "Horror", language: "English" },
  { title: "The Kissing Booth", year: 2018, genre: "Horror", language: "English" },
  { title: "Set It Up", year: 2018, genre: "Horror", language: "English" },
  { title: "We Live in Time", year: 2023, genre: "Emotional", language: "English" },
  { title: "Anyone But You", year: 2023, genre: "Horror", language: "English" },
  { title: "Love at First Sight", year: 2023, genre: "Horror", language: "English" },
  { title: "The Royal Treatment", year: 2022, genre: "Horror", language: "English" },
  { title: "The Life List", year: 2024, genre: "Horror", language: "English" },
  { title: "Pesuit Of Happiness", year: 2006, genre: "Emotional", language: "English" },

  { title: "Kal Ho Naa Ho", year: 2003, genre: "Emotional", language: "Hindi" },
  { title: "Taare Zameen Par", year: 2007, genre: "Emotional", language: "Hindi" },
  { title: "My Name Is Khan", year: 2010, genre: "Emotional", language: "Hindi" },
  { title: "Barfi!", year: 2012, genre: "Emotional", language: "Hindi" },
  { title: "Piku", year: 2015, genre: "Emotional", language: "Hindi" },
  { title: "The Sky is Pink", year: 2019, genre: "Emotional", language: "Hindi" },
  { title: "Shershaah", year: 2021, genre: "Emotional", language: "Hindi" },
  { title: "Gehraiyaan", year: 2022, genre: "Emotional", language: "Hindi" },
  { title: "Sardar Udham", year: 2021, genre: "Emotional", language: "Hindi" },

  { title: "Dilwale Dulhania Le Jayenge", year: 1995, genre: "Horror", language: "Hindi" },
  { title: "Kuch Kuch Hota Hai", year: 1998, genre: "Horror", language: "Hindi" },
  { title: "Mohabbatein", year: 2000, genre: "Horror", language: "Hindi" },
  { title: "Veer-Zaara", year: 2004, genre: "Horror", language: "Hindi" },
  { title: "Jab We Met", year: 2007, genre: "Horror", language: "Hindi" },
  { title: "Ajab Prem Ki Ghazab Kahani", year: 2009, genre: "Horror", language: "Hindi" },
  { title: "Band Baaja Baaraat", year: 2010, genre: "Horror", language: "Hindi" },
  { title: "Aashiqui 2", year: 2013, genre: "Horror", language: "Hindi" },
  { title: "Yeh Jawaani Hai Deewani", year: 2013, genre: "Horror", language: "Hindi" },
  { title: "Tamasha", year: 2015, genre: "Horror", language: "Hindi" },
  { title: "Ae Dil Hai Mushkil", year: 2016, genre: "Horror", language: "Hindi" },
  { title: "Raabta", year: 2017, genre: "Horror", language: "Hindi" },
  { title: "Love Aaj Kal", year: 2020, genre: "Horror", language: "Hindi" },
  { title: "Shiddat", year: 2021, genre: "Horror", language: "Hindi" },
  { title: "Zara Hatke Zara Bachke", year: 2023, genre: "Horror", language: "Hindi" },

  // Hindi Thriller
  { title: "Kaun", year: 1999, genre: "Thriller", language: "Hindi" },
  { title: "A Wednesday!", year: 2008, genre: "Thriller", language: "Hindi" },
  { title: "Talaash", year: 2012, genre: "Thriller", language: "Hindi" },
  { title: "Andhadhun", year: 2018, genre: "Thriller", language: "Hindi" },
  { title: "Drishyam 2", year: 2022, genre: "Thriller", language: "Hindi" },

  // Hindi Sci-Fi
  { title: "Koi... Mil Gaya", year: 2003, genre: "Sci-Fi", language: "Hindi" },
  { title: "Krrish", year: 2006, genre: "Sci-Fi", language: "Hindi" },
  { title: "Ra.One", year: 2011, genre: "Sci-Fi", language: "Hindi" },
  { title: "Attack", year: 2022, genre: "Sci-Fi", language: "Hindi" },
  { title: "Cargo", year: 2019, genre: "Sci-Fi", language: "Hindi" },

  // Hindi Horror
  { title: "Raaz", year: 2002, genre: "Romantic", language: "Hindi" },
  { title: "Bhoot", year: 2003, genre: "Romantic", language: "Hindi" },
  { title: "1920", year: 2008, genre: "Romantic", language: "Hindi" },
  { title: "Stree", year: 2018, genre: "Romantic", language: "Hindi" },
  { title: "Tumbbad", year: 2018, genre: "Romantic", language: "Hindi" },

  // Hindi Comedy
  { title: "Hera Pheri", year: 2000, genre: "Comedy", language: "Hindi" },
  { title: "Munna Bhai M.B.B.S.", year: 2003, genre: "Comedy", language: "Hindi" },
  { title: "Welcome", year: 2007, genre: "Comedy", language: "Hindi" },
  { title: "Chupke Chupke", year: 1995, genre: "Comedy", language: "Hindi" },
  { title: "Pati Patni Aur Woh", year: 2019, genre: "Comedy", language: "Hindi" },

  // Malayalam Emotional & Horror
  { title: "Manichitrathazhu", year: 1995, genre: "Comedy", language: "Malayalam" },
  { title: "Ennu Ninte Moideen", year: 2015, genre: "Horror", language: "Malayalam" },
  { title: "Premam", year: 2015, genre: "Horror", language: "Malayalam" },
  { title: "Charlie", year: 2015, genre: "Horror", language: "Malayalam" },
  { title: "Thattathin Marayathu", year: 2012, genre: "Horror", language: "Malayalam" },
  { title: "Anarkali", year: 2015, genre: "Horror", language: "Malayalam" },
  { title: "Uyare", year: 2019, genre: "Comedy", language: "Malayalam" },
  { title: "Kumbalangi Nights", year: 2019, genre: "Comedy", language: "Malayalam" },
  { title: "Take Off", year: 2017, genre: "Comedy", language: "Malayalam" },

  // Malayalam Sci-Fi
  { title: "Red Rain", year: 2013, genre: "Sci-Fi", language: "Malayalam" },
  { title: "9 (Nine)", year: 2019, genre: "Sci-Fi", language: "Malayalam" },

  // Malayalam Horror
  { title: "Ezra", year: 2017, genre: "Romantic", language: "Malayalam" },
  { title: "Bhoothakaalam", year: 2022, genre: "Horror", language: "Malayalam" },

  // Malayalam Comedy
  { title: "Meesa Madhavan", year: 2002, genre: "Thriller", language: "Malayalam" },
  { title: "Punjabi House", year: 1998, genre: "Thriller", language: "Malayalam" },
  { title: "Kilukkam", year: 1995, genre: "Thriller", language: "Malayalam" },
  { title: "Kalyanaraman", year: 2002, genre: "Thrller", language: "Malayalam" },
  { title: "CID Moosa", year: 2003, genre: "Thriller", language: "Malayalam" },

  // Thriller
  { title: "Seven", year: 1995, genre: "Thriller", language: "English" },
  { title: "Fight Club", year: 1999, genre: "Thriller", language: "English" },
  { title: "The Game", year: 1997, genre: "Thriller", language: "English" },
  { title: "American Psycho", year: 2000, genre: "Thriller", language: "English" },
  { title: "Identity", year: 2003, genre: "Thriller", language: "English" },
  { title: "Sahara", year: 2005, genre: "Thriller", language: "English" },
  { title: "Mystic River", year: 2003, genre: "Thriller", language: "English" },
  { title: "Red Eye", year: 2005, genre: "Thriller", language: "English" },
  { title: "Orphan", year: 2009, genre: "Thriller", language: "English" },
  { title: "The Prestige", year: 2006, genre: "Thriller", language: "English" },
  { title: "Sherlock Holmes", year: 2009, genre: "Thriller", language: "English" },
  { title: "Nightcrawler", year: 2014, genre: "Thriller", language: "English" },
  { title: "The Imitation Game", year: 2014, genre: "Thriller", language: "English" },
  { title: "Now You See Me", year: 2013, genre: "Thriller", language: "English" },
  { title: "Prisoners", year: 2013, genre: "Thriller", language: "English" },
  { title: "Tenet", year: 2020, genre: "Thriller", language: "English" },
  { title: "Don't Breathe", year: 2016, genre: "Thriller", language: "English" },
  { title: "Joker", year: 2019, genre: "Thriller", language: "English" },
  { title: "Enola Holmes", year: 2020, genre: "Thriller", language: "English" },
  { title: "Promising Young Woman", year: 2020, genre: "Thriller", language: "English" },
  { title: "The Killer", year: 2023, genre: "Thriller", language: "English" },
  { title: "Parasite", year: 2020, genre: "Thriller", language: "Korean" },
  { title: "The Night House", year: 2021, genre: "Thriller", language: "English" },

  // Sci-Fi
  { title: "The Lost World: Jurassic Park", year: 1997, genre: "Sci-Fi", language: "English" },
  { title: "Vanilla Sky", year: 2001, genre: "Sci-Fi", language: "English" },
  { title: "The Island", year: 2005, genre: "Sci-Fi", language: "English" },
  { title: "Predestination", year: 2014, genre: "Sci-Fi", language: "English" },
  { title: "Jurassic World", year: 2015, genre: "Sci-Fi", language: "English" },
  { title: "Jurassic World Rebirth", year: 2024, genre: "Sci-Fi", language: "English" },

  // Comedy
  { title: "Bean", year: 1997, genre: "Comedy", language: "English" },
  { title: "Due Date", year: 2010, genre: "Comedy", language: "English" },
  { title: "The Internship", year: 2013, genre: "Comedy", language: "English" },
  { title: "Step Brothers", year: 2008, genre: "Comedy", language: "English" },
  { title: "Thor: Ragnarok", year: 2017, genre: "Comedy", language: "English" },
  { title: "Head of State", year: 2023, genre: "Comedy", language: "English" },

  // Horror
  { title: "Fallen", year: 1998, genre: "Romantic", language: "English" },
  { title: "Hannibal", year: 2001, genre: "Romantic", language: "English" },
  { title: "Shutter", year: 2008, genre: "Romantic", language: "Thai" },
  { title: "The Visit", year: 2015, genre: "Romantic", language: "English" },
  { title: "The Ritual", year: 2017, genre: "Romantic", language: "English" },
  { title: "The Black Phone", year: 2021, genre: "Romantic", language: "English" }
];
