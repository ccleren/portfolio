// ============================================================================
// CONFIGURACIÓN DE PROYECTOS — bilingüe (ES/EN)
// ============================================================================
// tag: "basic" | "advanced" | "professional"
// ============================================================================

const projects = [
    {
        id: 1,
        image: "imagenes/AWS_Organizations_Landing_Zone.png",
        technologies: ["AWS Organizations", "SCP", "IAM Identity Center", "CloudTrail", "AWS Budgets", "Terraform"],
        tag: "professional",
        github: "https://github.com/ccleren/aws-organizations-landing-zone",
        es: {
            title: "AWS Organizations Landing Zone",
            description: "Arquitectura multi-cuenta empresarial con OUs, logs centralizados, SCP y AWS Budgets.",
            fullDescription: "Diseño de una landing zone multi-cuenta con AWS Organizations. La arquitectura separa cuenta de gestión, OU Seguridad, OU Infraestructura, OU Sandbox y OU Cargas con Producción y No-Producción. Incluye centralización de logs, servicios compartidos, mapeo de SCP por jerarquía y control de costes mediante AWS Budgets."
        },
        en: {
            title: "AWS Organizations Landing Zone",
            description: "Enterprise multi-account architecture with OUs, centralized logging, SCPs and AWS Budgets.",
            fullDescription: "Design of a multi-account landing zone using AWS Organizations. The architecture separates the management account, a Security OU, an Infrastructure OU, a Sandbox OU and a Workloads OU with Production and Non-Production accounts. Includes centralized logging, shared services, SCP mapping by hierarchy and cost control via AWS Budgets."
        }
    },
    {
        id: 2,
        image: "imagenes/Proyecto_Tienda_Jenkins_Docker.png",
        technologies: ["Jenkins", "Docker", "Docker Compose", "PHP", "MySQL", "Apache"],
        tag: "advanced",
        github: "https://github.com/ccleren/tienda",
        es: {
            title: "Pipeline Jenkins para aplicación PHP Dockerizada",
            description: "Aplicación PHP desplegada con Docker Compose, Apache, MySQL y phpMyAdmin, automatizada mediante Jenkins.",
            fullDescription: "Proyecto DevOps para desplegar una aplicación PHP usando Docker Compose, Apache, MySQL y phpMyAdmin. El pipeline de Jenkins automatiza el flujo de despliegue: clona el repositorio, levanta los servicios, copia los archivos de la aplicación, carga la base de datos y ejecuta Composer para gestionar dependencias."
        },
        en: {
            title: "Jenkins Pipeline for a Dockerized PHP App",
            description: "PHP application deployed with Docker Compose, Apache, MySQL and phpMyAdmin, automated with a Jenkins pipeline.",
            fullDescription: "DevOps project to deploy a PHP application using Docker Compose, Apache, MySQL and phpMyAdmin. The Jenkins pipeline automates the deployment flow: it clones the repository, spins up the services, copies the application files, loads the database and runs Composer to manage dependencies."
        }
    },
    {
        id: 3,
        image: "imagenes/Proyecto_HAProxy_Apache_Docker.png",
        technologies: ["Docker", "Docker Compose", "HAProxy", "Apache", "Load Balancing"],
        tag: "basic",
        github: "https://github.com/ccleren/haproxyweb",
        es: {
            title: "Balanceo web con HAProxy y Apache en Docker",
            description: "Escenario Docker Compose con HAProxy y servidores Apache para practicar balanceo de carga.",
            fullDescription: "Escenario contenerizado para practicar balanceo de carga usando HAProxy como proxy inverso y varios servidores Apache como backends. Permite comprender conceptos de alta disponibilidad, distribución de tráfico, redes Docker y despliegue de servicios web mediante contenedores."
        },
        en: {
            title: "Load Balancing with HAProxy and Apache on Docker",
            description: "Docker Compose scenario with HAProxy and Apache servers to practice load balancing.",
            fullDescription: "Containerized scenario to practice load balancing using HAProxy as a reverse proxy and several Apache servers as backends. It helps build an understanding of high availability, traffic distribution, Docker networking and deploying web services through containers."
        }
    },
    {
        id: 4,
        image: "imagenes/Proyecto_Reserva_Salas_Flutter_Firebase.png",
        technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Mobile App"],
        tag: "advanced",
        github: "https://github.com/ccleren/reserva_salas_app",
        es: {
            title: "Reserva de Salas con Flutter y Firebase",
            description: "Aplicación móvil para gestionar reservas de salas usando Flutter y Firebase Firestore.",
            fullDescription: "Aplicación móvil desarrollada con Flutter para consultar y gestionar reservas de salas en una organización. Utiliza Firebase Firestore como base de datos cloud, permitiendo practicar desarrollo mobile, conexión con servicios en la nube y almacenamiento de datos en tiempo real."
        },
        en: {
            title: "Room Booking App with Flutter and Firebase",
            description: "Mobile app to manage room bookings using Flutter and Firebase Firestore.",
            fullDescription: "Mobile application built with Flutter to check and manage room bookings within an organization. It uses Firebase Firestore as a cloud database, allowing practice with mobile development, cloud service integration and real-time data storage."
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
}
