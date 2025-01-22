import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Home: React.FC = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    weight: '',
    height: '',
    age: '',
  });
  const [dietPlan, setDietPlan] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const generateDietPlan = () => {
    // Lógica para gerar o plano de dieta com base nos dados do paciente
    const plan = `
      Recomendação diária de calorias: 2000 kcal

      Lanche da Manhã:
      - Frutas e iogurte (150 kcal, 5g proteínas, 2g gorduras)
      - Opções de substituição: Aveia com leite (200 kcal, 8g proteínas, 5g gorduras), Smoothie de frutas (180 kcal, 3g proteínas, 1g gorduras)

      Almoço:
      - Salada, arroz integral, frango grelhado (500 kcal, 30g proteínas, 10g gorduras)
      - Opções de substituição: Quinoa (220 kcal, 8g proteínas, 3g gorduras), peixe grelhado (250 kcal, 22g proteínas, 8g gorduras), legumes cozidos (150 kcal, 5g proteínas, 2g gorduras)

      Lanche da Tarde:
      - Castanhas e suco natural (300 kcal, 10g proteínas, 20g gorduras)
      - Opções de substituição: Barrinha de cereal (150 kcal, 5g proteínas, 3g gorduras), frutas secas (200 kcal, 2g proteínas, 1g gorduras)

      Jantar:
      - Sopa de legumes e peixe assado (400 kcal, 25g proteínas, 8g gorduras)
      - Opções de substituição: Salada de folhas verdes (100 kcal, 2g proteínas, 1g gorduras), tofu grelhado (200 kcal, 15g proteínas, 10g gorduras)
    `;
    setDietPlan(plan);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text('Plano de Dieta para Pacientes Dialíticos', 10, 10);
    doc.text(dietPlan || '', 10, 20);
    doc.save('plano_de_dieta.pdf');
  };

  return (
    <div>
      <header>
        <div className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black sm:text-6xl">Calculadora de Dieta para Pacientes Dialíticos</h1>
              <p className="mt-4 text-lg text-gray-700">Insira os dados do paciente para gerar recomendações personalizadas de dieta.</p>
            </div>

            <div className="mt-10 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome do paciente"
                  value={patientData.name}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="weight"
                  placeholder="Peso (kg)"
                  value={patientData.weight}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="height"
                  placeholder="Altura (cm)"
                  value={patientData.height}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md"
                />
                <input
                  type="number"
                  name="age"
                  placeholder="Idade"
                  value={patientData.age}
                  onChange={handleChange}
                  className="p-4 border border-gray-300 rounded-md"
                />
              </div>

              <button
                onClick={generateDietPlan}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md"
              >
                Gerar Plano Alimentar
              </button>

              {dietPlan && (
                <div className="mt-8 p-6 bg-green-100 rounded-md">
                  <h2 className="text-2xl font-bold text-green-700">Plano de Dieta Gerado:</h2>
                  <pre className="mt-4 text-gray-800 whitespace-pre-wrap">{dietPlan}</pre>
                  <button
                    onClick={downloadPDF}
                    className="mt-4 px-6 py-3 bg-red-600 text-white rounded-md"
                  >
                    Baixar Plano em PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;