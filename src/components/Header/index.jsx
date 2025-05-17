import { Menu, X, ChevronDown, Home, BookOpen, Info, Lightbulb, Printer, MoveRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { data } from '../../mocks/subjects'
import { useSubjectContext } from '../../context/SubjectContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAssuntosOpen, setIsAssuntosOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setIsAssuntosOpen(false)
    }
  }

  const toggleAssuntos = () => {
    setIsAssuntosOpen(!isAssuntosOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsAssuntosOpen(false)
  }

  const { currentSubject, setCurrentSubject } = useSubjectContext()
  const navigate = useNavigate()

  const selectSubject = (e) => {
    const subjectName = e.currentTarget.innerText
    const subject = data.subjects.find(e => e.name === subjectName)
    setCurrentSubject(subject)
    closeMenu()
    navigate('/')
  }

  return (
    <>
      {/* Header principal */}
      <header className={`bg-indigo-300 fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex flex-1 justify-between">
              <div className="flex space-x-5 items-center">
                <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  <Home className="mr-2 h-4 w-4" /> HOME
                </Link>
                <div className="relative">
                  <button
                    onClick={toggleAssuntos}
                    className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors"
                  >
                    <BookOpen className="mr-2 h-4 w-4" /> ASSUNTOS <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAssuntosOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  {isAssuntosOpen && (
                    <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 origin-top-right transition-all duration-200">
                      <div className="py-1">
                        {data.subjects.map(subject => (
                          <span onClick={selectSubject} key={subject.name} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">{subject.name}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/sobre" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium flex items-center transition-colors">
                  <Info className="mr-2 h-4 w-4" /> SOBRE
                </Link>
              </div>

              <div className="flex space-x-8 items-center">
                {!currentSubject && <span className="cursor-pointer text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                  <div className='hover:bg-cyan-500 bg-cyan-400 transition-colors py-2 px-4 rounded'>Projeto de Extensão</div>
                </span>}
                {currentSubject && <div>
                  <div className='flex items-center'>
                    Assunto
                    <MoveRight className='ml-3 mr-3' />
                    <a className="text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                      <div className='hover:bg-cyan-500 bg-cyan-400 transition-colors py-1 px-4 rounded'>{currentSubject.name}</div>
                    </a>
                  </div>
                </div>}

                <span onClick={() => window.print()} className="text-gray-900 cursor-pointer px-3 py-2 text-sm font-medium flex items-center">
                  <Printer className='hover:bg-indigo-500 bg-indigo-400 transition-colors w-15 p-2.5 h-10 rounded' size={20} />
                </span>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay e Menu Lateral */}
      <div className={`fixed inset-0 z-30 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        />

        {/* Menu Lateral */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="h-full flex flex-col">
            {/* Cabeçalho do menu */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
              <button
                onClick={toggleMenu}
                className="p-1 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Itens do menu */}
            <nav className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-1">
                <li>
                  <Link
                    to="/"
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={closeMenu}
                  >
                    <Home className="mr-3 h-5 w-5" /> HOME
                  </Link>
                </li>
                <li>
                  <button
                    onClick={toggleAssuntos}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center">
                      <BookOpen className="mr-3 h-5 w-5" /> ASSUNTOS
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isAssuntosOpen ? 'transform rotate-180' : ''}`} />
                  </button>
                  {isAssuntosOpen && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {data.subjects.map(subject => (
                        
                         <span onClick={selectSubject} key={subject.name} className="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">{subject.name}</span>
                        
                       
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link
                    to="/sobre"
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={closeMenu}
                  >
                    <Info className="mr-3 h-5 w-5" /> SOBRE
                  </Link>
                </li>
                <li>
                  <div className="flex items-center px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Lightbulb className="mr-3 h-5 w-5" /> Projeto de Extensão
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => {
                      window.print()
                      closeMenu()
                    }}
                    className="flex items-center px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <Printer className="mr-3 h-5 w-5" /> Imprimir
                  </div>
                </li>
                {currentSubject && (
                  <li className="px-4 py-3 border-t mt-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <span className="font-medium">Assunto atual:</span>
                      <span className="ml-2 bg-cyan-400 px-2 py-1 rounded">{currentSubject.name}</span>
                    </div>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Espaço para o conteúdo principal não ficar escondido */}
      <div className="h-16"></div>
    </>
  )
}

export default Header