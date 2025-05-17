import React, { useState } from 'react';

const CartesianPlane = () => {
  const [activeTab, setActiveTab] = useState('basico');
  const [point, setPoint] = useState({ x: 2, y: 3 });
  const [showDistance, setShowDistance] = useState(false);
  const [showSlope, setShowSlope] = useState(false);
  const [secondPoint, setSecondPoint] = useState({ x: -1, y: -2 });

  const calculateDistance = (p1, p2) => {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)).toFixed(2);
  };

  const calculateSlope = (p1, p2) => {
    if (p2.x === p1.x) return "Indefinida (reta vertical)";
    return ((p2.y - p1.y) / (p2.x - p1.x)).toFixed(2);
  };

  const distance = calculateDistance(point, secondPoint);
  const slope = calculateSlope(point, secondPoint);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50  shadow-xl">
      <h1 className="text-3xl font-bold text-indigo-800 mb-6 text-center">Plano Cartesiano Interativo</h1>

      {/* Navegação por abas */}
      <div className="flex mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('basico')}
          className={`py-2 px-4 font-medium ${activeTab === 'basico' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
        >
          Conceitos Básicos
        </button>
        <button
          onClick={() => setActiveTab('aplicacoes')}
          className={`py-2 px-4 font-medium ${activeTab === 'aplicacoes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
        >
          Aplicações
        </button>
        <button
          onClick={() => setActiveTab('distancia')}
          className={`py-2 px-4 font-medium ${activeTab === 'distancia' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
        >
          Distância e Inclinação
        </button>
        <button
          onClick={() => setActiveTab('quadrantes')}
          className={`py-2 px-4 font-medium ${activeTab === 'quadrantes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
        >
          Quadrantes
        </button>
      </div>

      {/* Conteúdo das abas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Coluna esquerda - Plano cartesiano interativo */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="relative w-full h-64 md:h-80 mx-auto mb-6 bg-gray-50">
            {/* Eixos */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-400 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 transform -translate-x-1/2"></div>

            {/* Grades */}
            {[...Array(21)].map((_, i) => (
              <div key={`x-${i}`} className="absolute top-0 bottom-0 w-px bg-gray-200" style={{ left: `${i * 5}%` }}></div>
            ))}
            {[...Array(21)].map((_, i) => (
              <div key={`y-${i}`} className="absolute left-0 right-0 h-px bg-gray-200" style={{ top: `${i * 5}%` }}></div>
            ))}

            {/* Marcadores dos eixos */}
            {[...Array(5)].map((_, i) => {
              const value = i * 2 - 4;
              return (
                <React.Fragment key={`marker-${i}`}>
                  <div className="absolute top-1/2 transform -translate-y-1/2 text-xs" style={{ left: `${i * 25}%` }}>
                    {value}
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-xs" style={{ top: `${100 - i * 25}%` }}>
                    {value}
                  </div>
                </React.Fragment>
              );
            })}

            {/* Linha entre pontos (se habilitado) */}
            {showDistance && (
              <div
                className="absolute h-px bg-green-500 transform origin-left"
                style={{
                  width: `${Math.sqrt(Math.pow(secondPoint.x - point.x, 2) * 25)}%`,
                  top: `${50 - point.y * 12.5}%`,
                  left: `${50 + point.x * 12.5}%`,
                  transform: `rotate(${Math.atan2(secondPoint.y - point.y, secondPoint.x - point.x)}rad)`
                }}
              ></div>
            )}

            {/* Pontos */}
            <div
              className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-move"
              style={{
                left: `${50 + point.x * 12.5}%`,
                top: `${50 - point.y * 12.5}%`
              }}
              onMouseDown={(e) => {
                const startX = e.clientX;
                const startY = e.clientY;
                const startPointX = point.x;
                const startPointY = point.y;

                const handleMouseMove = (e) => {
                  const dx = (e.clientX - startX) / 20;
                  const dy = (e.clientY - startY) / 20;
                  setPoint({
                    x: Math.max(-4, Math.min(4, startPointX + dx)),
                    y: Math.max(-4, Math.min(4, startPointY - dy))
                  });
                };

                const handleMouseUp = () => {
                  window.removeEventListener('mousemove', handleMouseMove);
                  window.removeEventListener('mouseup', handleMouseUp);
                };

                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
              }}
            ></div>

            <div
              className="absolute w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-move"
              style={{
                left: `${50 + secondPoint.x * 12.5}%`,
                top: `${50 - secondPoint.y * 12.5}%`
              }}
              onMouseDown={(e) => {
                const startX = e.clientX;
                const startY = e.clientY;
                const startPointX = secondPoint.x;
                const startPointY = secondPoint.y;

                const handleMouseMove = (e) => {
                  const dx = (e.clientX - startX) / 20;
                  const dy = (e.clientY - startY) / 20;
                  setSecondPoint({
                    x: Math.max(-4, Math.min(4, startPointX + dx)),
                    y: Math.max(-4, Math.min(4, startPointY - dy))
                  });
                };

                const handleMouseUp = () => {
                  window.removeEventListener('mousemove', handleMouseMove);
                  window.removeEventListener('mouseup', handleMouseUp);
                };

                window.addEventListener('mousemove', handleMouseMove);
                window.addEventListener('mouseup', handleMouseUp);
              }}
            ></div>
          </div>

          {/* Controles interativos */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="pointX" className="block text-sm font-medium text-gray-700 mb-1">
                  Ponto Azul X:
                </label>
                <input
                  type="number"
                  id="pointX"
                  min="-4"
                  max="4"
                  step="0.1"
                  value={point.x}
                  onChange={(e) => setPoint({ ...point, x: parseFloat(e.target.value) })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="pointY" className="block text-sm font-medium text-gray-700 mb-1">
                  Ponto Azul Y:
                </label>
                <input
                  type="number"
                  id="pointY"
                  min="-4"
                  max="4"
                  step="0.1"
                  value={point.y}
                  onChange={(e) => setPoint({ ...point, y: parseFloat(e.target.value) })}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="secondPointX" className="block text-sm font-medium text-gray-700 mb-1">
                  Ponto Vermelho X:
                </label>
                <input
                  type="number"
                  id="secondPointX"
                  min="-4"
                  max="4"
                  step="0.1"
                  value={secondPoint.x}
                  onChange={(e) => setSecondPoint({ ...secondPoint, x: parseFloat(e.target.value) })}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="secondPointY" className="block text-sm font-medium text-gray-700 mb-1">
                  Ponto Vermelho Y:
                </label>
                <input
                  type="number"
                  id="secondPointY"
                  min="-4"
                  max="4"
                  step="0.1"
                  value={secondPoint.y}
                  onChange={(e) => setSecondPoint({ ...secondPoint, y: parseFloat(e.target.value) })}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>

            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showDistance}
                  onChange={() => setShowDistance(!showDistance)}
                  className="h-4 w-4 text-indigo-600 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Mostrar distância</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={showSlope}
                  onChange={() => setShowSlope(!showSlope)}
                  className="h-4 w-4 text-indigo-600 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Mostrar inclinação</span>
              </label>
            </div>

            {(showDistance || showSlope) && (
              <div className="bg-indigo-100 p-4 rounded-lg">
                {showDistance && (
                  <p className="text-gray-800">
                    <span className="font-semibold">Distância entre pontos:</span> {distance}
                  </p>
                )}
                {showSlope && (
                  <p className="text-gray-800">
                    <span className="font-semibold">Inclinação da reta:</span> {slope}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Coluna direita - Conteúdo informativo */}
        <div className="bg-white p-6 rounded-xl shadow-md overflow-y-auto max-h-[32rem]">
          {/* Conteúdo básico */}
          {activeTab === 'basico' && (
            <div>
              <h2 className="text-xl font-bold text-indigo-800 mb-4">O que é o Plano Cartesiano?</h2>
              <p className="text-gray-700 mb-4">
                O plano cartesiano é um sistema de coordenadas bidimensional formado por dois eixos perpendiculares:
              </p>

              <ul className="list-disc pl-5 mb-4 text-gray-700">
                <li><span className="font-semibold">Eixo X (abscissas):</span> horizontal</li>
                <li><span className="font-semibold">Eixo Y (ordenadas):</span> vertical</li>
                <li><span className="font-semibold">Origem (0,0):</span> ponto de intersecção dos eixos</li>
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-blue-800 mb-2">Como localizar pontos</h3>
                <p className="text-gray-700">
                  Cada ponto no plano é representado por um par ordenado (x, y), onde:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-700">
                  <li><span className="font-semibold">x:</span> distância horizontal até a origem</li>
                  <li><span className="font-semibold">y:</span> distância vertical até a origem</li>
                </ul>
              </div>

              <h3 className="text-lg font-bold text-indigo-700 mb-2">Exemplos importantes</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-semibold text-green-800">(2, 3)</p>
                  <p className="text-gray-700">2 unidades à direita, 3 unidades acima</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="font-semibold text-yellow-800">(-1, 4)</p>
                  <p className="text-gray-700">1 unidade à esquerda, 4 unidades acima</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-red-800">(0, -2)</p>
                  <p className="text-gray-700">No eixo Y, 2 unidades abaixo</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="font-semibold text-purple-800">(3, 0)</p>
                  <p className="text-gray-700">No eixo X, 3 unidades à direita</p>
                </div>
              </div>
            </div>
          )}

          {/* Aplicações */}
          {activeTab === 'aplicacoes' && (
            <div>
              <h2 className="text-xl font-bold text-indigo-800 mb-4">Aplicações do Plano Cartesiano</h2>

              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">1. Navegação e GPS</h3>
                  <p className="text-gray-700">
                    Sistemas de navegação usam coordenadas cartesianas para determinar posições exatas na Terra.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">2. Gráficos e Visualização de Dados</h3>
                  <p className="text-gray-700">
                    Gráficos de barras, linhas e dispersão são construídos sobre o plano cartesiano.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-800 mb-2">3. Jogos e Computação Gráfica</h3>
                  <p className="text-gray-700">
                    Posições de personagens e objetos em jogos são definidas por coordenadas (x, y).
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">4. Engenharia e Arquitetura</h3>
                  <p className="text-gray-700">
                    Plantas baixas e projetos técnicos usam o sistema de coordenadas para precisão.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">5. Física e Matemática</h3>
                  <p className="text-gray-700">
                    Movimento de partículas e funções matemáticas são representados no plano cartesiano.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Distância e inclinação */}
          {activeTab === 'distancia' && (
            <div>
              <h2 className="text-xl font-bold text-indigo-800 mb-4">Distância e Inclinação</h2>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-blue-800 mb-2">Fórmula da Distância</h3>
                <p className="text-gray-700 mb-2">
                  A distância <span className="font-semibold">d</span> entre dois pontos <span className="font-semibold">(x₁, y₁)</span> e <span className="font-semibold">(x₂, y₂)</span> é:
                </p>
                <div className="bg-white p-2 rounded text-center font-mono">
                  d = √[(x₂ - x₁)² + (y₂ - y₁)²]
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h3 className="font-bold text-green-800 mb-2">Inclinação de uma Reta</h3>
                <p className="text-gray-700 mb-2">
                  A inclinação <span className="font-semibold">m</span> de uma reta que passa por dois pontos é:
                </p>
                <div className="bg-white p-2 rounded text-center font-mono">
                  m = (y₂ - y₁) / (x₂ - x₁)
                </div>
                <p className="text-gray-700 mt-2">
                  Representa a "inclinação" da reta: quanto maior o valor absoluto, mais íngreme.
                </p>
              </div>

              <h3 className="text-lg font-bold text-indigo-700 mb-2">Casos Especiais</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="font-semibold text-yellow-800">Reta Horizontal</p>
                  <p className="text-gray-700">Inclinação = 0</p>
                  <p className="text-gray-700">Exemplo: (2, 3) e (5, 3)</p>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <p className="font-semibold text-red-800">Reta Vertical</p>
                  <p className="text-gray-700">Inclinação indefinida</p>
                  <p className="text-gray-700">Exemplo: (1, 2) e (1, 5)</p>
                </div>
              </div>
            </div>
          )}

          {/* Quadrantes */}
          {activeTab === 'quadrantes' && (
            <div>
              <h2 className="text-xl font-bold text-indigo-800 mb-4">Quadrantes do Plano Cartesiano</h2>

              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  O plano cartesiano é dividido em 4 quadrantes pelos eixos X e Y:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-2">1° Quadrante</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Posição:</span> Superior direito
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Coordenadas:</span> (+, +)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Exemplo:</span> (2, 3)
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-bold text-yellow-800 mb-2">2° Quadrante</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Posição:</span> Superior esquerdo
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Coordenadas:</span> (-, +)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Exemplo:</span> (-1, 4)
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-bold text-red-800 mb-2">3° Quadrante</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Posição:</span> Inferior esquerdo
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Coordenadas:</span> (-, -)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Exemplo:</span> (-3, -2)
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">4° Quadrante</h3>
                  <p className="text-gray-700">
                    <span className="font-semibold">Posição:</span> Inferior direito
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Coordenadas:</span> (+, -)
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Exemplo:</span> (5, -1)
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mt-4">
                <h3 className="font-bold text-purple-800 mb-2">Pontos sobre os eixos</h3>
                <p className="text-gray-700">
                  <span className="font-semibold">Eixo X:</span> (x, 0) - Exemplo: (3, 0)
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Eixo Y:</span> (0, y) - Exemplo: (0, -2)
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartesianPlane;