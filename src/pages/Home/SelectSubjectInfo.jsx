// EmptySubject.tsx
import { BookOpen } from 'lucide-react';      // ícone leve (opcional)
import { motion } from 'framer-motion';       // animação de fade/slide

export default function SelectSubjectInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] p-6 bg-gradient-to-br from-indigo-50 via-white to-teal-50"
    >
      <div className="mt-[-200px] max-w-xl text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 shadow-inner">
          <BookOpen className="h-8 w-8 stroke-indigo-600" aria-hidden />
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-800">
          Selecione um&nbsp;
          <span className="text-indigo-600">Assunto</span> para estudo!
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Escolha um assunto no menu à cima e mergulhe em materiais
          interativos e práticos.
        </p>
      </div>
    </motion.section>
  );
}
