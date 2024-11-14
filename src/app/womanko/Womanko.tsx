"use client";
import { useState } from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { targetInfo } from "../types";
import HelpIcon from "./components/HelpIcon";
import WordDisplay from "./components/WordDisplay";
import GitHubIcon from "./components/GitHubIcon";

interface searchResultType {
  found: boolean;
  indexInfo: targetInfo[];
}

const Womanko = () => {
  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");
  const [searchResult, setSearchResult] = useState<searchResultType | null>(null);
  // const [fileContent, setFileContent] = useState<string[] | null>(null);
  const fileContent = ([
    "3p",
    "69",
    "acme",
    "adult film",
    "adult movie",
    "adult video",
    "anakyoudai",
    "anal",
    "analingus",
    "anilingus",
    "anus",
    "arse",
    "arsehole",
    "arseholes",
    "arses",
    "asadachi",
    "ass",
    "asses",
    "asshole",
    "assholes",
    "back",
    "balls",
    "ballsack",
    "bdsm",
    "beastiality",
    "bestiality",
    "bitch",
    "bitches",
    "blowjob",
    "blowjobs",
    "boin",
    "bokki",
    "bondage",
    "boner",
    "boners",
    "boob",
    "boobies",
    "boobs",
    "breast",
    "breasts",
    "bukkake",
    "butt",
    "butts",
    "came",
    "cameltoe",
    "chibusa",
    "chikubi",
    "chinchin",
    "chinge",
    "chinkasu",
    "chinko",
    "chinpo",
    "chitsu",
    "clit",
    "clitoris",
    "clitorises",
    "clits",
    "cock",
    "cocks",
    "condom",
    "condoms",
    "coom",
    "cooms",
    "cooming",
    "coomed",
    "coomer",
    "coomers",
    "cowper",
    "creampie",
    "cuck",
    "cuckold",
    "cum",
    "cumming",
    "cums",
    "cunni",
    "cunnilingus",
    "cunt",
    "cunts",
    "daiben",
    "deepthroat",
    "deepthroated",
    "deepthroating",
    "deepthroats",
    "dekachin",
    "dekamara",
    "dick",
    "dicks",
    "dildo",
    "dildos",
    "dilf",
    "dilfs",
    "dogging",
    "doggy",
    "doggystyle",
    "dominatrix",
    "doutei",
    "ecchi",
    "ejaculate",
    "ejaculated",
    "ejaculates",
    "ejaculating",
    "erect",
    "erection",
    "erections",
    "erotic",
    "erotica",
    "erotism",
    "facial",
    "fap",
    "fapped",
    "fapping",
    "faps",
    "fecal",
    "fellate",
    "fellatio",
    "femdom",
    "fetish",
    "fetishes",
    "fetishize",
    "fetishized",
    "finger",
    "fingered",
    "fingering",
    "fingers",
    "fist",
    "fisted",
    "fisting",
    "fists",
    "footjob",
    "frot",
    "frots",
    "frotted",
    "frotting",
    "fuck",
    "fucked",
    "fucker",
    "fucking",
    "fucks",
    "futanari",
    "g-spot",
    "gang bang",
    "gang banged",
    "gang banging",
    "gang bangs",
    "gansya",
    "gay sex",
    "genitalia",
    "genitals",
    "gloryhole",
    "gooch",
    "goon",
    "gooned",
    "gooning",
    "goons",
    "grind",
    "grinding",
    "group sex",
    "had sex",
    "hard",
    "hardcore",
    "hardon",
    "have sex",
    "having sex",
    "hentai",
    "hinnyu",
    "hoe",
    "hoes",
    "hump",
    "humped",
    "humping",
    "humps",
    "ichimotsu",
    "ikuiku",
    "incest",
    "inpo",
    "inran",
    "intercourse",
    "jack off",
    "jerkedoff",
    "jerkingoff",
    "jerkoff",
    "jerksoff",
    "jiikoui",
    "jizz",
    "jizzed",
    "jizzes",
    "jizzing",
    "joseiki",
    "kaimentai",
    "kancho",
    "kari",
    "kijoui",
    "kink",
    "kinks",
    "kinky",
    "kintama",
    "kitou",
    "kougan",
    "kouhaii",
    "koumon",
    "kyokon",
    "kyonyu",
    "labia",
    "loveho",
    "lovemaking",
    "lust",
    "lusted",
    "lusting",
    "lusts",
    "made love",
    "make love",
    "makes love",
    "making love",
    "mange",
    "manjiru",
    "manko",
    "mara",
    "masturbate",
    "masturbated",
    "masturbates",
    "masturbating",
    "masturbation",
    "masturbations",
    "milf",
    "milfs",
    "missionary",
    "musei",
    "nakadashi",
    "naked",
    "netorare",
    "nopan",
    "nude",
    "ochinchin",
    "ochinko",
    "omeko",
    "onanie",
    "onaru",
    "oppai",
    "orgasm",
    "orgy",
    "oshiri",
    "paiotsu",
    "paipan",
    "paizuri",
    "panchira",
    "panties",
    "pantsu",
    "panty",
    "peg",
    "pegged",
    "pegging",
    "pegs",
    "penetration",
    "penis",
    "penises",
    "porn",
    "porno",
    "pornography",
    "pornos",
    "pubic",
    "pussies",
    "pussy",
    "queef",
    "rimjob",
    "rimjobs",
    "scat",
    "scatology",
    "schlong",
    "schlongs",
    "scrotum",
    "scrotums",
    "seishi",
    "semen",
    "sex",
    "sext",
    "sexted",
    "sexting",
    "sexts",
    "sexual",
    "sexually",
    "sexy",
    "shikoshiko",
    "shiofuki",
    "slut",
    "sluts",
    "slutty",
    "smegma",
    "soapland",
    "sochin",
    "softcore",
    "sounyu",
    "sperm",
    "sperma",
    "squirt",
    "strap-on",
    "strip",
    "strip club",
    "stripped",
    "stripping",
    "strips",
    "suck",
    "sucked",
    "sucking",
    "sucks",
    "sumata",
    "syasei",
    "tamakin",
    "tamatama",
    "tekoki",
    "teman",
    "testical",
    "testicle",
    "testicles",
    "threesome",
    "tit",
    "titfuck",
    "titfucked",
    "titfucking",
    "titfucks",
    "tits",
    "titties",
    "titty",
    "tittyfuck",
    "tittyfucked",
    "tittyfucking",
    "tittyfucks",
    "unchi",
    "unko",
    "vagina",
    "vaginas",
    "vibe",
    "virgin",
    "virgins",
    "vulva",
    "vulvas",
    "whore",
    "whores",
    "xxx",
    "yarichin",
    "yariman",
    "yiff",
    "zeccho",
    "sacchinko",
    "sacchinpo",
    "sacchinchin",
  ]);

  // useEffect(() => {
  //   const fetchFileContent = async () => {
  //     try {
  //       // TODO: improve? either put them in a state or
  //       const response = await fetch(`https://raw.githubusercontent.com/Fuugarlu/womanco/refs/heads/main/public/curated-combination-of-words.txt`);
  //       // if (!response.ok) {
  //       //   response = await fetch(`https://github.com/Fuugarlu/womanco/blob/main/public/curated-combination-of-words.txt`)
  //       // }
  //       if (response.ok) {
  //         const text = await response.text();

  //         // Split the content by newlines and remove any empty strings
  //         const words = text.split(/\r?\n/).filter((word) => word.trim() !== "");

  //         setFileContent(words); // Save the array of words
  //       } else {
  //         throw new Error("Failed to load file");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching file:", error);
  //     }
  //   };

  //   // generateRandomLine();

  //   fetchFileContent();
  // }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    identifyWords(text);
    setSubmittedText(text);
  };

  const identifyWords = (text: string) => {
    if (fileContent == null) return; // TODO: Error?
    const foundWords = findSubstrings(text, fileContent);
    setSearchResult(foundWords);
  };

  function generateRandomLine() {
    const placeholders = [
      "Thank you, Gentleman Kobayashi!",
      "The storm that wipes out the pathetic little thing you call your life.",
      "My group's excited for the class field trip!",
      "Don't be too hard on them - they're new to the job. Plus, they're only juniors.",
      "Ew, I just stepped on a gross caterpillar and now my shoe's all gross.",
      "My classes are so hard, I don't know if I'll pass my exams this semester.",
      "My friends are usually either on the internet or are studying for exams.",
      "The researchers analyzed British IT trends.",
      "Yeah, I live in my parents' basement. Home to me and my mom's cat.",
      "You're moving to Essex? That sounds exciting!",
      "I don't know where my pen is. It was expensive too...",
      "Man, Konosuba is so good.",
      "Grinding Pianus is an easy way to farm EXP.",
      "I can't handle the campus syllabus. There's too many assignments!",
      "I could go on and on about the four horsemen of the apocalypse.",
      "The falcon dominates with speed. Hunting for food, rarely does it partake of rotten corpses.",
      "The post-it ties it all together. I love making this kind of DIY stuff.",
      "I loved the cross-examination scenes in Phoenix Wright!",
      "He, who resented his classmate, suffered.",
    ];
    const randomNumber = Math.floor(Math.random() * placeholders.length); // generates 0 to placeholderslength-1
    setText(placeholders[randomNumber]);
  }

  function findSubstrings(input: string, targets: string[]): searchResultType {
    // Remove non-alphanumeric characters for matching purposes, preserving alphanumeric chars only
    const sanitizedInput = input.replace(/[^a-zA-Z0-9]/g, " ");
    if (sanitizedInput.replace(/ /g, "") == "") return { found: false, indexInfo: [] };

    // Prepare to store all matches
    const allMatches: targetInfo[] = [];

    targets.forEach((target: string) => {
      const sanitizedTarget = target.replace(/[^a-zA-Z0-9]/g, ""); // Sanitize target
      const regex = new RegExp(sanitizedTarget.split("").join("\\s*"), "gi"); // Regex for target with spaces in between

      let match;
      let lastIndex = 0;

      // Find all matches for each target word
      while ((match = regex.exec(sanitizedInput)) !== null) {
        const matchText = match[0]; // The matched text in the sanitized input

        // Find the start index in the original input string
        const startIndex = sanitizedInput.indexOf(matchText, lastIndex);

        if (startIndex !== -1) {
          const endIndex = startIndex + matchText.length - 1;
          allMatches.push({ target, startIndex, endIndex });

          // Update lastIndex to continue the search from the position after the current match
          lastIndex = startIndex + 1;
        }
      }
    });

    return allMatches.length > 0 ? { found: true, indexInfo: allMatches } : { found: false, indexInfo: [] };
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-700">
      <div className="w-full max-w-3xl p-6 rounded shadow-lg bg-blue-100">
        <div className="relative">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-gray-700">
              Woman <span className="text-red-600">Coom</span>munication
            </h1>
            <p className="text-sm italic">(a joke website based on the game Woman Communication)</p>
          </div>

          <HelpIcon />
          <GitHubIcon />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-4 gap-2">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={"Type anything! The more the merrier."}
              className="w-full px-4 py-2 text-gray-700 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <FaRegLightbulb
              className="text-2xl cursor-pointer hover:text-blue-500"
              onClick={() => generateRandomLine()}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </form>

        {fileContent && submittedText && searchResult && searchResult.found && (
          <div className="mt-6 text-lg font-medium text-center text-gray-700">
            <WordDisplay
              text={submittedText}
              indexInfo={searchResult.indexInfo}
            />
          </div>
        )}

        {fileContent && submittedText && searchResult && !searchResult.found && <div className="mt-6 text-lg text-center text-blue-500 italic font-semibold">Looks seiso to me!</div>}
      </div>
    </div>
  );
};

export default Womanko;
