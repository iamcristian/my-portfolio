export const fluenttube = {
  title: "FluentTube AI - Práctica de inglés en local",
  description:
    "Practica inglés con videos MP4/WebM locales: escucha → escribe → habla, dictado palabra por palabra, IPA británico y diccionarios sin conexión, y un laboratorio de fonética. Con React, FastAPI y Faster-Whisper.",
  featuresTitle: "Herramientas de práctica",
  screenshotsTitle: "Así es FluentTube",
  screenshotsNote:
    "Interfaz carbón y azul con contenido sintético en una biblioteca de demostración aislada. La vista oral se muestra antes de grabar; estas capturas no demuestran la precisión del reconocimiento.",
  captions: [
    "Biblioteca personal con búsqueda, filtros de progreso y videos completados.",
    "Práctica por frases con controles de reproducción y corrección del dictado palabra por palabra.",
    "Espacio de práctica oral con IPA británico de la frase, audio original y controles de grabación.",
  ],
  features: [
    "Importa archivos MP4 o WebM, transcribe en tu equipo y practica con reproducción nativa, bucles por frase y control de velocidad. Las importaciones largas se reanudan desde bloques completados de cinco minutos.",
    "Escucha → escribe → habla: el dictado comprueba las palabras terminadas en orden, reconoce contracciones y palabras con guion, y ofrece pistas letra por letra.",
    "Consulta palabras sin conexión: IPA británico para más de 67.000 grafías, significados en inglés, categorías gramaticales y ejemplos disponibles. Los usos contextuales aparecen primero.",
    "Lee el IPA británico continuo de la frase al practicar shadowing y elige variantes del diccionario. Grábate, compara audios y revisa palabras reconocidas, tiempos y curvas de tono experimentales.",
    "Explora el laboratorio de fonética con guías de sonidos, diagramas de articulación, pruebas auditivas, repasos programados y un curso guiado.",
    "Busca y filtra tu biblioteca, retoma la práctica, repasa videos completados y elimina videos con confirmación. En escritorio, el video permanece visible sobre la lista de frases desplazable.",
    "Con un tutor en la nube configurado, solicita una traducción al español seguida de explicaciones en inglés, vocabulario, expresiones, phrasal verbs y consejos de habla conectada británica.",
  ],
  study: {
    problem:
      "Convertir videos elegidos por el usuario en práctica de escucha, dictado y expresión oral en inglés. La importación de MP4/WebM locales sustituye a la importación por URL; los archivos, transcripciones y avances permanecen en el equipo, con asistencia en línea opcional claramente diferenciada.",
    architecture: [
      "React y TypeScript con TanStack Query para el estado del servidor, Zustand para la práctica e interfaz carbón y azul en Tailwind CSS.",
      "FastAPI gestiona la evaluación y la persistencia. Una cola acotada procesa importaciones con Faster-Whisper en CPU o NVIDIA CUDA opcional y guarda bloques de transcripción completados de cinco minutos.",
      "FFmpeg y ffprobe inspeccionan los archivos y extraen audio. La reproducción local nativa usa una copia en caché para MP4 fragmentados sin recodificar y conserva el original.",
      "SQLite con WAL y claves foráneas almacena biblioteca y progreso. Los datos incluidos de IPA británico y WordNet permiten consultar palabras y pronunciación sin descargar diccionarios durante el uso.",
      "El tutor opcional recibe contexto de frases o vocabulario al utilizarlo. La práctica local no necesita clave de API; borradores y preferencias del navegador se guardan por separado de SQLite.",
    ],
    tradeoff:
      "Tras descargar el modelo de voz, la importación y reproducción locales funcionan sin conexión, pero la velocidad de transcripción depende del hardware. El tutor envía texto al proveedor configurado y la voz de referencia opcional usa un servicio en línea. Los diccionarios tienen cobertura limitada; el IPA británico es una referencia independiente del acento del video y la evaluación oral no califica fonemas individuales ni certifica un acento.",
    lesson:
      "Guardar puntos de recuperación en tareas largas y distinguir los datos persistentes de la biblioteca de los borradores del navegador. Explicar el alcance de los diccionarios, la evaluación oral experimental y el tutor opcional permite interpretar correctamente cada herramienta.",
  },
  requestFlow:
    "Seleccionar un archivo local inicia la importación mediante FastAPI. El trabajador inspecciona el archivo, extrae audio y guarda puntos de recuperación de la transcripción Faster-Whisper. SQLite almacena frases y progreso; React los carga para escucha → escribe → habla. Las consultas léxicas usan datos incluidos y el texto del tutor sale del equipo al utilizar esa función opcional.",
  validateNext:
    "Validar la recuperación de importaciones tras reiniciar, la alineación de frases, el dictado con contracciones y guiones, las variantes IPA y palabras ausentes, los permisos del micrófono y las vistas móviles. Medir la transcripción en la CPU/GPU de destino y mantener el análisis de tono como experimental.",
};
