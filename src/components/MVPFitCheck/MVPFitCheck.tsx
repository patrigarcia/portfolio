import React, { useState, useRef, useEffect } from "react";
import { Box, Text, VStack, RadioGroup, Radio, Stack, Button, useColorModeValue, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

// Define a type for question keys that matches the QuestionResponse interface
type QuestionKey =
  | "technicalComplexity"
  | "functionalScope"
  | "problemDefinition"
  | "hypothesisValidation"
  | "timelineAndResources"
  | "innovationLevel"
  | "extremePersonalization"
  | "externalIntegrations"
  | "scalability"
  | "communication";

interface QuestionResponse {
  technicalComplexity: number | null;
  functionalScope: number | null;
  problemDefinition: number | null;
  hypothesisValidation: number | null;
  timelineAndResources: number | null;
  innovationLevel: number | null;
  extremePersonalization: number | null;
  externalIntegrations: number | null;
  scalability: number | null;
  communication: number | null;
}

// Define a type for the question object
interface Question {
  id: QuestionKey;
  text: string;
  options: {
    label: string;
    value: number;
  }[];
}

const MVPFitCheck: React.FC = () => {
  const resultRef = useRef<HTMLDivElement>(null);

  const initialResponses: QuestionResponse = {
    technicalComplexity: null,
    functionalScope: null,
    problemDefinition: null,
    hypothesisValidation: null,
    timelineAndResources: null,
    innovationLevel: null,
    extremePersonalization: null,
    externalIntegrations: null,
    scalability: null,
    communication: null,
  };

  const [responses, setResponses] = useState<QuestionResponse>(initialResponses);
  const [totalScore, setTotalScore] = useState<number | null>(null);
  const [evaluationResult, setEvaluationResult] = useState<{
    message: string;
    colorScheme: string;
  } | null>(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBg = useColorModeValue("white", "gray.700");

  const questions: Question[] = [
    {
      id: "technicalComplexity",
      text: "Complejidad técnica: ¿El proyecto requiere tecnologías complejas para ser funcional?",
      options: [
        { label: "No, las tecnologías son estándar", value: 2 },
        { label: "Sí, requiere tecnologías avanzadas en una pequeña parte", value: 1 },
        { label: "Sí, depende completamente de tecnologías complejas", value: 0 },
      ],
    },
    {
      id: "functionalScope",
      text: "Alcance funcional: ¿Qué nivel de funcionalidades requiere el cliente en la primera versión?",
      options: [
        { label: "Funcionalidades esenciales que validan la propuesta de valor principal", value: 2 },
        { label: "Funcionalidades esenciales con algunos extras secundarios", value: 1 },
        { label: "Un ecosistema completo de funciones y múltiples dashboards desde el inicio", value: 0 },
      ],
    },
    {
      id: "problemDefinition",
      text: "Definición del problema y público objetivo: ¿El cliente tiene claridad sobre el problema que quiere resolver y los usuarios a los que va dirigido el producto?",
      options: [
        { label: "Sí, tiene una definición clara del problema y un público bien definido", value: 2 },
        { label: "Tiene una idea general del problema, pero no ha definido completamente al público objetivo", value: 1 },
        { label: "No, todavía está explorando la idea y no sabe a quién va dirigido exactamente", value: 0 },
      ],
    },
    {
      id: "hypothesisValidation",
      text: "Validación de hipótesis: ¿Cuál es el objetivo principal del proyecto en esta fase?",
      options: [
        { label: "Validar hipótesis sobre la aceptación de la solución por parte de los usuarios", value: 2 },
        { label: "Tener una versión funcional que se pueda probar en un entorno real", value: 1 },
        { label: "Lanzar un producto casi completo y escalable desde el primer día", value: 0 },
      ],
    },
    {
      id: "timelineAndResources",
      text: "Plazo y recursos disponibles: ¿El cliente tiene expectativas realistas sobre el tiempo y los recursos disponibles?",
      options: [
        { label: "Sí, entiende los límites de tiempo y está dispuesto a priorizar", value: 2 },
        { label: "Tiene algunas expectativas elevadas, pero puede ajustar sus prioridades", value: 1 },
        { label: "No, espera un producto finalizado con múltiples iteraciones en poco tiempo", value: 0 },
      ],
    },
    {
      id: "innovationLevel",
      text: "Nivel de innovación vs clonación: ¿Qué tipo de producto quiere crear el cliente?",
      options: [
        { label: "Es una mejora innovadora de algo existente, pero con un enfoque único", value: 2 },
        { label: "Es un clon de un producto conocido, pero bien definido", value: 1 },
        { label: "Es un producto completamente innovador con flujos y tecnologías complejas", value: 0 },
      ],
    },
    {
      id: "extremePersonalization",
      text: "Personalización extrema: ¿Qué nivel de personalización requiere el cliente en la primera versión?",
      options: [
        { label: "Muy poca o ninguna personalización, solo funciones básicas", value: 2 },
        { label: "Un nivel medio de personalización (ej. personalización de campos, colores)", value: 1 },
        { label: "Altamente personalizado con múltiples configuraciones desde el inicio", value: 0 },
      ],
    },
    {
      id: "externalIntegrations",
      text: "Integración con eistemas de terceros: ¿El proyecto necesita integrarse con APIs o servicios externos?",
      options: [
        { label: "No requiere ninguna integración externa compleja", value: 2 },
        { label: "Sí, requiere una integración básica (por ejemplo, autenticación o pasarela de pagos)", value: 1 },
        { label: "Sí, requiere múltiples integraciones complejas y dependencias externas", value: 0 },
      ],
    },
    {
      id: "scalability",
      text: "Escalabilidad inmediata: ¿Qué expectativas tiene el cliente sobre la capacidad del producto desde el día 1?",
      options: [
        { label: "Quiere validar con un pequeño grupo de usuarios iniciales", value: 2 },
        { label: "Espera manejar cientos de usuarios, pero está dispuesto a aceptar limitaciones", value: 1 },
        { label: "Quiere un producto capaz de manejar miles de usuarios desde el inicio", value: 0 },
      ],
    },
    {
      id: "communication",
      text: "Comunicación y feedback: ¿El cliente está dispuesto a participar activamente en revisiones y brindar feedback durante el desarrollo?",
      options: [
        { label: "Sí, se compromete a participar en reuniones semanales y validar los avances", value: 2 },
        { label: "Sólo participará en algunas reuniones y revisiones clave", value: 1 },
        { label: "No tiene disponibilidad para dar feedback frecuente", value: 0 },
      ],
    },
  ];

  const handleResponseChange = (questionId: QuestionKey, value: number) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const evaluateProject = () => {
    // Check if all questions are answered
    const allAnswered = Object.values(responses).every((value) => value !== null);

    if (!allAnswered) {
      // Show an error or prevent evaluation
      setEvaluationResult({
        message: "Por favor, responde todas las preguntas antes de evaluar.",
        colorScheme: "red",
      });
      return;
    }

    // Calculate score (using type assertion since we've checked all are not null)
    const score = Object.values(responses).reduce((sum, value) => sum + (value as number), 0);
    setTotalScore(score);

    if (score >= 16) {
      setEvaluationResult({
        message: "¡Es un MVP viable! Este proyecto puede desarrollarse en 6 semanas.",
        colorScheme: "green",
      });
    } else if (score >= 10) {
      setEvaluationResult({
        message: "Se requiere ajustar algunas funcionalidades o expectativas para hacerlo viable.",
        colorScheme: "yellow",
      });
    } else {
      setEvaluationResult({
        message: "No es un MVP. El alcance actual es demasiado amplio para un desarrollo en 6 semanas.",
        colorScheme: "red",
      });
    }
  };

  useEffect(() => {
    if (evaluationResult && resultRef.current) {
      resultRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  }, [evaluationResult]);

  // Function to reset the form
  const resetForm = () => {
    setResponses(initialResponses);
    setTotalScore(null);
    setEvaluationResult(null);
  };

  return (
    <Box width="100%" minHeight="100vh" backgroundColor={bgColor} pt="100px" color={textColor}>
      <Box maxWidth="800px" margin="auto" padding="8" borderRadius="lg" backgroundColor={useColorModeValue("gray.50", "gray.900")} boxShadow="xl" mb="100px">
        <VStack spacing="6" align="stretch">
          <Text textAlign="center" as="b" fontSize="2em" color={useColorModeValue("blue.600", "blue.300")}>
            MVP Fit Check
          </Text>

          <Text textAlign="center" color={textColor} marginBottom="8">
            Esta herramienta basada en ingeniería de procesos iterativos e incrementales te permitirá evaluar si tu proyecto es un MVP viable para desarrollarse en un plazo de 6 semanas.
          </Text>

          <Stack spacing={6}>
            {questions.map((question, index) => (
              <Box key={question.id} borderWidth="1px" borderRadius="lg" p={4} boxShadow="md" backgroundColor={cardBg}>
                <Text fontWeight="bold" mb={3} color={textColor}>
                  {index + 1}. {question.text}
                </Text>
                <RadioGroup onChange={(value) => handleResponseChange(question.id, Number(value))} value={responses[question.id] !== null ? responses[question.id]?.toString() : undefined}>
                  <Stack direction="column">
                    {question.options.map((option, optIndex) => (
                      <Radio key={optIndex} value={option.value.toString()} color={textColor}>
                        {option.label} (+{option.value} puntos)
                      </Radio>
                    ))}
                  </Stack>
                </RadioGroup>
              </Box>
            ))}
          </Stack>

          <Button colorScheme="blue" size="lg" onClick={evaluateProject} marginTop="8" width="full">
            Evaluar Proyecto
          </Button>

          {evaluationResult && (
            <Box marginTop="6" ref={resultRef}>
              <Alert
                status={evaluationResult.colorScheme === "green" ? "success" : evaluationResult.colorScheme === "yellow" ? "warning" : "error"}
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                borderRadius="lg"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Resultado de la Evaluación
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  {evaluationResult.message}
                  {totalScore !== null && (
                    <Text mt={2} fontWeight="bold">
                      Puntuación Total: {totalScore} / 20
                    </Text>
                  )}
                </AlertDescription>
              </Alert>

              <Button colorScheme="blue" variant="outline" onClick={resetForm} marginTop="4" width="full">
                Reiniciar Evaluación
              </Button>
            </Box>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default MVPFitCheck;
