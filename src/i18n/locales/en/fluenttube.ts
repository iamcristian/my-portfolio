export const fluenttube = {
  title: "FluentTube AI - Local-First English Practice",
  description:
    "Practice English with local MP4/WebM videos: Listen → Write → Speak, word-by-word dictation, offline British IPA and dictionaries, and a Phonetics Lab. Built with React, FastAPI and Faster-Whisper.",
  featuresTitle: "Practice tools",
  screenshotsTitle: "Inside FluentTube",
  screenshotsNote:
    "The charcoal and blue interface with synthetic content in an isolated demo library. The speaking view is shown before recording; these captures do not demonstrate recognition accuracy.",
  captions: [
    "Personal library with search, progress filters and completed videos.",
    "Sentence practice with playback controls and word-by-word dictation feedback.",
    "Speaking workspace with British sentence IPA, original playback and recording controls.",
  ],
  features: [
    "Import local MP4 or WebM files, transcribe on your computer and practice with native playback, sentence loops and speed controls. Long imports resume from completed five-minute checkpoints.",
    "Listen → Write → Speak: dictation checks completed words in sentence order, recognises contractions and hyphenated words, and reveals successive letters as hints.",
    "Inspect words offline: British IPA for over 67,000 spellings, English meanings, parts of speech and available examples. Contextual uses appear first.",
    "Read continuous British sentence IPA while shadowing and select alternative dictionary readings. Record yourself, compare audio and review recognised words, timing and experimental pitch contours.",
    "Explore the Phonetics Lab with sound guides, articulation diagrams, listening quizzes, scheduled reviews and a guided course.",
    "Search and filter your library, resume practice, review completed videos and remove videos with confirmation. On desktop, the video stays visible above the scrolling sentence list.",
    "Optionally request a Spanish translation followed by English explanations, vocabulary, idioms, phrasal verbs and British connected-speech tips from a configured cloud tutor.",
  ],
  study: {
    problem:
      "Turn personally chosen English videos into focused listening, dictation and speaking practice. Local MP4/WebM imports replace URL-based imports; media, transcripts and progress stay on the computer, with optional online assistance clearly separated.",
    architecture: [
      "React and TypeScript with TanStack Query for server state, Zustand for practice state, and a charcoal and blue Tailwind CSS interface.",
      "FastAPI owns scoring and persistence. A bounded background queue processes imports with Faster-Whisper on CPU or optional NVIDIA CUDA; completed five-minute transcription parts are checkpointed.",
      "FFmpeg and ffprobe inspect media and extract audio. Native local playback uses a cached copy for fragmented MP4 without re-encoding, preserving the original.",
      "SQLite with WAL and foreign keys stores the library and progress. Bundled British IPA and WordNet data power word inspection and sentence pronunciation without runtime dictionary downloads.",
      "An optional cloud tutor receives sentence context or vocabulary when used. Local practice needs no API key; browser drafts and preferences are stored separately from SQLite.",
    ],
    tradeoff:
      "After the initial speech model is cached, local imports and playback work offline, but transcription speed depends on hardware. Cloud tutor requests send text to the configured provider, and optional reference speech uses an online voice. Dictionary coverage is finite; British sentence IPA is a broad reference independent of the recording, and speaking feedback does not grade individual phonemes or certify an accent.",
    lesson:
      "Checkpoint long media jobs and distinguish durable library data from browser drafts. Keep dictionary guidance, experimental speaking feedback and optional cloud explanations explicit so learners understand what each tool can assess.",
  },
  requestFlow:
    "Selecting a local file starts an import through FastAPI. The background worker inspects media, extracts audio and checkpoints Faster-Whisper transcription. SQLite stores the sentences and progress; React loads them for Listen → Write → Speak. Word inspection uses bundled data, while tutor text leaves the device only when that optional feature is used.",
  validateNext:
    "Validate import recovery after a restart, sentence alignment, dictation with contractions and hyphenated words, IPA variants and missing dictionary entries, microphone permissions and mobile layouts. Measure transcription on the target CPU/GPU and treat pitch feedback as experimental.",
};
