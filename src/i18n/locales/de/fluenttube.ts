export const fluenttube = {
  title: "FluentTube AI - Englisch üben mit lokalen Videos",
  description:
    "Englisch mit lokalen MP4/WebM-Videos üben: Hören → Schreiben → Sprechen, wortweises Diktat, britische IPA und Offline-Wörterbücher sowie ein Phonetiklabor. Mit React, FastAPI und Faster-Whisper.",
  featuresTitle: "Übungswerkzeuge",
  screenshotsTitle: "Einblick in FluentTube",
  screenshotsNote:
    "Die Oberfläche in Anthrazit und Blau mit synthetischen Inhalten in einer isolierten Demo-Bibliothek. Die Sprechansicht zeigt den Zustand vor der Aufnahme; die Bilder belegen keine Erkennungsgenauigkeit.",
  captions: [
    "Persönliche Bibliothek mit Suche, Fortschrittsfiltern und abgeschlossenen Videos.",
    "Satzübungen mit Wiedergabesteuerung und wortweisem Diktatfeedback.",
    "Sprechbereich mit britischer Satz-IPA, Originalton und Aufnahmesteuerung.",
  ],
  features: [
    "Lokale MP4- oder WebM-Dateien importieren und auf dem eigenen Rechner transkribieren. Native Wiedergabe, Satzschleifen und Temporegelung; lange Importe setzen nach abgeschlossenen Fünf-Minuten-Abschnitten fort.",
    "Hören → Schreiben → Sprechen: Das Diktat prüft fertige Wörter in Satzreihenfolge, erkennt Kurzformen und Wörter mit Bindestrichen und gibt buchstabenweise Hinweise.",
    "Wörter offline nachschlagen: britische IPA für über 67.000 Schreibweisen, englische Bedeutungen, Wortarten und verfügbare Beispiele. Kontextbezogene Verwendungen stehen zuerst.",
    "Durchgehende britische Satz-IPA beim Nachsprechen lesen und Wörterbuchvarianten wählen. Eigene Aufnahmen mit dem Original vergleichen und erkannte Wörter, Timing und experimentelle Tonhöhenkurven ansehen.",
    "Das Phonetiklabor bietet Lautanleitungen, Artikulationsdiagramme, Hörtests, geplante Wiederholungen und einen geführten Kurs.",
    "Bibliothek durchsuchen und filtern, Übungen fortsetzen, fertige Videos wiederholen und Videos nach Bestätigung löschen. Am Desktop bleibt das Video über der scrollbaren Satzliste sichtbar.",
    "Ein optional eingerichteter Cloud-Tutor liefert eine spanische Übersetzung, danach englische Erklärungen, Wortschatz, Redewendungen, Phrasal Verbs und Hinweise zu britischer verbundener Sprache.",
  ],
  study: {
    problem:
      "Selbst gewählte englische Videos in gezielte Hör-, Diktat- und Sprechübungen umwandeln. Lokale MP4/WebM-Importe ersetzen URL-Importe; Medien, Transkripte und Fortschritt bleiben auf dem Rechner. Optionale Online-Hilfe ist klar abgegrenzt.",
    architecture: [
      "React und TypeScript mit TanStack Query für Serverdaten, Zustand für Übungszustände und einer Tailwind-CSS-Oberfläche in Anthrazit und Blau.",
      "FastAPI verwaltet Bewertung und Speicherung. Eine begrenzte Hintergrundwarteschlange verarbeitet Faster-Whisper-Importe auf CPU oder optional NVIDIA CUDA und sichert fertige Fünf-Minuten-Abschnitte.",
      "FFmpeg und ffprobe prüfen Medien und extrahieren Audio. Native lokale Wiedergabe nutzt für fragmentierte MP4 eine Cache-Kopie ohne Neucodierung und bewahrt das Original.",
      "SQLite mit WAL und Fremdschlüsseln speichert Bibliothek und Fortschritt. Mitgelieferte britische IPA- und WordNet-Daten ermöglichen Wortabfragen und Aussprachehilfen ohne Wörterbuch-Downloads zur Laufzeit.",
      "Der optionale Cloud-Tutor erhält bei Nutzung Satzkontext oder Vokabeltext. Lokales Üben benötigt keinen API-Schlüssel; Browserentwürfe und Einstellungen liegen getrennt von SQLite.",
    ],
    tradeoff:
      "Nach dem ersten Modelldownload funktionieren lokale Importe und Wiedergabe offline; die Transkriptionsdauer hängt von der Hardware ab. Der Tutor sendet Text an den konfigurierten Anbieter, die optionale Referenzstimme ist online. Wörterbücher haben begrenzte Abdeckung; britische Satz-IPA ist eine vom Video unabhängige Referenz. Sprechfeedback bewertet keine einzelnen Phoneme und zertifiziert keinen Akzent.",
    lesson:
      "Lange Medienaufgaben mit Wiederaufnahmepunkten absichern und Bibliotheksdaten von Browserentwürfen trennen. Wörterbuchreferenzen, experimentelles Sprechfeedback und optionale Cloud-Erklärungen brauchen klar erklärte Grenzen.",
  },
  requestFlow:
    "Die Auswahl einer lokalen Datei startet den Import über FastAPI. Ein Hintergrundprozess prüft die Medien, extrahiert Audio und sichert die Faster-Whisper-Transkription abschnittsweise. SQLite speichert Sätze und Fortschritt; React lädt sie für Hören → Schreiben → Sprechen. Wortabfragen nutzen mitgelieferte Daten. Tutor-Text verlässt das Gerät bei Nutzung der optionalen Funktion.",
  validateNext:
    "Importwiederaufnahme nach Neustarts, Satzausrichtung, Diktate mit Kurzformen und Bindestrichen, IPA-Varianten und fehlende Wörter, Mikrofonrechte und mobile Ansichten prüfen. Transkriptionsleistung auf der Zielhardware messen und Tonhöhenfeedback als experimentell behandeln.",
};
