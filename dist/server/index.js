// server/seed.json
var seed_default = [
  {
    kind: "projects",
    id: "project_101",
    data: {
      title: "HR Employee Attrition Analysis",
      category: "data-ml",
      lead: "From employee patterns to workforce decisions.",
      description: "Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.",
      tags: "Python, Power BI (DAX), Scikit-learn",
      image: "assets/projects/hr-dashboard.png",
      link: "https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis",
      caseUrl: "case-studies/hr-attrition.html",
      html: '<article class="card project-card featured-project" id="project_101" data-category="data-ml" data-reveal="">\n          <a class="project-preview" href="case-studies/hr-attrition.html"><img loading="lazy" src="assets/projects/hr-dashboard.png" alt="HR Employee Attrition Analysis project output"></a><div class="project-meta"><span>FEATURED \xB7 DATA ANALYTICS</span><span>01 /</span></div>\n          <h3>HR Employee Attrition Analysis</h3><p class="project-lead">From employee patterns to workforce decisions.</p><p class="muted">Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.</p>\n          <dl class="project-highlights"><div><dt>employee records</dt><dd>1,470</dd></div><div><dt>test ROC-AUC</dt><dd>0.81</dd></div></dl>\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Power BI (DAX)</span><span class="tag">Scikit-learn</span></div>\n          <div class="card-actions"><a class="btn-details" href="case-studies/hr-attrition.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_101" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\n        </article>',
      caseText: "The problem\n\nExplore where employee attrition is concentrated and turn that analysis into questions HR can investigate.\n\nDataset\n\n1,470 IBM HR sample records covering job roles, overtime, tenure, income and attrition. This is an educational sample, not a live employer dataset.\n\nMy contribution\n\nBuilt the Python exploration, visual analysis, logistic regression workflow, risk-scored exports and Power BI report.\n\nApproach\n\nValidate records and remove constant/ID fields; compare attrition across segments; one-hot encode categories; use a stratified 75/25 split and standardize the training data; fit class-balanced logistic regression.\n\nResults\n\nThe saved project reports 77.7% held-out accuracy and 0.81 ROC-AUC. Existing analyses show higher observed attrition among overtime workers. The screenshot below is the actual Power BI report with Sales selected: its 446 employees are a filtered subset, not the full dataset.\n\nLimitations\n\nAssociations do not establish why people leave. Model scores are not employment decisions. Results need external validation and subgroup evaluation; retention recommendations have not been tested for causal impact."
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_202",
    data: {
      title: "Loan Default & Credit Risk Analysis",
      category: "data-ml",
      lead: "Making risk easier to understand.",
      description: "Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.",
      tags: "Python, Logistic Regression, Tableau",
      image: "assets/projects/credit-dashboard.png",
      link: "https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-",
      caseUrl: "case-studies/credit-risk.html",
      html: '<article class="card project-card" id="project_202" data-category="data-ml" data-reveal="">\n          <a class="project-preview" href="case-studies/credit-risk.html"><img loading="lazy" src="assets/projects/credit-dashboard.png" alt="Loan Default &amp; Credit Risk Analysis project output"></a><div class="project-meta"><span>MACHINE LEARNING</span><span>02 /</span></div>\n          <h3>Loan Default &amp; Credit Risk Analysis</h3><p class="project-lead">Making risk easier to understand.</p><p class="muted">Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.</p>\n          <dl class="project-highlights"><div><dt>loan applications</dt><dd>32k+</dd></div><div><dt>ROC-AUC</dt><dd>0.876</dd></div></dl>\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Logistic Regression</span><span class="tag">Tableau</span></div>\n          <div class="card-actions"><a class="btn-details" href="case-studies/credit-risk.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_202" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\n        </article>',
      caseText: "The problem\n\nExplore loan default patterns and demonstrate how a simulated lender could review risk alongside approval volume.\n\nDataset\n\n32,581 raw credit-risk records; the saved cleaning pipeline produces 32,409 records after duplicates and invalid records are removed. This project is an educational simulation, not a deployed lending service.\n\nMy contribution\n\nBuilt data-quality checks, exploratory analysis, engineered features, logistic regression, risk tiers and decision rules, with a Tableau reporting workflow and challenger-model comparisons.\n\nApproach\n\nClean and impute inputs; engineer loan-to-income and other features; split data 80/20 with stratification; fit a standardized, class-balanced logistic regression baseline. Compare Random Forest and Gradient Boosting separately.\n\nResults\n\nThe saved baseline results report 80.58% accuracy, 78.77% recall and 0.8757 ROC-AUC. These are logistic-regression results, not XGBoost results. The Tableau screenshot shows the saved 32,409-record portfolio and its simulated approval rules.\n\nLimitations\n\nImputation happens before the split in the existing workflow, which can leak distribution information. Reported model performance should be treated as provisional until preprocessing is fit on training data only. Scores and approval thresholds are illustrative; currency formatting in the dashboard does not establish dataset currency."
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_303",
    data: {
      title: "MediVault",
      category: "software-iot",
      lead: "Decentralized medical records.",
      description: "Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.",
      tags: "Ethereum, IPFS, Blockchain",
      image: "",
      link: "https://github.com/Saptarshi-Mandal-1234/MediVault-Decentralized-Medical-Records-System",
      caseUrl: "",
      html: '<article class="card project-card" id="project_303" data-category="software-iot" data-reveal="">\n          <div class="project-meta"><span>SOFTWARE &amp; SECURITY</span><span>03 /</span></div>\n          <h3>MediVault</h3><p class="project-lead">Decentralized medical records.</p><p class="muted">Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.</p>\n          <dl class="project-highlights"><div><dt>access framework</dt><dd>Ethereum</dd></div><div><dt>record storage</dt><dd>IPFS</dd></div></dl>\n          <div class="tag-list"><span class="tag">Ethereum</span><span class="tag">IPFS</span><span class="tag">Blockchain</span></div>\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_303" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Decentralized-Medical-Records-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\n        </article>'
    },
    position: 2,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_404",
    data: {
      title: "Automated Irrigation System",
      category: "software-iot",
      lead: "Crop-aware watering. Sensor-driven control.",
      description: "An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.",
      tags: "C++ / Arduino, ESP32 / BLE, Web Bluetooth",
      image: "assets/projects/irrigation-circuit.png",
      link: "https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System",
      caseUrl: "case-studies/smart-irrigation.html",
      html: '<article class="card project-card" id="project_404" data-category="software-iot" data-reveal="">\n          <a class="project-preview" href="case-studies/smart-irrigation.html"><img loading="lazy" src="assets/projects/irrigation-circuit.png" alt="Arduino Uno substitute circuit in the irrigation browser simulation"></a>\n          <div class="project-meta"><span>CONNECTED SYSTEMS</span><span>04 /</span></div>\n          <h3>Automated Irrigation System</h3><p class="project-lead">Crop-aware watering. Sensor-driven control.</p><p class="muted">An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.</p>\n          <dl class="project-highlights"><div><dt>controller</dt><dd>ESP32 + BLE</dd></div><div><dt>current stage</dt><dd>Prototype</dd></div></dl>\n          <div class="tag-list"><span class="tag">C++ / Arduino</span><span class="tag">ESP32 / BLE</span><span class="tag">Web Bluetooth</span></div>\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_404" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button><a class="btn" href="case-studies/smart-irrigation.html">Project overview</a></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\n        </article>',
      caseText: "The problem\n\nFixed watering schedules ignore soil conditions and crop requirements. This academic prototype explores a single-zone controller that responds to moisture feedback instead.\n\nInputs and architecture\n\nAn ESP32 reads soil moisture, soil pH, temperature and humidity. C++ firmware controls a relay or pump driver; an HTML/JavaScript web app exchanges crop configuration, readings and commands over Bluetooth Low Energy.\n\nControl approach\n\nCrop profiles provide a minimum moisture threshold and a target. The pump starts below the minimum and stops at the target, holding its previous state between them to reduce rapid switching. pH is monitored and flagged; the system does not correct pH.\n\nImplementation and evidence\n\nThe supplied materials include ESP32 firmware, a calibration utility, a Web Bluetooth dashboard with Demo Mode, a browser logic simulator, an animated circuit simulation and an Arduino Uno sketch for Tinkercad. Source review confirmed the hysteresis logic and fault/runtime checks; firmware compilation and physical operation were not tested in this portfolio review.\n\nControls and current limitations\n\nThe implementation includes manual pump commands, runtime limits, sensor-fault handling, optional low-water detection and an emergency-stop command. These are prototype controls, not hardware-validated safety guarantees. Sensor calibration constants remain placeholders and the phone-to-ESP32-to-pump path has not been tested end to end.\n\nNext validation steps\n\nCalibrate the sensors, compile and flash the ESP32 firmware, then test crop thresholds, manual mode, disconnects and every fault condition on hardware. Measure water use and manual intervention before claiming efficiency improvements. The current scope is one pump and one zone, with no cloud monitoring or automatic pH correction."
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_505",
    data: {
      title: "Customer Churn Analysis",
      category: "data-ml",
      lead: "From churn patterns to retention actions.",
      description: "Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.",
      tags: "SQL, MySQL Workbench, Power BI",
      image: "assets/projects/churn-contracts.svg",
      link: "https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis",
      caseUrl: "case-studies/customer-churn.html",
      html: '<article class="card project-card" id="project_505" data-category="data-ml" data-reveal="">\n          <a class="project-preview" href="case-studies/customer-churn.html"><img loading="lazy" src="assets/projects/churn-contracts.svg" alt="Customer Churn Analysis project output"></a><div class="project-meta"><span>DATA ANALYTICS</span><span>05 /</span></div>\n          <h3>Customer Churn Analysis</h3><p class="project-lead">From churn patterns to retention actions.</p><p class="muted">Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.</p>\n          <dl class="project-highlights"><div><dt>customer records</dt><dd>7,043</dd></div><div><dt>retention analysis</dt><dd>SQL + BI</dd></div></dl>\n          <div class="tag-list"><span class="tag">SQL</span><span class="tag">MySQL Workbench</span><span class="tag">Power BI</span></div>\n          <div class="card-actions"><a class="btn-details" href="case-studies/customer-churn.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_505" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\n        </article>',
      caseText: "The problem\n\nIdentify customer segments with high observed churn and connect them to practical retention actions.\n\nDataset\n\n7,043 Telco customer records with 1,869 churned customers and 11 blank TotalCharges values, checked directly from the supplied CSV.\n\nMy contribution\n\nBuilt MySQL cleaning and analysis scripts, seven rule-based risk flags, and a recommendation playbook, alongside a local Power BI report.\n\nApproach\n\nImport the CSV into MySQL; standardize fields; build segment views; assign a 0\u20137 rule-based risk score; join matching flags to recommended actions. A reproducible Python summary now supplies sample outputs without requiring MySQL.\n\nResults\n\nRecalculated observed churn: 42.7% for month-to-month contracts, 11.3% for one-year contracts and 2.8% for two-year contracts. The chart below was generated from the actual supplied data. A Power BI file exists locally, but this chart is not a Power BI screenshot.\n\nLimitations\n\nRisk flags are heuristics, not calibrated probabilities or validated future predictions. Segment differences are associations. Revenue estimates may overlap across flags and must not be added as guaranteed savings. MySQL execution and the Power BI report refresh still require local validation."
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_606",
    data: {
      title: "MediAssist AI",
      category: "software-iot",
      lead: "A healthcare assistant built at a hackathon.",
      description: "A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.",
      tags: "Gemini API, MongoDB, Node.js / Express",
      image: "assets/projects/mediassist-workspace.png",
      link: "https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot",
      caseUrl: "case-studies/mediassist.html",
      html: '<article class="card project-card" id="project_606" data-category="software-iot" data-reveal="">\n          <a class="project-preview" href="case-studies/mediassist.html"><img loading="lazy" src="assets/projects/mediassist-workspace.png" alt="MediAssist chatbot interface"></a><div class="project-meta"><span>SOFTWARE &amp; AI</span><span>06 /</span></div>\n          <h3>MediAssist AI</h3><p class="project-lead">A healthcare assistant built at a hackathon.</p><p class="muted">A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.</p>\n          <dl class="project-highlights"><div><dt>consultation modes</dt><dd>4</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\n          <div class="tag-list"><span class="tag">Gemini API</span><span class="tag">MongoDB</span><span class="tag">Node.js / Express</span></div>\n          <div class="card-actions"><a class="btn-details" href="case-studies/mediassist.html">Read project overview \u2192</a><button type="button" class="btn-details" data-project="project_606" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener noreferrer">View repository profile <span aria-hidden="true">\u2197</span></a></div>\n        </article>',
      caseText: "What it addresses\n\nBrings health-related conversations and personal tracking tools into one prototype interface, with separate modes for different kinds of questions.\n\nFour modes\n\nSymptoms, medication discussion, mental wellness and lab-report discussion use separate prompts. Symptom matching can supply reference context to the chat workflow.\n\nApplication structure\n\nThe updated source uses Node.js, Express, MongoDB/Mongoose and Gemini. Models cover chat messages, medications, appointments, mood logs, health logs, vitals and disease reference records. The project includes Docker and Compose files.\n\nImplementation details\n\nThe chat route validates mode and input, limits message/history length, applies request timeouts and retries transient failures. API keys are configured on the backend rather than displayed on the portfolio.\n\nEvidence and status\n\nThis page uses the latest MongoDB-based project folder and a real frontend capture. Source and setup files were inspected; Gemini calls, database persistence and deployment were not exercised during this update.\n\nLimitations\n\nMediAssist is an educational prototype, not a clinically validated service or medical device. Its outputs require professional review. Authentication, health-data privacy, generated-content handling and end-to-end tests require further assessment before real-world use."
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_707",
    data: {
      title: "AI HR Workspace",
      category: "software-iot",
      lead: "From HR questions to structured action plans.",
      description: "Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.",
      tags: "Node.js, JavaScript, Gemini API",
      image: "assets/projects/ai-hr-workspace.png",
      link: "",
      caseUrl: "case-studies/ai-hr.html",
      html: '<article class="card project-card" id="project_707" data-category="software-iot" data-reveal="">\n          <a class="project-preview" href="case-studies/ai-hr.html"><img loading="lazy" src="assets/projects/ai-hr-workspace.png" alt="AI HR workspace interface with HR specialty navigation"></a>\n          <div class="project-meta"><span>SOFTWARE &amp; AI</span><span>07 /</span></div>\n          <h3>AI HR Workspace</h3><p class="project-lead">From HR questions to structured action plans.</p><p class="muted">Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.</p>\n          <dl class="project-highlights"><div><dt>HR specialty modes</dt><dd>8</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\n          <div class="tag-list"><span class="tag">Node.js</span><span class="tag">JavaScript</span><span class="tag">Gemini API</span></div>\n          <div class="card-actions"><a class="btn-details" href="case-studies/ai-hr.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_707" aria-haspopup="dialog">Quick details \u2192</button></div>\n        <p class="muted repo-pending">GitHub repository coming soon</p></article>',
      caseText: "The problem\n\nHR work spans many recurring tasks, from interview preparation to onboarding and policy communication. This project brings those workflows into one interface with specialist modes.\n\nWhat I built\n\nA browser workspace and Node.js server integrating Gemini, with eight modes: HR Generalist, Recruiter, Onboarding, Employee Relations, Performance, Policy, People Analytics and Learning.\n\nWorkflow\n\nChoose an HR specialty, supply the relevant context, and request a structured draft. The code also includes organization, records, decision and audit endpoints for supporting workflows.\n\nTechnology\n\nJavaScript, HTML, CSS, Node.js and the Gemini API. The project runs locally with Node 18 or later and a separately configured API key.\n\nCurrent status\n\nThe original project source and interface were inspected. This portfolio shows the real frontend, not a live AI service. No model request was made during this review. GitHub repository coming soon; the link will be added when available.\n\nNext steps and limitations\n\nBefore production use, the project needs stronger authentication, persistent database design, tenancy, tests and privacy controls. Generated HR content is decision support requiring qualified human review, especially for sensitive employee matters."
    },
    position: 6,
    hidden: false,
    revision: 0
  },
  {
    kind: "projects",
    id: "project_808",
    data: {
      title: "MarketPulse AI Foundation",
      category: "data-ml",
      lead: "Market research built to be reproducible.",
      description: "An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.",
      tags: "Python, PostgreSQL, Power BI, Scikit-learn",
      image: "assets/projects/marketpulse-stock-explorer.png",
      link: "https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai",
      caseUrl: "case-studies/marketpulse-ai.html",
      html: '<article class="card project-card" id="project_808" data-category="data-ml" data-reveal=""><a class="project-preview" href="case-studies/marketpulse-ai.html"><img loading="lazy" src="assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse Stock Explorer showing adjusted price history and observed trading volume"></a><div class="project-meta"><span>DATA ENGINEERING &amp; ML</span><span>08 /</span></div><h3>MarketPulse AI Foundation</h3><p class="project-lead">Market research built to be reproducible.</p><p class="muted">An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.</p><dl class="project-highlights"><div><dt>technical features</dt><dd>39</dd></div><div><dt>report pages</dt><dd>7</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">PostgreSQL</span><span class="tag">Power BI</span><span class="tag">Scikit-learn</span></div><div class="card-actions"><a class="btn-details" href="case-studies/marketpulse-ai.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_808" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div></article>',
      caseText: "The problem\n\nBuild a repeatable way to collect, validate and analyze Indian-equity data while keeping the provenance of research results clear.\n\nUniverse and inputs\n\nThe configured initial universe is NIFTY 50 plus ten liquid large-cap stocks. Daily OHLCV research snapshots come from Yahoo Finance. Exchange-session checks identify gaps without inventing missing prices.\n\nImplementation\n\nThe source includes archive checksums, 39 technical features, PostgreSQL migrations, performance and drawdown analytics, forecasting evaluation, risk bands and prior-only anomaly detection. A report generator assembles seven Power BI pages.\n\nResearch approach\n\nForecasting tasks cover next-session direction, next-session return and five-session return, evaluated chronologically with purging. The project compares machine-learning candidates against simple baselines rather than assuming a complex model is better.\n\nResults and current evidence\n\nThe project documentation reports that the tested ML candidates did not outperform the selected baselines under its predefined criteria. This portfolio review inspected the local source and documentation; it did not rerun database, model or Power BI checks. A supplied Stock Explorer dashboard screenshot is shown above. The underlying data refresh and model evaluation were not rerun for this preview.\n\nOperations and limitations\n\nThe pipeline includes atomic publication, last-good-report preservation, health checks and Windows scheduling helpers. Fresh runs require a configured Python environment, PostgreSQL and data access. It is research software, does not place orders, and makes no claim of a trading edge."
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-0",
    data: {
      title: "Data analysis & SQL",
      description: "Clean, query and explore data before drawing conclusions.",
      tags: "Python, Pandas, NumPy, SQL joins, CTEs, Window functions, EDA, Data cleaning, Statistical analysis",
      roles: "data business",
      evidence: "Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">01 /</span>\n          <h3>Data analysis &amp; SQL</h3>\n          <p class="muted">Clean, query and explore data before drawing conclusions.</p>\n          <div class="tag-list">\n            <span class="tag">Python</span>\n            <span class="tag">Pandas</span>\n            <span class="tag">NumPy</span>\n            <span class="tag">SQL joins</span>\n            <span class="tag">CTEs</span>\n            <span class="tag">Window functions</span>\n            <span class="tag">EDA</span>\n            <span class="tag">Data cleaning</span>\n            <span class="tag">Statistical analysis</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to SQL <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\n              <li><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics with AI <span class="cert-pill-issuer">IBM SkillsBuild \u2197</span></a></li>\n              <li><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics: 1 Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.</p>\n            <a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View SQL Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-1",
    data: {
      title: "Dashboards & business intelligence",
      description: "Turn analysis into decisions people can see and use.",
      tags: "Power BI, DAX, Power Query, Tableau, Excel, Pivot tables, VLOOKUP, KPI reporting",
      roles: "data business",
      evidence: "Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">02 /</span>\n          <h3>Dashboards &amp; business intelligence</h3>\n          <p class="muted">Turn analysis into decisions people can see and use.</p>\n          <div class="tag-list">\n            <span class="tag">Power BI</span>\n            <span class="tag">DAX</span>\n            <span class="tag">Power Query</span>\n            <span class="tag">Tableau</span>\n            <span class="tag">Excel</span>\n            <span class="tag">Pivot tables</span>\n            <span class="tag">VLOOKUP</span>\n            <span class="tag">KPI reporting</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener" class="cert-pill">Power BI Job Simulation <span class="cert-pill-issuer">PwC \xB7 Forage \u2197</span></a></li>\n              <li><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Skills Job Simulation <span class="cert-pill-issuer">JPMorgan Chase \u2197</span></a></li>\n              <li><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Essential Training <span class="cert-pill-issuer">NASBA CPE \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.</p>\n            <a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View Power BI Job Simulation \u2197</a>\n          </details>\n        </article>'
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-2",
    data: {
      title: "Machine learning & AI",
      description: "Explore predictive models and explain what drives their results.",
      tags: "Scikit-learn, Logistic regression, Random Forest, XGBoost, SHAP, K-Means, Generative AI",
      roles: "data software",
      evidence: "Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.",
      html: '<article class="card skill-card" data-skill-roles="data software">\n          <span class="skill-number">03 /</span>\n          <h3>Machine learning &amp; AI</h3>\n          <p class="muted">Explore predictive models and explain what drives their results.</p>\n          <div class="tag-list">\n            <span class="tag">Scikit-learn</span>\n            <span class="tag">Logistic regression</span>\n            <span class="tag">Random Forest</span>\n            <span class="tag">XGBoost</span>\n            <span class="tag">SHAP</span>\n            <span class="tag">K-Means</span>\n            <span class="tag">Generative AI</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener" class="cert-pill">GenAI Powered Analytics <span class="cert-pill-issuer">Tata \xB7 Forage \u2197</span></a></li>\n              <li><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener" class="cert-pill">Career Essentials in GenAI <span class="cert-pill-issuer">Microsoft &amp; LinkedIn \u2197</span></a></li>\n              <li><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to Generative AI <span class="cert-pill-issuer">Google Cloud \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.</p>\n            <a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View Tata GenAI Analytics \u2197</a>\n          </details>\n        </article>'
    },
    position: 2,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-3",
    data: {
      title: "Business analysis",
      description: "Connect a business question to requirements, measures and recommendations.",
      tags: "Requirements gathering, Process analysis, A/B testing, ETL pipelines, Data storytelling, Stakeholder communication",
      roles: "data business",
      evidence: "Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.",
      html: '<article class="card skill-card" data-skill-roles="data business">\n          <span class="skill-number">04 /</span>\n          <h3>Business analysis</h3>\n          <p class="muted">Connect a business question to requirements, measures and recommendations.</p>\n          <div class="tag-list">\n            <span class="tag">Requirements gathering</span>\n            <span class="tag">Process analysis</span>\n            <span class="tag">A/B testing</span>\n            <span class="tag">ETL pipelines</span>\n            <span class="tag">Data storytelling</span>\n            <span class="tag">Stakeholder communication</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener" class="cert-pill">Business Analysis Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener" class="cert-pill">Create a Project Charter <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\n              <li><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener" class="cert-pill">Leadership Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.</p>\n            <a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View Business Analysis Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-4",
    data: {
      title: "Software & connected systems",
      description: "Build around APIs, databases and real-world inputs.",
      tags: "Node.js, Express, MongoDB, Gemini API, Ethereum, IPFS, Arduino, Raspberry Pi, Git / GitHub",
      roles: "software",
      evidence: "Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.",
      html: '<article class="card skill-card" data-skill-roles="software">\n          <span class="skill-number">05 /</span>\n          <h3>Software &amp; connected systems</h3>\n          <p class="muted">Build around APIs, databases and real-world inputs.</p>\n          <div class="tag-list">\n            <span class="tag">Node.js</span>\n            <span class="tag">Express</span>\n            <span class="tag">MongoDB</span>\n            <span class="tag">Gemini API</span>\n            <span class="tag">Ethereum</span>\n            <span class="tag">IPFS</span>\n            <span class="tag">Arduino</span>\n            <span class="tag">Raspberry Pi</span>\n            <span class="tag">Git / GitHub</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener" class="cert-pill">Software Architecture <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\n              <li><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener" class="cert-pill">AI with GitHub Copilot <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener" class="cert-pill">Electronics: Basic Circuits <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.</p>\n            <a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View Software Architecture \u2197</a>\n          </details>\n        </article>'
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-5",
    data: {
      title: "Cloud & security foundations",
      description: "Developing foundations in cloud platforms and secure systems.",
      tags: "Google Cloud foundations, Azure Cognitive Services, Network security, Cryptography, Cybersecurity fundamentals, Linux",
      roles: "software",
      evidence: "Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.",
      html: '<article class="card skill-card" data-skill-roles="software">\n          <span class="skill-number">06 /</span>\n          <h3>Cloud &amp; security foundations</h3>\n          <p class="muted">Developing foundations in cloud platforms and secure systems.</p>\n          <div class="tag-list">\n            <span class="tag">Google Cloud foundations</span>\n            <span class="tag">Azure Cognitive Services</span>\n            <span class="tag">Network security</span>\n            <span class="tag">Cryptography</span>\n            <span class="tag">Cybersecurity fundamentals</span>\n            <span class="tag">Linux</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener" class="cert-pill">Google Cloud Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener" class="cert-pill">Vision with Azure Cognitive Services <span class="cert-pill-issuer">Microsoft \u2197</span></a></li>\n              <li><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener" class="cert-pill">Cisco Network Security <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.</p>\n            <a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View Google Cloud Foundations \u2197</a>\n          </details>\n        </article>'
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-6",
    data: {
      title: "Design & communication",
      description: "Make technical ideas clear, visual and worth paying attention to.",
      tags: "Adobe Photoshop, Content writing, Content marketing, Public relations, Visual storytelling, Public speaking",
      roles: "business",
      evidence: "Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.",
      html: '<article class="card skill-card" data-skill-roles="business">\n          <span class="skill-number">07 /</span>\n          <h3>Design &amp; communication</h3>\n          <p class="muted">Make technical ideas clear, visual and worth paying attention to.</p>\n          <div class="tag-list">\n            <span class="tag">Adobe Photoshop</span>\n            <span class="tag">Content writing</span>\n            <span class="tag">Content marketing</span>\n            <span class="tag">Public relations</span>\n            <span class="tag">Visual storytelling</span>\n            <span class="tag">Public speaking</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener" class="cert-pill">Photoshop: New AI Features <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener" class="cert-pill">Advanced Content Marketing <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\n              <li><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener" class="cert-pill">Design Course Collateral <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.</p>\n            <a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View Photoshop Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 6,
    hidden: false,
    revision: 0
  },
  {
    kind: "skills",
    id: "skill-7",
    data: {
      title: "Delivery & collaboration",
      description: "Organize work and communicate across a team.",
      tags: "Agile concepts, Leadership, Teamwork, Time management, Problem solving, MATLAB, Microsoft Copilot, MS Office",
      roles: "business software",
      evidence: "Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.",
      html: '<article class="card skill-card" data-skill-roles="business software">\n          <span class="skill-number">08 /</span>\n          <h3>Delivery &amp; collaboration</h3>\n          <p class="muted">Organize work and communicate across a team.</p>\n          <div class="tag-list">\n            <span class="tag">Agile concepts</span>\n            <span class="tag">Leadership</span>\n            <span class="tag">Teamwork</span>\n            <span class="tag">Time management</span>\n            <span class="tag">Problem solving</span>\n            <span class="tag">MATLAB</span>\n            <span class="tag">Microsoft Copilot</span>\n            <span class="tag">MS Office</span>\n          </div>\n          <div class="skill-cert-links">\n            <span class="skill-cert-heading">Connected Certificates</span>\n            <ul class="skill-cert-list">\n              <li><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener" class="cert-pill">Agile Project Management <span class="cert-pill-issuer">HP LIFE \u2197</span></a></li>\n              <li><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener" class="cert-pill">Learning MATLAB <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\n              <li><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener" class="cert-pill">Efficient Time Management <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\n            </ul>\n          </div>\n          <details class="skill-evidence">\n            <summary>Explore the evidence</summary>\n            <p>Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.</p>\n            <a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View Agile Certificate \u2197</a>\n          </details>\n        </article>'
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-0",
    data: {
      title: "Data Analytics with AI \u2014 Academic Internship",
      issuer: "IBM SkillsBuild \xB7 AICTE \xB7 BharatCares",
      kind: "Academic internship",
      group: "tech",
      category: "data",
      file: "certificates/certificate-18.pdf",
      image: "certificates/certificate-18.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-18.pdf" target="_blank" rel="noopener" aria-label="View Data Analytics with AI \u2014 Academic Internship certificate (PDF, new tab)"><img src="certificates/certificate-18.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Data Analytics with AI \u2014 Academic Internship certificate"></a>\n<div class="cert-body"><span class="cert-kind">Academic internship</span><h3>Data Analytics with AI \u2014 Academic Internship</h3><p class="cert-issuer">IBM SkillsBuild \xB7 AICTE \xB7 BharatCares</p><div class="cert-actions"><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-18.pdf" download="Saptarshi-Mandal-Data-Analytics-with-AI-Academic-Internship-18.pdf">Download \u2193</a></div></div></article>'
    },
    position: 0,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-1",
    data: {
      title: "PwC Switzerland Power BI Job Simulation",
      issuer: "PwC Switzerland \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-16.pdf",
      image: "certificates/certificate-16.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-16.pdf" target="_blank" rel="noopener" aria-label="View PwC Switzerland Power BI Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-16.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of PwC Switzerland Power BI Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>PwC Switzerland Power BI Job Simulation</h3><p class="cert-issuer">PwC Switzerland \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-16.pdf" download="Saptarshi-Mandal-PwC-Switzerland-Power-BI-Job-Simulation-16.pdf">Download \u2193</a></div></div></article>'
    },
    position: 1,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-2",
    data: {
      title: "TATA GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-17.pdf",
      image: "certificates/certificate-17.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-17.pdf" target="_blank" rel="noopener" aria-label="View TATA GenAI Powered Data Analytics Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-17.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of TATA GenAI Powered Data Analytics Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>TATA GenAI Powered Data Analytics Job Simulation</h3><p class="cert-issuer">Tata \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-17.pdf" download="Saptarshi-Mandal-TATA-GenAI-Powered-Data-Analytics-Job-Simulation-17.pdf">Download \u2193</a></div></div></article>'
    },
    position: 2,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-3",
    data: {
      title: "Introduction to SQL",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-20.pdf",
      image: "certificates/certificate-20.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-20.pdf" target="_blank" rel="noopener" aria-label="View Introduction to SQL certificate (PDF, new tab)"><img src="certificates/certificate-20.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to SQL certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to SQL</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-20.pdf" download="Saptarshi-Mandal-Introduction-to-SQL-20.pdf">Download \u2193</a></div></div></article>'
    },
    position: 3,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-4",
    data: {
      title: "JPMorgan Chase & Co. Excel Skills Job Simulation",
      issuer: "JPMorgan Chase & Co. \xB7 Forage",
      kind: "Job simulation",
      group: "tech",
      category: "data",
      file: "certificates/certificate-15.pdf",
      image: "certificates/certificate-15.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-15.pdf" target="_blank" rel="noopener" aria-label="View JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-15.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate"></a>\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>JPMorgan Chase &amp; Co. Excel Skills Job Simulation</h3><p class="cert-issuer">JPMorgan Chase &amp; Co. \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-15.pdf" download="Saptarshi-Mandal-JPMorgan-Chase-Co-Excel-Skills-Job-Simulation-15.pdf">Download \u2193</a></div></div></article>'
    },
    position: 4,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-5",
    data: {
      title: "Learning Data Analytics: 1 Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-34.pdf",
      image: "certificates/certificate-34.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data">\n<a class="cert-preview" href="certificates/certificate-34.pdf" target="_blank" rel="noopener" aria-label="View Learning Data Analytics: 1 Foundations certificate (PDF, new tab)"><img src="certificates/certificate-34.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning Data Analytics: 1 Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning Data Analytics: 1 Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-34.pdf" download="Saptarshi-Mandal-Learning-Data-Analytics-1-Foundations-34.pdf">Download \u2193</a></div></div></article>'
    },
    position: 5,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-6",
    data: {
      title: "Excel Essential Training (Microsoft 365)",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-29.pdf",
      image: "certificates/certificate-29.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-29.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-29.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-29.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-29.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--29.pdf">Download \u2193</a></div></div></article>'
    },
    position: 6,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-7",
    data: {
      title: "Business Analysis Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-23.pdf",
      image: "certificates/certificate-23.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-23.pdf" target="_blank" rel="noopener" aria-label="View Business Analysis Foundations certificate (PDF, new tab)"><img src="certificates/certificate-23.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Business Analysis Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Business Analysis Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-23.pdf" download="Saptarshi-Mandal-Business-Analysis-Foundations-23.pdf">Download \u2193</a></div></div></article>'
    },
    position: 7,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-8",
    data: {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      kind: "Learning path",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-24.pdf",
      image: "certificates/certificate-24.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-24.pdf" target="_blank" rel="noopener" aria-label="View Career Essentials in Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-24.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Career Essentials in Generative AI certificate"></a>\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Career Essentials in Generative AI</h3><p class="cert-issuer">Microsoft &amp; LinkedIn</p><div class="cert-actions"><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-24.pdf" download="Saptarshi-Mandal-Career-Essentials-in-Generative-AI-24.pdf">Download \u2193</a></div></div></article>'
    },
    position: 8,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-9",
    data: {
      title: "Build a computer vision app with Azure Cognitive Services",
      issuer: "Microsoft \xB7 Coursera",
      kind: "Guided project",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-06.pdf",
      image: "certificates/certificate-06.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-06.pdf" target="_blank" rel="noopener" aria-label="View Build a computer vision app with Azure Cognitive Services certificate (PDF, new tab)"><img src="certificates/certificate-06.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Build a computer vision app with Azure Cognitive Services certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Build a computer vision app with Azure Cognitive Services</h3><p class="cert-issuer">Microsoft \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-06.pdf" download="Saptarshi-Mandal-Build-a-computer-vision-app-with-Azure-Cognitive-Services-6.pdf">Download \u2193</a></div></div></article>'
    },
    position: 9,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-10",
    data: {
      title: "Google Cloud Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-30.pdf",
      image: "certificates/certificate-30.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-30.pdf" target="_blank" rel="noopener" aria-label="View Google Cloud Foundations certificate (PDF, new tab)"><img src="certificates/certificate-30.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Cloud Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Google Cloud Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-30.pdf" download="Saptarshi-Mandal-Google-Cloud-Foundations-30.pdf">Download \u2193</a></div></div></article>'
    },
    position: 10,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-11",
    data: {
      title: "Learning AI with GitHub Copilot",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-33.pdf",
      image: "certificates/certificate-33.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-33.pdf" target="_blank" rel="noopener" aria-label="View Learning AI with GitHub Copilot certificate (PDF, new tab)"><img src="certificates/certificate-33.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning AI with GitHub Copilot certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning AI with GitHub Copilot</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-33.pdf" download="Saptarshi-Mandal-Learning-AI-with-GitHub-Copilot-33.pdf">Download \u2193</a></div></div></article>'
    },
    position: 11,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-12",
    data: {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-12.pdf",
      image: "certificates/certificate-12.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-12.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-12.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Generative AI certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Generative AI</h3><p class="cert-issuer">Google Cloud \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-12.pdf" download="Saptarshi-Mandal-Introduction-to-Generative-AI-12.pdf">Download \u2193</a></div></div></article>'
    },
    position: 12,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-13",
    data: {
      title: "Generative AI Essentials: Overview and Impact",
      issuer: "University of Michigan \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-09.pdf",
      image: "certificates/certificate-09.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-09.pdf" target="_blank" rel="noopener" aria-label="View Generative AI Essentials: Overview and Impact certificate (PDF, new tab)"><img src="certificates/certificate-09.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Generative AI Essentials: Overview and Impact certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Generative AI Essentials: Overview and Impact</h3><p class="cert-issuer">University of Michigan \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-09.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-09.pdf" download="Saptarshi-Mandal-Generative-AI-Essentials-Overview-and-Impact-9.pdf">Download \u2193</a></div></div></article>'
    },
    position: 13,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-14",
    data: {
      title: "Introduction to Software Architecture",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-19.pdf",
      image: "certificates/certificate-19.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-19.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Software Architecture certificate (PDF, new tab)"><img src="certificates/certificate-19.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Software Architecture certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Software Architecture</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-19.pdf" download="Saptarshi-Mandal-Introduction-to-Software-Architecture-19.pdf">Download \u2193</a></div></div></article>'
    },
    position: 14,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-15",
    data: {
      title: "Applied Cryptography",
      issuer: "University of Colorado System \xB7 Coursera",
      kind: "Specialization",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-05.pdf",
      image: "certificates/certificate-05.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-05.pdf" target="_blank" rel="noopener" aria-label="View Applied Cryptography certificate (PDF, new tab)"><img src="certificates/certificate-05.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Applied Cryptography certificate"></a>\n<div class="cert-body"><span class="cert-kind">Specialization</span><h3>Applied Cryptography</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-05.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-05.pdf" download="Saptarshi-Mandal-Applied-Cryptography-5.pdf">Download \u2193</a></div></div></article>'
    },
    position: 15,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-16",
    data: {
      title: "Cisco Network Security: Safeguarding Network Integrity and Data",
      issuer: "LinkedIn Learning",
      kind: "Learning path",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-03.pdf",
      image: "certificates/certificate-03.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-03.pdf" target="_blank" rel="noopener" aria-label="View Cisco Network Security: Safeguarding Network Integrity and Data certificate (PDF, new tab)"><img src="certificates/certificate-03.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cisco Network Security: Safeguarding Network Integrity and Data certificate"></a>\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Cisco Network Security: Safeguarding Network Integrity and Data</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-03.pdf" download="Saptarshi-Mandal-Cisco-Network-Security-Safeguarding-Network-Integrity-and-Data-3.pdf">Download \u2193</a></div></div></article>'
    },
    position: 16,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-17",
    data: {
      title: "Cyber Security Fundamentals",
      issuer: "University of London \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-08.pdf",
      image: "certificates/certificate-08.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-08.pdf" target="_blank" rel="noopener" aria-label="View Cyber Security Fundamentals certificate (PDF, new tab)"><img src="certificates/certificate-08.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cyber Security Fundamentals certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Cyber Security Fundamentals</h3><p class="cert-issuer">University of London \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-08.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-08.pdf" download="Saptarshi-Mandal-Cyber-Security-Fundamentals-8.pdf">Download \u2193</a></div></div></article>'
    },
    position: 17,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-18",
    data: {
      title: "Advanced System Security Topics",
      issuer: "University of Colorado System \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-04.pdf",
      image: "certificates/certificate-04.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-04.pdf" target="_blank" rel="noopener" aria-label="View Advanced System Security Topics certificate (PDF, new tab)"><img src="certificates/certificate-04.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced System Security Topics certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced System Security Topics</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-04.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-04.pdf" download="Saptarshi-Mandal-Advanced-System-Security-Topics-4.pdf">Download \u2193</a></div></div></article>'
    },
    position: 18,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-19",
    data: {
      title: "Information Theory",
      issuer: "The Chinese University of Hong Kong \xB7 Coursera",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-11.pdf",
      image: "certificates/certificate-11.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-11.pdf" target="_blank" rel="noopener" aria-label="View Information Theory certificate (PDF, new tab)"><img src="certificates/certificate-11.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Information Theory certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Information Theory</h3><p class="cert-issuer">The Chinese University of Hong Kong \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-11.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-11.pdf" download="Saptarshi-Mandal-Information-Theory-11.pdf">Download \u2193</a></div></div></article>'
    },
    position: 19,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-20",
    data: {
      title: "AI Product Management Course",
      issuer: "Simplilearn SkillUp",
      kind: "Course completion",
      group: "tech",
      category: "ai",
      file: "certificates/certificate-02.pdf",
      image: "certificates/certificate-02.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="ai" hidden="">\n<a class="cert-preview" href="certificates/certificate-02.pdf" target="_blank" rel="noopener" aria-label="View AI Product Management Course certificate (PDF, new tab)"><img src="certificates/certificate-02.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of AI Product Management Course certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>AI Product Management Course</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-02.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-02.pdf" download="Saptarshi-Mandal-AI-Product-Management-Course-2.pdf">Download \u2193</a></div></div></article>'
    },
    position: 20,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-21",
    data: {
      title: "Agile Project Management",
      issuer: "HP LIFE",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-01.pdf",
      image: "certificates/certificate-01.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-01.pdf" target="_blank" rel="noopener" aria-label="View Agile Project Management certificate (PDF, new tab)"><img src="certificates/certificate-01.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Agile Project Management certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Agile Project Management</h3><p class="cert-issuer">HP LIFE</p><div class="cert-actions"><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-01.pdf" download="Saptarshi-Mandal-Agile-Project-Management-1.pdf">Download \u2193</a></div></div></article>'
    },
    position: 21,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-22",
    data: {
      title: "Learning MATLAB",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "data",
      file: "certificates/certificate-35.pdf",
      image: "certificates/certificate-35.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-35.pdf" target="_blank" rel="noopener" aria-label="View Learning MATLAB certificate (PDF, new tab)"><img src="certificates/certificate-35.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning MATLAB certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning MATLAB</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-35.pdf" download="Saptarshi-Mandal-Learning-MATLAB-35.pdf">Download \u2193</a></div></div></article>'
    },
    position: 22,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-23",
    data: {
      title: "Leadership Foundations",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-32.pdf",
      image: "certificates/certificate-32.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-32.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-32.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-32.pdf" download="Saptarshi-Mandal-Leadership-Foundations-32.pdf">Download \u2193</a></div></div></article>'
    },
    position: 23,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-24",
    data: {
      title: "Skills to Build Stronger Work Relationships",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-38.pdf",
      image: "certificates/certificate-38.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-38.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-38.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-38.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-38.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-38.pdf">Download \u2193</a></div></div></article>'
    },
    position: 24,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-25",
    data: {
      title: "Advanced Content Marketing",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-22.pdf",
      image: "certificates/certificate-22.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-22.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-22.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-22.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-22.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-22.pdf">Download \u2193</a></div></div></article>'
    },
    position: 25,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-26",
    data: {
      title: "Photoshop 2024: New AI Features",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-36.pdf",
      image: "certificates/certificate-36.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-36.pdf" target="_blank" rel="noopener" aria-label="View Photoshop 2024: New AI Features certificate (PDF, new tab)"><img src="certificates/certificate-36.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Photoshop 2024: New AI Features certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Photoshop 2024: New AI Features</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-36.pdf" download="Saptarshi-Mandal-Photoshop-2024-New-AI-Features-36.pdf">Download \u2193</a></div></div></article>'
    },
    position: 26,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-27",
    data: {
      title: "Electronics Foundations: Basic Circuits",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "systems",
      file: "certificates/certificate-27.pdf",
      image: "certificates/certificate-27.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="systems" hidden="">\n<a class="cert-preview" href="certificates/certificate-27.pdf" target="_blank" rel="noopener" aria-label="View Electronics Foundations: Basic Circuits certificate (PDF, new tab)"><img src="certificates/certificate-27.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Electronics Foundations: Basic Circuits certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Electronics Foundations: Basic Circuits</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-27.pdf" download="Saptarshi-Mandal-Electronics-Foundations-Basic-Circuits-27.pdf">Download \u2193</a></div></div></article>'
    },
    position: 27,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-28",
    data: {
      title: "Efficient Time Management",
      issuer: "LinkedIn Learning",
      kind: "Course completion",
      group: "tech",
      category: "business",
      file: "certificates/certificate-26.pdf",
      image: "certificates/certificate-26.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-26.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management certificate (PDF, new tab)"><img src="certificates/certificate-26.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management certificate"></a>\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Efficient Time Management</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-26.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-26.pdf" download="Saptarshi-Mandal-Efficient-Time-Management-26.pdf">Download \u2193</a></div></div></article>'
    },
    position: 28,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-29",
    data: {
      title: "Create a Project Charter with Google Docs",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "business",
      file: "certificates/certificate-07.pdf",
      image: "certificates/certificate-07.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-07.pdf" target="_blank" rel="noopener" aria-label="View Create a Project Charter with Google Docs certificate (PDF, new tab)"><img src="certificates/certificate-07.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Create a Project Charter with Google Docs certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Create a Project Charter with Google Docs</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-07.pdf" download="Saptarshi-Mandal-Create-a-Project-Charter-with-Google-Docs-7.pdf">Download \u2193</a></div></div></article>'
    },
    position: 29,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-30",
    data: {
      title: "Use Canva to Design Digital Course Collateral",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-14.pdf",
      image: "certificates/certificate-14.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-14.pdf" target="_blank" rel="noopener" aria-label="View Use Canva to Design Digital Course Collateral certificate (PDF, new tab)"><img src="certificates/certificate-14.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Use Canva to Design Digital Course Collateral certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Use Canva to Design Digital Course Collateral</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-14.pdf" download="Saptarshi-Mandal-Use-Canva-to-Design-Digital-Course-Collateral-14.pdf">Download \u2193</a></div></div></article>'
    },
    position: 30,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-31",
    data: {
      title: "Search Engine Optimization (SEO) with Squarespace",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-13.pdf",
      image: "certificates/certificate-13.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-13.pdf" target="_blank" rel="noopener" aria-label="View Search Engine Optimization (SEO) with Squarespace certificate (PDF, new tab)"><img src="certificates/certificate-13.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Search Engine Optimization (SEO) with Squarespace certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Search Engine Optimization (SEO) with Squarespace</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-13.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-13.pdf" download="Saptarshi-Mandal-Search-Engine-Optimization-SEO-with-Squarespace-13.pdf">Download \u2193</a></div></div></article>'
    },
    position: 31,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-32",
    data: {
      title: "Google Ads for Beginners",
      issuer: "Coursera Project Network",
      kind: "Guided project",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-10.pdf",
      image: "certificates/certificate-10.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-10.pdf" target="_blank" rel="noopener" aria-label="View Google Ads for Beginners certificate (PDF, new tab)"><img src="certificates/certificate-10.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Ads for Beginners certificate"></a>\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Google Ads for Beginners</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-10.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-10.pdf" download="Saptarshi-Mandal-Google-Ads-for-Beginners-10.pdf">Download \u2193</a></div></div></article>'
    },
    position: 32,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-33",
    data: {
      title: "Excel Essential Training (Microsoft 365)",
      issuer: "LinkedIn Learning",
      kind: "NASBA CPE record",
      group: "tech",
      category: "data",
      file: "certificates/certificate-28.pdf",
      image: "certificates/certificate-28.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="data" hidden="">\n<a class="cert-preview" href="certificates/certificate-28.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-28.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\n<div class="cert-body"><span class="cert-kind">NASBA CPE record</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-28.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--28.pdf">Download \u2193</a></div></div></article>'
    },
    position: 33,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-34",
    data: {
      title: "Leadership Foundations",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-31.pdf",
      image: "certificates/certificate-31.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-31.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-31.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-31.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-31.pdf" download="Saptarshi-Mandal-Leadership-Foundations-31.pdf">Download \u2193</a></div></div></article>'
    },
    position: 34,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-35",
    data: {
      title: "Skills to Build Stronger Work Relationships",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-37.pdf",
      image: "certificates/certificate-37.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-37.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-37.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-37.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-37.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-37.pdf">Download \u2193</a></div></div></article>'
    },
    position: 35,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-36",
    data: {
      title: "Advanced Content Marketing",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "creative",
      file: "certificates/certificate-21.pdf",
      image: "certificates/certificate-21.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="creative" hidden="">\n<a class="cert-preview" href="certificates/certificate-21.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-21.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-21.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-21.pdf">Download \u2193</a></div></div></article>'
    },
    position: 36,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-37",
    data: {
      title: "Efficient Time Management ",
      issuer: "LinkedIn Learning",
      kind: "PMI credit record",
      group: "tech",
      category: "business",
      file: "certificates/certificate-25.pdf",
      image: "certificates/certificate-25.webp",
      html: '<article class="certificate-card" data-cert-group="tech" data-cert-category="business" hidden="">\n<a class="cert-preview" href="certificates/certificate-25.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management  certificate (PDF, new tab)"><img src="certificates/certificate-25.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management  certificate"></a>\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Efficient Time Management </h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-25.pdf" download="Saptarshi-Mandal-Efficient-Time-Management--25.pdf">Download \u2193</a></div></div></article>'
    },
    position: 37,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-38",
    data: {
      title: "Ecstasia 2025",
      issuer: "UEM Kolkata",
      kind: "Coordinator appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-01.png",
      image: "certificates/uem-01.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-01.png" target="_blank" rel="noopener" aria-label="View Ecstasia 2025 certificate"><img src="certificates/uem-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ecstasia 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ecstasia 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 38,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-39",
    data: {
      title: "Ureckon 2025",
      issuer: "UEM Kolkata",
      kind: "Coordinator appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-02.png",
      image: "certificates/uem-02.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-02.png" target="_blank" rel="noopener" aria-label="View Ureckon 2025 certificate"><img src="certificates/uem-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ureckon 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ureckon 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-02.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 39,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-40",
    data: {
      title: "Nanotechnology: A Changing Face in Modern Era",
      issuer: "UEM Kolkata",
      kind: "Poster competition participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-03.png",
      image: "certificates/uem-03.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-03.png" target="_blank" rel="noopener" aria-label="View Nanotechnology: A Changing Face in Modern Era certificate"><img src="certificates/uem-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Nanotechnology: A Changing Face in Modern Era certificate"></a><div class="cert-body"><span class="cert-kind">Poster competition participation</span><h3>Nanotechnology: A Changing Face in Modern Era</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 40,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-41",
    data: {
      title: "Aperture 2.0",
      issuer: "UEM Kolkata",
      kind: "Photography event organizing",
      group: "uem",
      category: "activities",
      file: "certificates/uem-04.png",
      image: "certificates/uem-04.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-04.png" target="_blank" rel="noopener" aria-label="View Aperture 2.0 certificate"><img src="certificates/uem-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Aperture 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Photography event organizing</span><h3>Aperture 2.0</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 41,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-42",
    data: {
      title: "Reaching Out NGO community service",
      issuer: "UEM Kolkata",
      kind: "Appreciation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-05.png",
      image: "certificates/uem-05.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-05.png" target="_blank" rel="noopener" aria-label="View Reaching Out NGO community service certificate"><img src="certificates/uem-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Reaching Out NGO community service certificate"></a><div class="cert-body"><span class="cert-kind">Appreciation</span><h3>Reaching Out NGO community service</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 42,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-43",
    data: {
      title: "Energy and Sustainability: A Social Mission",
      issuer: "UEM Kolkata",
      kind: "Seminar participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-06.png",
      image: "certificates/uem-06.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-06.png" target="_blank" rel="noopener" aria-label="View Energy and Sustainability: A Social Mission certificate"><img src="certificates/uem-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Energy and Sustainability: A Social Mission certificate"></a><div class="cert-body"><span class="cert-kind">Seminar participation</span><h3>Energy and Sustainability: A Social Mission</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 43,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-44",
    data: {
      title: "Internet of Things workshop",
      issuer: "UEM Kolkata",
      kind: "Workshop participation",
      group: "uem",
      category: "activities",
      file: "certificates/uem-07.png",
      image: "certificates/uem-07.webp",
      html: '<article class="certificate-card" data-cert-group="uem" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/uem-07.png" target="_blank" rel="noopener" aria-label="View Internet of Things workshop certificate"><img src="certificates/uem-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Internet of Things workshop certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>Internet of Things workshop</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 44,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-45",
    data: {
      title: "GenAI: Common use cases and solutions",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Workshop participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-01.png",
      image: "certificates/iitm-01.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-01.png" target="_blank" rel="noopener" aria-label="View GenAI: Common use cases and solutions certificate"><img src="certificates/iitm-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="GenAI: Common use cases and solutions certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>GenAI: Common use cases and solutions</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 45,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-46",
    data: {
      title: "Paradox 2024: Student Relations",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Volunteer recognition",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-02.png",
      image: "certificates/iitm-02.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-02.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Student Relations certificate"><img src="certificates/iitm-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Volunteer recognition</span><h3>Paradox 2024: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-02.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 46,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-47",
    data: {
      title: "Paradox 2024: Squid Games",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Event volunteer appreciation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-03.png",
      image: "certificates/iitm-03.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-03.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Games certificate"><img src="certificates/iitm-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Games certificate"></a><div class="cert-body"><span class="cert-kind">Event volunteer appreciation</span><h3>Paradox 2024: Squid Games</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 47,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-48",
    data: {
      title: "Paradox 2024: Qutopia",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-04.png",
      image: "certificates/iitm-04.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-04.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Qutopia certificate"><img src="certificates/iitm-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Qutopia certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Qutopia</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 48,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-49",
    data: {
      title: "Paradox 2024: Shutter Safari",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-05.png",
      image: "certificates/iitm-05.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-05.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Shutter Safari certificate"><img src="certificates/iitm-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Shutter Safari certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Shutter Safari</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 49,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-50",
    data: {
      title: "Paradox 2024: What\u2019s in a Meme",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-06.png",
      image: "certificates/iitm-06.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-06.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: What\u2019s in a Meme certificate"><img src="certificates/iitm-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: What\u2019s in a Meme certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: What\u2019s in a Meme</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 50,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-51",
    data: {
      title: "Paradox 2024: Fiction Flicks",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-07.png",
      image: "certificates/iitm-07.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-07.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Fiction Flicks certificate"><img src="certificates/iitm-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Fiction Flicks certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Fiction Flicks</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 51,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-52",
    data: {
      title: "Paradox 2024: Logic Loom 2.0",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-08.png",
      image: "certificates/iitm-08.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-08.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Logic Loom 2.0 certificate"><img src="certificates/iitm-08.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Logic Loom 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Logic Loom 2.0</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-08.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-08.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 52,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-53",
    data: {
      title: "Paradox 2024: Kampus Run",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-09.png",
      image: "certificates/iitm-09.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-09.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Kampus Run certificate"><img src="certificates/iitm-09.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Kampus Run certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Kampus Run</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-09.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-09.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 53,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-54",
    data: {
      title: "Paradox 2024: Squid Game",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Participation",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-10.png",
      image: "certificates/iitm-10.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-10.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Game certificate"><img src="certificates/iitm-10.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Game certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Squid Game</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-10.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-10.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 54,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-55",
    data: {
      title: "Paradox in Margazhi 2025: Student Relations",
      issuer: "IIT Madras \xB7 Paradox",
      kind: "Coordinator recognition",
      group: "iitm",
      category: "activities",
      file: "certificates/iitm-11.png",
      image: "certificates/iitm-11.webp",
      html: '<article class="certificate-card" data-cert-group="iitm" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/iitm-11.png" target="_blank" rel="noopener" aria-label="View Paradox in Margazhi 2025: Student Relations certificate"><img src="certificates/iitm-11.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox in Margazhi 2025: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator recognition</span><h3>Paradox in Margazhi 2025: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-11.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-11.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 55,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-56",
    data: {
      title: "ATL Marathon 2021\u201322: Savvys",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team participation",
      group: "atl",
      category: "activities",
      file: "certificates/atl-01.png",
      image: "certificates/atl-01.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-01.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Savvys certificate"><img src="certificates/atl-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Savvys certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2021\u201322: Savvys</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-01.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 56,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-57",
    data: {
      title: "Student Innovator Program SIP 4.0",
      issuer: "AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab",
      kind: "Eight-week program completion",
      group: "atl",
      category: "activities",
      file: "certificates/atl-03.png",
      image: "certificates/atl-03.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-03.png" target="_blank" rel="noopener" aria-label="View Student Innovator Program SIP 4.0 certificate"><img src="certificates/atl-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Student Innovator Program SIP 4.0 certificate"></a><div class="cert-body"><span class="cert-kind">Eight-week program completion</span><h3>Student Innovator Program SIP 4.0</h3><p class="cert-issuer">AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab</p><div class="cert-actions"><a href="certificates/atl-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-03.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 57,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-58",
    data: {
      title: "ATL Marathon 2021\u201322: Top 350 Teams",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-04.png",
      image: "certificates/atl-04.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-04.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Top 350 Teams certificate"><img src="certificates/atl-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Top 350 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2021\u201322: Top 350 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-04.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 58,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-59",
    data: {
      title: "ATL Marathon 2020: Team X B",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team participation",
      group: "atl",
      category: "activities",
      file: "certificates/atl-05.png",
      image: "certificates/atl-05.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-05.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Team X B certificate"><img src="certificates/atl-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Team X B certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2020: Team X B</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-05.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 59,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-60",
    data: {
      title: "ATL Marathon 2020: Top 10 in West Bengal",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-06.png",
      image: "certificates/atl-06.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-06.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 10 in West Bengal certificate"><img src="certificates/atl-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 10 in West Bengal certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 10 in West Bengal</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-06.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 60,
    hidden: false,
    revision: 0
  },
  {
    kind: "certificates",
    id: "cert-61",
    data: {
      title: "ATL Marathon 2020: Top 300 Teams",
      issuer: "Atal Innovation Mission \xB7 ATL Marathon",
      kind: "Team achievement",
      group: "atl",
      category: "activities",
      file: "certificates/atl-07.png",
      image: "certificates/atl-07.webp",
      html: '<article class="certificate-card" data-cert-group="atl" data-cert-category="activities" hidden=""><a class="cert-preview" href="certificates/atl-07.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 300 Teams certificate"><img src="certificates/atl-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 300 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 300 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-07.png" download="">Download \u2193</a></div></div></article>'
    },
    position: 61,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "intro",
    data: {
      title: "intro",
      selector: ".hero-intro",
      text: "I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work.",
      html: "I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work."
    },
    position: 78,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "role",
    data: {
      title: "role",
      selector: ".hero-role",
      text: "DATA ANALYST / BUSINESS ANALYST / SOFTWARE",
      html: "DATA ANALYST / BUSINESS ANALYST / SOFTWARE"
    },
    position: 79,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "about",
    data: {
      title: "about",
      selector: ".about-copy",
      text: "I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.\n\nA year of taking ownership. As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.\n\nA creative edge, put to work. My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.\n\nCuriosity with a track record. Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.\n\nWhat I\u2019m looking for next: an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.\n\nEDUCATION\nIEM, Kolkata\n\nB.Tech, CST \xB7 2023\u20132027\n\nCGPA: 8.4 through Semester V\n\nROLE INTERESTS\nData & software\n\nAnalytics \xB7 Business insights \xB7 Development",
      html: '\n        <p>I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.</p>\n        <p class="muted"><strong>A year of taking ownership.</strong> As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.</p>\n        <p class="muted"><strong>A creative edge, put to work.</strong> My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.</p>\n        <p class="muted"><strong>Curiosity with a track record.</strong> Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.</p>\n        <p class="muted"><strong>What I\u2019m looking for next:</strong> an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.</p>\n        <div class="about-facts">\n          <div>\n            <span>EDUCATION</span>\n            <strong>IEM, Kolkata</strong>\n            <p>B.Tech, CST \xB7 2023\u20132027</p><p>CGPA: 8.4 through Semester V</p>\n          </div>\n          <div>\n            <span>ROLE INTERESTS</span>\n            <strong>Data &amp; software</strong>\n            <p>Analytics \xB7 Business insights \xB7 Development</p>\n          </div>\n        </div>\n      '
    },
    position: 80,
    hidden: false,
    revision: 0
  },
  {
    kind: "pages",
    id: "creative",
    data: {
      title: "creative",
      selector: ".beyond-intro",
      text: "Poetry in English and Bengali \u2014 reflections on love, longing and family, in their original visual form.",
      html: "Poetry in English and Bengali \u2014 reflections on love, longing and family, in their original visual form."
    },
    position: 81,
    hidden: false,
    revision: 0
  },
  {
    id: "poem-01",
    kind: "poems",
    position: 0,
    hidden: false,
    revision: 0,
    data: {
      title: "That night was my sunshine",
      language: "en",
      file: "poems/poem-01.mp4",
      image: "poems/poem-01.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-01" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-01.jpg" aria-label="That night was my sunshine"><source src="poems/poem-01.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">That night was my sunshine</h2><a class="text-link" href="poems/poem-01.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-02",
    kind: "poems",
    position: 1,
    hidden: false,
    revision: 0,
    data: {
      title: "What I feel!!!",
      language: "en",
      file: "poems/poem-02.mp4",
      image: "poems/poem-02.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-02" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-02.jpg" aria-label="What I feel!!!"><source src="poems/poem-02.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">What I feel!!!</h2><a class="text-link" href="poems/poem-02.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-03",
    kind: "poems",
    position: 2,
    hidden: false,
    revision: 0,
    data: {
      title: "The sea soothes my soul",
      language: "en",
      file: "poems/poem-03.mp4",
      image: "poems/poem-03.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-03" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-03.jpg" aria-label="The sea soothes my soul"><source src="poems/poem-03.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">The sea soothes my soul</h2><a class="text-link" href="poems/poem-03.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-04",
    kind: "poems",
    position: 3,
    hidden: false,
    revision: 0,
    data: {
      title: "LOVE .. WHAT??",
      language: "en",
      file: "poems/poem-04.mp4",
      image: "poems/poem-04.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-04" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-04.jpg" aria-label="LOVE .. WHAT??"><source src="poems/poem-04.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">LOVE .. WHAT??</h2><a class="text-link" href="poems/poem-04.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-05",
    kind: "poems",
    position: 4,
    hidden: false,
    revision: 0,
    data: {
      title: "Suffering??",
      language: "en",
      file: "poems/poem-05.mp4",
      image: "poems/poem-05.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-05" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-05.jpg" aria-label="Suffering??"><source src="poems/poem-05.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Suffering??</h2><a class="text-link" href="poems/poem-05.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-06",
    kind: "poems",
    position: 5,
    hidden: false,
    revision: 0,
    data: {
      title: "RAIN",
      language: "en",
      file: "poems/poem-06.mp4",
      image: "poems/poem-06.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-06" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-06.jpg" aria-label="RAIN"><source src="poems/poem-06.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">RAIN</h2><a class="text-link" href="poems/poem-06.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-07",
    kind: "poems",
    position: 6,
    hidden: false,
    revision: 0,
    data: {
      title: "BEING LOVESICK",
      language: "en",
      file: "poems/poem-07.mp4",
      image: "poems/poem-07.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-07" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-07.jpg" aria-label="BEING LOVESICK"><source src="poems/poem-07.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">BEING LOVESICK</h2><a class="text-link" href="poems/poem-07.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-08",
    kind: "poems",
    position: 7,
    hidden: false,
    revision: 0,
    data: {
      title: "FLOWERS THAT ONCE BLOOMED",
      language: "en",
      file: "poems/poem-08.mp4",
      image: "poems/poem-08.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-08" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-08.jpg" aria-label="FLOWERS THAT ONCE BLOOMED"><source src="poems/poem-08.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">FLOWERS THAT ONCE BLOOMED</h2><a class="text-link" href="poems/poem-08.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-09",
    kind: "poems",
    position: 8,
    hidden: false,
    revision: 0,
    data: {
      title: "Solitary",
      language: "en",
      file: "poems/poem-09.mp4",
      image: "poems/poem-09.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-09" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-09.jpg" aria-label="Solitary"><source src="poems/poem-09.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Solitary</h2><a class="text-link" href="poems/poem-09.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-10",
    kind: "poems",
    position: 9,
    hidden: false,
    revision: 0,
    data: {
      title: "\u09AC\u09BE\u09AC\u09BE",
      language: "bn",
      file: "poems/poem-10.mp4",
      image: "poems/poem-10.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-10" data-language="bn"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-10.jpg" aria-label="\u09AC\u09BE\u09AC\u09BE"><source src="poems/poem-10.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AC\u09BE\u09AC\u09BE</h2><a class="text-link" href="poems/poem-10.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-11",
    kind: "poems",
    position: 10,
    hidden: false,
    revision: 0,
    data: {
      title: "I am a son",
      language: "en",
      file: "poems/poem-11.mp4",
      image: "poems/poem-11.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-11" data-language="en"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-11.jpg" aria-label="I am a son"><source src="poems/poem-11.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">I am a son</h2><a class="text-link" href="poems/poem-11.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-12",
    kind: "poems",
    position: 11,
    hidden: false,
    revision: 0,
    data: {
      title: "\u09AE\u09BE",
      language: "bn",
      file: "poems/poem-12.mp4",
      image: "poems/poem-12.jpg",
      format: "video",
      text: "",
      html: '<article class="poem-card" id="poem-12" data-language="bn"><div class="poem-media"><video controls="" playsinline="" preload="none" poster="poems/poem-12.jpg" aria-label="\u09AE\u09BE"><source src="poems/poem-12.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AE\u09BE</h2><a class="text-link" href="poems/poem-12.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "poem-13",
    kind: "poems",
    position: 12,
    hidden: false,
    revision: 0,
    data: {
      title: "\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB",
      language: "bn",
      file: "poems/poem-13.png",
      image: "poems/poem-13.png",
      format: "image",
      text: "",
      html: '<article class="poem-card" id="poem-13" data-language="bn"><div class="poem-media"><a href="poems/poem-13.png" target="_blank" rel="noopener"><img src="poems/poem-13.png" alt="Bengali visual poem: \u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB" loading="lazy"></a></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / VISUAL VERSE</span><h2 lang="bn">\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB</h2><a class="text-link" href="poems/poem-13.png" target="_blank" rel="noopener">Open original \u2197</a></div></article>'
    }
  },
  {
    id: "headline",
    kind: "pages",
    position: 100,
    hidden: false,
    revision: 0,
    data: {
      title: "headline",
      selector: ".hero h1",
      text: "Find the signal.\nTell the story.",
      html: "Find the signal.<br>Tell the <em>story.</em>"
    }
  },
  {
    id: "about-heading",
    kind: "pages",
    position: 101,
    hidden: false,
    revision: 0,
    data: {
      title: "about-heading",
      selector: "#about h2",
      text: "An analytical mind.\nA creative streak.",
      html: "An analytical mind.<br>A creative streak."
    }
  },
  {
    id: "projects-heading",
    kind: "pages",
    position: 102,
    hidden: false,
    revision: 0,
    data: {
      title: "projects-heading",
      selector: "#projects h2",
      text: "Ideas put into practice.",
      html: "Ideas put into practice."
    }
  },
  {
    id: "skills-heading",
    kind: "pages",
    position: 103,
    hidden: false,
    revision: 0,
    data: {
      title: "skills-heading",
      selector: "#skills h2",
      text: "What I work with.",
      html: "What I work with."
    }
  },
  {
    id: "certificates-heading",
    kind: "pages",
    position: 104,
    hidden: false,
    revision: 0,
    data: {
      title: "certificates-heading",
      selector: "#certHeading",
      text: "Curiosity, with receipts.",
      html: "Curiosity, with receipts."
    }
  },
  {
    id: "creative-heading",
    kind: "pages",
    position: 105,
    hidden: false,
    revision: 0,
    data: {
      title: "creative-heading",
      selector: "#beyondHeading",
      text: "A little less logic.\nA little more feeling.",
      html: "A little less logic.<br>A little more feeling."
    }
  },
  {
    id: "contact-heading",
    kind: "pages",
    position: 106,
    hidden: false,
    revision: 0,
    data: {
      title: "contact-heading",
      selector: "#contact h2",
      text: "Let\u2019s make\nsomething useful.",
      html: "Let\u2019s make<br>something <em>useful.</em>"
    }
  }
];

// server/templates.json
var templates_default = { home: '<!DOCTYPE html>\r\n<html lang="en" data-theme="dark">\r\n<head>\r\n  <meta charset="UTF-8">\r\n  <meta name="viewport" content="width=device-width, initial-scale=1">\r\n  <meta name="theme-color" content="#101b2b">\r\n  <meta name="description" content="Meet Saptarshi Mandal: IEM Kolkata CST undergrad combining data science, Python and SQL with experience in PR, content and visual storytelling. Open to internships.">\r\n  <title>Saptarshi Mandal | Data &amp; Software Portfolio</title>\r\n  <link rel="stylesheet" href="styles.css">\r\n  <script src="script.js" defer><\/script>\r\n  <link rel="stylesheet" href="/carousels.css">\r\n  <script type="module" src="/carousels.js"><\/script>\r\n</head>\r\n<body>\r\n<canvas id="matrixCanvas" class="matrix-canvas" aria-hidden="true"></canvas>\r\n<a class="skip-link" href="#main">Skip to content</a>\r\n\r\n<nav id="mainNav" aria-label="Main navigation">\r\n  <div class="wrap nav-inner">\r\n    <a class="brand" id="brandLink" href="#top">\r\n      <span class="monogram">SM<span>.</span></span>\r\n      <span>Saptarshi Mandal</span>\r\n    </a>\r\n    <div class="nav-actions">\r\n      <button id="effectsToggle" class="effects-toggle" type="button" aria-pressed="false" hidden>Effects off</button>\r\n      <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch to dark theme" title="Toggle dark/light mode">\r\n        <span class="theme-icon" aria-hidden="true">\u{1F319}</span>\r\n      </button>\r\n      <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="navLinks" hidden>Menu <span aria-hidden="true">\u2630</span></button>\r\n    </div>\r\n    <ul class="nav-links" id="navLinks">\r\n      <li><a href="#about">About</a></li>\r\n      <li><a href="#projects">Projects</a></li>\r\n      <li><a href="#skills">Skills</a></li>\r\n      <li><a href="#certifications">Certificates</a></li>\r\n      <li><a href="#beyond-code">Beyond the Code</a></li>\r\n      <li><a class="nav-contact" href="#contact">Let\u2019s connect <span aria-hidden="true">\u2197</span></a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<header class="hero" id="top">\r\n  <div class="wrap hero-grid">\r\n    <div data-reveal>\r\n      <div class="eyebrow">[ PORTFOLIO / SAPTARSHI MANDAL ]</div>\r\n      <h1>Find the signal.<br>Tell the <em>story.</em></h1>\r\n      <p class="hero-intro">I\u2019m Saptarshi, a CST undergrad at IEM Kolkata with an analytical mind and a creative streak. I explore data with Python and SQL, shape stories through design and content, and bring a year of PR experience to how I communicate. Now, I\u2019m looking for an internship where I can put that mix to work.</p>\r\n<div class="hero-socials" aria-label="Professional profiles"><a href="https://www.linkedin.com/in/saptarshi-mandal-cs" target="_blank" rel="noopener noreferrer">Connect on LinkedIn \u2197</a><a href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">Explore my GitHub \u2197</a></div>\r\n      <p class="hero-role">DATA ANALYST / BUSINESS ANALYST / SOFTWARE</p>\r\n      <div class="actions">\r\n        <a id="viewProjectsBtn" class="btn btn-primary" href="#projects">Explore my work <span aria-hidden="true">\u2197</span></a>\r\n        <a id="downloadResume" class="text-link" href="Saptarshi_Mandal_DataAnalyst_Resume.pdf" download>Download resume (PDF) <span aria-hidden="true">\u2193</span></a>\r\n      </div>\r\n    </div>\r\n    <aside class="focus-panel" aria-label="Areas of focus" data-reveal>\r\n      <div class="panel-label">&gt; human.skills <span aria-hidden="true">_</span></div>\r\n      <div class="focus-row">\r\n        <span>01</span>\r\n        <div>\r\n          <h2>Analyze.</h2>\r\n          <p>Find the story in the data.</p>\r\n        </div>\r\n      </div>\r\n      <div class="focus-row">\r\n        <span>02</span>\r\n        <div>\r\n          <h2>Explain.</h2>\r\n          <p>Make insights useful and clear.</p>\r\n        </div>\r\n      </div>\r\n      <div class="focus-row">\r\n        <span>03</span>\r\n        <div>\r\n          <h2>Build.</h2>\r\n          <p>Connect ideas to working systems.</p>\r\n        </div>\r\n      </div>\r\n      <div class="panel-bottom">DATA \xB7 CODE \xB7 PRACTICAL PROBLEMS</div>\r\n    </aside>\r\n  </div>\r\n  <div class="wrap hero-bottom">\r\n    <span>Python / SQL / Machine Learning</span>\r\n    <a href="#about">Scroll to explore \u2193</a>\r\n  </div>\r\n</header>\r\n\r\n<main id="main">\r\n  <section id="about">\r\n    <div class="wrap about-grid">\r\n      <div data-reveal>\r\n        <div class="eyebrow" data-scramble="01 / A LITTLE ABOUT ME">01 / A LITTLE ABOUT ME</div>\r\n        <h2>An analytical mind.<br>A creative streak.</h2>\r\n        <figure class="about-portrait"><img src="assets/saptarshi-portrait.png" alt="Saptarshi Mandal wearing a blazer" width="1106" height="1422" loading="lazy" decoding="async"><figcaption><span>SAPTARSHI MANDAL</span><span>Data \xB7 Code \xB7 Creative thinking</span></figcaption></figure>\r\n      </div>\r\n      <div class="about-copy" data-reveal>\r\n        <p>I\u2019m building a career where data science meets clear communication. At IEM Kolkata, I\u2019m deepening my skills in Python, SQL, machine learning and cloud computing. Outside the classroom, I\u2019ve learned how to turn an idea into a story people pay attention to.</p>\r\n        <p class="muted"><strong>A year of taking ownership.</strong> As Public Relations Manager at NebulaPioneers, I built external communications, brand narratives and outreach strategy from the ground up. Alongside that, I managed LinkedIn content for Ureckon, UEM Kolkata\u2019s flagship tech event, creating content for student and recruiter communities.</p>\r\n        <p class="muted"><strong>A creative edge, put to work.</strong> My experience at CollegeTips.in brought together content writing and graphic design with Adobe Photoshop. It\u2019s a perspective I bring to technical work too: ask better questions, find what matters, and make it easy for someone else to understand.</p>\r\n        <p class="muted"><strong>Curiosity with a track record.</strong> Completed Google Cloud Foundations through LinkedIn Learning. ATL Marathon 2020: Top 10 in West Bengal and Top 300 nationally. And still learning \u2014 through hands-on projects and self-driven study.</p>\r\n        <p class="muted"><strong>What I\u2019m looking for next:</strong> an internship in data science, analytics or cloud computing where I can contribute to real problems, learn from an experienced team, and bring both analytical thinking and visual storytelling to the table.</p>\r\n        <div class="about-facts">\r\n          <div>\r\n            <span>EDUCATION</span>\r\n            <strong>IEM, Kolkata</strong>\r\n            <p>B.Tech, CST \xB7 2023\u20132027</p><p>CGPA: 8.4 through Semester V</p>\r\n          </div>\r\n          <div>\r\n            <span>ROLE INTERESTS</span>\r\n            <strong>Data &amp; software</strong>\r\n            <p>Analytics \xB7 Business insights \xB7 Development</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="projects">\r\n    <div class="wrap">\r\n      <div class="section-head" data-reveal>\r\n        <div>\r\n          <div class="eyebrow" data-scramble="02 / SELECTED WORK">02 / SELECTED WORK</div>\r\n          <h2>Ideas put into practice.</h2>\r\n        </div>\r\n        <p>From people analytics to connected systems \u2014 a selection of my academic projects.</p>\r\n      </div>\r\n\r\n      <p id="filterStatus" class="filter-status" role="status" aria-live="polite">Showing all 8 projects</p>\r\n      <div class="project-filters" role="group" aria-label="Filter projects by category" data-reveal>\r\n        <span class="filter-label">Filter projects:</span>\r\n        <div class="filter-btn-group">\r\n          <button type="button" class="filter-btn is-active" data-filter="all" aria-pressed="true">All</button>\r\n          <button type="button" class="filter-btn" data-filter="data-ml" aria-pressed="false">Data &amp; ML</button>\r\n          <button type="button" class="filter-btn" data-filter="software-iot" aria-pressed="false">Software &amp; IoT</button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="project-grid">\r\n        <article class="card project-card featured-project" id="project_101" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/hr-attrition.html"><img loading="lazy" src="assets/projects/hr-dashboard.png" alt="HR Employee Attrition Analysis project output"></a><div class="project-meta"><span>FEATURED \xB7 DATA ANALYTICS</span><span>01 /</span></div>\r\n          <h3>HR Employee Attrition Analysis</h3><p class="project-lead">From employee patterns to workforce decisions.</p><p class="muted">Analyzed 1,470 IBM HR records to identify attrition drivers and score employee risk. A logistic regression model achieved 77.7% accuracy and 0.81 ROC-AUC on held-out test data, with risk-scored exports and a Power BI dashboard build guide.</p>\r\n          <dl class="project-highlights"><div><dt>employee records</dt><dd>1,470</dd></div><div><dt>test ROC-AUC</dt><dd>0.81</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Power BI (DAX)</span><span class="tag">Scikit-learn</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/hr-attrition.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_101" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_202" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/credit-risk.html"><img loading="lazy" src="assets/projects/credit-dashboard.png" alt="Loan Default &amp; Credit Risk Analysis project output"></a><div class="project-meta"><span>MACHINE LEARNING</span><span>02 /</span></div>\r\n          <h3>Loan Default &amp; Credit Risk Analysis</h3><p class="project-lead">Making risk easier to understand.</p><p class="muted">Analyzed 32,000+ loan applications using Logistic Regression, Random Forest and Gradient Boosting. Achieved 80.6% accuracy and 0.876 ROC-AUC, with model comparisons and a Tableau dashboard.</p>\r\n          <dl class="project-highlights"><div><dt>loan applications</dt><dd>32k+</dd></div><div><dt>ROC-AUC</dt><dd>0.876</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Python</span><span class="tag">Logistic Regression</span><span class="tag">Tableau</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/credit-risk.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_202" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_303" data-category="software-iot" data-reveal>\r\n          <div class="project-meta"><span>SOFTWARE &amp; SECURITY</span><span>03 /</span></div>\r\n          <h3>MediVault</h3><p class="project-lead">Decentralized medical records.</p><p class="muted">Designed an Ethereum-based medical records system with IPFS storage for tamper-resistant access. Authored an accompanying research paper with a WannaCry-based case study.</p>\r\n          <dl class="project-highlights"><div><dt>access framework</dt><dd>Ethereum</dd></div><div><dt>record storage</dt><dd>IPFS</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Ethereum</span><span class="tag">IPFS</span><span class="tag">Blockchain</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_303" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MediVault-Decentralized-Medical-Records-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_404" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/smart-irrigation.html"><img loading="lazy" src="assets/projects/irrigation-circuit.png" alt="Arduino Uno substitute circuit in the irrigation browser simulation"></a>\r\n          <div class="project-meta"><span>CONNECTED SYSTEMS</span><span>04 /</span></div>\r\n          <h3>Automated Irrigation System</h3><p class="project-lead">Crop-aware watering. Sensor-driven control.</p><p class="muted">An ESP32 prototype that uses soil moisture and crop-specific thresholds to control a pump, with pH monitoring and a Bluetooth-linked web dashboard. Includes browser simulations; real-hardware validation is pending.</p>\r\n          <dl class="project-highlights"><div><dt>controller</dt><dd>ESP32 + BLE</dd></div><div><dt>current stage</dt><dd>Prototype</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">C++ / Arduino</span><span class="tag">ESP32 / BLE</span><span class="tag">Web Bluetooth</span></div>\r\n          <div class="card-actions"><button type="button" class="btn-details" data-project="project_404" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button><a class="btn" href="case-studies/smart-irrigation.html">Project overview</a></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_505" data-category="data-ml" data-reveal>\r\n          <a class="project-preview" href="case-studies/customer-churn.html"><img loading="lazy" src="assets/projects/churn-contracts.svg" alt="Customer Churn Analysis project output"></a><div class="project-meta"><span>DATA ANALYTICS</span><span>05 /</span></div>\r\n          <h3>Customer Churn Analysis</h3><p class="project-lead">From churn patterns to retention actions.</p><p class="muted">Analyzed approximately 7,043 Telco customer records in MySQL Workbench and built a Power BI dashboard with a prescriptive recommendation engine for targeted retention actions.</p>\r\n          <dl class="project-highlights"><div><dt>customer records</dt><dd>7,043</dd></div><div><dt>retention analysis</dt><dd>SQL + BI</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">SQL</span><span class="tag">MySQL Workbench</span><span class="tag">Power BI</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/customer-churn.html">Read case study \u2192</a><button type="button" class="btn-details" data-project="project_505" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n\r\n        <article class="card project-card" id="project_606" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/mediassist.html"><img loading="lazy" src="assets/projects/mediassist-workspace.png" alt="MediAssist chatbot interface"></a><div class="project-meta"><span>SOFTWARE &amp; AI</span><span>06 /</span></div>\r\n          <h3>MediAssist AI</h3><p class="project-lead">A healthcare assistant built at a hackathon.</p><p class="muted">A healthcare chatbot prototype with four Gemini-powered modes, symptom-reference matching, and MongoDB-backed medication, appointment, mood and health tracking.</p>\r\n          <dl class="project-highlights"><div><dt>consultation modes</dt><dd>4</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Gemini API</span><span class="tag">MongoDB</span><span class="tag">Node.js / Express</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/mediassist.html">Read project overview \u2192</a><button type="button" class="btn-details" data-project="project_606" aria-haspopup="dialog">Explore project <span aria-hidden="true">\u2192</span></button></div>\r\n          <div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener noreferrer">View repository profile <span aria-hidden="true">\u2197</span></a></div>\r\n        </article>\r\n        <article class="card project-card" id="project_707" data-category="software-iot" data-reveal>\r\n          <a class="project-preview" href="case-studies/ai-hr.html"><img loading="lazy" src="assets/projects/ai-hr-workspace.png" alt="AI HR workspace interface with HR specialty navigation"></a>\r\n          <div class="project-meta"><span>SOFTWARE &amp; AI</span><span>07 /</span></div>\r\n          <h3>AI HR Workspace</h3><p class="project-lead">From HR questions to structured action plans.</p><p class="muted">Built a Gemini-powered workspace for recruiting, onboarding, employee relations, performance, policy, people analytics and learning, with a Node.js backend and a browser interface.</p>\r\n          <dl class="project-highlights"><div><dt>HR specialty modes</dt><dd>8</dd></div><div><dt>AI integration</dt><dd>Gemini</dd></div></dl>\r\n          <div class="tag-list"><span class="tag">Node.js</span><span class="tag">JavaScript</span><span class="tag">Gemini API</span></div>\r\n          <div class="card-actions"><a class="btn-details" href="case-studies/ai-hr.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_707" aria-haspopup="dialog">Quick details \u2192</button></div>\r\n        <p class="muted repo-pending">GitHub repository coming soon</p></article>\r\n<article class="card project-card" id="project_808" data-category="data-ml" data-reveal><a class="project-preview" href="case-studies/marketpulse-ai.html"><img loading="lazy" src="assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse Stock Explorer showing adjusted price history and observed trading volume"></a><div class="project-meta"><span>DATA ENGINEERING &amp; ML</span><span>08 /</span></div><h3>MarketPulse AI Foundation</h3><p class="project-lead">Market research built to be reproducible.</p><p class="muted">An Indian-equity research pipeline connecting daily price data, exchange-session validation, technical features, PostgreSQL analytics and Power BI reporting. Evaluates forecasts against simple baselines.</p><dl class="project-highlights"><div><dt>technical features</dt><dd>39</dd></div><div><dt>report pages</dt><dd>7</dd></div></dl><div class="tag-list"><span class="tag">Python</span><span class="tag">PostgreSQL</span><span class="tag">Power BI</span><span class="tag">Scikit-learn</span></div><div class="card-actions"><a class="btn-details" href="case-studies/marketpulse-ai.html">Explore project \u2192</a><button type="button" class="btn-details" data-project="project_808" aria-haspopup="dialog">Quick details \u2192</button></div><div class="project-links"><a href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a></div></article>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="skills">\r\n    <div class="wrap">\r\n      <div class="section-head" data-reveal>\r\n        <div>\r\n          <div class="eyebrow" data-scramble="03 / TOOLKIT">03 / TOOLKIT</div>\r\n          <h2>What I work with.</h2>\r\n        </div>\r\n        <p>Skills from my projects, resume and continued learning. Explore by role, then open a supporting certificate to inspect the course record.</p>\r\n      </div>\r\n      <div id="skillControls" class="skill-controls" role="group" aria-label="Explore skills by role" hidden>\r\n        <button class="skill-filter" type="button" data-skill-filter="all" aria-pressed="true">All skills</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="data" aria-pressed="false">Data analyst</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="software" aria-pressed="false">Software &amp; cloud</button>\r\n        <button class="skill-filter" type="button" data-skill-filter="business" aria-pressed="false">Business &amp; communication</button>\r\n      </div>\r\n      <p id="skillStatus" class="muted" role="status" aria-live="polite">8 skill areas \xB7 Click connected certificates or expand evidence to verify.</p>\r\n      <div class="grid" id="skillsGrid">\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">01 /</span>\r\n          <h3>Data analysis &amp; SQL</h3>\r\n          <p class="muted">Clean, query and explore data before drawing conclusions.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Python</span>\r\n            <span class="tag">Pandas</span>\r\n            <span class="tag">NumPy</span>\r\n            <span class="tag">SQL joins</span>\r\n            <span class="tag">CTEs</span>\r\n            <span class="tag">Window functions</span>\r\n            <span class="tag">EDA</span>\r\n            <span class="tag">Data cleaning</span>\r\n            <span class="tag">Statistical analysis</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to SQL <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics with AI <span class="cert-pill-issuer">IBM SkillsBuild \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener" class="cert-pill">Data Analytics: 1 Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: data and analytics toolkit; IBM HR attrition (1,470 records) and Telco customer churn (7,043 records) projects.</p>\r\n            <a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View SQL Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">02 /</span>\r\n          <h3>Dashboards &amp; business intelligence</h3>\r\n          <p class="muted">Turn analysis into decisions people can see and use.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Power BI</span>\r\n            <span class="tag">DAX</span>\r\n            <span class="tag">Power Query</span>\r\n            <span class="tag">Tableau</span>\r\n            <span class="tag">Excel</span>\r\n            <span class="tag">Pivot tables</span>\r\n            <span class="tag">VLOOKUP</span>\r\n            <span class="tag">KPI reporting</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener" class="cert-pill">Power BI Job Simulation <span class="cert-pill-issuer">PwC \xB7 Forage \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Skills Job Simulation <span class="cert-pill-issuer">JPMorgan Chase \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener" class="cert-pill">Excel Essential Training <span class="cert-pill-issuer">NASBA CPE \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: Power BI and Tableau dashboards for HR attrition risk and loan risk analysis.</p>\r\n            <a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View Power BI Job Simulation \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data software">\r\n          <span class="skill-number">03 /</span>\r\n          <h3>Machine learning &amp; AI</h3>\r\n          <p class="muted">Explore predictive models and explain what drives their results.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Scikit-learn</span>\r\n            <span class="tag">Logistic regression</span>\r\n            <span class="tag">Random Forest</span>\r\n            <span class="tag">XGBoost</span>\r\n            <span class="tag">SHAP</span>\r\n            <span class="tag">K-Means</span>\r\n            <span class="tag">Generative AI</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener" class="cert-pill">GenAI Powered Analytics <span class="cert-pill-issuer">Tata \xB7 Forage \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener" class="cert-pill">Career Essentials in GenAI <span class="cert-pill-issuer">Microsoft &amp; LinkedIn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener" class="cert-pill">Introduction to Generative AI <span class="cert-pill-issuer">Google Cloud \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: Loan Default risk analysis (32k+ applications, 0.876 ROC-AUC) and HR attrition risk scoring.</p>\r\n            <a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View Tata GenAI Analytics \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="data business">\r\n          <span class="skill-number">04 /</span>\r\n          <h3>Business analysis</h3>\r\n          <p class="muted">Connect a business question to requirements, measures and recommendations.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Requirements gathering</span>\r\n            <span class="tag">Process analysis</span>\r\n            <span class="tag">A/B testing</span>\r\n            <span class="tag">ETL pipelines</span>\r\n            <span class="tag">Data storytelling</span>\r\n            <span class="tag">Stakeholder communication</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener" class="cert-pill">Business Analysis Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener" class="cert-pill">Create a Project Charter <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener" class="cert-pill">Leadership Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume: business analysis toolkit, KPI frameworks, and prescriptive recommendation engine for customer retention.</p>\r\n            <a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View Business Analysis Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="software">\r\n          <span class="skill-number">05 /</span>\r\n          <h3>Software &amp; connected systems</h3>\r\n          <p class="muted">Build around APIs, databases and real-world inputs.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Node.js</span>\r\n            <span class="tag">Express</span>\r\n            <span class="tag">MongoDB</span>\r\n            <span class="tag">Gemini API</span>\r\n            <span class="tag">Ethereum</span>\r\n            <span class="tag">IPFS</span>\r\n            <span class="tag">Arduino</span>\r\n            <span class="tag">Raspberry Pi</span>\r\n            <span class="tag">Git / GitHub</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener" class="cert-pill">Software Architecture <span class="cert-pill-issuer">Simplilearn \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener" class="cert-pill">AI with GitHub Copilot <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener" class="cert-pill">Electronics: Basic Circuits <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume projects: MediAssist AI (Gemini + MongoDB), MediVault (Ethereum/IPFS), and Automated Irrigation System.</p>\r\n            <a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View Software Architecture \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="software">\r\n          <span class="skill-number">06 /</span>\r\n          <h3>Cloud &amp; security foundations</h3>\r\n          <p class="muted">Developing foundations in cloud platforms and secure systems.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Google Cloud foundations</span>\r\n            <span class="tag">Azure Cognitive Services</span>\r\n            <span class="tag">Network security</span>\r\n            <span class="tag">Cryptography</span>\r\n            <span class="tag">Cybersecurity fundamentals</span>\r\n            <span class="tag">Linux</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener" class="cert-pill">Google Cloud Foundations <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener" class="cert-pill">Vision with Azure Cognitive Services <span class="cert-pill-issuer">Microsoft \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener" class="cert-pill">Cisco Network Security <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Course learning: Google Cloud Foundations, Azure computer vision, Applied Cryptography (CU Boulder) and Cisco network security.</p>\r\n            <a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View Google Cloud Foundations \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="business">\r\n          <span class="skill-number">07 /</span>\r\n          <h3>Design &amp; communication</h3>\r\n          <p class="muted">Make technical ideas clear, visual and worth paying attention to.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Adobe Photoshop</span>\r\n            <span class="tag">Content writing</span>\r\n            <span class="tag">Content marketing</span>\r\n            <span class="tag">Public relations</span>\r\n            <span class="tag">Visual storytelling</span>\r\n            <span class="tag">Public speaking</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener" class="cert-pill">Photoshop: New AI Features <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener" class="cert-pill">Advanced Content Marketing <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener" class="cert-pill">Design Course Collateral <span class="cert-pill-issuer">Coursera \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Experience: PR Manager at NebulaPioneers, LinkedIn content for Ureckon tech event, design at CollegeTips.in.</p>\r\n            <a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View Photoshop Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n\r\n        <article class="card skill-card" data-skill-roles="business software">\r\n          <span class="skill-number">08 /</span>\r\n          <h3>Delivery &amp; collaboration</h3>\r\n          <p class="muted">Organize work and communicate across a team.</p>\r\n          <div class="tag-list">\r\n            <span class="tag">Agile concepts</span>\r\n            <span class="tag">Leadership</span>\r\n            <span class="tag">Teamwork</span>\r\n            <span class="tag">Time management</span>\r\n            <span class="tag">Problem solving</span>\r\n            <span class="tag">MATLAB</span>\r\n            <span class="tag">Microsoft Copilot</span>\r\n            <span class="tag">MS Office</span>\r\n          </div>\r\n          <div class="skill-cert-links">\r\n            <span class="skill-cert-heading">Connected Certificates</span>\r\n            <ul class="skill-cert-list">\r\n              <li><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener" class="cert-pill">Agile Project Management <span class="cert-pill-issuer">HP LIFE \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener" class="cert-pill">Learning MATLAB <span class="cert-pill-issuer">LinkedIn Learning \u2197</span></a></li>\r\n              <li><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener" class="cert-pill">Efficient Time Management <span class="cert-pill-issuer">PMI Credit Record \u2197</span></a></li>\r\n            </ul>\r\n          </div>\r\n          <details class="skill-evidence">\r\n            <summary>Explore the evidence</summary>\r\n            <p>Resume tools and core competencies; Agile methodologies, leadership and technical computing coursework.</p>\r\n            <a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View Agile Certificate \u2197</a>\r\n          </details>\r\n        </article>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id="certifications" aria-labelledby="certHeading"><div class="wrap">\r\n<div class="section-head"><div><div class="eyebrow">04 / ALWAYS LEARNING</div><h2 id="certHeading">Curiosity, with receipts.</h2></div><p>Explore technical learning, university activities, event contributions and innovation achievements.</p></div>\r\n<p class="muted">Four collections: Tech, UEM, IITM and ATL. Browse one group at a time, then search its certificates. Team awards and participation records are labeled separately.</p>\r\n<div id="certificateControls" hidden><div class="cert-filters certificate-groups" role="group" aria-label="Certificate collections"><button type="button" class="cert-filter" data-cert-group-filter="tech" aria-pressed="true">Tech <span>(38)</span></button><button type="button" class="cert-filter" data-cert-group-filter="uem" aria-pressed="false">UEM <span>(7)</span></button><button type="button" class="cert-filter" data-cert-group-filter="iitm" aria-pressed="false">IITM <span>(11)</span></button><button type="button" class="cert-filter" data-cert-group-filter="atl" aria-pressed="false">ATL <span>(6)</span></button></div><label class="cert-search-label" for="certificateSearch">Find a certificate</label><input id="certificateSearch" type="search" placeholder="Try Power BI, Google or leadership\u2026" autocomplete="off"><div id="techCertificateFilters" class="cert-filters" role="group" aria-label="Filter Tech certificates"><button type="button" class="cert-filter" data-cert-filter="all" aria-pressed="true">All</button><button type="button" class="cert-filter" data-cert-filter="data" aria-pressed="false">Data &amp; analytics</button><button type="button" class="cert-filter" data-cert-filter="ai" aria-pressed="false">AI &amp; cloud</button><button type="button" class="cert-filter" data-cert-filter="systems" aria-pressed="false">Security &amp; systems</button><button type="button" class="cert-filter" data-cert-filter="creative" aria-pressed="false">Design &amp; content</button><button type="button" class="cert-filter" data-cert-filter="business" aria-pressed="false">Leadership &amp; business</button></div></div>\r\n<p id="certificateStatus" role="status" aria-live="polite">62 certificate documents across four collections</p><div class="certificate-grid"><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-18.pdf" target="_blank" rel="noopener" aria-label="View Data Analytics with AI \u2014 Academic Internship certificate (PDF, new tab)"><img src="certificates/certificate-18.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Data Analytics with AI \u2014 Academic Internship certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Academic internship</span><h3>Data Analytics with AI \u2014 Academic Internship</h3><p class="cert-issuer">IBM SkillsBuild \xB7 AICTE \xB7 BharatCares</p><div class="cert-actions"><a href="certificates/certificate-18.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-18.pdf" download="Saptarshi-Mandal-Data-Analytics-with-AI-Academic-Internship-18.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-16.pdf" target="_blank" rel="noopener" aria-label="View PwC Switzerland Power BI Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-16.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of PwC Switzerland Power BI Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>PwC Switzerland Power BI Job Simulation</h3><p class="cert-issuer">PwC Switzerland \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-16.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-16.pdf" download="Saptarshi-Mandal-PwC-Switzerland-Power-BI-Job-Simulation-16.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-17.pdf" target="_blank" rel="noopener" aria-label="View TATA GenAI Powered Data Analytics Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-17.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of TATA GenAI Powered Data Analytics Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>TATA GenAI Powered Data Analytics Job Simulation</h3><p class="cert-issuer">Tata \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-17.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-17.pdf" download="Saptarshi-Mandal-TATA-GenAI-Powered-Data-Analytics-Job-Simulation-17.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-20.pdf" target="_blank" rel="noopener" aria-label="View Introduction to SQL certificate (PDF, new tab)"><img src="certificates/certificate-20.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to SQL certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to SQL</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-20.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-20.pdf" download="Saptarshi-Mandal-Introduction-to-SQL-20.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-15.pdf" target="_blank" rel="noopener" aria-label="View JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate (PDF, new tab)"><img src="certificates/certificate-15.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of JPMorgan Chase &amp; Co. Excel Skills Job Simulation certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Job simulation</span><h3>JPMorgan Chase &amp; Co. Excel Skills Job Simulation</h3><p class="cert-issuer">JPMorgan Chase &amp; Co. \xB7 Forage</p><div class="cert-actions"><a href="certificates/certificate-15.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-15.pdf" download="Saptarshi-Mandal-JPMorgan-Chase-Co-Excel-Skills-Job-Simulation-15.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-34.pdf" target="_blank" rel="noopener" aria-label="View Learning Data Analytics: 1 Foundations certificate (PDF, new tab)"><img src="certificates/certificate-34.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning Data Analytics: 1 Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning Data Analytics: 1 Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-34.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-34.pdf" download="Saptarshi-Mandal-Learning-Data-Analytics-1-Foundations-34.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-29.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-29.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-29.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-29.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--29.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-23.pdf" target="_blank" rel="noopener" aria-label="View Business Analysis Foundations certificate (PDF, new tab)"><img src="certificates/certificate-23.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Business Analysis Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Business Analysis Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-23.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-23.pdf" download="Saptarshi-Mandal-Business-Analysis-Foundations-23.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-24.pdf" target="_blank" rel="noopener" aria-label="View Career Essentials in Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-24.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Career Essentials in Generative AI certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Career Essentials in Generative AI</h3><p class="cert-issuer">Microsoft &amp; LinkedIn</p><div class="cert-actions"><a href="certificates/certificate-24.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-24.pdf" download="Saptarshi-Mandal-Career-Essentials-in-Generative-AI-24.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-06.pdf" target="_blank" rel="noopener" aria-label="View Build a computer vision app with Azure Cognitive Services certificate (PDF, new tab)"><img src="certificates/certificate-06.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Build a computer vision app with Azure Cognitive Services certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Build a computer vision app with Azure Cognitive Services</h3><p class="cert-issuer">Microsoft \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-06.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-06.pdf" download="Saptarshi-Mandal-Build-a-computer-vision-app-with-Azure-Cognitive-Services-6.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-30.pdf" target="_blank" rel="noopener" aria-label="View Google Cloud Foundations certificate (PDF, new tab)"><img src="certificates/certificate-30.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Cloud Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Google Cloud Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-30.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-30.pdf" download="Saptarshi-Mandal-Google-Cloud-Foundations-30.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-33.pdf" target="_blank" rel="noopener" aria-label="View Learning AI with GitHub Copilot certificate (PDF, new tab)"><img src="certificates/certificate-33.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning AI with GitHub Copilot certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning AI with GitHub Copilot</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-33.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-33.pdf" download="Saptarshi-Mandal-Learning-AI-with-GitHub-Copilot-33.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-12.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Generative AI certificate (PDF, new tab)"><img src="certificates/certificate-12.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Generative AI certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Generative AI</h3><p class="cert-issuer">Google Cloud \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-12.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-12.pdf" download="Saptarshi-Mandal-Introduction-to-Generative-AI-12.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-09.pdf" target="_blank" rel="noopener" aria-label="View Generative AI Essentials: Overview and Impact certificate (PDF, new tab)"><img src="certificates/certificate-09.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Generative AI Essentials: Overview and Impact certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Generative AI Essentials: Overview and Impact</h3><p class="cert-issuer">University of Michigan \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-09.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-09.pdf" download="Saptarshi-Mandal-Generative-AI-Essentials-Overview-and-Impact-9.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-19.pdf" target="_blank" rel="noopener" aria-label="View Introduction to Software Architecture certificate (PDF, new tab)"><img src="certificates/certificate-19.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Introduction to Software Architecture certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Introduction to Software Architecture</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-19.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-19.pdf" download="Saptarshi-Mandal-Introduction-to-Software-Architecture-19.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-05.pdf" target="_blank" rel="noopener" aria-label="View Applied Cryptography certificate (PDF, new tab)"><img src="certificates/certificate-05.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Applied Cryptography certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Specialization</span><h3>Applied Cryptography</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-05.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-05.pdf" download="Saptarshi-Mandal-Applied-Cryptography-5.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-03.pdf" target="_blank" rel="noopener" aria-label="View Cisco Network Security: Safeguarding Network Integrity and Data certificate (PDF, new tab)"><img src="certificates/certificate-03.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cisco Network Security: Safeguarding Network Integrity and Data certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Learning path</span><h3>Cisco Network Security: Safeguarding Network Integrity and Data</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-03.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-03.pdf" download="Saptarshi-Mandal-Cisco-Network-Security-Safeguarding-Network-Integrity-and-Data-3.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-08.pdf" target="_blank" rel="noopener" aria-label="View Cyber Security Fundamentals certificate (PDF, new tab)"><img src="certificates/certificate-08.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Cyber Security Fundamentals certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Cyber Security Fundamentals</h3><p class="cert-issuer">University of London \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-08.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-08.pdf" download="Saptarshi-Mandal-Cyber-Security-Fundamentals-8.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-04.pdf" target="_blank" rel="noopener" aria-label="View Advanced System Security Topics certificate (PDF, new tab)"><img src="certificates/certificate-04.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced System Security Topics certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced System Security Topics</h3><p class="cert-issuer">University of Colorado System \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-04.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-04.pdf" download="Saptarshi-Mandal-Advanced-System-Security-Topics-4.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-11.pdf" target="_blank" rel="noopener" aria-label="View Information Theory certificate (PDF, new tab)"><img src="certificates/certificate-11.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Information Theory certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Information Theory</h3><p class="cert-issuer">The Chinese University of Hong Kong \xB7 Coursera</p><div class="cert-actions"><a href="certificates/certificate-11.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-11.pdf" download="Saptarshi-Mandal-Information-Theory-11.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="ai">\r\n<a class="cert-preview" href="certificates/certificate-02.pdf" target="_blank" rel="noopener" aria-label="View AI Product Management Course certificate (PDF, new tab)"><img src="certificates/certificate-02.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of AI Product Management Course certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>AI Product Management Course</h3><p class="cert-issuer">Simplilearn SkillUp</p><div class="cert-actions"><a href="certificates/certificate-02.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-02.pdf" download="Saptarshi-Mandal-AI-Product-Management-Course-2.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-01.pdf" target="_blank" rel="noopener" aria-label="View Agile Project Management certificate (PDF, new tab)"><img src="certificates/certificate-01.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Agile Project Management certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Agile Project Management</h3><p class="cert-issuer">HP LIFE</p><div class="cert-actions"><a href="certificates/certificate-01.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-01.pdf" download="Saptarshi-Mandal-Agile-Project-Management-1.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-35.pdf" target="_blank" rel="noopener" aria-label="View Learning MATLAB certificate (PDF, new tab)"><img src="certificates/certificate-35.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Learning MATLAB certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Learning MATLAB</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-35.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-35.pdf" download="Saptarshi-Mandal-Learning-MATLAB-35.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-32.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-32.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-32.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-32.pdf" download="Saptarshi-Mandal-Leadership-Foundations-32.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-38.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-38.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-38.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-38.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-38.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-22.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-22.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-22.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-22.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-22.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-36.pdf" target="_blank" rel="noopener" aria-label="View Photoshop 2024: New AI Features certificate (PDF, new tab)"><img src="certificates/certificate-36.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Photoshop 2024: New AI Features certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Photoshop 2024: New AI Features</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-36.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-36.pdf" download="Saptarshi-Mandal-Photoshop-2024-New-AI-Features-36.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="systems">\r\n<a class="cert-preview" href="certificates/certificate-27.pdf" target="_blank" rel="noopener" aria-label="View Electronics Foundations: Basic Circuits certificate (PDF, new tab)"><img src="certificates/certificate-27.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Electronics Foundations: Basic Circuits certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Electronics Foundations: Basic Circuits</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-27.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-27.pdf" download="Saptarshi-Mandal-Electronics-Foundations-Basic-Circuits-27.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-26.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management certificate (PDF, new tab)"><img src="certificates/certificate-26.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Course completion</span><h3>Efficient Time Management</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-26.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-26.pdf" download="Saptarshi-Mandal-Efficient-Time-Management-26.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-07.pdf" target="_blank" rel="noopener" aria-label="View Create a Project Charter with Google Docs certificate (PDF, new tab)"><img src="certificates/certificate-07.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Create a Project Charter with Google Docs certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Create a Project Charter with Google Docs</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-07.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-07.pdf" download="Saptarshi-Mandal-Create-a-Project-Charter-with-Google-Docs-7.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-14.pdf" target="_blank" rel="noopener" aria-label="View Use Canva to Design Digital Course Collateral certificate (PDF, new tab)"><img src="certificates/certificate-14.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Use Canva to Design Digital Course Collateral certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Use Canva to Design Digital Course Collateral</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-14.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-14.pdf" download="Saptarshi-Mandal-Use-Canva-to-Design-Digital-Course-Collateral-14.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-13.pdf" target="_blank" rel="noopener" aria-label="View Search Engine Optimization (SEO) with Squarespace certificate (PDF, new tab)"><img src="certificates/certificate-13.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Search Engine Optimization (SEO) with Squarespace certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Search Engine Optimization (SEO) with Squarespace</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-13.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-13.pdf" download="Saptarshi-Mandal-Search-Engine-Optimization-SEO-with-Squarespace-13.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-10.pdf" target="_blank" rel="noopener" aria-label="View Google Ads for Beginners certificate (PDF, new tab)"><img src="certificates/certificate-10.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Google Ads for Beginners certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">Guided project</span><h3>Google Ads for Beginners</h3><p class="cert-issuer">Coursera Project Network</p><p class="cert-note">Recipient shown as \u201CCoursera Learner\u201D on this document.</p><div class="cert-actions"><a href="certificates/certificate-10.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-10.pdf" download="Saptarshi-Mandal-Google-Ads-for-Beginners-10.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="data">\r\n<a class="cert-preview" href="certificates/certificate-28.pdf" target="_blank" rel="noopener" aria-label="View Excel Essential Training (Microsoft 365) certificate (PDF, new tab)"><img src="certificates/certificate-28.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Excel Essential Training (Microsoft 365) certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">NASBA CPE record</span><h3>Excel Essential Training (Microsoft 365)</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-28.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-28.pdf" download="Saptarshi-Mandal-Excel-Essential-Training-Microsoft-365--28.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-31.pdf" target="_blank" rel="noopener" aria-label="View Leadership Foundations certificate (PDF, new tab)"><img src="certificates/certificate-31.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Leadership Foundations certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Leadership Foundations</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-31.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-31.pdf" download="Saptarshi-Mandal-Leadership-Foundations-31.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-37.pdf" target="_blank" rel="noopener" aria-label="View Skills to Build Stronger Work Relationships certificate (PDF, new tab)"><img src="certificates/certificate-37.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Skills to Build Stronger Work Relationships certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Skills to Build Stronger Work Relationships</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-37.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-37.pdf" download="Saptarshi-Mandal-Skills-to-Build-Stronger-Work-Relationships-37.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="creative">\r\n<a class="cert-preview" href="certificates/certificate-21.pdf" target="_blank" rel="noopener" aria-label="View Advanced Content Marketing certificate (PDF, new tab)"><img src="certificates/certificate-21.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Advanced Content Marketing certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Advanced Content Marketing</h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-21.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-21.pdf" download="Saptarshi-Mandal-Advanced-Content-Marketing-21.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="tech" data-cert-category="business">\r\n<a class="cert-preview" href="certificates/certificate-25.pdf" target="_blank" rel="noopener" aria-label="View Efficient Time Management  certificate (PDF, new tab)"><img src="certificates/certificate-25.webp" width="760" height="560" loading="lazy" decoding="async" alt="Preview of Efficient Time Management  certificate"></a>\r\n<div class="cert-body"><span class="cert-kind">PMI credit record</span><h3>Efficient Time Management </h3><p class="cert-issuer">LinkedIn Learning</p><div class="cert-actions"><a href="certificates/certificate-25.pdf" target="_blank" rel="noopener">View PDF \u2197</a><a href="certificates/certificate-25.pdf" download="Saptarshi-Mandal-Efficient-Time-Management--25.pdf">Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-01.png" target="_blank" rel="noopener" aria-label="View Ecstasia 2025 certificate"><img src="certificates/uem-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ecstasia 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ecstasia 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-02.png" target="_blank" rel="noopener" aria-label="View Ureckon 2025 certificate"><img src="certificates/uem-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Ureckon 2025 certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator appreciation</span><h3>Ureckon 2025</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-02.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-03.png" target="_blank" rel="noopener" aria-label="View Nanotechnology: A Changing Face in Modern Era certificate"><img src="certificates/uem-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Nanotechnology: A Changing Face in Modern Era certificate"></a><div class="cert-body"><span class="cert-kind">Poster competition participation</span><h3>Nanotechnology: A Changing Face in Modern Era</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-04.png" target="_blank" rel="noopener" aria-label="View Aperture 2.0 certificate"><img src="certificates/uem-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Aperture 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Photography event organizing</span><h3>Aperture 2.0</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-05.png" target="_blank" rel="noopener" aria-label="View Reaching Out NGO community service certificate"><img src="certificates/uem-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Reaching Out NGO community service certificate"></a><div class="cert-body"><span class="cert-kind">Appreciation</span><h3>Reaching Out NGO community service</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-06.png" target="_blank" rel="noopener" aria-label="View Energy and Sustainability: A Social Mission certificate"><img src="certificates/uem-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Energy and Sustainability: A Social Mission certificate"></a><div class="cert-body"><span class="cert-kind">Seminar participation</span><h3>Energy and Sustainability: A Social Mission</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="uem" data-cert-category="activities"><a class="cert-preview" href="certificates/uem-07.png" target="_blank" rel="noopener" aria-label="View Internet of Things workshop certificate"><img src="certificates/uem-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Internet of Things workshop certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>Internet of Things workshop</h3><p class="cert-issuer">UEM Kolkata</p><div class="cert-actions"><a href="certificates/uem-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/uem-07.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-01.png" target="_blank" rel="noopener" aria-label="View GenAI: Common use cases and solutions certificate"><img src="certificates/iitm-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="GenAI: Common use cases and solutions certificate"></a><div class="cert-body"><span class="cert-kind">Workshop participation</span><h3>GenAI: Common use cases and solutions</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-02.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Student Relations certificate"><img src="certificates/iitm-02.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Volunteer recognition</span><h3>Paradox 2024: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-02.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-02.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-03.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Games certificate"><img src="certificates/iitm-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Games certificate"></a><div class="cert-body"><span class="cert-kind">Event volunteer appreciation</span><h3>Paradox 2024: Squid Games</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-04.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Qutopia certificate"><img src="certificates/iitm-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Qutopia certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Qutopia</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-05.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Shutter Safari certificate"><img src="certificates/iitm-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Shutter Safari certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Shutter Safari</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-06.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: What\u2019s in a Meme certificate"><img src="certificates/iitm-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: What\u2019s in a Meme certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: What\u2019s in a Meme</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-07.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Fiction Flicks certificate"><img src="certificates/iitm-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Fiction Flicks certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Fiction Flicks</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-07.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-08.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Logic Loom 2.0 certificate"><img src="certificates/iitm-08.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Logic Loom 2.0 certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Logic Loom 2.0</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-08.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-08.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-09.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Kampus Run certificate"><img src="certificates/iitm-09.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Kampus Run certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Kampus Run</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-09.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-09.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-10.png" target="_blank" rel="noopener" aria-label="View Paradox 2024: Squid Game certificate"><img src="certificates/iitm-10.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox 2024: Squid Game certificate"></a><div class="cert-body"><span class="cert-kind">Participation</span><h3>Paradox 2024: Squid Game</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-10.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-10.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="iitm" data-cert-category="activities"><a class="cert-preview" href="certificates/iitm-11.png" target="_blank" rel="noopener" aria-label="View Paradox in Margazhi 2025: Student Relations certificate"><img src="certificates/iitm-11.webp" loading="lazy" decoding="async" width="760" height="560" alt="Paradox in Margazhi 2025: Student Relations certificate"></a><div class="cert-body"><span class="cert-kind">Coordinator recognition</span><h3>Paradox in Margazhi 2025: Student Relations</h3><p class="cert-issuer">IIT Madras \xB7 Paradox</p><div class="cert-actions"><a href="certificates/iitm-11.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/iitm-11.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-01.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Savvys certificate"><img src="certificates/atl-01.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Savvys certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2021\u201322: Savvys</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-01.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-01.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-03.png" target="_blank" rel="noopener" aria-label="View Student Innovator Program SIP 4.0 certificate"><img src="certificates/atl-03.webp" loading="lazy" decoding="async" width="760" height="560" alt="Student Innovator Program SIP 4.0 certificate"></a><div class="cert-body"><span class="cert-kind">Eight-week program completion</span><h3>Student Innovator Program SIP 4.0</h3><p class="cert-issuer">AIC-MIT ADT \xB7 Devise Electronics \xB7 Makers Lab</p><div class="cert-actions"><a href="certificates/atl-03.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-03.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-04.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2021\u201322: Top 350 Teams certificate"><img src="certificates/atl-04.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2021\u201322: Top 350 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2021\u201322: Top 350 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-04.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-04.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-05.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Team X B certificate"><img src="certificates/atl-05.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Team X B certificate"></a><div class="cert-body"><span class="cert-kind">Team participation</span><h3>ATL Marathon 2020: Team X B</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-05.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-05.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-06.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 10 in West Bengal certificate"><img src="certificates/atl-06.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 10 in West Bengal certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 10 in West Bengal</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-06.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-06.png" download>Download \u2193</a></div></div></article><article class="certificate-card" data-cert-group="atl" data-cert-category="activities"><a class="cert-preview" href="certificates/atl-07.png" target="_blank" rel="noopener" aria-label="View ATL Marathon 2020: Top 300 Teams certificate"><img src="certificates/atl-07.webp" loading="lazy" decoding="async" width="760" height="560" alt="ATL Marathon 2020: Top 300 Teams certificate"></a><div class="cert-body"><span class="cert-kind">Team achievement</span><h3>ATL Marathon 2020: Top 300 Teams</h3><p class="cert-issuer">Atal Innovation Mission \xB7 ATL Marathon</p><div class="cert-actions"><a href="certificates/atl-07.png" target="_blank" rel="noopener">View certificate \u2197</a><a href="certificates/atl-07.png" download>Download \u2193</a></div></div></article></div><p id="certificateEmpty" hidden>No certificates match. Try another keyword or category.</p><button class="btn" id="certificateMore" type="button" hidden>Show more certificates</button></div></section>\r\n\r\n<section id="beyond-code" aria-labelledby="beyondHeading"><div class="wrap beyond-grid">\r\n<div><p class="eyebrow">05 / BEYOND THE CODE</p><h2 id="beyondHeading">A little less logic.<br>A little more feeling.</h2><p class="beyond-intro">Poetry in English and Bengali \u2014 reflections on love, longing and family, in their original visual form.</p><a class="btn btn-primary" href="poetry.html">Explore my poetry <span aria-hidden="true">\u2197</span></a><div class="poem-features" aria-label="Featured poems"><a href="poetry.html#poem-06">RAIN</a><a href="poetry.html#poem-12" lang="bn">\u09AE\u09BE</a><a href="poetry.html#poem-08">Flowers That Once Bloomed</a></div></div>\r\n<a class="poetry-cover" href="poetry.html" aria-label="Explore Saptarshi\u2019s poetry collection"><span class="poetry-cover-top">WORDS / SAPTARSHI MANDAL</span><span class="poetry-cover-title">Between<br>the lines<span aria-hidden="true">.</span></span><span class="poetry-cover-bottom">13 poems \xB7 English &amp; \u09AC\u09BE\u0982\u09B2\u09BE <span aria-hidden="true">\u2197</span></span></a>\r\n</div></section>\r\n\r\n<section id="contact">\r\n    <div class="wrap contact-grid">\r\n      <div data-reveal>\r\n        <div class="eyebrow" data-scramble="05 / WHAT\u2019S NEXT?">05 / WHAT\u2019S NEXT?</div>\r\n        <h2>Let\u2019s make<br>something <em>useful.</em></h2>\r\n        <p>Looking for an intern who can explore the data and explain the story?<br>Let\u2019s talk about what we could build together.</p>\r\n        <div class="email-actions"><button id="copyEmail" class="btn" type="button" hidden>Copy email address</button><span id="copyStatus" role="status" aria-live="polite"></span></div>\r\n        <a class="email-link contact-link" href="mailto:saptarshi2005.kgp@gmail.com">saptarshi2005.kgp@gmail.com \u2197</a>\r\n      </div>\r\n      <div class="contact-links" data-reveal>\r\n        <a class="contact-link" href="https://www.linkedin.com/in/saptarshi-mandal-cs" target="_blank" rel="noopener noreferrer">LinkedIn <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">GitHub <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://www.instagram.com/just_gogol/" target="_blank" rel="noopener noreferrer">Instagram <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://www.facebook.com/saptarshi.mandal.503/" target="_blank" rel="noopener noreferrer">Facebook <span>\u2197</span></a>\r\n        <a class="contact-link" href="https://zajajabor.space/team/693ab352e76ad1b1813fae6d" target="_blank" rel="noopener noreferrer">Za Jajabor <span>\u2197</span></a>\r\n        <a href="#top">Back to top <span>\u2191</span></a>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>\r\n\r\n<dialog id="projectDialog" class="project-dialog" aria-labelledby="dialogTitle" aria-describedby="dialogDesc">\r\n  <div class="dialog-card">\r\n    <div class="dialog-header">\r\n      <span class="dialog-meta" id="dialogCategory">DATA ANALYTICS</span>\r\n      <button type="button" id="dialogCloseBtn" class="dialog-close-btn" aria-label="Close project details">\u2715</button>\r\n    </div>\r\n    <h2 id="dialogTitle" class="dialog-title">Project Title</h2>\r\n    <p id="dialogLead" class="dialog-lead">Project lead summary</p>\r\n    <p id="dialogDesc" class="dialog-desc">Project factual description</p>\r\n    <div class="dialog-tags-container">\r\n      <span class="dialog-tags-label">Technologies &amp; Skills:</span>\r\n      <div id="dialogTags" class="tag-list"></div>\r\n    </div>\r\n    <div class="dialog-footer">\r\n      <a id="dialogLink" class="btn btn-primary" href="https://github.com/Saptarshi-Mandal-1234" target="_blank" rel="noopener noreferrer">Explore GitHub profile <span aria-hidden="true">\u2197</span></a>\r\n      <button type="button" id="dialogCloseFooterBtn" class="btn btn-outline">Close</button>\r\n    </div>\r\n  </div>\r\n</dialog>\r\n\r\n<footer>\r\n  <div class="wrap">\r\n    <span>\xA9 2026 Saptarshi Mandal</span>\r\n    <span>Built with curiosity. And a little code. <a href="/admin">Admin</a></span>\r\n  </div>\r\n</footer>\r\n</body>\r\n</html>', poetry: '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="Beyond the Code: a poetry space by Saptarshi Mandal. Visual poems in English and Bengali."><title>Poetry \xB7 Beyond the Code | Saptarshi Mandal</title><link rel="stylesheet" href="styles.css"><script src="poetry.js" defer><\/script></head><body class="poetry-page"><a class="skip-link" href="#poetryMain">Skip to content</a><header class="poetry-top wrap"><a class="text-link" href="index.html#beyond-code">\u2190 Back to portfolio</a><button class="cert-filter" id="readingTheme" type="button" aria-pressed="false">Light reading mode</button></header><main id="poetryMain" class="wrap poetry-main"><p class="eyebrow">BEYOND THE CODE / POETRY</p><h1>Between<br>the lines<span class="poetry-dot">.</span></h1><p class="poetry-deck">A space for words, pauses, and a different side of me.</p><div class="poetry-rule" aria-hidden="true"></div><section class="poetry-collection" aria-label="Poetry collection"><p class="poetry-deck">13 visual poems in English and Bengali. Press play to experience each original design, or open it full size. Videos play only when you choose.</p><div id="poemControls" class="cert-filters" role="group" aria-label="Poetry language" hidden><button class="cert-filter" type="button" data-language-filter="all" aria-pressed="true">All poems</button><button class="cert-filter" type="button" data-language-filter="en" aria-pressed="false">English</button><button class="cert-filter" type="button" data-language-filter="bn" aria-pressed="false">\u09AC\u09BE\u0982\u09B2\u09BE</button></div><p id="poemStatus" role="status" aria-live="polite">13 poems</p><div class="poem-grid"><article class="poem-card" id="poem-01" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-01.jpg" aria-label="That night was my sunshine"><source src="poems/poem-01.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">That night was my sunshine</h2><a class="text-link" href="poems/poem-01.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-02" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-02.jpg" aria-label="What I feel!!!"><source src="poems/poem-02.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">What I feel!!!</h2><a class="text-link" href="poems/poem-02.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-03" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-03.jpg" aria-label="The sea soothes my soul"><source src="poems/poem-03.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">The sea soothes my soul</h2><a class="text-link" href="poems/poem-03.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-04" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-04.jpg" aria-label="LOVE .. WHAT??"><source src="poems/poem-04.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">LOVE .. WHAT??</h2><a class="text-link" href="poems/poem-04.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-05" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-05.jpg" aria-label="Suffering??"><source src="poems/poem-05.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Suffering??</h2><a class="text-link" href="poems/poem-05.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-06" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-06.jpg" aria-label="RAIN"><source src="poems/poem-06.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">RAIN</h2><a class="text-link" href="poems/poem-06.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-07" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-07.jpg" aria-label="BEING LOVESICK"><source src="poems/poem-07.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">BEING LOVESICK</h2><a class="text-link" href="poems/poem-07.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-08" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-08.jpg" aria-label="FLOWERS THAT ONCE BLOOMED"><source src="poems/poem-08.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">FLOWERS THAT ONCE BLOOMED</h2><a class="text-link" href="poems/poem-08.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-09" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-09.jpg" aria-label="Solitary"><source src="poems/poem-09.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">Solitary</h2><a class="text-link" href="poems/poem-09.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-10" data-language="bn"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-10.jpg" aria-label="\u09AC\u09BE\u09AC\u09BE"><source src="poems/poem-10.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AC\u09BE\u09AC\u09BE</h2><a class="text-link" href="poems/poem-10.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-11" data-language="en"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-11.jpg" aria-label="I am a son"><source src="poems/poem-11.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">ENGLISH / POETRY FILM</span><h2 lang="en">I am a son</h2><a class="text-link" href="poems/poem-11.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-12" data-language="bn"><div class="poem-media"><video controls playsinline preload="none" poster="poems/poem-12.jpg" aria-label="\u09AE\u09BE"><source src="poems/poem-12.mp4" type="video/mp4">Your browser cannot play this video. Use the original link below.</video></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / POETRY FILM</span><h2 lang="bn">\u09AE\u09BE</h2><a class="text-link" href="poems/poem-12.mp4" target="_blank" rel="noopener">Open original \u2197</a></div></article><article class="poem-card" id="poem-13" data-language="bn"><div class="poem-media"><a href="poems/poem-13.png" target="_blank" rel="noopener"><img src="poems/poem-13.png" alt="Bengali visual poem: \u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB" loading="lazy"></a></div><div class="poem-info"><span class="eyebrow">\u09AC\u09BE\u0982\u09B2\u09BE / VISUAL VERSE</span><h2 lang="bn">\u0995\u09BE\u09B2\u09CB-\u09B8\u09BE\u09A6\u09BE \u099B\u09AC\u09BF\u09B0 \u09AE\u09A4\u09CB</h2><a class="text-link" href="poems/poem-13.png" target="_blank" rel="noopener">Open original \u2197</a></div></article></div></section></main><footer><div class="wrap"><span>\xA9 2026 Saptarshi Mandal</span><a href="index.html#contact">Get in touch \u2197</a></div></footer></body></html>', admin: '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Portfolio Admin | Saptarshi Mandal</title><link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/admin.css"><script src="/admin.js" defer><\/script></head><body><header class="admin-top"><div><span class="eyebrow">OWNER WORKSPACE</span><h1>Manage your portfolio</h1></div><a class="btn" href="/" target="_blank" rel="noopener">View website \u2197</a></header><main class="admin-main"><p id="adminStatus" role="status" aria-live="polite">Loading your content\u2026</p><div id="adminApp" hidden><div class="admin-toolbar"><label>Collection<select id="collection"><option value="projects">Projects</option><option value="certificates">Certificates</option><option value="poems">Poems</option><option value="skills">Skills</option><option value="pages">Page text</option></select></label><label>Find an item<input id="find" type="search" placeholder="Search titles"></label><button class="btn btn-primary" id="add" type="button">Add new</button><button class="btn" id="backup" type="button">Download content backup</button></div><div class="admin-layout"><aside><p>Choose an item to edit. Hidden items stay here so you can restore them.</p><div id="items"></div></aside><section class="admin-editor"><form id="editor" hidden><h2 id="editorTitle">Edit item</h2><div id="fields"></div><div class="admin-row"><label>Display order<input type="number" id="position" min="0" max="100000" required><small>Smaller numbers appear first.</small></label><label class="admin-check"><input type="checkbox" id="hiddenItem"> Hide from website</label></div><p class="muted">Save publishes this item immediately. Hide removes it from the website while keeping a restorable copy.</p><div class="admin-row"><button class="btn btn-primary" id="save" type="submit">Save changes</button><button class="btn" id="cancel" type="button">Discard changes</button></div></form><p id="editorEmpty">Select an item or add something new.</p></section></div></div><div id="signin" hidden><p>This area is only for the portfolio owner.</p><a class="btn" href="/signin-with-chatgpt?return_to=%2Fadmin" target="_top">Sign in with ChatGPT</a></div></main></body></html>\r\n', cases: { "/case-studies/ai-hr.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI HR Workspace | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">SOFTWARE &amp; AI / LOCAL PROTOTYPE</p><h1>AI HR Workspace</h1><p class="case-intro">A focused workspace for turning HR questions into structured drafts and action plans.</p><figure class="case-figure"><a href="../assets/projects/ai-hr-workspace.png" target="_blank" rel="noopener"><img src="../assets/projects/ai-hr-workspace.png" alt="Actual AI HR browser interface"></a><figcaption>Actual local frontend preview. Backend services and Gemini responses were not connected for this capture.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>HR work spans many recurring tasks, from interview preparation to onboarding and policy communication. This project brings those workflows into one interface with specialist modes.</p></section><section><h2>What I built</h2><p>A browser workspace and Node.js server integrating Gemini, with eight modes: HR Generalist, Recruiter, Onboarding, Employee Relations, Performance, Policy, People Analytics and Learning.</p></section><section><h2>Workflow</h2><p>Choose an HR specialty, supply the relevant context, and request a structured draft. The code also includes organization, records, decision and audit endpoints for supporting workflows.</p></section><section><h2>Technology</h2><p>JavaScript, HTML, CSS, Node.js and the Gemini API. The project runs locally with Node 18 or later and a separately configured API key.</p></section><section><h2>Current status</h2><p>The original project source and interface were inspected. This portfolio shows the real frontend, not a live AI service. No model request was made during this review. GitHub repository coming soon; the link will be added when available.</p></section><section><h2>Next steps and limitations</h2><p>Before production use, the project needs stronger authentication, persistent database design, tenancy, tests and privacy controls. Generated HR content is decision support requiring qualified human review, especially for sensitive employee matters.</p></section></div></main></body></html>', "/case-studies/credit-risk.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Loan Default & Credit Risk Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>Loan Default & Credit Risk Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/credit-dashboard.png" target="_blank" rel="noopener"><img src="../assets/projects/credit-dashboard.png" alt="Actual Tableau screenshot \xB7 Saved educational portfolio analysis."></a><figcaption>Actual Tableau screenshot \xB7 Saved educational portfolio analysis. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Explore loan default patterns and demonstrate how a simulated lender could review risk alongside approval volume.</p></section><section><h2>Dataset</h2><p>32,581 raw credit-risk records; the saved cleaning pipeline produces 32,409 records after duplicates and invalid records are removed. This project is an educational simulation, not a deployed lending service.</p></section><section><h2>My contribution</h2><p>Built data-quality checks, exploratory analysis, engineered features, logistic regression, risk tiers and decision rules, with a Tableau reporting workflow and challenger-model comparisons.</p></section><section><h2>Approach</h2><p>Clean and impute inputs; engineer loan-to-income and other features; split data 80/20 with stratification; fit a standardized, class-balanced logistic regression baseline. Compare Random Forest and Gradient Boosting separately.</p></section><section><h2>Results</h2><p>The saved baseline results report 80.58% accuracy, 78.77% recall and 0.8757 ROC-AUC. These are logistic-regression results, not XGBoost results. The Tableau screenshot shows the saved 32,409-record portfolio and its simulated approval rules.</p></section><section><h2>Limitations</h2><p>Imputation happens before the split in the existing workflow, which can leak distribution information. Reported model performance should be treated as provisional until preprocessing is fit on training data only. Scores and approval thresholds are illustrative; currency formatting in the dashboard does not establish dataset currency.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Loan-Default-Credit-Risk-Analysis-" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/customer-churn.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Customer Churn Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>Customer Churn Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/churn-contracts.svg" target="_blank" rel="noopener"><img src="../assets/projects/churn-contracts.svg" alt="Recomputed from the supplied CSV \xB7 Analysis chart, not a dashboard screenshot."></a><figcaption>Recomputed from the supplied CSV \xB7 Analysis chart, not a dashboard screenshot. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Identify customer segments with high observed churn and connect them to practical retention actions.</p></section><section><h2>Dataset</h2><p>7,043 Telco customer records with 1,869 churned customers and 11 blank TotalCharges values, checked directly from the supplied CSV.</p></section><section><h2>My contribution</h2><p>Built MySQL cleaning and analysis scripts, seven rule-based risk flags, and a recommendation playbook, alongside a local Power BI report.</p></section><section><h2>Approach</h2><p>Import the CSV into MySQL; standardize fields; build segment views; assign a 0\u20137 rule-based risk score; join matching flags to recommended actions. A reproducible Python summary now supplies sample outputs without requiring MySQL.</p></section><section><h2>Results</h2><p>Recalculated observed churn: 42.7% for month-to-month contracts, 11.3% for one-year contracts and 2.8% for two-year contracts. The chart below was generated from the actual supplied data. A Power BI file exists locally, but this chart is not a Power BI screenshot.</p></section><section><h2>Limitations</h2><p>Risk flags are heuristics, not calibrated probabilities or validated future predictions. Segment differences are associations. Revenue estimates may overlap across flags and must not be added as guaranteed savings. MySQL execution and the Power BI report refresh still require local validation.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Customer-Churn-Analysis" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/hr-attrition.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>HR Employee Attrition Analysis | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">PROJECT CASE STUDY</p><h1>HR Employee Attrition Analysis</h1><p class="case-intro">Problem, process, evidence and what I would improve next.</p><figure class="case-figure"><a href="../assets/projects/hr-dashboard.png" target="_blank" rel="noopener"><img src="../assets/projects/hr-dashboard.png" alt="Actual Power BI screenshot \xB7 Sales department filter selected."></a><figcaption>Actual Power BI screenshot \xB7 Sales department filter selected. Open image for full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Explore where employee attrition is concentrated and turn that analysis into questions HR can investigate.</p></section><section><h2>Dataset</h2><p>1,470 IBM HR sample records covering job roles, overtime, tenure, income and attrition. This is an educational sample, not a live employer dataset.</p></section><section><h2>My contribution</h2><p>Built the Python exploration, visual analysis, logistic regression workflow, risk-scored exports and Power BI report.</p></section><section><h2>Approach</h2><p>Validate records and remove constant/ID fields; compare attrition across segments; one-hot encode categories; use a stratified 75/25 split and standardize the training data; fit class-balanced logistic regression.</p></section><section><h2>Results</h2><p>The saved project reports 77.7% held-out accuracy and 0.81 ROC-AUC. Existing analyses show higher observed attrition among overtime workers. The screenshot below is the actual Power BI report with Sales selected: its 446 employees are a filtered subset, not the full dataset.</p></section><section><h2>Limitations</h2><p>Associations do not establish why people leave. Model scores are not employment decisions. Results need external validation and subgroup evaluation; retention recommendations have not been tested for causal impact.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/-HR-attrition-analysis" target="_blank" rel="noopener">Explore source and setup \u2197</a></main></body></html>', "/case-studies/marketpulse-ai.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MarketPulse AI Foundation | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">DATA ENGINEERING / RESEARCH</p><h1>MarketPulse AI Foundation</h1><p class="case-intro">From market snapshots to traceable analytics and honest model evaluation.</p><p>Python \xB7 PostgreSQL \xB7 Power BI \xB7 Scikit-learn</p><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/MarketPulse--Ai" target="_blank" rel="noopener noreferrer">View repository \u2197</a><figure class="case-figure"><a href="../assets/projects/marketpulse-stock-explorer.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/marketpulse-stock-explorer.png" alt="MarketPulse AI Stock Explorer dashboard with instrument filters, adjusted price history and observed volume" width="1154" height="812"></a><figcaption>Project dashboard screenshot supplied by Saptarshi: Stock Explorer with instrument filters, adjusted price history and observed volume. This is a static preview; select it to view full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Build a repeatable way to collect, validate and analyze Indian-equity data while keeping the provenance of research results clear.</p></section><section><h2>Universe and inputs</h2><p>The configured initial universe is NIFTY 50 plus ten liquid large-cap stocks. Daily OHLCV research snapshots come from Yahoo Finance. Exchange-session checks identify gaps without inventing missing prices.</p></section><section><h2>Implementation</h2><p>The source includes archive checksums, 39 technical features, PostgreSQL migrations, performance and drawdown analytics, forecasting evaluation, risk bands and prior-only anomaly detection. A report generator assembles seven Power BI pages.</p></section><section><h2>Research approach</h2><p>Forecasting tasks cover next-session direction, next-session return and five-session return, evaluated chronologically with purging. The project compares machine-learning candidates against simple baselines rather than assuming a complex model is better.</p></section><section><h2>Results and current evidence</h2><p>The project documentation reports that the tested ML candidates did not outperform the selected baselines under its predefined criteria. This portfolio review inspected the local source and documentation; it did not rerun database, model or Power BI checks. A supplied Stock Explorer dashboard screenshot is shown above. The underlying data refresh and model evaluation were not rerun for this preview.</p></section><section><h2>Operations and limitations</h2><p>The pipeline includes atomic publication, last-good-report preservation, health checks and Windows scheduling helpers. Fresh runs require a configured Python environment, PostgreSQL and data access. It is research software, does not place orders, and makes no claim of a trading edge.</p></section></div></main></body></html>', "/case-studies/mediassist.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MediAssist AI | Saptarshi Mandal</title><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">SOFTWARE &amp; AI / PROTOTYPE</p><h1>MediAssist AI</h1><p class="case-intro">Health conversations and tracking in one workspace.</p><figure class="case-figure"><a href="../assets/projects/mediassist-workspace.png" target="_blank" rel="noopener"><img src="../assets/projects/mediassist-workspace.png" alt="Actual MediAssist frontend preview"></a><figcaption>Actual local frontend preview; backend and AI responses were not connected for this capture. The existing UI still labels its provider as Claude; the inspected backend uses Gemini.</figcaption></figure><div class="case-sections"><section><h2>What it addresses</h2><p>Brings health-related conversations and personal tracking tools into one prototype interface, with separate modes for different kinds of questions.</p></section><section><h2>Four modes</h2><p>Symptoms, medication discussion, mental wellness and lab-report discussion use separate prompts. Symptom matching can supply reference context to the chat workflow.</p></section><section><h2>Application structure</h2><p>The updated source uses Node.js, Express, MongoDB/Mongoose and Gemini. Models cover chat messages, medications, appointments, mood logs, health logs, vitals and disease reference records. The project includes Docker and Compose files.</p></section><section><h2>Implementation details</h2><p>The chat route validates mode and input, limits message/history length, applies request timeouts and retries transient failures. API keys are configured on the backend rather than displayed on the portfolio.</p></section><section><h2>Evidence and status</h2><p>This page uses the latest MongoDB-based project folder and a real frontend capture. Source and setup files were inspected; Gemini calls, database persistence and deployment were not exercised during this update.</p></section><section><h2>Limitations</h2><p>MediAssist is an educational prototype, not a clinically validated service or medical device. Its outputs require professional review. Authentication, health-data privacy, generated-content handling and end-to-end tests require further assessment before real-world use.</p></section></div><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/MediAssist-Chatbot" target="_blank" rel="noopener">View repository \u2197</a></main></body></html>', "/case-studies/smart-irrigation.html": '<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Smart Irrigation | Saptarshi Mandal</title><meta name="description" content="ESP32 smart irrigation prototype with crop-aware control, BLE monitoring and browser simulations."><link rel="stylesheet" href="../styles.css"></head><body><main class="case-page wrap"><a class="btn" href="../index.html#projects">\u2190 Back to projects</a><p class="eyebrow">EMBEDDED SYSTEMS / IOT</p><h1>Automated Irrigation System</h1><p class="case-intro">Crop-aware watering. Sensor-driven control.</p><p>C++ \xB7 ESP32 \xB7 Bluetooth Low Energy \xB7 HTML / JavaScript</p><a class="btn" href="https://github.com/Saptarshi-Mandal-1234/Automated-Irrigation-System" target="_blank" rel="noopener noreferrer">View repository \u2197</a><figure class="case-figure"><a href="../assets/projects/irrigation-circuit.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/irrigation-circuit.png" alt="Irrigation circuit browser simulation with Arduino Uno and substitute sensors" width="1360"></a><figcaption>Actual browser circuit simulation from the project folder. This view uses the Arduino Uno / Tinkercad substitute circuit; the target hardware firmware uses ESP32. Displayed readings are simulated. Select the image to view it full size.</figcaption></figure><figure class="case-figure"><a href="../assets/projects/irrigation-logic.png" target="_blank" rel="noopener"><img loading="lazy" src="../assets/projects/irrigation-logic.png" alt="Smart irrigation logic simulator and crop controls" width="1360"></a><figcaption>Actual browser logic simulator from the project folder. These are simulated sensor values, not measurements from physical hardware. Select the image to view it full size.</figcaption></figure><div class="case-sections"><section><h2>The problem</h2><p>Fixed watering schedules ignore soil conditions and crop requirements. This academic prototype explores a single-zone controller that responds to moisture feedback instead.</p></section><section><h2>Inputs and architecture</h2><p>An ESP32 reads soil moisture, soil pH, temperature and humidity. C++ firmware controls a relay or pump driver; an HTML/JavaScript web app exchanges crop configuration, readings and commands over Bluetooth Low Energy.</p></section><section><h2>Control approach</h2><p>Crop profiles provide a minimum moisture threshold and a target. The pump starts below the minimum and stops at the target, holding its previous state between them to reduce rapid switching. pH is monitored and flagged; the system does not correct pH.</p></section><section><h2>Implementation and evidence</h2><p>The supplied materials include ESP32 firmware, a calibration utility, a Web Bluetooth dashboard with Demo Mode, a browser logic simulator, an animated circuit simulation and an Arduino Uno sketch for Tinkercad. Source review confirmed the hysteresis logic and fault/runtime checks; firmware compilation and physical operation were not tested in this portfolio review.</p></section><section><h2>Controls and current limitations</h2><p>The implementation includes manual pump commands, runtime limits, sensor-fault handling, optional low-water detection and an emergency-stop command. These are prototype controls, not hardware-validated safety guarantees. Sensor calibration constants remain placeholders and the phone-to-ESP32-to-pump path has not been tested end to end.</p></section><section><h2>Next validation steps</h2><p>Calibrate the sensors, compile and flash the ESP32 firmware, then test crop thresholds, manual mode, disconnects and every fault condition on hardware. Measure water use and manual intervention before claiming efficiency improvements. The current scope is one pump and one zone, with no cloud monitoring or automatic pH correction.</p></section></div></main></body></html>' } };

// server/worker.js
var htmlResponse = (html) => new Response(html, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "no-store" } });
var OWNER_EMAIL = "saptarshi2005.kgp@gmail.com";
var kinds = ["projects", "certificates", "poems", "skills", "pages"];
var fields = { projects: ["title", "category", "lead", "description", "tags", "image", "link", "caseText"], certificates: ["title", "issuer", "kind", "group", "category", "file", "image"], poems: ["title", "language", "format", "file", "image", "text"], skills: ["title", "description", "tags", "roles", "evidence"], pages: ["title", "text"] };
var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
var json = (d, status = 200) => new Response(JSON.stringify(d), { status, headers: { "Content-Type": "application/json", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" } });
function url(s) {
  if (!s) return "";
  if (/^https:\/\//i.test(s)) return s;
  if (/^(?:assets|certificates|poems|case-studies)\/[a-zA-Z0-9_./%-]+$/.test(s) && !s.includes("..")) return "/" + s;
  if (/^\/media\/[a-zA-Z0-9-]+$/.test(s)) return s;
  return "";
}
async function records(env) {
  const q = await env.DB.prepare("SELECT * FROM content").all();
  const map = new Map(seed_default.map((r) => [r.id, { ...r, data: { ...r.data } }]));
  for (const r of q.results) map.set(r.id, { ...r, hidden: !!r.hidden, data: JSON.parse(r.data) });
  return [...map.values()].sort((a, b) => a.position - b.position || a.id.localeCompare(b.id));
}
async function isOwner(req, env) {
  const id = req.headers.get("oai-authenticated-user-id");
  if (!id) return false;
  const pinned = await env.DB.prepare("SELECT user_id FROM owner WHERE key = ?").bind("admin").first();
  if (pinned) return pinned.user_id === id;
  const email = req.headers.get("oai-authenticated-user-email")?.toLowerCase();
  if (email !== OWNER_EMAIL) return false;
  await env.DB.prepare("INSERT OR IGNORE INTO owner (key,user_id) VALUES (?,?)").bind("admin", id).run();
  return (await env.DB.prepare("SELECT user_id FROM owner WHERE key = ?").bind("admin").first()).user_id === id;
}
var tags = (s) => String(s || "").split(",").filter(Boolean).map((t) => `<span class="tag">${esc(t.trim())}</span>`).join("");
function render(r) {
  const d = r.data;
  if (d.html) return d.html;
  const title = esc(d.title);
  const img = url(d.image);
  const file = url(d.file);
  const link = url(d.link);
  switch (r.kind) {
    case "projects":
      return `<article class="card project-card" id="${r.id}" data-category="${esc(d.category)}" data-reveal>${img ? `<a class="project-preview" href="/project/${r.id}"><img src="${esc(img)}" loading="lazy" alt="${title}"></a>` : ""}<div class="project-meta">${esc(d.category)}</div><h3>${title}</h3><p class="project-lead">${esc(d.lead)}</p><p class="muted">${esc(d.description)}</p><div class="tag-list">${tags(d.tags)}</div><div class="card-actions"><a class="btn" href="/project/${r.id}">Project overview \u2192</a><button class="btn-details" data-project="${r.id}" aria-haspopup="dialog">Quick details \u2192</button></div>${link ? `<div class="project-links"><a href="${esc(link)}" target="_blank" rel="noopener">View repository \u2197</a></div>` : ""}</article>`;
    case "certificates":
      return `<article class="certificate-card" data-cert-group="${esc(d.group)}" data-cert-category="${esc(d.category)}">${img ? `<a class="cert-preview" href="${esc(file)}" target="_blank" rel="noopener"><img src="${esc(img)}" alt="${title}" loading="lazy"></a>` : ""}<div class="cert-body"><span class="cert-kind">${esc(d.kind)}</span><h3>${title}</h3><p class="cert-issuer">${esc(d.issuer)}</p><div class="cert-actions"><a href="${esc(file)}" target="_blank" rel="noopener">View certificate \u2197</a><a href="${esc(file)}" download>Download \u2193</a></div></div></article>`;
    case "skills":
      return `<article class="card skill-card" data-skill-roles="${esc(d.roles)}"><h3>${title}</h3><p class="muted">${esc(d.description)}</p><div class="tag-list">${tags(d.tags)}</div><details class="skill-evidence"><summary>Explore the evidence</summary><p>${esc(d.evidence)}</p></details></article>`;
    case "poems":
      return `<article class="poem-card" id="${r.id}" data-language="${esc(d.language)}">${d.format === "text" ? `<p class="poem-text">${esc(d.text)}</p>` : `<div class="poem-media">${d.format === "video" ? `<video controls playsinline preload="none" poster="${esc(img)}" aria-label="${title}"><source src="${esc(file)}" type="video/mp4"></video>` : `<a href="${esc(file)}" target="_blank" rel="noopener"><img src="${esc(file)}" alt="${title}" loading="lazy"></a>`}</div>`}<div class="poem-info"><span class="eyebrow">${d.language === "bn" ? "\u09AC\u09BE\u0982\u09B2\u09BE" : "ENGLISH"}</span><h2>${title}</h2>${file ? `<a class="text-link" href="${esc(file)}" target="_blank" rel="noopener">Open original \u2197</a>` : ""}</div></article>`;
  }
  return "";
}
function shell(title, body) {
  return new Response(`<!doctype html><html lang="en" data-theme="dark"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | Saptarshi Mandal</title><link rel="stylesheet" href="/styles.css"></head><body><main class="wrap case-page"><a class="btn" href="/#projects">\u2190 Portfolio</a>${body}</main></body></html>`, { headers: { "Content-Type": "text/html;charset=utf-8", "Cache-Control": "no-store" } });
}
var worker_default = { async fetch(req, env) {
  try {
    let path = new URL(req.url).pathname;
    if (path.startsWith("/case-studies/") && !path.endsWith(".html")) path += ".html";
    if (path.startsWith("/api/admin/") || path === "/admin" || path === "/admin.html") {
      if (!await isOwner(req, env)) {
        if (path.startsWith("/api/")) return json({ error: "Owner sign-in required" }, 403);
        return shell("Owner access", '<h1>Portfolio admin</h1><p>Sign in with the owner\u2019s ChatGPT account to manage this portfolio.</p><a class="btn" target="_top" href="/signin-with-chatgpt?return_to=%2Fadmin">Sign in with ChatGPT</a>');
      }
      if (!["GET", "HEAD"].includes(req.method) && req.headers.get("Origin") !== new URL(req.url).origin) return json({ error: "Invalid request origin" }, 403);
      if (path === "/api/admin/content" && req.method === "GET") return json({ records: await records(env), fields });
      if (path === "/api/admin/save" && req.method === "POST") {
        if (Number(req.headers.get("Content-Length") || 0) > 15e4) return json({ error: "Entry too large" }, 413);
        const input = await req.json();
        if (!kinds.includes(input.kind) || !/^[-a-zA-Z0-9_]{1,100}$/.test(input.id)) return json({ error: "Invalid item" }, 400);
        const all = await records(env), old = all.find((r) => r.id === input.id);
        if (old && old.kind !== input.kind) return json({ error: "Item type cannot change" }, 400);
        if (input.kind === "pages" && !old) return json({ error: "Use an existing page section" }, 400);
        const data = {};
        for (const f of fields[input.kind]) {
          data[f] = String(input.data?.[f] || "").trim();
          if (data[f].length > 2e4) return json({ error: "Text is too long" }, 400);
          if (["link", "image", "file"].includes(f) && data[f] && !url(data[f])) return json({ error: "Use an uploaded file or an HTTPS link" }, 400);
        }
        if (!data.title) return json({ error: "Title is required" }, 400);
        const choices = { group: ["tech", "uem", "iitm", "atl"], language: ["en", "bn"], format: ["image", "video", "text"] };
        for (const [k, allowed] of Object.entries(choices)) if (k in data && !allowed.includes(data[k])) return json({ error: "Invalid " + k }, 400);
        if (input.kind === "certificates" && !data.file) return json({ error: "Upload or link a certificate" }, 400);
        if (input.kind === "poems" && data.format !== "text" && !data.file) return json({ error: "Upload or link a poem" }, 400);
        if (input.kind === "projects" && !["data-ml", "software-iot"].includes(data.category)) return json({ error: "Choose a project category" }, 400);
        if (input.kind === "pages") data.selector = old.data.selector;
        if (old && fields[input.kind].every((f) => String(old.data[f] || "").trim() === data[f]) && old.data.html) data.html = old.data.html;
        const rev = Number(input.revision) || 0;
        const pos = Math.min(1e5, Math.max(0, Number(input.position) || 0));
        const sql = "INSERT INTO content (id,kind,data,position,hidden,revision,updated) VALUES (?,?,?,?,?,1,?) ON CONFLICT(id) DO UPDATE SET data=excluded.data,position=excluded.position,hidden=excluded.hidden,revision=content.revision+1,updated=excluded.updated WHERE content.revision = ?";
        const result = await env.DB.prepare(sql).bind(input.id, input.kind, JSON.stringify(data), pos, input.hidden ? 1 : 0, (/* @__PURE__ */ new Date()).toISOString(), rev).run();
        if (!result.meta.changes) return json({ error: "This item changed in another tab. Reload before saving." }, 409);
        return json({ ok: true });
      }
      if (path === "/api/admin/upload" && req.method === "POST") {
        const size = Number(req.headers.get("Content-Length"));
        if (!size || size > 20 * 1024 * 1024) return json({ error: "Choose a file smaller than 20 MB" }, 413);
        const f = await req.blob();
        const type = f.type.split(";")[0];
        if (!["image/png", "image/jpeg", "image/webp", "application/pdf", "video/mp4"].includes(type)) return json({ error: "Use PNG, JPG, WebP, PDF or MP4" }, 400);
        const bytes = new Uint8Array(await f.slice(0, 16).arrayBuffer());
        const sig = Array.from(bytes);
        const valid = type === "application/pdf" ? String.fromCharCode(...bytes.slice(0, 5)) === "%PDF-" : type === "image/png" ? sig.slice(0, 4).join(",") === "137,80,78,71" : type === "image/jpeg" ? sig[0] === 255 && sig[1] === 216 : type === "image/webp" ? String.fromCharCode(...bytes.slice(8, 12)) === "WEBP" : String.fromCharCode(...bytes.slice(4, 8)) === "ftyp";
        if (!valid) return json({ error: "File content does not match its format" }, 400);
        const id = crypto.randomUUID();
        await env.BUCKET.put(id, f.stream(), { httpMetadata: { contentType: type } });
        await env.DB.prepare("INSERT INTO uploads (id,name,type,size) VALUES (?,?,?,?)").bind(id, "upload", type, f.size).run();
        return json({ url: "/media/" + id });
      }
      if (path === "/admin" || path === "/admin.html") return htmlResponse(templates_default.admin);
      return json({ error: "Not found" }, 404);
    }
    if (path.startsWith("/media/")) {
      const key = path.slice(7);
      if (!/^[a-f0-9-]{36}$/.test(key)) return new Response("Not found", { status: 404 });
      const o = await env.BUCKET.get(key, { range: req.headers });
      if (!o) return new Response("Not found", { status: 404 });
      const h = new Headers();
      o.writeHttpMetadata(h);
      h.set("X-Content-Type-Options", "nosniff");
      h.set("Cache-Control", "public,max-age=86400");
      h.set("Accept-Ranges", "bytes");
      if (req.headers.has("Range") && o.range) {
        h.set("Content-Range", `bytes ${o.range.offset}-${o.range.offset + o.range.length - 1}/${o.size}`);
        h.set("Content-Length", String(o.range.length));
      }
      return new Response(req.method === "HEAD" ? null : o.body, { status: req.headers.has("Range") && o.range ? 206 : 200, headers: h });
    }
    if (["/", "/index.html", "/poetry.html", "/poetry"].includes(path) || path.startsWith("/project/") || path.startsWith("/case-studies/")) {
      const all = await records(env);
      const visible = all.filter((r) => !r.hidden);
      const projects = visible.filter((r) => r.kind === "projects");
      if (path.startsWith("/project/") || path.startsWith("/case-studies/")) {
        const r = projects.find((r2) => "/project/" + r2.id === path || "/" + r2.data.caseUrl === path || seed_default.find((s) => s.id === r2.id)?.data.caseUrl === path.slice(1));
        if (!r) return new Response("Project not found", { status: 404 });
        if (r.revision === 0 && path.startsWith("/case-studies/") && templates_default.cases[path]) return htmlResponse(templates_default.cases[path]);
        return shell(r.data.title, `<h1>${esc(r.data.title)}</h1><p>${esc(r.data.lead)}</p>${url(r.data.image) ? `<figure class="case-figure"><img src="${esc(url(r.data.image))}" alt="${esc(r.data.title)}"></figure>` : ""}<p>${esc(r.data.description)}</p><div class="poem-text">${esc(r.data.caseText)}</div>${url(r.data.link) ? `<a class="btn" href="${esc(url(r.data.link))}" target="_blank" rel="noopener">View repository \u2197</a>` : ""}`);
      }
      let response = htmlResponse(path.startsWith("/poetry") ? templates_default.poetry : templates_default.home);
      let rw = new HTMLRewriter();
      const groups = { projects: ".project-grid", certificates: ".certificate-grid", skills: "#skillsGrid", poems: ".poem-grid" };
      for (const [kind, selector] of Object.entries(groups)) rw = rw.on(selector, { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === kind).map(render).join(""), { html: true });
      } });
      for (const r of all.filter((r2) => r2.kind === "pages" && r2.revision > 0)) rw = rw.on(r.data.selector, { element(el) {
        el.setInnerContent(r.hidden ? "" : esc(r.data.text).replace(/\n/g, "<br>"), { html: true });
      } });
      const pd = Object.fromEntries(projects.map((r) => [r.id, { title: r.data.title, category: r.data.category, lead: r.data.lead, desc: r.data.description, tags: r.data.tags.split(",").map((s) => s.trim()), link: url(r.data.link) || "/project/" + r.id, linkLabel: url(r.data.link) ? "View repository" : "Project overview" }]));
      const poemItems = visible.filter((r) => r.kind === "poems").map((r) => ({ titleLine1: r.data.title, tag: r.data.language === "bn" ? "\u09AC\u09BE\u0982\u09B2\u09BE" : "English", img: url(r.data.image) || "/assets/carousel-placeholder.svg", ctaUrl: "/poetry.html#" + r.id, ctaText: "Read / watch poem" }));
      rw = rw.on("head", { element(el) {
        el.prepend("<script>window.cmsCarouselPoems=" + JSON.stringify(poemItems).replace(/</g, "\\u003c") + ";window.cmsProjectData=" + JSON.stringify(pd).replace(/</g, "\\u003c") + ";<\/script>", { html: true });
      } });
      for (const g of ["tech", "uem", "iitm", "atl"]) rw = rw.on(`[data-cert-group-filter="${g}"]`, { element(el) {
        el.setInnerContent((g === "tech" ? "Tech" : g.toUpperCase()) + " (" + visible.filter((r) => r.kind === "certificates" && r.data.group === g).length + ")");
      } });
      rw = rw.on(".poem-features", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").slice(0, 3).map((r) => `<a href="/poetry.html#${r.id}">${esc(r.data.title)}</a>`).join(""), { html: true });
      } }).on(".poetry-cover-bottom", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").length + " poems \xB7 Explore \u2192");
      } }).on(".poetry-collection>.poetry-deck", { element(el) {
        el.setInnerContent("Explore the poetry collection in its original visual form. Videos play only when you choose.");
      } }).on("#poemStatus", { element(el) {
        el.setInnerContent(visible.filter((r) => r.kind === "poems").length + " poems");
      } });
      response = rw.transform(response);
      const h = new Headers(response.headers);
      h.set("Cache-Control", "no-store");
      return new Response(response.body, { status: response.status, headers: h });
    }
    return env.ASSETS.fetch(req);
  } catch (e) {
    console.error("Portfolio request failed", e.message);
    return json({ error: "Content is temporarily unavailable. Please try again; your saved work is preserved." }, 503);
  }
} };
export {
  worker_default as default
};
