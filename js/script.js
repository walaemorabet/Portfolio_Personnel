const skills = {
    temps: {
      icon: "⏱",
      title: "Gestion du temps",
      subtitle: "Organisation des tâches et respect des délais.",
      badges: ["Planification", "Priorisation", "Efficacité"],
      examples: [
        "Organisation entre alternance et cours à l’IUT.",
        "Respect des délais pour les écritures comptables.",
        "Priorisation des rapprochements bancaires.",
        "Gestion des missions chez Transplus 18."
      ],
      gallery: false
    },
  
    creativite: {
      icon: "💡",
      title: "Créativité",
      subtitle: "Idées nouvelles et solutions simples.",
      badges: ["Idées", "Supports visuels", "Amélioration"],
      examples: [
        "Création d’un livret d’accueil pour les nouveaux salariés.",
        "Réalisation d’un diaporama destiné aux clients.",
        "Conception de flyers professionnels.",
        "Idées proposées dans les travaux de groupe à l’IUT."
      ],
      gallery: false
    },
  
    reflexivite: {
      icon: "🧠",
      title: "Réflexivité",
      subtitle: "Analyse des actions et progression continue.",
      badges: ["Analyse", "Amélioration", "Précision"],
      examples: [
        "Analyse des missions réalisées après chaque tâche.",
        "Compréhension approfondie des procédures comptables.",
        "Recherche d’amélioration dans les méthodes de travail.",
        "Progression dans la précision des opérations comptables."
      ],
      gallery: false
    },
  
    autonomie: {
      icon: "🎯",
      title: "Autonomie",
      subtitle: "Capacité à avancer seule après les consignes.",
      badges: ["Initiative", "Responsabilité", "Indépendance"],
      examples: [
        "Gestion de missions sans supervision directe.",
        "Avancement autonome après compréhension des consignes.",
        "Demande de retour lorsque nécessaire.",
        "Prise en charge de tâches comptables variées."
      ],
      gallery: false
    },
  
    equipe: {
      icon: "👥",
      title: "Esprit d’équipe",
      subtitle: "Collaboration et entraide.",
      badges: ["Collaboration", "Écoute", "Partage"],
      examples: [
        "Travaux de groupe à l’IUT.",
        "Communication avec les collègues en entreprise.",
        "Participation à des projets collectifs.",
        "Aide à l’amélioration des présentations."
      ],
      gallery: false
    },
  
    adaptation: {
      icon: "🌍",
      title: "Adaptation",
      subtitle: "Changement de pays, culture et environnement.",
      badges: ["Nouveau pays", "Nouvelle culture", "Nouvel environnement"],
      examples: [
        "Changement de pays et de culture.",
        "Arrivée du Maroc vers la France.",
        "Intégration dans un nouvel environnement scolaire.",
        "Adaptation aux méthodes de travail françaises."
      ],
      gallery: true
    },
  
    rigueur: {
      icon: "✨",
      title: "Rigueur",
      subtitle: "Travail précis et respect des consignes.",
      badges: ["Précision", "Fiabilité", "Vérification"],
      examples: [
        "Vérification des écritures comptables.",
        "Respect des procédures en entreprise.",
        "Analyse rigoureuse des données financières.",
        "Travail soigné et organisé."
      ],
      gallery: false
    },
  
    communication: {
      icon: "💬",
      title: "Communication",
      subtitle: "Échanges clairs et transmission d’informations.",
      badges: ["Écoute", "Clarté", "Transmission"],
      examples: [
        "Prise en charge du standard téléphonique.",
        "Communication avec les clients.",
        "Collecte d’informations nécessaires.",
        "Présentation d’idées dans les projets de groupe."
      ],
      gallery: false
    },
  
    discretion: {
      icon: "🤝",
      title: "Discrétion professionnelle",
      subtitle: "Respect de la confidentialité.",
      badges: ["Confidentialité", "Professionnalisme", "Confiance"],
      examples: [
        "Gestion de données comptables sensibles.",
        "Respect des informations internes de l’entreprise.",
        "Traitement sérieux des dossiers clients.",
        "Attitude professionnelle en entreprise."
      ],
      gallery: false
    }
  };
  
  const buttons = document.querySelectorAll(".skill-btn");
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const skillId = button.dataset.skill;
      const skill = skills[skillId];
  
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
  
      document.getElementById("skill-icon").textContent = skill.icon;
      document.getElementById("skill-title").textContent = skill.title;
      document.getElementById("skill-subtitle").textContent = skill.subtitle;
  
      document.getElementById("skill-badges").innerHTML = skill.badges
        .map(badge => `<span>${badge}</span>`)
        .join("");
  
      document.getElementById("skill-examples").innerHTML = skill.examples
        .map(example => `<div>▷ ${example}</div>`)
        .join("");
  
      const gallery = document.getElementById("skill-gallery");
  
      if (skill.gallery) {
        gallery.style.display = "block";
      } else {
        gallery.style.display = "none";
      }
    });
  });