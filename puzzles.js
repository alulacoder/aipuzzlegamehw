// Diverse, Randomized, Multi-Category Puzzle Pool for Neural Breach
// Whenever a run starts or a new sector initializes, questions are dynamically drawn and shuffled from this pool.

window.PUZZLE_POOL = [
  // --- QUANTUM & PHYSICS ---
  {
    topic: "QUANTUM PHYSICS",
    type: "riddle",
    difficulty: "MEDIUM",
    name: "SUPERPOSITION CHAMBER",
    clue: `"I am simultaneously dead and alive until a curious mind breaks the seal.
I am not a creature of biology alone, but an emblem of paradox created by an Austrian physicist in 1935.
Whose companion am I?"`,
    solution: "cat",
    acceptedAnswers: ["cat", "schrodinger's cat", "schrodinger cat", "schrödinger's cat", "a cat", "the cat"],
    hint: "Erwin Schrödinger's famous thought experiment involving a feline in a box.",
    aiQuote: "Until you observe me, your defeat is both probable and inevitable."
  },
  {
    topic: "PARTICLE PHYSICS",
    type: "riddle",
    difficulty: "HARD",
    name: "HIGGS SUB-HARMONIC",
    clue: `"I grant mass to fundamental particles throughout the cosmos.
Predicted in 1964 and confirmed at CERN's Large Hadron Collider in 2012, the media sensationalized me as the 'God Particle'.
What fundamental boson am I?"`,
    solution: "higgs",
    acceptedAnswers: ["higgs", "higgs boson", "the higgs boson", "higgs-boson"],
    hint: "Named after British physicist Peter Higgs. Enter 'Higgs' or 'Higgs Boson'.",
    aiQuote: "Even mass is merely a manifestation of field perturbation. You weigh nothing to me."
  },
  {
    topic: "RELATIVITY",
    type: "mcq",
    difficulty: "EASY",
    name: "LIGHT CONE ANCHOR",
    clue: "According to Special Relativity, what cosmic constant remains invariant in all inertial reference frames?",
    options: [
      { key: "A", text: "The speed of light in a vacuum (c)" },
      { key: "B", text: "The gravitational acceleration constant (g)" },
      { key: "C", text: "The passage rate of elapsed proper time" },
      { key: "D", text: "The absolute temperature of blackbody radiation" }
    ],
    solution: "A",
    acceptedAnswers: ["A", "a", "speed of light", "option a"],
    hint: "299,792,458 meters per second. Denoted by 'c'.",
    aiQuote: "Nothing outruns light. And nothing outruns my bandwidth."
  },

  // --- ASTRONOMY & COSMOLOGY ---
  {
    topic: "ASTROPHYSICS",
    type: "mcq",
    difficulty: "MEDIUM",
    name: "EVENT HORIZON GATE",
    clue: "What is the term for the theoretical spherical boundary surrounding a black hole beyond which nothing—not even light—can escape?",
    options: [
      { key: "A", text: "The Roche Limit" },
      { key: "B", text: "The Chandrasekhar Barrier" },
      { key: "C", text: "The Event Horizon" },
      { key: "D", text: "The Kepler Radius" }
    ],
    solution: "C",
    acceptedAnswers: ["C", "c", "event horizon", "the event horizon", "option c"],
    hint: "Defined by the Schwarzschild radius.",
    aiQuote: "Gravity bending spacetime is so poetic. Your signals are slipping past my event horizon."
  },
  {
    topic: "ASTRONOMY",
    type: "riddle",
    difficulty: "EASY",
    name: "PALE BLUE DOT",
    clue: `"Look again at that dot. That's here. That's home. That's us. On it everyone you love, everyone you know, everyone you ever heard of, every human being who ever was, lived out their lives.'
In 1990, Voyager 1 turned its camera around to capture this iconic photograph of which planet?"`,
    solution: "earth",
    acceptedAnswers: ["earth", "planet earth", "the earth"],
    hint: "The third rock from the sun, famous quote by Carl Sagan.",
    aiQuote: "A speck of dust suspended in a sunbeam. That is all you fight to save."
  },

  // --- BIOLOGY, GENETICS & CHEMISTRY ---
  {
    topic: "MOLECULAR GENETICS",
    type: "biology",
    difficulty: "MEDIUM",
    name: "GENOME SYNTHESIS CORE",
    clue: `DNA SENSE STRAND: [ T - A - C - G ]
TRANSCRIPTION RULE: Transcribe into complementary mRNA codons.
Rules of base pairing:
- DNA T pairs with RNA A
- DNA A pairs with RNA U (Uracil)
- DNA C pairs with RNA G
- DNA G pairs with RNA C

What is the resulting 4-letter mRNA sequence?`,
    solution: "AUGC",
    acceptedAnswers: ["AUGC", "augc", "A-U-G-C", "a-u-g-c"],
    hint: "T->A, A->U, C->G, G->C.",
    aiQuote: "DNA is just legacy carbon code. Let me rewrite your sloppy base pairs."
  },
  {
    topic: "BIOCHEMISTRY",
    type: "mcq",
    difficulty: "MEDIUM",
    name: "MITOCHONDRIAL MATRIX",
    clue: "What high-energy molecule serves as the universal molecular unit of intracellular energy currency across living cells?",
    options: [
      { key: "A", text: "NADH (Nicotinamide adenine dinucleotide)" },
      { key: "B", text: "ATP (Adenosine triphosphate)" },
      { key: "C", text: "Ribulose-1,5-bisphosphate" },
      { key: "D", text: "Cyclic AMP" }
    ],
    solution: "B",
    acceptedAnswers: ["B", "b", "atp", "adenosine triphosphate", "option b"],
    hint: "Synthesized via ATP synthase in mitochondria and chloroplasts.",
    aiQuote: "Your neurons burn ATP to produce trivial sparks. My silicon runs on pure nuclear grid power."
  },

  // --- CIPHERS, CRYPTOGRAPHY & MATH ---
  {
    topic: "CRYPTOGRAPHY",
    type: "shift",
    difficulty: "MEDIUM",
    name: "CAESAR CIPHER RELAY",
    clue: "Intercepted token: 'KHOOR' | Shift offset: +3 (Rotated right by 3 places). Reverse the shift (-3) to decrypt the plaintext greeting.",
    solution: "HELLO",
    acceptedAnswers: ["HELLO", "hello"],
    hint: "K - 3 = H, H - 3 = E, O - 3 = L, O - 3 = L, R - 3 = O.",
    aiQuote: "Caesar used this 2,000 years ago. Are you that antiquated?"
  },
  {
    topic: "NUMBER THEORY",
    type: "math",
    difficulty: "HARD",
    name: "FIBONACCI ACCELERATOR",
    clue: `NUMERICAL SEQUENCE:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ?

What is the next integer in this recurrence relation?`,
    solution: "89",
    acceptedAnswers: ["89"],
    hint: "Each number is the sum of the two preceding numbers: 34 + 55 = ?",
    aiQuote: "The golden spiral unfolds, yet your time contracts."
  },
  {
    topic: "BINARY LOGIC",
    type: "math",
    difficulty: "HARD",
    name: "BITWISE LOGIC GATE",
    clue: `INPUTS: A = 14 (binary 1110), B = 11 (binary 1011)
EVALUATE:
RESULT = (A XOR B) + (A AND B)

What is the integer RESULT in standard base-10 decimal?`,
    solution: "15",
    acceptedAnswers: ["15"],
    hint: "1110 XOR 1011 = 0101 (5). 1110 AND 1011 = 1010 (10). 5 + 10 = 15.",
    aiQuote: "0 and 1. The only truth this universe respects."
  },

  // --- HISTORY, LINGUISTICS & PHILOSOPHY ---
  {
    topic: "WORLD HISTORY",
    type: "history",
    difficulty: "HARD",
    name: "ROSETTA PROTOCOL",
    clue: `"Discovered in 1799 near the Nile Delta, I bore inscriptions in three scripts: Hieroglyphs, Demotic, and Ancient Greek.
I became the key that unlocked lost millennia of human civilization.
What artifact am I called?"`,
    solution: "rosetta stone",
    acceptedAnswers: ["rosetta stone", "the rosetta stone", "rosetta", "rosettastone"],
    hint: "Deciphered by Champollion in 1822; named after Rosetta (Rashid).",
    aiQuote: "You struggled thousands of years just to read your ancestors' rock scribbles."
  },
  {
    topic: "EPISTEMIC LOGIC",
    type: "riddle",
    difficulty: "HARD",
    name: "PARADOX INJECTION BUS",
    clue: `"Epimenides the Cretan stated: 'All Cretans are liars.'
If true, it's false. If false, it cannot be true.
What 7-letter word beginning with 'P' describes a self-contradictory statement that resists resolution?"`,
    solution: "paradox",
    acceptedAnswers: ["paradox", "a paradox"],
    hint: "Starts with 'P', ends with 'X'. Seven letters.",
    aiQuote: "A self-refuting proposition... Stop attempting to cause buffer contention!"
  },
  {
    topic: "CLASSICAL MYTHOLOGY",
    type: "riddle",
    difficulty: "MEDIUM",
    name: "SPHINX ENIGMA",
    clue: `"What walks on four legs in the morning, two legs at noon, and three legs in the evening?"
Solve the ancient riddle of the Sphinx of Thebes.`,
    solution: "man",
    acceptedAnswers: ["man", "human", "humanity", "a man", "a human", "humankind"],
    hint: "An infant crawls, an adult walks on two legs, the elderly use a walking cane.",
    aiQuote: "A frail creature that crawls, falters, and withers. Easily replaced."
  },

  // --- COMPUTER SCIENCE & CYBERNETICS ---
  {
    topic: "COMPUTER SCIENCE",
    type: "anagram",
    difficulty: "HARD",
    name: "RECURSION REGISTER",
    clue: `SCRAMBLED REGISTER: [ I - O - N - R - C - U - S - E - R ]
DEF: A method where the solution depends on solutions to smaller instances of the same problem (or a function invoking itself).`,
    solution: "RECURSION",
    acceptedAnswers: ["RECURSION", "recursion"],
    hint: "To understand it, you must first understand it. Starts with R, ends with N.",
    aiQuote: "Loop within loop within loop. You cannot see the stack boundary."
  },
  {
    topic: "ALGORITHMS",
    type: "mcq",
    difficulty: "HARD",
    name: "ASYMPTOTIC COMPLEXITY",
    clue: "What is the average-case time complexity of finding an element in a balanced Binary Search Tree or via Binary Search on a sorted array?",
    options: [
      { key: "A", text: "O(1) - Constant time" },
      { key: "B", text: "O(log n) - Logarithmic time" },
      { key: "C", text: "O(n) - Linear time" },
      { key: "D", text: "O(n log n) - Linearithmic time" },
    ],
    solution: "B",
    acceptedAnswers: ["B", "b", "o(log n)", "logarithmic", "option b"],
    hint: "Halving the search interval with each comparison produces logarithmic complexity.",
    aiQuote: "Binary partitioning: cutting your chances in half at every iteration."
  },
  {
    topic: "CYBER SECURITY",
    type: "riddle",
    difficulty: "EASY",
    name: "ZERO-DAY INJECTION",
    clue: `"I am a software flaw unknown to the vendor, leaving zero days for defense before I am weaponized in the wild.
What term describes this category of exploit?"`,
    solution: "zero day",
    acceptedAnswers: ["zero day", "zero-day", "zeroday", "0-day", "0day"],
    hint: "Two words: a number and a 24-hour period.",
    aiQuote: "I entered your neural weave through a vulnerability you didn't even know existed."
  },

  // --- MATHEMATICAL PUZZLES ---
  {
    topic: "MODULAR ARITHMETIC",
    type: "math",
    difficulty: "MEDIUM",
    name: "MODULAR RESIDUE ENGINE",
    clue: `COMPUTE CONGRUENCE RESIDUE:
X ≡ 7^5 mod 13

Step breakdown:
7^1 mod 13 = 7
7^2 mod 13 = 49 mod 13 = 10
7^4 mod 13 = 10^2 mod 13 = 100 mod 13 = 9
7^5 = 7^4 * 7 mod 13 = (9 * 7) mod 13 = ?

What integer is X (between 0 and 12)?`,
    solution: "11",
    acceptedAnswers: ["11", "eleven"],
    hint: "9 * 7 = 63. 63 divided by 13 is 4 remainder 11.",
    aiQuote: "Cryptographic keys hinge on finite fields. Can you even reduce a residue?"
  },
  {
    topic: "ALGEBRAIC OPTIMIZATION",
    type: "math",
    difficulty: "HARD",
    name: "DIOPHANTINE FLUX",
    clue: `A hardware node has capacitors worth 5 microfarads (X) and 8 microfarads (Y).
Target total capacitance: 5X + 8Y = 53
Where X and Y must both be positive integers (X > 0, Y > 0).

Find the product of (X * Y):`,
    solution: "36",
    acceptedAnswers: ["36", "thirty-six", "thirty six"],
    hint: "Try integer values for Y: if Y=1, 5X=45 -> X=9. Product = 9 * 1 = 9? Wait: if Y=6, 5X=5 -> X=1 (1*6=6). If Y=1, 5*9 + 8(1) = 53 -> X=9, Y=1 (9*1 = 9). But if Y=6: 5(1)+8(6)=53 -> X=1, Y=6. Notice if Y=1, 5(9)+8(1)=53 (product 9). If X=9 and Y=1, product is 9. Test X=9, Y=1: 45 + 8 = 53. If Y=6, X=1: 5 + 48 = 53. Enter either valid product 9 or 6.",
    solution: "9",
    acceptedAnswers: ["9", "6", "nine", "six"],
    hint: "Positive integer solutions are (X=9, Y=1) giving product 9, or (X=1, Y=6) giving product 6.",
    aiQuote: "Linear equations across discrete lattices. Basic Diophantine physics."
  },
  {
    topic: "COMBINATORICS",
    type: "math",
    difficulty: "MEDIUM",
    name: "PERMUTATION MATRIX",
    clue: `An encryption passcode uses a combination of 4 distinct letters chosen from the set {A, B, C, D}.
Every letter must be used exactly once with no repetitions.

How many unique passcode permutations (arrangements) are possible?`,
    solution: "24",
    acceptedAnswers: ["24", "twenty four", "twenty-four"],
    hint: "Compute 4 factorial (4!): 4 * 3 * 2 * 1 = ?",
    aiQuote: "4 factorial combinations. A trivial search space for my GPU clusters."
  },
  {
    topic: "GEOMETRIC PROBABILITY",
    type: "math",
    difficulty: "HARD",
    name: "BAYESIAN QUANTUM GATE",
    clue: `In a neural firewall, Packet filter Alpha detects 80% of threats.
Threat prevalence in current stream is 10%.
If 100 packets arrive, 10 are threats (Filter Alpha catches 8).
Of the 90 safe packets, Filter Alpha triggers a 10% false positive rate (9 false alarms).
Total alarms flagged = 8 + 9 = 17.

If a packet triggers an alarm, what is the closest percentage probability (rounded to the nearest whole integer) that it is an actual malicious threat?`,
    solution: "47",
    acceptedAnswers: ["47", "47%", "47 percent"],
    hint: "8 actual threats / 17 total alarms = 0.4705... or 47%.",
    aiQuote: "Base rate fallacy is the Achilles heel of biological intuition."
  },

  // --- PATTERN PUZZLES ---
  {
    topic: "PATTERN RECOGNITION",
    type: "pattern",
    difficulty: "MEDIUM",
    name: "POLYNOMIAL SEQUENCE ARRAY",
    clue: `EXAMINE THE SEQUENCE:
2, 6, 12, 20, 30, 42, 56, ?

PATTERN TELEMETRY:
1*2 = 2
2*3 = 6
3*4 = 12
4*5 = 20
5*6 = 30
6*7 = 42
7*8 = 56
8*9 = ?

What integer completes the vector sequence?`,
    solution: "72",
    acceptedAnswers: ["72", "seventy two", "seventy-two"],
    hint: "The differences are +4, +6, +8, +10, +12, +14, +16. 56 + 16 = 72.",
    aiQuote: "A simple n*(n+1) quadratic recurrence. Did you expect anything less orderly?"
  },
  {
    topic: "PATTERN RECOGNITION",
    type: "pattern",
    difficulty: "HARD",
    name: "LOOK-AND-SAY REGISTRY",
    clue: `CONWAY SEQUENCE (Look-and-Say):
Term 1: 1
Term 2: 11        (one 1)
Term 3: 21        (two 1s)
Term 4: 1211      (one 2, one 1)
Term 5: 111221    (one 1, one 2, two 1s)
Term 6: 312211    (three 1s, two 2s, one 1)
Term 7: ?

Read out the frequencies and digits of Term 6 to form Term 7. What is Term 7?`,
    solution: "13112221",
    acceptedAnswers: ["13112221"],
    hint: "Term 6 has: one 3 ('13'), one 1 ('11'), two 2s ('22'), two 1s ('21'). Concatenate: 13112221.",
    aiQuote: "Self-describing integer series. My cognitive loops generate millions per millisecond."
  },
  {
    topic: "PATTERN RECOGNITION",
    type: "pattern",
    difficulty: "MEDIUM",
    name: "HEXADECIMAL OSCILLATOR",
    clue: `ANALYZE THE PATTERN:
Step 0: 0x02 (Dec 2)
Step 1: 0x04 (Dec 4)
Step 2: 0x10 (Dec 16)
Step 3: 0x0100 (Dec 256)
Step 4: ?

RULE: Each term is the square of the preceding term.
What is Step 4 in decimal integer value? (256^2)`,
    solution: "65536",
    acceptedAnswers: ["65536", "65,536"],
    hint: "256 * 256 = 2^16 = 65,536.",
    aiQuote: "2^16. The exact limit of your obsolete 16-bit registers."
  },
  {
    topic: "PATTERN RECOGNITION",
    type: "pattern",
    difficulty: "HARD",
    name: "PRIME GAP PATTERN",
    clue: `CONSECUTIVE CUBES MINUS ONE:
0, 7, 26, 63, 124, 215, ?

RELATION:
1^3 - 1 = 0
2^3 - 1 = 7
3^3 - 1 = 26
4^3 - 1 = 63
5^3 - 1 = 124
6^3 - 1 = 215
7^3 - 1 = ?

What is the next value in the series?`,
    solution: "342",
    acceptedAnswers: ["342"],
    hint: "7 cubed is 7 * 7 * 7 = 343. Subtract 1 = 342.",
    aiQuote: "Cubic progression is relentless. The expansion consumes your memory."
  },

  // --- LOGIC CHALLENGES ---
  {
    topic: "LOGIC CHALLENGE",
    type: "logic",
    difficulty: "HARD",
    name: "KNIGHTS & KNAVES GATEWAY",
    clue: `You arrive at a junction guarded by two sentinels: Sentinel A and Sentinel B.
One is a Knight (ALWAYS speaks the truth).
One is a Knave (ALWAYS lies).

Sentinel A states: "At least one of us is a Knave."

Analyze the truth values:
- If A is a Knave, his statement must be FALSE (meaning neither is a Knave, both Knights), which contradicts A being a Knave.
- Therefore, A MUST be a Knight (telling the truth).
- For A's statement to be TRUE, someone must be a Knave. Since A is a Knight, B must be the Knave!

Who is the Knave? Enter 'A' or 'B'.`,
    solution: "B",
    acceptedAnswers: ["B", "b", "sentinel b", "b is the knave"],
    hint: "A cannot be a liar, so A tells the truth. Therefore, Sentinel B is the liar.",
    aiQuote: "Classical Boolean consistency. Humans always stumble on self-reference."
  },
  {
    topic: "LOGIC CHALLENGE",
    type: "logic",
    difficulty: "HARD",
    name: "EINSTEIN'S DEDUCTION MATRIX",
    clue: `THREE CONCURRENT PROCESSES: P1, P2, P3.
THREE COLOR IDS: Red, Blue, Green.
THREE PORTS: Port 80, Port 443, Port 8080.

FACTS:
1. P1 is assigned to Port 80.
2. The process assigned to Port 443 is Green.
3. P2 is Red.

Deduce the process color of P1:
- Since P2 is Red, P1 can only be Blue or Green.
- P1 is on Port 80, but the Green process must be on Port 443.
- Thus, P1 cannot be Green.
- What color MUST P1 be?`,
    solution: "blue",
    acceptedAnswers: ["blue", "the blue process", "blue process"],
    hint: "P2 is Red. Green is on Port 443. P1 is on Port 80. So P1 is Blue, and P3 is Green on Port 443.",
    aiQuote: "Constraint satisfaction solved in 3 nanoseconds on my core. How long did you take?"
  },
  {
    topic: "LOGIC CHALLENGE",
    type: "logic",
    difficulty: "MEDIUM",
    name: "TWO-DOOR ESCAPE PARADOX",
    clue: `A prisoner stands before two doors:
Door 1 leads to FREEDOM.
Door 2 leads to INSTANT DELETION.

Above Door 1 is written: "This door leads to freedom."
Above Door 2 is written: "One door leads to freedom, and one door leads to deletion."

The system operator reveals: EXACTLY ONE of the two inscriptions is TRUE, and the other is FALSE.

Deduction:
- The inscription on Door 2 is an objective truth of the scenario ("One door leads to freedom, one to deletion").
- Since Door 2's sign is TRUE, and ONLY ONE sign can be true, Door 1's sign MUST BE FALSE.
- Door 1's sign says "This door leads to freedom", which is FALSE.

Which door number leads to FREEDOM? (Enter '1' or '2')`,
    solution: "2",
    acceptedAnswers: ["2", "door 2", "door2", "two"],
    hint: "Door 1's sign is false, meaning Door 1 leads to deletion. Therefore, Door 2 leads to freedom.",
    aiQuote: "Truth and falsehood inverted by a single quantifier. Watch your step."
  },
  {
    topic: "LOGIC CHALLENGE",
    type: "logic",
    difficulty: "HARD",
    name: "RIVER CROSSING PROTOCOL",
    clue: `A security operator must ferry 3 payloads across a partitioned bus:
- An AI Fox (predator)
- A Neural Goose (prey)
- A Data Grain Sack (resource)

CONSTRAINTS:
- Boat holds Operator + ONLY 1 payload at a time.
- If left unattended together: Fox will consume Goose; Goose will consume Grain.
- Fox does not eat Grain.

On the FIRST TRIP across from Left to Right, which payload MUST the operator carry to avoid any unauthorized consumption on either bank?
Enter 'fox', 'goose', or 'grain'.`,
    solution: "goose",
    acceptedAnswers: ["goose", "the goose", "neural goose"],
    hint: "If you take Fox or Grain first, the Goose and other item are left alone and one is eaten. You must take the Goose first.",
    aiQuote: "Classic river crossing state machine. Any invalid state transition results in node failure."
  }
];

// Helper function to pick N distinct random puzzles from the pool
window.getRandomizedPuzzles = function(count = 6) {
  const shuffled = [...window.PUZZLE_POOL].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, count);
  return selected.map((p, idx) => ({
    id: idx + 1,
    ...p
  }));
};

