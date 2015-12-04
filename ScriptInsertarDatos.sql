SELECT * FROM  courses;
SELECT * FROM  topics;
SELECT * FROM  exams;
SELECT * FROM  questions;
SELECT * FROM  choices;

DELETE FROM choices WHERE id>0;
DELETE FROM questions WHERE id>0;
DELETE FROM exams WHERE id>0;
DELETE FROM topics WHERE id>0;
DELETE FROM courses WHERE id>0;

set @fecha = '2015-12-03 10:00:00';
-- Cursos
INSERT INTO `courses` VALUES 
(1,'Taller de modelamiento de software',@fecha,@fecha),
(2,'Taller de programación distribuida',@fecha,@fecha);

-- Temas
INSERT INTO `topics` VALUES 
(1,'Arquitecturas de software',1,@fecha,@fecha),
(2,'Metodologías de desarrollo de software',1,@fecha,@fecha),
(3,'Introducción a Visual Studio',2,@fecha,@fecha),
(4,'Programación Orientada a Objetos',2,@fecha,@fecha);

-- Examenes
INSERT INTO `exams` VALUES 
(1,'CL01 - Visual Studio y POO',2,@fecha,@fecha),
(2,'CL01 - Generalidades de SW y Arquitecturas de SW',1,@fecha,@fecha);

-- Preguntas
INSERT INTO `questions` VALUES 
(1,1,1,1,'¿Cuál de las siguientes afirmaciones es verdadera con respecto a una clase?',@fecha,@fecha),
(2,1,1,2,'Indique las afirmaciones verdaderas con respecto al constructor',@fecha,@fecha),
(3,1,2,3,'Indique las afirmaciones verdaderas con respecto a Visual Studio',@fecha,@fecha),
(4,2,4,3,'¿Cuál o cuáles de las siguientes afirmaciones son verdaderas con respecto al SW?',@fecha,@fecha),
(5,2,3,1,'¿Cuál o cuáles de las siguientes afirmaciones son verdaderas con respecto a la Arquitectura orientada a Componentes?',@fecha,@fecha),
(6,2,4,2,'¿Cuál o cuáles de las siguientes afirmaciones son verdaderas con respecto a la Arquitectura N-Capas y N-Niveles?',@fecha,@fecha);


-- Alternativas
INSERT INTO `choices` VALUES 
(1,1,'Una clase puede representar cualquier elemento de la realidad, a excepción de procesos de negocio (como por ejemplo matrícula, venta, etc.).',0,@fecha,@fecha),
(2,1,'Primero se crean los objetos y luego las clases.',0,@fecha,@fecha),
(3,1,'Sólo se pueden crear clases en C Sharp y no en Java.',0,@fecha,@fecha),
(4,1,'Se recomienda que los nombres de las clases se encuentren en singular.',1,@fecha,@fecha),

(5,2,'Una clase no puede tener varios constructores.',0,@fecha,@fecha),
(6,2,'El constructor siempre debe implementarse debajo de los campos.',0,@fecha,@fecha),
(7,2,'El constructor de una clase en C# se invoca con la palabra reservada new.',1,@fecha,@fecha),
(8,2,'Generalmente se utiliza para indicar datos obligatorios.',1,@fecha,@fecha),

(9,3,'Estamos utilizando Visual Studio versión 2012 edición Ultimate.',1,@fecha,@fecha),
(10,3,'Visual Studio es considerado un IDE, al igual que NetBeans.',1,@fecha,@fecha),
(11,3,'Una edición se diferencia de otra por el precio de licencia y características funcionales.',1,@fecha,@fecha),
(12,3,'TMS no tiene relación alguna con Visual Studio.',0,@fecha,@fecha),

(13,4,'Un SW tiene que ser adaptable, ágil y de alta calidad.',1,@fecha,@fecha),
(14,4,'En cualquier proyecto de creación de SW existen riesgos.',1,@fecha,@fecha),
(15,4,'El SW puede evolucionar (nuevas características) con el pasar del tiempo.',1,@fecha,@fecha),
(16,4,'El proceso genérico para la construcción de SW engloba los siguientes pasos: Comunicación, Modelamiento, Construcción y Despliegue.',0,@fecha,@fecha),

(17,5,'Se dice que un componente es reusable si oculta su complejidad interna al exterior.',0,@fecha,@fecha),
(18,5,'Un componente se comunica con otro por medio de una interfaz.',1,@fecha,@fecha),
(19,5,'La Arquitectura Orientada a Componentes propone la descomposición de un sistema.',1,@fecha,@fecha),
(20,5,'Siempre es recomendable que un componente sea reusable.',1,@fecha,@fecha),

(21,6,'Una aplicación implementada en 3 capas puede funcionar en 1 nivel.',1,@fecha,@fecha),
(22,6,'Un Servidor Web puede ser considerado una capa.',0,@fecha,@fecha),
(23,6,'Una aplicación implementada en 3 capas sólo puede funcionar en 3 niveles (ni más, ni menos).',0,@fecha,@fecha),
(24,6,'Un Nivel es diferente de una Capa.',1,@fecha,@fecha)
;
