import React, { useState } from 'react'

const TrigonometricCircle = () => {
  const [activeTab, setActiveTab] = useState('basico');
  const [angle, setAngle] = useState(0);

  // Calcula as coordenadas (x,y) no círculo para um ângulo dado
  const calculateCoordinates = (angle) => {
    const radians = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radians),
      y: Math.sin(radians),
    };
  };

  const { x, y } = calculateCoordinates(angle);
  return (
    <div className="mt-4 sm:mt-10 max-w-6xl mx-auto p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl">
      <h1 className="text-xl sm:text-3xl font-bold text-indigo-800 mb-4 sm:mb-6 text-center">Círculo Trigonométrico Interativo</h1>

      {/* Navegação por abas - Versão mobile scrollável */}
      <div className="mb-4 sm:mb-6 overflow-x-auto">
        <div className="flex whitespace-nowrap pb-2 sm:pb-0 sm:border-b border-gray-200">
          <button
            onClick={() => setActiveTab('basico')}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${activeTab === 'basico' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            Conceitos Básicos
          </button>
          <button
            onClick={() => setActiveTab('aplicacoes')}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${activeTab === 'aplicacoes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            Aplicações
          </button>
          <button
            onClick={() => setActiveTab('radianos')}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${activeTab === 'radianos' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            Radianos
          </button>
          <button
            onClick={() => setActiveTab('quadrantes')}
            className={`py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${activeTab === 'quadrantes' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
          >
            Quadrantes
          </button>
        </div>
      </div>

      {/* Conteúdo das abas - Coluna única em mobile */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Coluna esquerda - Círculo interativo */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md order-1 lg:order-none">
          <div className="relative w-full h-48 sm:h-64 md:h-80 mx-auto mb-4 sm:mb-6">
            {/* Círculo */}
            <div className="absolute w-full h-full rounded-full border-2 border-indigo-500"></div>

            {/* Eixos */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-400 transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-400 transform -translate-x-1/2"></div>

            {/* Linha do ângulo */}
            <div
              className="absolute top-1/2 left-1/2 w-1/2 h-px bg-indigo-400 transform origin-left"
              style={{ transform: `rotate(${angle}deg) translateY(-50%)` }}
            ></div>

            {/* Ponto no círculo */}
            <div
              className="absolute w-4 h-4 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `calc(50% + ${x * 50}%)`,
                top: `calc(50% - ${y * 50}%)`
              }}
            ></div>

            {/* Rótulos dos eixos */}
            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xs sm:text-sm font-medium">0°</div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-medium">90°</div>
            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xs sm:text-sm font-medium">180°</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm font-medium">270°</div>
          </div>

          {/* Controle do ângulo */}
          <div className="mb-3 sm:mb-4">
            <label htmlFor="angle" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
              Ângulo: {angle}°
            </label>
            <input
              type="range"
              id="angle"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          {/* Coordenadas atuais */}
          <div className="bg-indigo-100 p-3 sm:p-4 rounded-lg">
            <h3 className="font-bold text-xs sm:text-sm text-indigo-800 mb-1 sm:mb-2">Coordenadas no círculo</h3>
            <p className="text-xs sm:text-sm text-gray-800">
              <span className="font-semibold">Ponto (x, y):</span> ({x.toFixed(2)}, {y.toFixed(2)})
            </p>
            <p className="text-xs sm:text-sm text-gray-800">
              <span className="font-semibold">Seno (sen):</span> {y.toFixed(2)}
            </p>
            <p className="text-xs sm:text-sm text-gray-800">
              <span className="font-semibold">Cosseno (cos):</span> {x.toFixed(2)}
            </p>
            <p className="text-xs sm:text-sm text-gray-800">
              <span className="font-semibold">Tangente (tan):</span> {x !== 0 ? (y / x).toFixed(2) : "∞"}
            </p>
          </div>
        </div>

        {/* Coluna direita - Conteúdo informativo */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md overflow-y-auto max-h-[32rem] order-0 lg:order-none">
          {/* Conteúdo básico */}
          {activeTab === 'basico' && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-indigo-800 mb-3 sm:mb-4">O que é um círculo trigonométrico?</h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                É um círculo especial com raio 1 (isso significa que do centro até a borda tem exatamente 1 de comprimento).
                Esse círculo fica desenhado sobre um plano, onde temos:
              </p>

              <ul className="list-disc pl-4 sm:pl-5 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-700">
                <li>Um eixo horizontal (chamado de eixo X).</li>
                <li>Um eixo vertical (chamado de eixo Y).</li>
                <li>O centro do círculo bem no ponto (0,0), que chamamos de origem.</li>
              </ul>

              <h3 className="text-sm sm:text-lg font-bold text-indigo-700 mb-2">Seno e Cosseno</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                O cosseno (cos) é a largura do ponto no círculo (o valor no eixo x).
                O seno (sen) é a altura do ponto no círculo (o valor no eixo Y).
              </p>

              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <div className="font-semibold text-xs sm:text-sm text-blue-800">0° → (1, 0)</div>
                <div className="font-semibold text-xs sm:text-sm text-blue-800">90° → (0, 1)</div>
                <div className="font-semibold text-xs sm:text-sm text-blue-800">180° → (-1, 0)</div>
                <div className="font-semibold text-xs sm:text-sm text-blue-800">270° → (0, -1)</div>
                <div className="font-semibold text-xs sm:text-sm text-blue-800">360° → (1, 0)</div>
              </div>
            </div>
          )}

          {/* Aplicações */}
          {activeTab === 'aplicacoes' && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-indigo-800 mb-3 sm:mb-4">Por que isso é importante?</h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                O círculo trigonométrico é super útil porque:
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-green-800 mb-1 sm:mb-2">1. Ajuda a entender movimentos circulares</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Roda de um carro girando</span> → Podemos calcular a velocidade de rotação usando seno e cosseno.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Satélite orbitando a Terra</span> → A órbita pode ser descrita com funções trigonométricas.
                  </p>
                </div>

                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-purple-800 mb-1 sm:mb-2">2. Explica como funcionam ondas</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Luz</span> → Viaja em ondas, e a trigonometria ajuda a entender sua frequência e intensidade.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Sismologia</span> → Terremotos geram ondas que podem ser estudadas com trigonometria.
                  </p>
                </div>

                <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-yellow-800 mb-1 sm:mb-2">3. Usado em jogos e animações</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Câmeras em jogos</span> → Se uma câmera gira em torno de um personagem, sua posição segue um círculo.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Efeitos visuais</span> → Ajudam a criar sombras, reflexos e iluminação realista.
                  </p>
                </div>

                <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-red-800 mb-1 sm:mb-2">4. Cálculos em física e engenharia</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Engrenagens e motores</span> → A rotação segue funções trigonométricas.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Pontes e edifícios</span> → Designs precisam de cálculos com seno e cosseno.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Radianos */}
          {activeTab === 'radianos' && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-indigo-800 mb-3 sm:mb-4">Medidas em Radianos</h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                Os matemáticos perceberam que usar graus às vezes não é tão prático, então criaram uma outra forma de medir ângulos: radianos.
              </p>

              <div className="bg-indigo-50 p-3 sm:p-4 rounded-lg mb-3 sm:mb-4">
                <p className="font-semibold text-xs sm:text-sm text-indigo-800">A ideia é que uma volta completa equivale a 2π radianos.</p>
              </div>

              <h3 className="text-sm sm:text-lg font-bold text-indigo-700 mb-2">Conversão Graus-Radianos</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 mb-3 sm:mb-4">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-1 sm:py-2 px-2 sm:px-4 border text-xs sm:text-sm">Graus</th>
                      <th className="py-1 sm:py-2 px-2 sm:px-4 border text-xs sm:text-sm">Radianos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">0°</td>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">0</td>
                    </tr>
                    <tr>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">90°</td>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">π/2</td>
                    </tr>
                    <tr>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">180°</td>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">π</td>
                    </tr>
                    <tr>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">270°</td>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">3π/2</td>
                    </tr>
                    <tr>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">360°</td>
                      <td className="py-1 sm:py-2 px-2 sm:px-4 border text-center text-xs sm:text-sm">2π</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-sm sm:text-lg font-bold text-indigo-700 mb-2">Funções Trigonométricas</h3>
              <p className="text-xs sm:text-sm text-gray-700 mb-2">
                Funções trigonométricas são regras matemáticas que ligam ângulos e valores numéricos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-blue-50 p-2 sm:p-3 rounded-lg">
                  <p className="font-semibold text-xs sm:text-sm text-blue-800">Seno (sen)</p>
                  <p className="text-xs sm:text-sm text-gray-700">Mede a altura no círculo trigonométrico.</p>
                </div>
                <div className="bg-green-50 p-2 sm:p-3 rounded-lg">
                  <p className="font-semibold text-xs sm:text-sm text-green-800">Cosseno (cos)</p>
                  <p className="text-xs sm:text-sm text-gray-700">Mede a largura no círculo trigonométrico.</p>
                </div>
                <div className="bg-purple-50 p-2 sm:p-3 rounded-lg">
                  <p className="font-semibold text-xs sm:text-sm text-purple-800">Tangente (tan)</p>
                  <p className="text-xs sm:text-sm text-gray-700">Mede a inclinação da reta tangente ao círculo.</p>
                </div>
                <div className="bg-yellow-50 p-2 sm:p-3 rounded-lg">
                  <p className="font-semibold text-xs sm:text-sm text-yellow-800">Cotangente (cot)</p>
                  <p className="text-xs sm:text-sm text-gray-700">O inverso da tangente.</p>
                </div>
              </div>
            </div>
          )}

          {/* Quadrantes */}
          {activeTab === 'quadrantes' && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-indigo-800 mb-3 sm:mb-4">Quadrantes do Círculo</h2>
              <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
                O círculo é dividido em quatro partes, chamadas quadrantes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-red-800 mb-1 sm:mb-2">1° Quadrante (0° a 90°)</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">cos e sen:</span> positivos
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> cos(60°) = 0,5
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> sen(30°) = 0,5
                  </p>
                </div>

                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-blue-800 mb-1 sm:mb-2">2° Quadrante (90° a 180°)</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">cos:</span> negativo
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">sen:</span> positivo
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> cos(120°) = -0,5
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-green-800 mb-1 sm:mb-2">3° Quadrante (180° a 270°)</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">cos e sen:</span> negativos
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> cos(210°) = -0,87
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> sen(240°) = -0,87
                  </p>
                </div>

                <div className="bg-purple-50 p-3 sm:p-4 rounded-lg">
                  <h3 className="font-bold text-xs sm:text-sm text-purple-800 mb-1 sm:mb-2">4° Quadrante (270° a 360°)</h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">cos:</span> positivo
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">sen:</span> negativo
                  </p>
                  <p className="text-xs sm:text-sm text-gray-700">
                    <span className="font-semibold">Exemplo:</span> cos(300°) = 0,5
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default TrigonometricCircle